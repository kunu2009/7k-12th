"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface Flashcard {
  term: string;
  definition: string;
}

interface FlashcardViewerProps {
  flashcards: Flashcard[];
}

export function FlashcardViewer({ flashcards }: FlashcardViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = flashcards[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % flashcards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto w-full">
      <div className="w-full aspect-[3/2] relative perspective-1000" onClick={handleFlip}>
        <motion.div
          className="w-full h-full relative preserve-3d cursor-pointer"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front */}
          <Card className="absolute inset-0 backface-hidden flex items-center justify-center p-6 text-center h-full">
            <CardContent className="flex flex-col items-center justify-center h-full">
              <h3 className="text-2xl font-bold mb-4">{currentCard.term}</h3>
              <p className="text-sm text-muted-foreground mt-auto">Tap to flip</p>
            </CardContent>
          </Card>

          {/* Back */}
          <Card 
            className="absolute inset-0 backface-hidden flex items-center justify-center p-6 text-center h-full"
            style={{ transform: "rotateY(180deg)" }}
          >
            <CardContent className="flex flex-col items-center justify-center h-full overflow-y-auto">
              <p className="text-lg leading-relaxed">{currentCard.definition}</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="flex items-center justify-between w-full">
        <Button variant="outline" onClick={handlePrev} disabled={flashcards.length <= 1}>
          <ChevronLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
        <span className="text-sm text-muted-foreground">
          {currentIndex + 1} / {flashcards.length}
        </span>
        <Button variant="outline" onClick={handleNext} disabled={flashcards.length <= 1}>
          Next
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
