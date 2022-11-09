<template>
  <div class="card" style="width: 18rem; text-align: start">
    <div class="card-body">
      <h5 class="card-title">{{ this.datas.title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ this.datas.subtitle }}</h6>
      <p class="card-text">
        {{ this.datas.content }}
      </p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  props: ["datas"],
  mounted() {
    console.log(this.datas);
  },
};
</script>
