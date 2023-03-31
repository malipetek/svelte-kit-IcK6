<script lang="ts">
	import type { PageData } from "./$types";

	export let user: PageData;

	// import { session } from '$app/stores';
	// $session.user;
</script>

<h1 class="text-2xl font-semibold text-center">Hi! You are registered with email {user?.email}.</h1>
