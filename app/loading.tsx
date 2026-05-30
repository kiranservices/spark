export default function Loading() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <div className="container grid gap-6 py-16">
        <div className="h-8 w-56 animate-pulse rounded-md bg-muted" />
        <div className="h-16 max-w-3xl animate-pulse rounded-md bg-muted" />
        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="h-40 animate-pulse rounded-lg bg-muted" />
          ))}
        </div>
      </div>
    </main>
  );
}

