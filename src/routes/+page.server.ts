import { db } from '$lib/server/db/db';
import { asc } from 'drizzle-orm';
import type { Actions, PageServerLoad } from './$types';
import { usersTable } from '$lib/server/db/schema';

export const load: PageServerLoad = async () => {
	const users = await db.query.usersTable.findMany({
		orderBy: [asc(usersTable.id)],
		with: {
			posts: true
		}
	});

	return { users };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const username = String(data.get('username'));
		// const admin = Boolean(data.get('admin'));
		const admin = JSON.parse(String(data.get('admin')).toLowerCase());

		// console.log(data); //output to cli
		 console.log(admin); //output to cli

		await db.insert(usersTable).values({
			username,
			admin
		});
	}
}
