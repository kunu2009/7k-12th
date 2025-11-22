import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { 
  BookOpen, 
  GraduationCap, 
  History, 
  TrendingUp,
  Library,
  ArrowRight,
  Landmark
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SubjectCard } from "@/components/shared/subject-card"

const subjects = [
  {
    title: "Economics",
    description: "Micro & Macro Economics, Statistics",
    icon: Landmark,
    href: "/economics",
    color: "text-green-500",
    progress: 0,
    stats: [
      { label: "Chapters", value: 7 },
      { label: "Flashcards", value: 150 },
    ],
  },
  {
    title: "Political Science",
    description: "Constitution, Politics, International Relations",
    icon: BookOpen,
    href: "/political-science",
    color: "text-purple-500",
    progress: 0,
    stats: [
      { label: "Chapters", value: 5 },
      { label: "Videos", value: 25 },
    ],
  },
  {
    title: "History",
    description: "Ancient, Medieval, Modern World History",
    icon: History,
    href: "/history",
    color: "text-orange-500",
    progress: 0,
    stats: [
      { label: "Chapters", value: 12 },
      { label: "Quizzes", value: 24 },
    ],
  },
  {
    title: "UPSC Prep",
    description: "Comprehensive preparation for Civil Services",
    icon: GraduationCap,
    href: "/upsc",
    color: "text-red-500",
    progress: 0,
    stats: [
      { label: "Topics", value: 50 },
      { label: "Mock Tests", value: 10 },
    ],
  }
]

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <Card className="bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle>Welcome back!</CardTitle>
            <CardDescription className="text-primary-foreground/80">
              Ready to continue your learning journey?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Day 1</div>
            <p className="text-xs text-primary-foreground/80">Current Streak</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Study Time</CardTitle>
            <CardDescription>Total time spent learning</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0h 0m</div>
            <p className="text-xs text-muted-foreground">+0% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Progress</CardTitle>
            <CardDescription>Overall completion rate</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0%</div>
            <p className="text-xs text-muted-foreground">Keep going!</p>
          </CardContent>
        </Card>
      </div>
      
      <h2 className="text-2xl font-bold tracking-tight mt-6 mb-4">Your Subjects</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {subjects.map((subject) => (
          <SubjectCard key={subject.title} {...subject} />
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-6">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Your latest study sessions and completed items.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 items-center justify-center h-[200px] text-muted-foreground">
              <BookOpen className="h-10 w-10 mb-2 opacity-20" />
              <p>No recent activity</p>
              <Button variant="outline" size="sm">Start Studying</Button>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks and tools.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2">
            <Button variant="outline" className="w-full justify-start">
              <BookOpen className="mr-2 h-4 w-4" />
              Browse Resources
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <TrendingUp className="mr-2 h-4 w-4" />
              View Analytics
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <GraduationCap className="mr-2 h-4 w-4" />
              Take a Quiz
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
