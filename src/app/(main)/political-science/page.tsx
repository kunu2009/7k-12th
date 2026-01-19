import { politicalScienceChapters } from "@/lib/data/political-science/chapters";
import { getQuestionsByChapter } from "@/lib/data/political-science/question-bank";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { BookOpen, BrainCircuit, FileText, PenTool, GraduationCap } from "lucide-react";

export default function PoliticalSciencePage() {
  const totalQuestions = politicalScienceChapters.reduce(
    (acc, chapter) => acc + getQuestionsByChapter(chapter.id).length,
    0
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Political Science</h1>
          <Badge variant="default" className="ml-2">HSC Maharashtra Board</Badge>
        </div>
        <p className="text-muted-foreground">
          Class 12 Political Science - Politics in India since Independence
        </p>
      </div>

      {/* Board Exam Preparation Alert */}
      <Alert className="border-primary bg-primary/5">
        <GraduationCap className="h-4 w-4" />
        <AlertDescription>
          <strong>Board Exam Ready!</strong> Complete question bank with {totalQuestions}+ questions covering all chapters. 
          Practice answer writing with detailed model answers aligned with HSC Maharashtra Board textbook.
        </AlertDescription>
      </Alert>

      {/* Feature Highlights */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-primary" />
              Study Material
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              Comprehensive notes for all chapters
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <PenTool className="h-4 w-4 text-primary" />
              Answer Writing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              {totalQuestions}+ board exam questions with detailed answers
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <BrainCircuit className="h-4 w-4 text-primary" />
              Flashcards
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              Quick revision of key concepts
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary" />
              MCQ Practice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              Test your knowledge with quizzes
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {politicalScienceChapters.map((chapter, index) => {
          const questionCount = getQuestionsByChapter(chapter.id).length;
          return (
            <Link key={chapter.id} href={`/political-science/${chapter.id}`}>
              <Card className="h-full hover:bg-muted/50 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">Chapter {index + 1}</Badge>
                    <Badge variant="secondary" className="text-xs">
                      {questionCount} Questions
                    </Badge>
                  </div>
                  <CardTitle className="line-clamp-2 text-lg">{chapter.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {chapter.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-3 text-sm text-muted-foreground flex-wrap">
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>Study</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <PenTool className="h-4 w-4" />
                      <span>Practice</span>
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
