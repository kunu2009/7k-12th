import { historyChapters } from "@/lib/data/history/chapters";
import { getHistoryQuestionsByChapter } from "@/lib/data/history/question-bank";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, BrainCircuit, FileText, ArrowLeft, PenTool } from "lucide-react";

interface ChapterPageProps {
  params: Promise<{
    chapterId: string;
  }>;
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { chapterId } = await params;
  const chapter = historyChapters.find((c) => c.id === chapterId);

  if (!chapter) {
    notFound();
  }

  const chapterQuestions = getHistoryQuestionsByChapter(chapterId);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/history">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{chapter.title}</h1>
          <p className="text-muted-foreground">Chapter {chapter.number}</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Link href={`/history/${chapter.id}/study`}>
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Study Material
              </CardTitle>
              <CardDescription>
                Read summaries and key concepts
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link href={`/history/${chapter.id}/practice`}>
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer h-full border-primary">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="flex items-center gap-2">
                  <PenTool className="h-5 w-5 text-primary" />
                  Practice
                </CardTitle>
                <Badge variant="secondary">{chapterQuestions.length}</Badge>
              </div>
              <CardDescription>
                Write and improve your answers
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link href={`/history/${chapter.id}/flashcards`}>
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BrainCircuit className="h-5 w-5 text-primary" />
                Flashcards
              </CardTitle>
              <CardDescription>
                Memorize terms and definitions
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link href={`/history/${chapter.id}/mcqs`}>
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                MCQ Quiz
              </CardTitle>
              <CardDescription>
                Test your knowledge
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Chapter Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-7">{chapter.description}</p>
          
          {chapter.topics && chapter.topics.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Key Topics:</h3>
              <ul className="list-disc list-inside space-y-1">
                {chapter.topics.map((topic, index) => (
                  <li key={index} className="text-sm text-muted-foreground">{topic}</li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
