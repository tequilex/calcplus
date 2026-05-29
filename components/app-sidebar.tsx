"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ChevronRight,
  Hammer,
  Wallet,
  HeartPulse,
  Square,
  PaintBucket,
  Grid3x3,
  Rows3,
  CreditCard,
  Building,
  Percent,
  PiggyBank,
  Scale,
  Flame,
  Droplet,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/ThemeToggle"

interface CalcItem {
  title: string
  href: string
  icon: LucideIcon
  comingSoon?: boolean
}

interface Category {
  label: string
  icon: LucideIcon
  items: CalcItem[]
}

const categories: Category[] = [
  {
    label: "Ремонт",
    icon: Hammer,
    items: [
      { title: "Обои", href: "/kalkulyator-oboev/", icon: Square },
      { title: "Краска", href: "#", icon: PaintBucket, comingSoon: true },
      { title: "Плитка", href: "#", icon: Grid3x3, comingSoon: true },
      { title: "Ламинат", href: "#", icon: Rows3, comingSoon: true },
      { title: "Стоимость ремонта", href: "#", icon: Wallet, comingSoon: true },
    ],
  },
  {
    label: "Финансы",
    icon: Wallet,
    items: [
      { title: "Кредит", href: "#", icon: CreditCard, comingSoon: true },
      { title: "Ипотека", href: "#", icon: Building, comingSoon: true },
      { title: "НДС", href: "#", icon: Percent, comingSoon: true },
      { title: "Депозит", href: "#", icon: PiggyBank, comingSoon: true },
    ],
  },
  {
    label: "Здоровье",
    icon: HeartPulse,
    items: [
      { title: "ИМТ", href: "#", icon: Scale, comingSoon: true },
      { title: "Калории", href: "#", icon: Flame, comingSoon: true },
      { title: "Норма воды", href: "#", icon: Droplet, comingSoon: true },
    ],
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const isPreview = pathname === "/dashboard"

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="h-12 text-sidebar-foreground hover:bg-transparent active:bg-transparent"
            >
              <Link href="/" aria-label="pluscalc.ru — на главную">
                <Image
                  src="/icon.svg"
                  alt=""
                  width={28}
                  height={28}
                  className="hidden size-7 shrink-0 group-data-[collapsible=icon]:block"
                  aria-hidden
                />
                <Image
                  src="/logo-grey.svg"
                  alt="pluscalc.ru"
                  width={145}
                  height={56}
                  priority
                  className="h-7 w-auto logo-light group-data-[collapsible=icon]:hidden"
                />
                <Image
                  src="/logo-white.svg"
                  alt="pluscalc.ru"
                  width={145}
                  height={56}
                  priority
                  className="h-7 w-auto logo-dark group-data-[collapsible=icon]:hidden"
                />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Категории</SidebarGroupLabel>
          <SidebarMenu>
            {categories.map((cat) => {
              const hasActive = cat.items.some(
                (i) => !i.comingSoon && (pathname === i.href || (isPreview && i.href === "/kalkulyator-oboev/"))
              )
              return (
                <Collapsible
                  key={cat.label}
                  asChild
                  defaultOpen={hasActive}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        tooltip={cat.label}
                        className="text-sidebar-foreground"
                      >
                        <cat.icon />
                        <span>{cat.label}</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {cat.items.map((item) => {
                          const isActive =
                            !item.comingSoon &&
                            (pathname === item.href ||
                              (isPreview && item.href === "/kalkulyator-oboev/"))
                          if (item.comingSoon) {
                            return (
                              <SidebarMenuSubItem key={item.title}>
                                <SidebarMenuSubButton
                                  aria-disabled
                                  className="opacity-50 cursor-not-allowed text-sidebar-foreground hover:bg-transparent hover:text-sidebar-foreground"
                                >
                                  <span>{item.title}</span>
                                  <span className="ml-auto text-[10px] text-muted-foreground">
                                    скоро
                                  </span>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            )
                          }
                          return (
                            <SidebarMenuSubItem key={item.title}>
                              <SidebarMenuSubButton
                                asChild
                                isActive={isActive}
                                className="text-sidebar-foreground"
                              >
                                <Link href={item.href}>
                                  <span>{item.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          )
                        })}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex items-center justify-between px-2 py-1.5 group-data-[collapsible=icon]:justify-center">
          <span className="text-xs text-muted-foreground group-data-[collapsible=icon]:hidden">
            Тема
          </span>
          <ThemeToggle />
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
