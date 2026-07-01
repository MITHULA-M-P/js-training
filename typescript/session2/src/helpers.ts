export function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/\s+/g, "-");
}

export function truncate(
    text: string,
    maxLength: number
): string {

    if (text.length <= maxLength) {
        return text;
    }

    return text.slice(0, maxLength) + "...";
}

/*
A .d.ts file provides type information for JavaScript code
without containing the implementation.

It helps TypeScript understand existing JS libraries during migration.
*/