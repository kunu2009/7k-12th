import { upscSubjects } from "@/lib/data/upsc/subjects";
import { upscMCQs } from "@/lib/data/upsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { MCQQuiz } from "@/components/shared/MCQQuiz";
import { Card, CardContent } from "@/components/ui/card";

interface MCQsPageProps {
  params: Promise<{
    subjectId: string;
  }>;
}

export default async function MCQsPage({ params }: MCQsPageProps) {
  const { subjectId } = await params;
  const subject = upscSubjects.find((s) => s.id === subjectId);

  if (!subject) {
    notFound();
  }

  const mcqs = upscMCQs[subjectId];

  if (!mcqs || mcqs.length === 0) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link href={`/upsc/${subjectId}`}>
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">MCQ Quiz</h1>
            <p className="text-muted-foreground">{subject.title}</p>
          </div>
        </div>
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground">No MCQs available for this subject yet.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href={`/upsc/${subjectId}`}>
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">MCQ Quiz</h1>
          <p className="text-muted-foreground">{subject.title}</p>
        </div>
      </div>

      <MCQQuiz mcqs={mcqs} />
    </div>
  );
}
