"use client";

import { AlertTriangle, RefreshCcw } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="flex min-h-screen items-center bg-background pt-24">
      <div className="container max-w-2xl text-center">
        <AlertTriangle className="mx-auto mb-6 size-12 text-corporate" />
        <h1 className="text-3xl font-bold text-navy dark:text-white">Something went wrong</h1>
        <p className="mt-4 leading-7 text-muted-foreground">
          The page could not load correctly. Please try refreshing the experience.
        </p>
        <Button className="mt-8" onClick={reset}>
          <RefreshCcw />
          Try Again
        </Button>
      </div>
    </main>
  );
}

