"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BookOpen, Landmark, History, GraduationCap, LayoutDashboard } from "lucide-react"

const navItems = [
  {
    title: "Home",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Eco",
    href: "/economics",
    icon: Landmark,
  },
  {
    title: "PolSci",
    href: "/political-science",
    icon: BookOpen,
  },
  {
    title: "History",
    href: "/history",
    icon: History,
  },
  {
    title: "UPSC",
    href: "/upsc",
    icon: GraduationCap,
  },
]

export function MobileNav() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t bg-background md:hidden">
      <div className="grid h-16 grid-cols-5 items-center justify-items-center">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center space-y-1 text-xs font-medium transition-colors hover:text-primary",
              pathname?.startsWith(item.href)
                ? "text-primary"
                : "text-muted-foreground"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
