import { historyChapters } from "@/lib/data/history/chapters";
import { historyFlashcards } from "@/lib/data/history";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { FlashcardViewer } from "@/components/shared/FlashcardViewer";
import { Card, CardContent } from "@/components/ui/card";

interface FlashcardsPageProps {
  params: Promise<{
    chapterId: string;
  }>;
}

export default async function FlashcardsPage({ params }: FlashcardsPageProps) {
  const { chapterId } = await params;
  const chapter = historyChapters.find((c) => c.chapterId === chapterId);

  if (!chapter) {
    notFound();
  }

  const flashcards = historyFlashcards[chapterId];

  if (!flashcards || flashcards.length === 0) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link href={`/history/${chapterId}`}>
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Flashcards</h1>
            <p className="text-muted-foreground">{chapter.title}</p>
          </div>
        </div>
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground">No flashcards available for this chapter yet.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href={`/history/${chapterId}`}>
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Flashcards</h1>
          <p className="text-muted-foreground">{chapter.title}</p>
        </div>
      </div>

      <FlashcardViewer flashcards={flashcards} />
    </div>
  );
}
