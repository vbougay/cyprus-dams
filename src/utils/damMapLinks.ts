// Google Maps links for all Cyprus dams/reservoirs.
// Uses well-defined place URLs where available, falls back to coordinate-based URLs.

// Coordinates sourced from Wikidata / Cyprus Water Development Department where available
const reservoirCoordinates: Record<string, { lat: number; lng: number }> = {
  'Kouris': { lat: 34.7233, lng: 32.9175 },
  'Kalavasos': { lat: 34.8005, lng: 33.2600 },
  'Lefkara': { lat: 34.8937, lng: 33.2932 },
  'Dipotamos': { lat: 34.8130, lng: 33.2450 },
  'Germasoyeia': { lat: 34.74381, lng: 33.07079 },
  'Arminou': { lat: 34.8773, lng: 32.7378 },
  'Polemidia': { lat: 34.71862, lng: 32.97673 },
  'Achna': { lat: 35.0533, lng: 33.8115 },
  'Asprokremmos': { lat: 34.7414, lng: 32.56108 },
  'Kannaviou': { lat: 34.9275, lng: 32.5879 },
  'Mavrokolympos': { lat: 34.8561, lng: 32.4056 },
  'Evretou': { lat: 34.9757, lng: 32.4730 },
  'Argaka': { lat: 35.04867, lng: 32.50222 },
  'Pomos': { lat: 35.140556, lng: 32.578611 },
  'Agia Marina': { lat: 35.1172, lng: 32.5416 },
  'Vyzakia': { lat: 35.0619, lng: 33.0290 },
  'Xyliatos': { lat: 35.0089, lng: 33.0372 },
  'Kalopanagiotis': { lat: 35.0043, lng: 32.8260 },
  'Tamassos': { lat: 35.0140, lng: 33.2478 },
  'Klirou-Malounta': { lat: 35.0297, lng: 33.1689 },
  'Solea': { lat: 35.0668, lng: 32.9029 },
};

// Well-defined Google Maps place links (manually verified)
const knownPlaceLinks: Record<string, string> = {
  'Kouris': 'https://maps.app.goo.gl/wT8TWwL7sJLgyU1D8',
  'Kalavasos': 'https://maps.app.goo.gl/Z5nR3pYcP2AQLdWc8',
  'Lefkara': 'https://maps.app.goo.gl/Y81ouasPxKHTpg3W6',
  'Dipotamos': 'https://maps.app.goo.gl/6DKCwSJpdvt11cTUA',
  'Germasoyeia': 'https://maps.app.goo.gl/cFbFadBSUfhXzRG27',
  'Arminou': 'https://maps.app.goo.gl/bxdJt3RnS7P5UCsKA',
  'Polemidia': 'https://maps.app.goo.gl/j2zMGazgC3LxpeBY8',
  'Achna': 'https://maps.app.goo.gl/f8XsmYsD8wCtuzrp9',
  'Asprokremmos': 'https://maps.app.goo.gl/JCxUEjWMnP28ANZr7',
  'Kannaviou': 'https://maps.app.goo.gl/iw2tTmYBAgWJX5nA6',
  'Mavrokolympos': 'https://maps.app.goo.gl/pCrQbMDQ8dUkxtDt6',
  'Evretou': 'https://maps.app.goo.gl/NAvopj1fiEreQ2Uk9',
  'Argaka': 'https://maps.app.goo.gl/Ztbvoh2zwEErTgyx9',
  'Pomos': 'https://maps.app.goo.gl/c6sxciT8MpzTQ5YD7',
  'Agia Marina': 'https://maps.app.goo.gl/a3rfGV2G42SUkErw5',
  'Vyzakia': 'https://maps.app.goo.gl/19whFDKW2KeRdr6SA',
  'Xyliatos': 'https://maps.app.goo.gl/gfWUgGzQdwLu4Nsh7',
  'Kalopanagiotis': 'https://maps.app.goo.gl/DAqbR6qk6Y4vZC62A',
  'Tamassos': 'https://maps.app.goo.gl/8nMMCeDTV3pBNzt68',
  'Klirou-Malounta': 'https://maps.app.goo.gl/tpQ966G2NmfiAi8X9',
};

/**
 * Get a Google Maps URL for a dam by name.
 * Returns a well-defined place link if available, otherwise a coordinate-based URL.
 */
/** Get a dam's coordinates by display name (used for structured data). */
export function getDamCoordinates(damName: string): { lat: number; lng: number } | undefined {
  return reservoirCoordinates[damName];
}

export function getDamMapUrl(damName: string): string | undefined {
  if (knownPlaceLinks[damName]) {
    return knownPlaceLinks[damName];
  }
  const coords = reservoirCoordinates[damName];
  if (!coords) return undefined;
  return `https://www.google.com/maps/search/?api=1&query=${coords.lat},${coords.lng}`;
}
