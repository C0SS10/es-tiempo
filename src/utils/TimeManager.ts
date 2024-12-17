export function formatTime(time: number): string {
  const days = Math.floor(time / 86400)
    .toString()
    .padStart(2, "0");
  const hours = Math.floor((time % 86400) / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((time % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");
  return `${days}:${hours}:${minutes}:${seconds}`;
}
