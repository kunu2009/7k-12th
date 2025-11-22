# Unified Study Hub

This is the unified application merging 7K-ECO, 7kpoliticalscience, 7K-Itihaas, and 7k-upsc.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3 + Shadcn UI
- **Backend/Auth:** Firebase
- **AI:** Genkit (Google AI / Gemini)
- **State Management:** React Context / Hooks (Zustand optional if needed)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   Create a `.env.local` file with the following keys:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=...
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
   NEXT_PUBLIC_FIREBASE_APP_ID=...
   GOOGLE_GENAI_API_KEY=...
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## Project Structure

- `src/app`: App Router pages and layouts
- `src/components`: Reusable UI components
  - `ui`: Shadcn UI primitives
  - `features`: Feature-specific components
  - `layout`: Layout components (Header, Sidebar, etc.)
- `src/features`: Feature logic (hooks, services)
- `src/lib`: Utilities and configurations (Firebase, Genkit)
- `src/types`: TypeScript definitions
- `src/data`: Static data (migrated from original repos)

## Next Steps

- Migrate components from original repositories.
- Implement Authentication.
- Build the Dashboard.
