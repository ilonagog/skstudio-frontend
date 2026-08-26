import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Unmount anything rendered in a test so the next test starts from a clean DOM.
afterEach(() => {
  cleanup();
});
