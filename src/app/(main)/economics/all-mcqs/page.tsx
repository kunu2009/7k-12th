import { economicsChapters } from "@/lib/data/economics/chapters";
import { economicsMCQs } from "@/lib/data/economics";
import { MCQQuiz } from "@/components/economics/MCQQuiz";

export default function AllMCQsPage() {
  const allMCQs = economicsChapters.flatMap((chapter) => {
    const mcqs = economicsMCQs[chapter.chapterId];
    if (!mcqs) return [];
    return mcqs.map((m) => ({
      ...m,
      question: `${m.question} (Ch ${chapter.number})`,
    }));
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">All MCQs</h1>
        <p className="text-muted-foreground">Test your knowledge across all chapters</p>
      </div>

      <MCQQuiz mcqs={allMCQs} />
    </div>
  );
}
