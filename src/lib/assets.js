// Resolves files in /public against Vite's base path (works on sub-paths too).
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
