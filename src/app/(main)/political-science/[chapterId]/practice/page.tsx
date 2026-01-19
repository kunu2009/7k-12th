'use client';

import { useState, use } from 'react';
import { politicalScienceChapters } from '@/lib/data/political-science/chapters';
import { getQuestionsByChapter, getQuestionsByType, type Question } from '@/lib/data/political-science/question-bank';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Eye, EyeOff, CheckCircle2, BookOpen, PenTool, RefreshCw } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ScrollArea } from '@/components/ui/scroll-area';

interface PracticePageProps {
  params: Promise<{
    chapterId: string;
  }>;
}

export default function PracticePage({ params }: PracticePageProps) {
  const { chapterId } = use(params);
  const chapter = politicalScienceChapters.find((c) => c.id === chapterId);
  const allQuestions = getQuestionsByChapter(chapterId);

  const [selectedType, setSelectedType] = useState<Question['type']>('2-marks');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [completedQuestions, setCompletedQuestions] = useState<Set<string>>(new Set());

  if (!chapter) {
    notFound();
  }

  const filteredQuestions = getQuestionsByType(chapterId, selectedType);
  const currentQuestion = filteredQuestions[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer('');
      setShowAnswer(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setUserAnswer('');
      setShowAnswer(false);
    }
  };

  const handleMarkComplete = () => {
    if (currentQuestion) {
      setCompletedQuestions(new Set([...completedQuestions, currentQuestion.id]));
    }
  };

  const handleTypeChange = (type: Question['type']) => {
    setSelectedType(type);
    setCurrentQuestionIndex(0);
    setUserAnswer('');
    setShowAnswer(false);
  };

  const resetProgress = () => {
    setCompletedQuestions(new Set());
    setCurrentQuestionIndex(0);
    setUserAnswer('');
    setShowAnswer(false);
  };

  const progress = filteredQuestions.length > 0
    ? Math.round((filteredQuestions.filter(q => completedQuestions.has(q.id)).length / filteredQuestions.length) * 100)
    : 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href={`/political-science/${chapterId}`}>
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Answer Writing Practice</h1>
            <p className="text-muted-foreground">{chapter.title}</p>
          </div>
        </div>
        <Button variant="outline" size="sm" onClick={resetProgress}>
          <RefreshCw className="h-4 w-4 mr-2" />
          Reset Progress
        </Button>
      </div>

      {/* Progress Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{allQuestions.length}</div>
            <p className="text-xs text-muted-foreground">All types combined</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedQuestions.size}</div>
            <p className="text-xs text-muted-foreground">Questions practiced</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{progress}%</div>
            <p className="text-xs text-muted-foreground">Current type completion</p>
          </CardContent>
        </Card>
      </div>

      {/* Question Type Selector */}
      <Card>
        <CardHeader>
          <CardTitle>Select Question Type</CardTitle>
          <CardDescription>Choose the type of questions you want to practice</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['1-mark', '2-marks', '4-marks', '6-marks'].map((type) => {
              const count = getQuestionsByType(chapterId, type as Question['type']).length;
              const completed = getQuestionsByType(chapterId, type as Question['type']).filter(
                q => completedQuestions.has(q.id)
              ).length;
              
              return (
                <Button
                  key={type}
                  variant={selectedType === type ? 'default' : 'outline'}
                  onClick={() => handleTypeChange(type as Question['type'])}
                  className="flex flex-col h-auto py-4"
                >
                  <span className="text-lg font-bold">{type}</span>
                  <span className="text-xs mt-1">{completed}/{count} questions</span>
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Main Practice Area */}
      {currentQuestion ? (
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Question Panel */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{currentQuestion.type}</Badge>
                  {completedQuestions.has(currentQuestion.id) && (
                    <Badge variant="default" className="bg-green-500">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Completed
                    </Badge>
                  )}
                </div>
                <span className="text-sm text-muted-foreground">
                  Question {currentQuestionIndex + 1} of {filteredQuestions.length}
                </span>
              </div>
              <CardTitle className="text-lg leading-relaxed">{currentQuestion.question}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {currentQuestion.examTip && (
                <Alert>
                  <BookOpen className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Exam Tip:</strong> {currentQuestion.examTip}
                  </AlertDescription>
                </Alert>
              )}

              <div>
                <label className="text-sm font-medium mb-2 block">
                  <PenTool className="h-4 w-4 inline mr-2" />
                  Write your answer:
                </label>
                <Textarea
                  placeholder="Start writing your answer here..."
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  className="min-h-[300px] font-mono text-sm"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Word count: {userAnswer.trim().split(/\s+/).filter(Boolean).length}
                </p>
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={() => setShowAnswer(!showAnswer)}
                  variant="outline"
                  className="flex-1"
                >
                  {showAnswer ? (
                    <>
                      <EyeOff className="h-4 w-4 mr-2" />
                      Hide Answer
                    </>
                  ) : (
                    <>
                      <Eye className="h-4 w-4 mr-2" />
                      Show Model Answer
                    </>
                  )}
                </Button>
                <Button
                  onClick={handleMarkComplete}
                  disabled={completedQuestions.has(currentQuestion.id)}
                  variant="default"
                >
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Mark Complete
                </Button>
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  variant="outline"
                  className="flex-1"
                >
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={currentQuestionIndex === filteredQuestions.length - 1}
                  variant="outline"
                  className="flex-1"
                >
                  Next
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Answer Guide Panel */}
          <Card>
            <CardHeader>
              <CardTitle>Answer Guide</CardTitle>
              <CardDescription>
                Model answer and important points to include
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="points" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="points">Key Points</TabsTrigger>
                  <TabsTrigger value="answer" disabled={!showAnswer}>
                    Model Answer
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="points" className="mt-4">
                  <ScrollArea className="h-[400px] pr-4">
                    <div className="space-y-2">
                      <p className="text-sm font-medium mb-3">
                        Important points to cover in your answer:
                      </p>
                      {currentQuestion.points.map((point, index) => (
                        <div
                          key={index}
                          className="flex gap-3 p-3 bg-muted rounded-lg"
                        >
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                            {index + 1}
                          </div>
                          <p className="text-sm">{point}</p>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </TabsContent>

                <TabsContent value="answer" className="mt-4">
                  {showAnswer ? (
                    <ScrollArea className="h-[400px] pr-4">
                      <div className="prose prose-sm max-w-none dark:prose-invert">
                        <div className="bg-muted p-4 rounded-lg whitespace-pre-line">
                          {currentQuestion.answer}
                        </div>
                      </div>
                    </ScrollArea>
                  ) : (
                    <div className="flex items-center justify-center h-[400px] text-muted-foreground">
                      <div className="text-center">
                        <EyeOff className="h-12 w-12 mx-auto mb-4 opacity-20" />
                        <p>Click "Show Model Answer" to view the complete answer</p>
                      </div>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      ) : (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <BookOpen className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">
              No questions available for this type yet.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
