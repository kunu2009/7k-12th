"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2, XCircle, RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface MCQ {
  question: string;
  options: string[];
  answer: string;
}

interface MCQQuizProps {
  mcqs: MCQ[];
}

export function MCQQuiz({ mcqs }: MCQQuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = mcqs[currentQuestionIndex];

  const handleSubmit = () => {
    if (!selectedOption) return;

    const isCorrect = selectedOption === currentQuestion.answer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < mcqs.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <Card className="max-w-2xl mx-auto w-full">
        <CardHeader>
          <CardTitle className="text-center">Quiz Results</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <div className="text-4xl font-bold text-primary">
            {score} / {mcqs.length}
          </div>
          <p className="text-muted-foreground">
            You scored {Math.round((score / mcqs.length) * 100)}%
          </p>
        </CardContent>
        <CardFooter className="justify-center">
          <Button onClick={handleRestart}>
            <RefreshCcw className="mr-2 h-4 w-4" />
            Restart Quiz
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto w-full">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">
            Question {currentQuestionIndex + 1} of {mcqs.length}
          </span>
          <span className="text-sm font-medium">
            Score: {score}
          </span>
        </div>
        <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedOption || ""}
          onValueChange={(value) => !isSubmitted && setSelectedOption(value)}
          className="space-y-3"
        >
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedOption === option;
            const isCorrect = option === currentQuestion.answer;
            const showCorrect = isSubmitted && isCorrect;
            const showIncorrect = isSubmitted && isSelected && !isCorrect;

            return (
              <div
                key={index}
                className={cn(
                  "flex items-center space-x-2 border rounded-lg p-4 transition-colors",
                  isSelected && "border-primary bg-primary/5",
                  showCorrect && "border-green-500 bg-green-50 dark:bg-green-900/20",
                  showIncorrect && "border-red-500 bg-red-50 dark:bg-red-900/20",
                  !isSubmitted && "hover:bg-muted cursor-pointer"
                )}
                onClick={() => !isSubmitted && setSelectedOption(option)}
              >
                <RadioGroupItem value={option} id={`option-${index}`} className="sr-only" />
                <Label
                  htmlFor={`option-${index}`}
                  className="flex-1 cursor-pointer flex items-center justify-between"
                >
                  <span>{option}</span>
                  {showCorrect && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                  {showIncorrect && <XCircle className="h-5 w-5 text-red-500" />}
                </Label>
              </div>
            );
          })}
        </RadioGroup>
      </CardContent>
      <CardFooter className="justify-end">
        {!isSubmitted ? (
          <Button onClick={handleSubmit} disabled={!selectedOption}>
            Submit Answer
          </Button>
        ) : (
          <Button onClick={handleNext}>
            {currentQuestionIndex < mcqs.length - 1 ? "Next Question" : "Show Results"}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
