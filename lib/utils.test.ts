import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("joins class names", () => {
    expect(cn("p-4", "rounded-lg")).toBe("p-4 rounded-lg");
  });

  it("drops falsy values so conditional classes are safe", () => {
    expect(cn("p-4", false && "hidden", undefined, null)).toBe("p-4");
  });

  it("lets a later conflicting class win", () => {
    // This is the whole reason cn() exists: without tailwind-merge both
    // paddings survive and CSS source order decides, not the caller.
    expect(cn("p-4", "p-8")).toBe("p-8");
  });
});
