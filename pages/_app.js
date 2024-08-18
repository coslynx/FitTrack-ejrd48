"use client";

import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth/react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background text-foreground",
          pathname.startsWith("/dashboard")
            ? "bg-dashboard"
            : pathname.startsWith("/goals")
            ? "bg-goals"
            : pathname.startsWith("/workouts")
            ? "bg-workouts"
            : pathname.startsWith("/social")
            ? "bg-social"
            : pathname.startsWith("/profile")
            ? "bg-profile"
            : null,
        )}
      >
        <SessionProvider session={session}>
          <ThemeProvider attribute="class" defaultTheme="system">
            <Toaster />
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}