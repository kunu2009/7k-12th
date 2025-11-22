import Link from "next/link"
import { ArrowRight, LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface SubjectCardProps {
  title: string
  description: string
  href: string
  icon: LucideIcon
  color: string
  progress?: number
  stats?: {
    label: string
    value: string | number
  }[]
}

export function SubjectCard({
  title,
  description,
  href,
  icon: Icon,
  color,
  progress,
  stats,
}: SubjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className={cn("rounded-lg p-2", color.replace("text-", "bg-").replace("500", "100"))}>
            <Icon className={cn("h-6 w-6", color)} />
          </div>
          {progress !== undefined && (
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>{progress}%</span>
            </div>
          )}
        </div>
        <CardTitle className="mt-4 text-xl">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-4">
        {progress !== undefined && (
          <Progress value={progress} className="h-2 mb-4" />
        )}
        {stats && (
          <div className="grid grid-cols-2 gap-4 text-sm">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-medium">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full group">
          <Link href={href}>
            Start Learning
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
