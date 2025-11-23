import { upscSubjects } from "@/lib/data/upsc/subjects";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, BrainCircuit, FileText, History, Scale, Globe, TrendingUp, Cpu, Leaf, Palette } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  History,
  Scale,
  Globe,
  TrendingUp,
  Cpu,
  Leaf,
  Palette
};

export default function UPSCPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">UPSC Civil Services</h1>
        <p className="text-muted-foreground">
          Comprehensive study materials for the Civil Services Examination.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {upscSubjects.map((subject) => {
          const Icon = iconMap[subject.icon] || BookOpen;
          return (
            <Link key={subject.id} href={`/upsc/${subject.id}`}>
              <Card className="h-full hover:bg-muted/50 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle>{subject.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {subject.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>Study</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BrainCircuit className="h-4 w-4" />
                      <span>Flashcards</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      <span>Quiz</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
