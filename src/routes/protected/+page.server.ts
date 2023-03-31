import { getContext } from 'svelte';

export async function load ()
{
  const session = getContext('session');  
  if (!session?.user) {
    return {
      status: 302,
      redirect: '/sign-in',
    };
  }
  return {
    props: {
      user: session.user,
    },
  };
}