<script lang="ts">
    import Icon from "@iconify/svelte";

</script>
<div class="chat-panel">
<div class="infobar">
    <div class="infobar-left">
        <span># General</span>
    </div>
    <div class="infobar-right">
        <button class="infobar-button"><Icon icon="mdi:call"></Icon></button>
        <button class="infobar-button"><Icon icon="mdi:pin"></Icon></button>
        <button class="infobar-button"><Icon icon="mdi:person-card-details"></Icon></button>
    </div>
    </div>
    <div class="chatwindow">
 message    
    </div>
    <div class="inputbox">
        <button class="infobar-button"><Icon icon="mdi:add-circle"></Icon></button>
        <input type="text" placeholder="Message ">
        <button class="infobar-button"><Icon icon="mdi:emoji"></Icon></button>
    </div>
</div>
