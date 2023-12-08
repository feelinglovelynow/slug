/**
 * Helper function to create a slug (does not require Svelte)
 * @param { string } value - The value you'd love turned into a slug
 * @returns { string }
 */
export function slug (value) {
  let response = ''

  if (value && typeof value === 'string') {
    response = value
      .toLowerCase() // Lowercase all letters
      .replace(/[^a-z0-9\s]/g, '') // Remove anything that is not a space, a-z, or 0-9
      .trim() // Remove space at end and beginning
      .replace(/\s{2,}/g, ' ') // IF two or more spaces found next to each other, convert to one space
      .replace(/\s/g, '-') // Convert spaces to dashes
  }

  return response
}
