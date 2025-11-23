import { politicalScienceChapters } from "@/lib/data/political-science/chapters";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, BrainCircuit, FileText } from "lucide-react";

export default function PoliticalSciencePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Political Science</h1>
        <p className="text-muted-foreground">
          Explore political theories, systems, and governance with our comprehensive study materials.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {politicalScienceChapters.map((chapter, index) => (
          <Link key={chapter.id} href={`/political-science/${chapter.id}`}>
            <Card className="h-full hover:bg-muted/50 transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline">Chapter {index + 1}</Badge>
                </div>
                <CardTitle className="line-clamp-2">{chapter.title}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {chapter.description}
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
        ))}
      </div>
    </div>
  );
}
