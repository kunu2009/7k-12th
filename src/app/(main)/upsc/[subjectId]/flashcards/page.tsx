import { upscSubjects } from "@/lib/data/upsc/subjects";
import { upscFlashcards } from "@/lib/data/upsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { FlashcardViewer } from "@/components/shared/FlashcardViewer";
import { Card, CardContent } from "@/components/ui/card";

interface FlashcardsPageProps {
  params: Promise<{
    subjectId: string;
  }>;
}

export default async function FlashcardsPage({ params }: FlashcardsPageProps) {
  const { subjectId } = await params;
  const subject = upscSubjects.find((s) => s.id === subjectId);

  if (!subject) {
    notFound();
  }

  const flashcards = upscFlashcards[subjectId];

  if (!flashcards || flashcards.length === 0) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link href={`/upsc/${subjectId}`}>
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Flashcards</h1>
            <p className="text-muted-foreground">{subject.title}</p>
          </div>
        </div>
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground">No flashcards available for this subject yet.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const mappedFlashcards = flashcards.map(f => ({
    id: f.id,
    term: f.question,
    definition: f.answer
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href={`/upsc/${subjectId}`}>
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Flashcards</h1>
          <p className="text-muted-foreground">{subject.title}</p>
        </div>
      </div>

      <FlashcardViewer flashcards={mappedFlashcards} />
    </div>
  );
}
