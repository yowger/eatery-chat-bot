export function generateExamples(
    values: string[],
    patterns: string[],
): string[] {
    return values.flatMap((value) =>
        patterns.map((pattern) => pattern.replace("{value}", value)),
    )
}
