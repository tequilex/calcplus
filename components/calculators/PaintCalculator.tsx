'use client'

import { useState } from 'react'
import { AppWindow, DoorOpen, ShoppingCart, ArrowUpRight, Droplet } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { Stepper } from '@/components/ui/stepper'

type Surface = 'walls' | 'ceiling' | 'both'

interface FormValues {
  length: string
  width: string
  height: string
  windows: number
  doors: number
  surface: Surface
  consumption: string
  coats: string
}

function pluralLitres(n: number): string {
  const mod10 = n % 10
  const mod100 = n % 100
  if (mod100 >= 11 && mod100 <= 14) return 'литров'
  if (mod10 === 1) return 'литр'
  if (mod10 >= 2 && mod10 <= 4) return 'литра'
  return 'литров'
}

function parseNum(s: string): number {
  const v = parseFloat(s.replace(',', '.'))
  return isFinite(v) ? v : NaN
}

function formatLitres(n: number): string {
  return n.toFixed(1).replace(/\.0$/, '').replace('.', ',')
}

export function PaintCalculator() {
  const [values, setValues] = useState<FormValues>({
    length: '4.5',
    width: '3.2',
    height: '2.7',
    windows: 1,
    doors: 1,
    surface: 'walls',
    consumption: '0.15',
    coats: '2',
  })

  const length = parseNum(values.length)
  const width = parseNum(values.width)
  const height = parseNum(values.height)
  const consumption = parseNum(values.consumption)
  const coats = parseNum(values.coats)
  const isValid = [length, width, height, consumption, coats].every(
    (v) => isFinite(v) && v > 0,
  )

  let wallsArea = NaN
  let ceilingArea = NaN
  let totalArea = NaN
  let litresOneCoat = NaN
  let litresNoSpare = NaN
  let litresTotal = NaN

  if (isValid) {
    const openings = values.windows * 1.5 + values.doors * 1.6
    wallsArea = Math.max(0, 2 * (length + width) * height - openings)
    ceilingArea = length * width
    if (values.surface === 'walls') totalArea = wallsArea
    else if (values.surface === 'ceiling') totalArea = ceilingArea
    else totalArea = wallsArea + ceilingArea
    litresOneCoat = totalArea * consumption
    litresNoSpare = litresOneCoat * coats
    litresTotal = Math.ceil(litresNoSpare * 1.1 * 10) / 10
  }

  const dash = '—'
  const fmtWalls = isValid && wallsArea > 0 ? formatLitres(wallsArea) + ' м²' : dash
  const fmtCeiling = isValid && ceilingArea > 0 ? formatLitres(ceilingArea) + ' м²' : dash
  const fmtTotalArea = isValid && totalArea > 0 ? formatLitres(totalArea) + ' м²' : dash
  const fmtNoSpare = isValid && litresNoSpare > 0
    ? formatLitres(litresNoSpare) + ' л'
    : dash
  const fmtTotal = isValid && litresTotal > 0 ? formatLitres(litresTotal) : dash
  const litresWord = isValid && litresTotal > 0
    ? pluralLitres(Math.round(litresTotal))
    : 'литров'

  function set<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setValues((v) => ({ ...v, [field]: value }))
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-4 md:gap-6 mb-16 items-start">

      {/* Форма */}
      <div className="flex flex-col gap-5 p-6 rounded-lg border border-border bg-background">

        {/* Размеры комнаты */}
        <div className="flex flex-col gap-3">
          <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
            Размеры комнаты
          </div>
          <div className="grid grid-cols-3 gap-3 max-[420px]:grid-cols-2">
            <div className="flex flex-col gap-1.5 max-[420px]:col-span-1">
              <Label htmlFor="f-length">Длина, м</Label>
              <Input
                id="f-length"
                type="number"
                step="0.1"
                min="0"
                inputMode="decimal"
                value={values.length}
                onChange={(e) => set('length', e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1.5 max-[420px]:col-span-1">
              <Label htmlFor="f-width">Ширина, м</Label>
              <Input
                id="f-width"
                type="number"
                step="0.1"
                min="0"
                inputMode="decimal"
                value={values.width}
                onChange={(e) => set('width', e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1.5 max-[420px]:col-span-2">
              <Label htmlFor="f-height">Высота, м</Label>
              <Input
                id="f-height"
                type="number"
                step="0.1"
                min="0"
                inputMode="decimal"
                value={values.height}
                onChange={(e) => set('height', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Проёмы */}
        <div className="flex flex-col gap-3 pt-5 border-t border-border">
          <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
            Проёмы
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="f-windows" className="inline-flex items-center gap-1.5">
                <AppWindow size={14} aria-hidden />
                Окон
              </Label>
              <Stepper
                id="f-windows"
                value={values.windows}
                onValueChange={(n) => setValues((v) => ({ ...v, windows: n }))}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="f-doors" className="inline-flex items-center gap-1.5">
                <DoorOpen size={14} aria-hidden />
                Дверей
              </Label>
              <Stepper
                id="f-doors"
                value={values.doors}
                onValueChange={(n) => setValues((v) => ({ ...v, doors: n }))}
              />
            </div>
          </div>
        </div>

        {/* Параметры покраски */}
        <div className="flex flex-col gap-3 pt-5 border-t border-border">
          <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
            Параметры покраски
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="f-surface">Что красим</Label>
            <Select
              id="f-surface"
              value={values.surface}
              onChange={(e) => set('surface', e.target.value as Surface)}
            >
              <option value="walls">Только стены</option>
              <option value="ceiling">Только потолок</option>
              <option value="both">Стены и потолок</option>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="f-consumption" className="inline-flex items-center gap-1.5">
                <Droplet size={14} aria-hidden />
                Расход, л/м²
              </Label>
              <Select
                id="f-consumption"
                value={values.consumption}
                onChange={(e) => set('consumption', e.target.value)}
              >
                <option value="0.10">0,10 — алкидная, эмаль</option>
                <option value="0.13">0,13 — водоэмульсионная</option>
                <option value="0.15">0,15 — акриловая, латексная</option>
                <option value="0.18">0,18 — фасадная, силиконовая</option>
                <option value="0.20">0,20 — фактурная, декоративная</option>
              </Select>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="f-coats">Слоёв</Label>
              <Select
                id="f-coats"
                value={values.coats}
                onChange={(e) => set('coats', e.target.value)}
              >
                <option value="1">1 слой</option>
                <option value="2">2 слоя</option>
                <option value="3">3 слоя</option>
              </Select>
            </div>
          </div>
        </div>

      </div>

      {/* Результат */}
      <div className="flex flex-col gap-3 md:sticky md:top-16">

        {/* Главная цифра */}
        <div className="p-6 rounded-lg bg-primary-muted">
          <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-primary-muted-foreground opacity-85 mb-2">
            Нужно купить
          </div>
          <div className="flex items-baseline gap-2 mb-1.5">
            <strong className="text-[40px] font-medium leading-none tracking-tight text-primary-muted-foreground">
              {fmtTotal}
            </strong>
            {fmtTotal !== dash && (
              <span className="text-[16px] text-primary-muted-foreground">
                {litresWord}
              </span>
            )}
          </div>
          <div className="text-[12px] text-primary-muted-foreground opacity-80 leading-snug">
            с запасом 10% на брак и подкраску
          </div>
        </div>

        {/* Разбивка */}
        <div className="p-5 rounded-lg bg-muted">
          <div className="text-[12px] font-medium text-muted-foreground mb-2.5">
            Расчёт
          </div>
          <ul className="space-y-0 m-0 p-0 list-none">
            {values.surface !== 'ceiling' && (
              <BreakdownRow label="Площадь стен" value={fmtWalls} />
            )}
            {values.surface !== 'walls' && (
              <BreakdownRow label="Площадь потолка" value={fmtCeiling} />
            )}
            <BreakdownRow label="К покраске" value={fmtTotalArea} />
            <BreakdownRow label="Без запаса" value={fmtNoSpare} divider />
          </ul>
        </div>

        {/* CTA */}
        <Button type="button" size="lg" className="w-full hover:bg-primary-hover">
          <ShoppingCart aria-hidden />
          Где купить выгодно
          <ArrowUpRight className="ml-1 size-3.5" aria-hidden />
        </Button>

      </div>
    </section>
  )
}

interface BreakdownRowProps {
  label: string
  value: string
  divider?: boolean
}

function BreakdownRow({ label, value, divider }: BreakdownRowProps) {
  return (
    <li
      className={[
        'flex justify-between items-baseline gap-4 text-[13px] leading-[1.8] text-muted-foreground',
        divider ? 'border-t border-border pt-2 mt-1.5' : '',
      ].join(' ')}
    >
      <span>{label}</span>
      <span className="text-foreground tabular-nums">{value}</span>
    </li>
  )
}
