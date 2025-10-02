export default function Loading() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <p className="text-lg text-foreground/80 flex items-center gap-2 animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  )
}
