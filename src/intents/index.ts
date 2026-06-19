import { Intent } from "../types/intents.js"
import { goodbyeIntents } from "./goodbye.js"
import { greetingIntents } from "./greetings.js"

export const intents: Intent[] = [...greetingIntents, ...goodbyeIntents]
