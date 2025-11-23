import { historyChapters } from "@/lib/data/history/chapters";
import { historyContent } from "@/lib/data/history";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

interface StudyPageProps {
  params: Promise<{
    chapterId: string;
  }>;
}

export default async function StudyPage({ params }: StudyPageProps) {
  const { chapterId } = await params;
  const chapter = historyChapters.find((c) => c.chapterId === chapterId);

  if (!chapter) {
    notFound();
  }

  const content = historyContent[chapterId];

  if (!content) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link href={`/history/${chapterId}`}>
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Study Material</h1>
            <p className="text-muted-foreground">{chapter.title}</p>
          </div>
        </div>
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground">No study material available for this chapter yet.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // History content is a string, not an object with summary/mustKnow like PolSci/Econ
  // So we render it directly
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href={`/history/${chapterId}`}>
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Study Material</h1>
          <p className="text-muted-foreground">{chapter.title}</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Content</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose dark:prose-invert max-w-none whitespace-pre-wrap">
            {content}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
