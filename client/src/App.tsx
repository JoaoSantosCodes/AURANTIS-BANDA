import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Lyrics from "./pages/Lyrics";
import { useEffect, useRef } from "react";

function useRevealObserver() {
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    const els = root.querySelectorAll(".reveal");
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return rootRef;
}

function AppShell() {
  const rootRef = useRevealObserver();
  return (
    <div ref={rootRef} className="grain min-h-screen">
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/letras"} component={Lyrics} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster
            position="bottom-center"
            toastOptions={{
              style: {
                background: "oklch(0.19 0.035 255)",
                color: "oklch(0.93 0.03 85)",
                border: "1px solid oklch(0.45 0.045 250 / 45%)",
                fontFamily: "var(--font-sans)",
              },
            }}
          />
          <AppShell />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
