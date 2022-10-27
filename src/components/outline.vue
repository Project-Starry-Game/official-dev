<template>
    <div class="outline_container">
      <div class="rect"></div>
      <v-img  class="bear bear_body" ref="bear_body" src="@/assets/Carpet_TeddyBody.png" />
      <v-img  class="bear bear_head" ref="bear_head" src="@/assets/Carpet_TeddyHead.png" />
    </div>
</template>

<script>
export default {

}
</script>

<style>
img.bear_head{
  text-align: right;
  
}
.outline_container{
  width: 100vw;
  height: 100vh;
  background: #9C8C83;
}
</style>