// import helpers auth module and define svelte kit actions to call signin form submit event

import { auth } from '$lib/helpers/auth.server';
import { goto } from '$app/navigation';
import { getContext } from 'svelte';

const session = getContext('session');

export const actions = {
  async default ({ request })
  {
    const formData = await request.formData();
    const { email, password } = Object.fromEntries(formData.entries());

    const session = await auth.login({ email, password });

    console.log('auth login session: ', session);
    if (session)
    {
        goto('login');
    }
  }
};
