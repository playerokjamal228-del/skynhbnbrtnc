"use client";

import { useEffect, useState, type RefObject } from "react";

export function useActiveFloor(
  initialFloor = "350",
  focusRatio = 0.4,
  scopeRef?: RefObject<HTMLElement | null>
) {
  const [activeFloor, setActiveFloor] = useState<string | null>(initialFloor);

  useEffect(() => {
    const updateActiveFloor = () => {
      const root = scopeRef?.current;
      const sections = Array.from(
        (root ?? document).querySelectorAll<HTMLElement>("[data-floor]")
      );
      if (sections.length === 0) return;

      const focusLine = window.innerHeight * focusRatio;

      const bestMatch = sections
        .map((section) => {
          const rect = section.getBoundingClientRect();
          const floor = section.getAttribute("data-floor");

          if (!floor) return null;

          const containsFocusLine = rect.top <= focusLine && rect.bottom >= focusLine;
          const distanceToFocusLine = containsFocusLine
            ? 0
            : Math.min(Math.abs(rect.top - focusLine), Math.abs(rect.bottom - focusLine));

          return {
            floor,
            distanceToFocusLine,
            topDistance: Math.abs(rect.top - focusLine),
          };
        })
        .filter((section): section is { floor: string; distanceToFocusLine: number; topDistance: number } => section !== null)
        .sort((left, right) => {
          if (left.distanceToFocusLine !== right.distanceToFocusLine) {
            return left.distanceToFocusLine - right.distanceToFocusLine;
          }

          return left.topDistance - right.topDistance;
        })[0];

      if (bestMatch) {
        setActiveFloor((currentFloor) =>
          currentFloor === bestMatch.floor ? currentFloor : bestMatch.floor
        );
      }
    };

    updateActiveFloor();
    window.addEventListener("scroll", updateActiveFloor, { passive: true });
    window.addEventListener("resize", updateActiveFloor);
    window.addEventListener("hashchange", updateActiveFloor);

    return () => {
      window.removeEventListener("scroll", updateActiveFloor);
      window.removeEventListener("resize", updateActiveFloor);
      window.removeEventListener("hashchange", updateActiveFloor);
    };
  }, [focusRatio, initialFloor, scopeRef]);

  return activeFloor;
}
