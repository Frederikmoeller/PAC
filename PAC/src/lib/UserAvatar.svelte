<script lang="ts">
  export let name: string;
  export let avatar: string | null = null;
  export let status: 'online' | 'offline' | 'away' | 'busy' = 'offline';

  // Random color generator from username
  function generateColor(name: string) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = `hsl(${hash % 360}, 60%, 50%)`;
    return color;
  }

  function getInitials(name: string) {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  }
</script>

<div class="friend-avatar">
  {#if avatar}
    <img src={avatar} alt={name} />
  {:else}
    <div
      class="avatar-fallback"
      style="background-color: {generateColor(name)}"
    >
      {getInitials(name)}
    </div>
  {/if}
  <span class={`status-indicator ${status}`}></span>
</div>
