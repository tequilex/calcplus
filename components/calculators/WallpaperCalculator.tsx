'use client'

import { useState } from 'react'
import { AppWindow, DoorOpen, ShoppingCart, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'

interface FormValues {
  length: string
  width: string
  height: string
  windows: number
  doors: number
  rollWidth: string
  rollLength: string
  rapport: string
}

function pluralRolls(n: number): string {
  const mod10 = n % 10
  const mod100 = n % 100
  if (mod100 >= 11 && mod100 <= 14) return 'рулонов'
  if (mod10 === 1) return 'рулон'
  if (mod10 >= 2 && mod10 <= 4) return 'рулона'
  return 'рулонов'
}

function parseNum(s: string): number {
  const v = parseFloat(s.replace(',', '.'))
  return isFinite(v) ? v : NaN
}

export function WallpaperCalculator() {
  const [values, setValues] = useState<FormValues>({
    length: '4.5',
    width: '3.2',
    height: '2.7',
    windows: 1,
    doors: 1,
    rollWidth: '1.06',
    rollLength: '10',
    rapport: '0',
  })

  const length = parseNum(values.length)
  const width = parseNum(values.width)
  const height = parseNum(values.height)
  const rollWidth = parseNum(values.rollWidth)
  const rollLength = parseNum(values.rollLength)
  const rapport = parseNum(values.rapport)
  const isValid = [length, width, height, rollWidth, rollLength].every(
    (v) => isFinite(v) && v > 0,
  )

  let perimeter = NaN
  let stripsNeeded = NaN
  let stripsPerRoll = NaN
  let rollsNoSpare = NaN
  let rollsTotal = NaN

  if (isValid) {
    perimeter = Math.max(0, 2 * (length + width) - values.windows * 1.5 - values.doors * 0.9)
    const stripHeight = height + 0.1 + rapport / 100
    stripsNeeded = Math.ceil(perimeter / rollWidth)
    stripsPerRoll = Math.floor(rollLength / stripHeight)
    rollsNoSpare = stripsPerRoll > 0 ? Math.ceil(stripsNeeded / stripsPerRoll) : 0
    rollsTotal = rollsNoSpare > 0 ? rollsNoSpare + 1 : 0
  }

  const dash = '—'
  const fmtPerimeter = isValid && isFinite(perimeter) && perimeter > 0
    ? perimeter.toFixed(1).replace('.', ',') + ' м'
    : dash
  const fmtStrips = isValid && stripsNeeded > 0 ? String(stripsNeeded) : dash
  const fmtStripsPerRoll = isValid && stripsPerRoll > 0 ? String(stripsPerRoll) : dash
  const fmtNoSpare = isValid && rollsNoSpare > 0
    ? `${rollsNoSpare} ${pluralRolls(rollsNoSpare)}`
    : dash
  const fmtTotal = isValid && rollsTotal > 0 ? String(rollsTotal) : dash
  const rollsWord = isValid && rollsTotal > 0 ? pluralRolls(rollsTotal) : 'рулонов'

  function set(field: keyof FormValues, value: string) {
    setValues((v) => ({ ...v, [field]: value }))
  }

  function step(field: 'windows' | 'doors', delta: number) {
    setValues((v) => ({ ...v, [field]: Math.max(0, v[field] + delta) }))
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
                onDecrement={() => step('windows', -1)}
                onIncrement={() => step('windows', 1)}
                onChange={(n) => setValues((v) => ({ ...v, windows: n }))}
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
                onDecrement={() => step('doors', -1)}
                onIncrement={() => step('doors', 1)}
                onChange={(n) => setValues((v) => ({ ...v, doors: n }))}
              />
            </div>
          </div>
        </div>

        {/* Параметры рулона */}
        <div className="flex flex-col gap-3 pt-5 border-t border-border">
          <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
            Параметры рулона
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="f-roll-width">Ширина рулона</Label>
              <Select
                id="f-roll-width"
                value={values.rollWidth}
                onChange={(e) => set('rollWidth', e.target.value)}
              >
                <option value="0.53">0,53 м</option>
                <option value="1.06">1,06 м</option>
              </Select>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="f-roll-length">Длина рулона, м</Label>
              <Input
                id="f-roll-length"
                type="number"
                step="0.5"
                min="0"
                inputMode="decimal"
                value={values.rollLength}
                onChange={(e) => set('rollLength', e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="f-rapport">Раппорт</Label>
            <Select
              id="f-rapport"
              value={values.rapport}
              onChange={(e) => set('rapport', e.target.value)}
            >
              <option value="0">Без подбора</option>
              <option value="32">32 см</option>
              <option value="64">64 см</option>
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
                {rollsWord}
              </span>
            )}
          </div>
          <div className="text-[12px] text-primary-muted-foreground opacity-80 leading-snug">
            с запасом 1 рулон на брак
          </div>
        </div>

        {/* Разбивка */}
        <div className="p-5 rounded-lg bg-muted">
          <div className="text-[12px] font-medium text-muted-foreground mb-2.5">
            Расчёт
          </div>
          <ul className="space-y-0 m-0 p-0 list-none">
            <BreakdownRow label="Периметр" value={fmtPerimeter} />
            <BreakdownRow label="Полос обоев" value={fmtStrips} />
            <BreakdownRow label="Полос с рулона" value={fmtStripsPerRoll} />
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

/* ---- Вспомогательные компоненты ---- */

interface StepperProps {
  id: string
  value: number
  onDecrement: () => void
  onIncrement: () => void
  onChange: (n: number) => void
}

function Stepper({ id, value, onDecrement, onIncrement, onChange }: StepperProps) {
  return (
    <div className="grid grid-cols-[40px_1fr_40px] h-10 border border-border rounded-md bg-background overflow-hidden focus-within:border-primary focus-within:outline-2 focus-within:outline-ring focus-within:outline-offset-0 transition-colors duration-120">
      <button
        type="button"
        aria-label="Уменьшить"
        onClick={onDecrement}
        className="flex items-center justify-center h-full w-full bg-transparent border-none text-foreground cursor-pointer hover:bg-muted transition-colors duration-120"
      >
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 stroke-current" aria-hidden>
          <path d="M5 12h14" />
        </svg>
      </button>
      <input
        id={id}
        type="number"
        min="0"
        step="1"
        inputMode="numeric"
        value={value}
        onChange={(e) => {
          const n = parseInt(e.target.value, 10)
          if (isFinite(n) && n >= 0) onChange(n)
        }}
        className="w-full min-w-0 bg-transparent border-l border-r border-border text-foreground text-[15px] text-center p-0 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      <button
        type="button"
        aria-label="Увеличить"
        onClick={onIncrement}
        className="flex items-center justify-center h-full w-full bg-transparent border-none text-foreground cursor-pointer hover:bg-muted transition-colors duration-120"
      >
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 stroke-current" aria-hidden>
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      </button>
    </div>
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
