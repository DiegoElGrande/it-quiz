/**
 * Удаляет markdown разметку из кода (```language и ```)
 */
export function cleanCodeSnippet(codeSnippet: string): string {
  return codeSnippet
    .replace(/```[\w]*\n?/g, '')
    .replace(/```$/g, '')
    .trim();
}

