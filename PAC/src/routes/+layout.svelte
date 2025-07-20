<script lang="ts">
  import ServerList from "$lib/ServerList.svelte";
  import TopBar from "../lib/TopBar.svelte";
  import FriendList from "$lib/FriendList.svelte";
  import ChatWindow from "$lib/ChatWindow.svelte";
  import RightSideBar from "$lib/RightSideBar.svelte";
  import { window } from "@tauri-apps/api";
  import { onMount } from 'svelte';

  let isApp = false;

  onMount(() => {
    if ('__TAURI_IPC__' in window || navigator.userAgent.includes('Tauri')) {
      isApp = true;
    }
  })

</script>

<div id="app">
  {#if isApp == false}
    <TopBar />
  {/if}
  <div class="app-body">
    <div class="sidebar-container">
      <ServerList />
      <FriendList />
    </div>
    <ChatWindow />
    <RightSideBar />
  </div>
</div>


<slot />