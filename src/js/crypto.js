import { randomBytes as rb } from 'crypto';

export function randomBytes(size) {
  return rb(size);
}
