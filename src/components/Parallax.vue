<template>
  <div class="hello">
    <!-- card 1 -->
    <div
      data-aos="zoom-in"
      class="card"
      style="width: 18rem; margin: 100px auto"
    >
      <img
        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card 1</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>

    <!-- card 2 -->
    <div
      data-aos="new-animation"
      data-aos-offset="200"
      data-aos-easing="ease-in-out"
      class="card"
      style="width: 18rem; margin: 200px auto"
    >
      <img
        src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card 2</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>

    <!-- card  3-->
    <div
      data-aos="fade-right"
      class="card"
      style="max-width: 18rem; margin: 200px auto"
    >
      <img
        src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card 3</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>

    <!-- card 4 -->
    <div
      data-aos="fade-left"
      class="card"
      style="width: 18rem; margin: 200px auto"
    >
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card 4</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <!-- card 5 -->
    <div
      data-aos="flip-left"
      class="card"
      style="width: 18rem; margin: 200px auto"
    >
      <img
        src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card 5</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
export default {
  data: () => ({
    offsetTop: 0,
    background: null,
    scale: 1.5,
    minScale: 1.5,
    maxScale: 3,
  }),

  mounted() {
    // this.background = document.getElementById("scroll-target");
    // this.background.style.transform = "scale(" + this.scale + ")";
    AOS.init();
  },

  methods: {
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;

      if (e.target.scrollTop <= 100) {
        this.scale = this.scale + e.target.scrollTop / 200;
        if (this.scale <= this.minScale) {
          this.scale = this.minScale;
          return;
        }
        let backgroundSize = this.scale;
        this.background.style.transform = "scale(" + backgroundSize / 1.1 + ")";
      }

      if (e.target.scrollTop > 100) {
        this.scale = this.scale + e.target.scrollTop / 200;
        if (this.scale >= this.maxScale) {
          this.scale = this.maxScale;
          return;
        }
        let backgroundSize = this.scale;
        this.background.style.transform = "scale(" + backgroundSize / 1.1 + ")";
      }
    },
  },
};
</script>
