<script lang="ts">
  export let type: "dm" | "server" | null = null;
  export let friend: { name: string; avatar?: string; status?: string } | null = null;
  export let serverUsers: { name: string }[] = [];

  // Utility functions
  function GetInitials(name: string) {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  }

  function GenerateColor(name: string) {
    // Simple deterministic color generator based on name
    const hash = [...name].reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const hue = hash % 360;
    return `hsl(${hue}, 60%, 50%)`;
  }
</script>

{#if type === "dm" && friend}
  <div class="rightsidebar">
    <div class="profile-images">
      <div
        class="profile-banner"
        style="background-color: {GenerateColor(friend.name)}"
      ></div>

      <UserAvatar name={friend.name} avatar={friend.avatar} status={friend.status ?? 'offline'} />
      <h3>{friend.name}</h3>
    </div>
  </div>

{:else if type === "server"}
  <div class="rightsidebar">
    <h3>Server Members</h3>
    <ul>
      {#each serverUsers as user}
        <li>{user.name}</li>
      {/each}
    </ul>
  </div>
{/if}