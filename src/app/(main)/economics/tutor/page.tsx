import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot } from "lucide-react";

export default function TutorPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">AI Tutor</h1>
        <p className="text-muted-foreground">Get personalized help with your economics studies</p>
      </div>

      <Card className="text-center py-12">
        <CardHeader>
          <div className="mx-auto bg-primary/10 p-4 rounded-full mb-4">
            <Bot className="h-12 w-12 text-primary" />
          </div>
          <CardTitle>AI Tutor Coming Soon</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground max-w-md mx-auto">
            Our AI-powered tutor is being trained to help you understand complex economic concepts. Check back later!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
