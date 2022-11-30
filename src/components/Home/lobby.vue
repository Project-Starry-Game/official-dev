<template>
  <div id="canvas_block" style="relative">
    <div style="position: relative; margin-bottom: -10px">
      <canvas id="lobbyCanvasBK" class="lobbyCanvasBK"></canvas>
      <canvas id="lobbyCanvasDot" class="overlayCanvas"></canvas>
      <canvas id="lobbyCanvas" class="overlayCanvas"></canvas>
    </div>
  </div>
</template>

<script setup lang="ts">
import lobbySprite from "../../assets/lobby/mainLobby.png";
import lightSprite from "../../assets/lobby/light.png";
import light1 from "../../assets/lobby/Lobby_LightSpot01.png";
import light2 from "../../assets/lobby/Lobby_LightSpot02.png";
import light3 from "../../assets/lobby/Lobby_LightSpot03.png";
</script>

<script lang="ts">
import { defineComponent, onMounted, nextTick } from "vue";
import { oninitCanvas } from "@/apis/lobbyDrawing";
export default defineComponent({
  name: "Lobby",
  props: {},
  mounted() {
    oninitCanvas(lobbySprite, lightSprite, light1, light2, light3);
  },
});
</script>
<style>
.lobby_block {
  position: relative;
}
.canvas_block {
  margin-bottom: -10px;
}
.overlayCanvas {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
