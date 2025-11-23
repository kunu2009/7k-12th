import { politicalScienceChapters } from "@/lib/data/political-science/chapters";
import { politicalScienceMCQs } from "@/lib/data/political-science";
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
  const chapter = politicalScienceChapters.find((c) => c.id === chapterId);

  if (!chapter) {
    notFound();
  }

  const chapterMcqs = politicalScienceMCQs[chapterId];

  if (!chapterMcqs || chapterMcqs.length === 0) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link href={`/political-science/${chapterId}`}>
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

  const formattedMcqs = chapterMcqs.map((mcq) => ({
    question: mcq.question,
    options: mcq.options,
    answer: mcq.correctAnswer,
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href={`/political-science/${chapterId}`}>
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">MCQ Quiz</h1>
          <p className="text-muted-foreground">{chapter.title}</p>
        </div>
      </div>

      <MCQQuiz mcqs={formattedMcqs} />
    </div>
  );
}
