<script lang="ts">
  import ServerList from "$lib/ServerList.svelte";
  import TopBar from "../lib/TopBar.svelte";
  import FriendList from "$lib/FriendList.svelte";
</script>

<TopBar />
<div class="sidebar-container">
  <ServerList />
  <FriendList />
</div>

<slot />