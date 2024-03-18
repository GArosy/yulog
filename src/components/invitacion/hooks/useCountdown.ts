import { ref } from "vue";
import dayjs from "dayjs";

export function useCountdown() {
  const date = dayjs("2024-04-27 12:00:00");
  const time = ref({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });

  setInterval(() => {
    time.value = {
      day: date.diff(dayjs(), "d"),
      hour: date.diff(dayjs(), "h") % 24,
      minute: date.diff(dayjs(), "m") % 60,
      second: date.diff(dayjs(), "s") % 60,
    };
  }, 1000);

  return { time };
}
