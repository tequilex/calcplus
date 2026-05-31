'use client'

import { useState } from 'react'
import { AppWindow, DoorOpen, ShoppingCart, ArrowUpRight, Grid3x3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { Stepper } from '@/components/ui/stepper'

type Surface = 'floor' | 'walls'

interface FormValues {
  length: string
  width: string
  height: string
  windows: number
  doors: number
  surface: Surface
  tileLength: string
  tileWidth: string
  joint: string
}

function pluralTiles(n: number): string {
  const mod10 = n % 10
  const mod100 = n % 100
  if (mod100 >= 11 && mod100 <= 14) return 'плиток'
  if (mod10 === 1) return 'плитка'
  if (mod10 >= 2 && mod10 <= 4) return 'плитки'
  return 'плиток'
}

function parseNum(s: string): number {
  const v = parseFloat(s.replace(',', '.'))
  return isFinite(v) ? v : NaN
}

function formatNum(n: number, digits = 1): string {
  return n.toFixed(digits).replace(/\.0$/, '').replace('.', ',')
}

export function TileCalculator() {
  const [values, setValues] = useState<FormValues>({
    length: '3',
    width: '2',
    height: '2.7',
    windows: 0,
    doors: 1,
    surface: 'floor',
    tileLength: '30',
    tileWidth: '30',
    joint: '2',
  })

  const length = parseNum(values.length)
  const width = parseNum(values.width)
  const height = parseNum(values.height)
  const tileLength = parseNum(values.tileLength)
  const tileWidth = parseNum(values.tileWidth)
  const joint = parseNum(values.joint)
  const isValid = [length, width, tileLength, tileWidth].every((v) => isFinite(v) && v > 0) &&
    (values.surface === 'floor' || (isFinite(height) && height > 0))

  let area = NaN
  let tileAreaM2 = NaN
  let tilesNoSpare = NaN
  let tilesTotal = NaN
  let glueKg = NaN
  let groutKg = NaN

  if (isValid) {
    if (values.surface === 'floor') {
      area = length * width
    } else {
      const openings = values.windows * 1.5 + values.doors * 1.6
      area = Math.max(0, 2 * (length + width) * height - openings)
    }
    tileAreaM2 = (tileLength / 100) * (tileWidth / 100)
    tilesNoSpare = Math.ceil(area / tileAreaM2)
    tilesTotal = Math.ceil(tilesNoSpare * 1.1)

    const glueRate = values.surface === 'floor' ? 4.5 : 4
    glueKg = Math.ceil(area * glueRate)

    if (isFinite(joint) && joint > 0) {
      const thickness = 8
      const density = 1.6
      const ratePerM2 =
        ((tileLength * 10 + tileWidth * 10) / (tileLength * 10 * tileWidth * 10)) *
        thickness *
        joint *
        density *
        1.5
      const total = area * ratePerM2
      groutKg = Math.max(0.5, Math.ceil(total * 2) / 2)
    } else {
      groutKg = 0
    }
  }

  const dash = '—'
  const fmtArea = isValid && area > 0 ? formatNum(area) + ' м²' : dash
  const fmtNoSpare = isValid && tilesNoSpare > 0
    ? `${tilesNoSpare} ${pluralTiles(tilesNoSpare)}`
    : dash
  const fmtTotal = isValid && tilesTotal > 0 ? String(tilesTotal) : dash
  const tilesWord = isValid && tilesTotal > 0 ? pluralTiles(tilesTotal) : 'плиток'
  const fmtGlue = isValid && glueKg > 0 ? `${glueKg} кг` : dash
  const fmtGrout = isValid && groutKg > 0 ? `${formatNum(groutKg)} кг` : dash

  function set<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setValues((v) => ({ ...v, [field]: value }))
  }

  const showOpenings = values.surface === 'walls'

  return (
    <section className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-4 md:gap-6 mb-16 items-start">

      {/* Форма */}
      <div className="flex flex-col gap-5 p-6 rounded-lg border border-border bg-background">

        {/* Что облицовываем */}
        <div className="flex flex-col gap-3">
          <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
            Что облицовываем
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="f-surface">Поверхность</Label>
            <Select
              id="f-surface"
              value={values.surface}
              onChange={(e) => set('surface', e.target.value as Surface)}
            >
              <option value="floor">Пол</option>
              <option value="walls">Стены</option>
            </Select>
          </div>
        </div>

        {/* Размеры комнаты */}
        <div className="flex flex-col gap-3 pt-5 border-t border-border">
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
            {showOpenings && (
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
            )}
          </div>
        </div>

        {/* Проёмы */}
        {showOpenings && (
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
        )}

        {/* Параметры плитки */}
        <div className="flex flex-col gap-3 pt-5 border-t border-border">
          <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
            Параметры плитки
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="f-tile-length" className="inline-flex items-center gap-1.5">
                <Grid3x3 size={14} aria-hidden />
                Длина, см
              </Label>
              <Input
                id="f-tile-length"
                type="number"
                step="1"
                min="0"
                inputMode="decimal"
                value={values.tileLength}
                onChange={(e) => set('tileLength', e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="f-tile-width">Ширина, см</Label>
              <Input
                id="f-tile-width"
                type="number"
                step="1"
                min="0"
                inputMode="decimal"
                value={values.tileWidth}
                onChange={(e) => set('tileWidth', e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="f-joint">Ширина шва</Label>
            <Select
              id="f-joint"
              value={values.joint}
              onChange={(e) => set('joint', e.target.value)}
            >
              <option value="1.5">1,5 мм</option>
              <option value="2">2 мм</option>
              <option value="3">3 мм</option>
              <option value="5">5 мм</option>
            </Select>
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
                {tilesWord}
              </span>
            )}
          </div>
          <div className="text-[12px] text-primary-muted-foreground opacity-80 leading-snug">
            с запасом 10% на подрезку и бой
          </div>
        </div>

        {/* Разбивка */}
        <div className="p-5 rounded-lg bg-muted">
          <div className="text-[12px] font-medium text-muted-foreground mb-2.5">
            Расчёт
          </div>
          <ul className="space-y-0 m-0 p-0 list-none">
            <BreakdownRow label="Площадь" value={fmtArea} />
            <BreakdownRow label="Без запаса" value={fmtNoSpare} />
            <BreakdownRow label="Плиточный клей" value={fmtGlue} divider />
            <BreakdownRow label="Затирка" value={fmtGrout} />
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
