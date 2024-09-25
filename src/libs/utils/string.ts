import { z } from 'zod';

export function httpUrlToWebSocketUrl(url: string) {
  return url.replace(/(http)(s)?:\/\//, 'ws$2://');
}

export const passwordZod = z
  .string()
  .min(8, 'Password must contain at least 8 character(s)')
  .regex(
    /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,}$/,
    'The password must have at least one digit, at least one lowercase, at least one uppercase, and at least one non-alphanumeric character.',
  );

export const capitalizeFirstLetter = (string: string) => {
  if (!string) {
    return 'Unknown';
  }
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};
