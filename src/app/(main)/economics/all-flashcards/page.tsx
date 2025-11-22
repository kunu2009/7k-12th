import { economicsChapters } from "@/lib/data/economics/chapters";
import { economicsFlashcards } from "@/lib/data/economics";
import { FlashcardViewer } from "@/components/economics/FlashcardViewer";

export default function AllFlashcardsPage() {
  const allFlashcards = economicsChapters.flatMap((chapter) => {
    const flashcards = economicsFlashcards[chapter.chapterId];
    if (!flashcards) return [];
    return flashcards.map((f) => ({
      ...f,
      term: `${f.term} (Ch ${chapter.number})`, // Add context
    }));
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">All Flashcards</h1>
        <p className="text-muted-foreground">Master terms from all chapters</p>
      </div>

      <FlashcardViewer flashcards={allFlashcards} />
    </div>
  );
}
