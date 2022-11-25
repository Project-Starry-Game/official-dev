<template>
  <v-container>
    <div class="box1">
        <a class="scroll-btnyy" href="#box2id"></a>
    </div>
    <div class="box2" id="box2id"></div>
  </v-container>
</template>

<script>
export default {
data() {
    return {
    };
  },
}
</script>

<style>
html{
    scroll-behavior: smooth;
}

.box1{
    position: relative;
    height: 100vh;
    background-color: rgb(157, 157, 157);
    display: flex;
    justify-content: center;
}
.box2{
    min-height: 100vh;
    background-color: rgb(134, 0, 0);
}

.scroll-btnyy{
    position: absolute;
    bottom: 10%;
    width: 1rem;
    height: 1rem;
    background-color: rgb(255, 255, 100);

    border-radius: 50%;
}
</style>