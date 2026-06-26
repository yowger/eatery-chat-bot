import { NlpResult } from "node-nlp"

export const getEntity = (result: NlpResult, entity: string) =>
    result.entities.find((e) => e.entity === entity)?.option
