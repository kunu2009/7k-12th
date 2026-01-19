import { politicalScienceChapters } from "@/lib/data/political-science/chapters";
import { getQuestionsByChapter } from "@/lib/data/political-science/question-bank";
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
  const chapter = politicalScienceChapters.find((c) => c.id === chapterId);
  const questions = getQuestionsByChapter(chapterId);

  if (!chapter) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/political-science">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{chapter.title}</h1>
          <p className="text-sm text-muted-foreground mt-1">
            HSC Maharashtra Board - Class 12 Political Science
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Link href={`/political-science/${chapter.id}/study`}>
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

        <Link href={`/political-science/${chapter.id}/flashcards`}>
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

        <Link href={`/political-science/${chapter.id}/mcqs`}>
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                MCQ Quiz
              </CardTitle>
              <CardDescription>
                Test your knowledge

        <Link href={`/political-science/${chapter.id}/practice`}>
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer h-full border-2 border-primary">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="default">Board Exam Prep</Badge>
                <Badge variant="outline">{questions.length} Questions</Badge>
              </div>
              <CardTitle className="flex items-center gap-2">
                <PenTool className="h-5 w-5 text-primary" />
                Answer Writing
              </CardTitle>
              <CardDescription>
                Practice board exam questions
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
          <p className="leading-7 mb-4">{chapter.description}</p>
          {chapter.topics && chapter.topics.length > 0 && (
            <div>
              <p className="text-sm font-medium mb-2">Key Topics:</p>
              <div className="flex flex-wrap gap-2">
                {chapter.topics.map((topic, index) => (
                  <Badge key={index} variant="secondary">
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          <CardTitle>Chapter Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-7">{chapter.description}</p>
        </CardContent>
      </Card>
    </div>
  );
}
