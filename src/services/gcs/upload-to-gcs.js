import { bucket } from './gcs-client';

/**
 * Function that uploads a file to GCS bucket.
 *
 * @param {string} name - Saved name.
 * @param {Buffer} buffer - Object buffer.
 * @returns {Promise}
 */
export default async function uploadToGCS(name, buffer) {
  const file = bucket.file(name);

  await file.save(buffer);

  return file.makePublic();
}
