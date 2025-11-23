import { upscSubjects } from "@/lib/data/upsc/subjects";
import { upscContent } from "@/lib/data/upsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

interface StudyPageProps {
  params: Promise<{
    subjectId: string;
  }>;
}

export default async function StudyPage({ params }: StudyPageProps) {
  const { subjectId } = await params;
  const subject = upscSubjects.find((s) => s.id === subjectId);

  if (!subject) {
    notFound();
  }

  const contentList = upscContent[subjectId];

  if (!contentList || contentList.length === 0) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link href={`/upsc/${subjectId}`}>
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Study Material</h1>
            <p className="text-muted-foreground">{subject.title}</p>
          </div>
        </div>
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground">No study material available for this subject yet.</p>
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
          <h1 className="text-2xl font-bold tracking-tight">Study Material</h1>
          <p className="text-muted-foreground">{subject.title}</p>
        </div>
      </div>

      <div className="grid gap-6">
        {contentList.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-7">{item.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
