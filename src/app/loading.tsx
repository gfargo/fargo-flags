export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-muted-foreground">Just a moment...</p>
      </div>
    </div>
  )
}