import React from 'react';

export default function HistoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto py-6 space-y-8">
      {children}
    </div>
  );
}
