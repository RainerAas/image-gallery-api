export const ALLOWED_IMAGE_TYPES = ['image/png', 'image/jpeg', 'image/webp'];
export const MAX_IMAGE_SIZE_BYTES = 10 * 1024 ** 2;

// See https://sharp.pixelplumbing.com/api-output for further explanations and options
export const OPTIMIZATIONS = {
  jpeg: { quality: 50 },
  webp: { quality: 50 },
  png: { compressionLevel: 6, adaptiveFiltering: true },
};
