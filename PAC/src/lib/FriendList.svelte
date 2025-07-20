<script lang="ts">
    import Icon from "@iconify/svelte";
    import { onMount } from "svelte";
    
    interface Friend {
        name: string;
        avatar?: string;
        status: "online" | "offline" | "busy" | "away";
    }

    let friends: Friend[] = [];
    let loading = true;
    let error: string | null = null;
    let searchQuery = "";

    function GenerateColor(name: string): string {
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
        const hue = hash % 360;
        return `hsl(${hue}, 50%, 60%)`;
    }

    function GetInitials(name: string) {
        return name.split(" ").map(n => n[0]).join("").toUpperCase();
    }

    $: filteredFriends = friends.filter(friend => friend.name.toLowerCase().includes(searchQuery.toLowerCase()));

    onMount(async () => {
        try {
            /*
            const res = await fetch("/api/friends");

            if (!res.ok) throw new Error("Failed to load friends");
            
            const data = await res.json();

            friends = data as Friend[];
            */

                  // Simulate server delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Temporary mock data
    friends = [
      { name: "Alice Johnson", status: "online" },
      { name: "Bob", status: "offline" },
      { name: "Charlie Doe", status: "busy" }
    ];
        }
        catch (err) {
            error = err instanceof Error ? err.message : "Unknown error";
        } finally {
            loading = false;
        }
    });

    
</script>

<div class="friendlist">
    <div class="friendlist-header">
        <input type="text" class="friendlist-search" placeholder="Search or start a chat..." bind:value={searchQuery} />
    </div>
     <div class="friendlist-content">
    {#if loading}
      <p>Loading...</p>
    {:else}
      {#each filteredFriends as friend}
        <button class="friend-entry">
            <div class="friend-avatar">
                {#if friend.avatar}
                    <img src={friend.avatar} alt={friend.name} />
                {:else}
                    <div
                        class="avatar-fallback"
                        style="background-color: {GenerateColor(friend.name)}"
                    >
                    {GetInitials(friend.name)}
                    </div>
                    {/if}
                    <span class={`status-indicator ${friend.status}`}></span>
            </div>
            <span class="friend-name">{friend.name}</span>
        </button>
      {/each}
    {/if}
  </div>
</div>