"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
const ANCHOR_OFFSET = -80;
export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  //Hooks
  const wrapperRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const pathnameRef = useRef<string>("");
  const isFirstRender = useRef<boolean>(true);
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });
    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    const handleLinkClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a");
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || !href.includes("#")) return;
      const [path, hash] = href.split("#");
      if (!hash || (path !== "" && path !== pathnameRef.current)) return;
      const targetElem = document.getElementById(hash);
      if (!targetElem) return;
      e.preventDefault();
      lenis.scrollTo(targetElem, {
        offset: ANCHOR_OFFSET,
        duration: 1.5,
        lock: true
      });
    };
    document.addEventListener("click", handleLinkClick);
    return () => {
      document.removeEventListener("click", handleLinkClick);
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);
  useEffect(() => {
    pathnameRef.current = pathname;
    const lenis = lenisRef.current;
    if (isFirstRender.current) isFirstRender.current = false;
    else if (lenis) {
      ScrollTrigger.clearScrollMemory();
      const hash = window.location.hash.slice(1);
      const anchor = hash ? document.getElementById(hash) : null;
      if (anchor) lenis.scrollTo(anchor, { offset: ANCHOR_OFFSET, immediate: true, force: true });
      else lenis.scrollTo(0, { immediate: true, force: true });
      ScrollTrigger.update();
    }
    const refresh = () => ScrollTrigger.refresh();
    refresh();
    const timers: ReturnType<typeof setTimeout>[] = [setTimeout(refresh, 500), setTimeout(refresh, 2000)];
    window.addEventListener("load", refresh);
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("load", refresh);
    };
  }, [pathname]);
  return (
    <div ref={wrapperRef}>
      {children}
    </div>
  );
};