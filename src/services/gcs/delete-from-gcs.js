import { bucket } from './gcs-client';

/**
 * Function that deletes a file from GCS bucket.
 *
 * @param {string} name - Name of file to be deleted from bucket.
 * @returns {Promise}
 */
export default async function deleteFromGCS(name) {
  const file = bucket.file(name);

  return file.delete();
}
