// place files you want to import through the `$lib` alias in this folder.
import 'dotenv/config';
import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';

export const client = createClient({
	url: process.env.DB_URL!,
	authToken: process.env.DB_TOKEN
});

export const db = drizzle(client, { schema });
