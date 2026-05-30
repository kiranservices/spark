import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center bg-background pt-24">
      <div className="container max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-corporate">404</p>
        <h1 className="mt-3 text-3xl font-bold text-navy dark:text-white">Page not found</h1>
        <p className="mt-4 leading-7 text-muted-foreground">
          The page you are looking for is unavailable or has moved.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </main>
  );
}
