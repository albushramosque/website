/**
 * Iqamah times for Al-Bushra Mosque, Dedham, MA
 * These are the congregation prayer start times (after the Adhan).
 * Update these values as needed by the mosque administration.
 */

export interface IqamahTime {
  name: string;
  time: string; // 24-hour format HH:MM
  label: string;
}

export interface IqamahSchedule {
  fajr: string;
  dhuhr: string;
  asr: string;
  maghrib: string; // Usually "X minutes after Adhan"
  isha: string;
}

/**
 * Static Iqamah times - update these as the mosque schedule changes.
 * Maghrib Iqamah is typically dynamic (e.g., 5-10 minutes after Adhan).
 */
export const IQAMAH_TIMES: IqamahSchedule = {
  fajr: "06:15",
  dhuhr: "13:15",
  asr: "",
  maghrib: "",
  isha: "20:00",
};

/**
 * Minutes after Maghrib Adhan for Iqamah
 */
export const MAGHRIB_IQAMAH_DELAY_MINUTES = 10;

/**
 * Prayer names for display
 */
export const PRAYER_NAMES = {
  fajr: "Fajr",
  sunrise: "Sunrise",
  dhuhr: "Dhuhr",
  asr: "Asr",
  maghrib: "Maghrib",
  isha: "Isha",
} as const;

export type PrayerName = keyof typeof PRAYER_NAMES;
