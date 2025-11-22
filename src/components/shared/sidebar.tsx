"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BookOpen, Landmark, History, GraduationCap, LayoutDashboard } from "lucide-react"

const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Economics",
    href: "/economics",
    icon: Landmark,
    color: "text-green-500",
  },
  {
    title: "Political Science",
    href: "/political-science",
    icon: BookOpen,
    color: "text-purple-500",
  },
  {
    title: "History",
    href: "/history",
    icon: History,
    color: "text-orange-500",
  },
  {
    title: "UPSC",
    href: "/upsc",
    icon: GraduationCap,
    color: "text-red-500",
  },
]

type SidebarProps = React.HTMLAttributes<HTMLDivElement>

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Subjects
          </h2>
          <div className="space-y-1">
            {sidebarNavItems.map((item) => (
              <Button
                key={item.href}
                variant={pathname?.startsWith(item.href) ? "secondary" : "ghost"}
                className="w-full justify-start"
                asChild
              >
                <Link href={item.href}>
                  <item.icon className={cn("mr-2 h-4 w-4", item.color)} />
                  {item.title}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
