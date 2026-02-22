import Link from "next/link";
import { Droplets, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 mesh-background">
      <div className="text-center glass-card p-8 md:p-12 rounded-2xl max-w-md mx-4">
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-water-400/20 dark:bg-water-400/30 blur-xl rounded-full"></div>
          <Droplets className="relative w-16 h-16 text-water-500 dark:text-water-400 animate-float" />
        </div>
        <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Oops! Page not found
        </p>
        <Button
          asChild
          className="gradient-bg hover:opacity-90 transition-opacity rounded-xl"
        >
          <Link href="/" className="flex items-center gap-2">
            <Home className="w-4 h-4" />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
