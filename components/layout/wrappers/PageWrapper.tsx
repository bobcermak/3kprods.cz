"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  //Hooks
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(() => {
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || !href.includes("#")) return;
      const [path, hash] = href.split("#");
      if ((path === "" || path === pathname) && hash) {
          const targetElem = document.getElementById(hash);
          if (targetElem) {
              e.preventDefault();
              lenis.scrollTo(targetElem, {
                  offset: -80,
                  duration: 1.5,
                  lock: true
              });
          }
      }
    };
    document.addEventListener("click", handleLinkClick);
    const heroTl = gsap.timeline({ defaults: { ease: "power2.easeInOut" } });
    heroTl.fromTo(".anim-hero-text", { y: 60, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1, stagger: 0.15, delay: 0.2 });
    heroTl.fromTo(".anim-hero-btn", { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)" }, "-=0.6");
    heroTl.fromTo(".anim-hero-card", { x: 60, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 1.2 }, "<");
    gsap.fromTo(".anim-services-header", { y: 40, autoAlpha: 0 }, { scrollTrigger: { trigger: ".anim-services-header", start: "top 85%" }, y: 0, autoAlpha: 1, duration: 0.8 });
    gsap.fromTo(".anim-services-item", { y: 40, autoAlpha: 0 }, { scrollTrigger: { trigger: "#services", start: "top 75%" }, y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" });
    gsap.fromTo(".anim-services-img", { scale: 0.9, autoAlpha: 0 }, { scrollTrigger: { trigger: ".anim-services-img", start: "top 80%" }, scale: 1, autoAlpha: 1, duration: 1, ease: "expo.out" });
    gsap.fromTo(".anim-reviews-left", { x: -50, autoAlpha: 0 }, { scrollTrigger: { trigger: "#reviews", start: "top 80%" }, x: 0, autoAlpha: 1, duration: 1, ease: "power2.out" });
    gsap.fromTo(".anim-reviews-img", { scale: 0.9, autoAlpha: 0 }, { scrollTrigger: { trigger: "#reviews", start: "top 80%" }, scale: 1, autoAlpha: 1, duration: 1.2, ease: "power2.out", delay: 0.2 });
    ScrollTrigger.refresh();
    setTimeout(() => ScrollTrigger.refresh(), 100);
    return () => {
      document.removeEventListener("click", handleLinkClick);
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, { scope: wrapperRef, dependencies: [pathname] });
  return (
    <div ref={wrapperRef}>
      {children}
    </div>
  );
};