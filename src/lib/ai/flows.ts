import { ai } from './config';
import { z } from 'zod';

export const generateSummaryFlow = ai.defineFlow(
  {
    name: 'generateSummary',
    inputSchema: z.object({
      text: z.string(),
    }),
    outputSchema: z.object({
      summary: z.string(),
    }),
  },
  async (input) => {
    const { text } = input;
    const prompt = `Summarize the following text:\n\n${text}`;
    const result = await ai.generate(prompt);
    return { summary: result.text };
  }
);
