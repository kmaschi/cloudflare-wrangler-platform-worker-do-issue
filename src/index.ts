import { DurableObject } from 'cloudflare:workers';

export class ExampleDurableObject extends DurableObject {
	constructor(state: DurableObjectState, env: unknown) {
		super(state, env);
	}
}

export default {
	/**
	 * Fetch.
	 * @param request Request.
	 * @param env Environment.
	 * @param ctx Event context.
	 */
	async fetch(request: Request, env: unknown, ctx: EventContext<unknown, string, unknown>) {
		return new Response('OK', { status: 200});
	}
}