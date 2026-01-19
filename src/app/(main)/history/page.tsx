import { historyChapters } from "@/lib/data/history/chapters";
import { getHistoryQuestionsByChapter } from "@/lib/data/history/question-bank";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { BookOpen, BrainCircuit, FileText, PenTool, GraduationCap } from "lucide-react";

export default function HistoryPage() {
  // Calculate total questions
  const totalQuestions = historyChapters.reduce((total, chapter) => {
    return total + getHistoryQuestionsByChapter(chapter.id).length;
  }, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">History</h1>
          <Badge variant="secondary" className="text-xs">HSC Maharashtra Board</Badge>
        </div>
        <p className="text-muted-foreground">
          Comprehensive board exam preparation with answer writing practice and model solutions.
        </p>
      </div>

      <Alert>
        <GraduationCap className="h-4 w-4" />
        <AlertDescription>
          <strong>Board Exam Ready:</strong> {totalQuestions}+ practice questions with detailed model answers covering all chapters from the HSC syllabus.
        </AlertDescription>
      </Alert>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-primary" />
              Study Material
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Comprehensive chapter summaries and key concepts</p>
          </CardContent>
        </Card>

        <Card className="border-primary">
          <CardHeader>
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <PenTool className="h-4 w-4 text-primary" />
              Answer Writing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Practice with {totalQuestions}+ board exam questions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <BrainCircuit className="h-4 w-4 text-primary" />
              Flashcards
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Memorize key terms, dates, and events</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary" />
              MCQ Practice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">Quick recall and knowledge testing</p>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Chapters</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {historyChapters.map((chapter) => {
            const questionCount = getHistoryQuestionsByChapter(chapter.id).length;
            return (
              <Link key={chapter.id} href={`/history/${chapter.id}`}>
                <Card className="h-full hover:bg-muted/50 transition-colors cursor-pointer">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline">Chapter {chapter.number}</Badge>
                      {questionCount > 0 && (
                        <Badge variant="secondary" className="text-xs">
                          {questionCount} questions
                        </Badge>
                      )}
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
                        <PenTool className="h-4 w-4" />
                        <span>Practice</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BrainCircuit className="h-4 w-4" />
                        <span>Cards</span>
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
    </div>
  );
}
