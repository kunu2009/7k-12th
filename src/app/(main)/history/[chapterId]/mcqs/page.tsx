import { historyChapters } from "@/lib/data/history/chapters";
import { historyMCQs } from "@/lib/data/history";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { MCQQuiz } from "@/components/shared/MCQQuiz";
import { Card, CardContent } from "@/components/ui/card";

interface MCQsPageProps {
  params: Promise<{
    chapterId: string;
  }>;
}

export default async function MCQsPage({ params }: MCQsPageProps) {
  const { chapterId } = await params;
  const chapter = historyChapters.find((c) => c.chapterId === chapterId);

  if (!chapter) {
    notFound();
  }

  const mcqs = historyMCQs[chapterId];

  if (!mcqs || mcqs.length === 0) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link href={`/history/${chapterId}`}>
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">MCQ Quiz</h1>
            <p className="text-muted-foreground">{chapter.title}</p>
          </div>
        </div>
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground">No MCQs available for this chapter yet.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Map history MCQs to the format expected by MCQQuiz if needed
  // History MCQs have 'correctAnswer' instead of 'answer'
  const mappedMCQs = mcqs.map(mcq => ({
    question: mcq.question,
    options: mcq.options,
    answer: mcq.correctAnswer
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href={`/history/${chapterId}`}>
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">MCQ Quiz</h1>
          <p className="text-muted-foreground">{chapter.title}</p>
        </div>
      </div>

      <MCQQuiz mcqs={mappedMCQs} />
    </div>
  );
}
