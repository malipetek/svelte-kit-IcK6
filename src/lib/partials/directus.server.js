import { Directus } from '@directus/sdk';
import 'dotenv';

export default new Directus(import.meta.env.VITE_DIRECTUS_URL || '');

console.log('directus ', import.meta.env.VITE_DIRECTUS_URL);
