import { upscSubjects } from "@/lib/data/upsc/subjects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, BrainCircuit, FileText, ArrowLeft } from "lucide-react";

interface SubjectPageProps {
  params: Promise<{
    subjectId: string;
  }>;
}

export default async function SubjectPage({ params }: SubjectPageProps) {
  const { subjectId } = await params;
  const subject = upscSubjects.find((s) => s.id === subjectId);

  if (!subject) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/upsc">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{subject.title}</h1>
          <p className="text-muted-foreground">Subject Overview</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Link href={`/upsc/${subject.id}/study`}>
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Study Material
              </CardTitle>
              <CardDescription>
                Key concepts and summaries
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link href={`/upsc/${subject.id}/flashcards`}>
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BrainCircuit className="h-5 w-5 text-primary" />
                Flashcards
              </CardTitle>
              <CardDescription>
                Memorize important facts
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Link href={`/upsc/${subject.id}/mcqs`}>
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                MCQ Quiz
              </CardTitle>
              <CardDescription>
                Practice questions
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>About {subject.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-7">{subject.description}</p>
        </CardContent>
      </Card>
    </div>
  );
}
