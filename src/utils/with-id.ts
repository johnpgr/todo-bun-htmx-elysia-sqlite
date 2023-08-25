import { nanoid } from "nanoid"

export function withId<T>(data: T) {
  return { ...data, id: nanoid() }
}
