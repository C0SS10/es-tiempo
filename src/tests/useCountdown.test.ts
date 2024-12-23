import { act, renderHook } from "@testing-library/react";
import { useCountdown } from "../hooks/useCountdown";
import { test, expect } from "vitest";

test("countdown should initialize with default time", () => {
  const { result } = renderHook(() => useCountdown());
  expect(result.current.time).toBe(0);
});

test("should add 8 minutes correctly", () => {
  const { result } = renderHook(() => useCountdown());
  act(() => result.current.addMinutes(8));
  expect(result.current.time).toBe(480);
});

test("should start countdown correctly", () => {
  const { result } = renderHook(() => useCountdown());
  act(() => result.current.addMinutes(1));
  act(() => result.current.resumeCountdown());
  expect(result.current.isRunning).toBe(true);
});
