import { politicalScienceChapters } from "@/lib/data/political-science/chapters";
import { politicalScienceContent } from "@/lib/data/political-science";
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
  const chapter = politicalScienceChapters.find((c) => c.chapterId === chapterId);

  if (!chapter) {
    notFound();
  }

  const content = politicalScienceContent[chapterId];

  if (!content) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link href={`/political-science/${chapterId}`}>
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

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href={`/political-science/${chapterId}`}>
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Study Material</h1>
          <p className="text-muted-foreground">{chapter.title}</p>
        </div>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-7">{content.summary}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Must Know Points</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              {content.mustKnow.map((point, index) => (
                <li key={index} className="leading-7">{point}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
