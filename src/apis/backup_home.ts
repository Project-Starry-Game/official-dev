<script setup lang="ts">
import trailer from "@/components/Home/trailer.vue";
import lobby from "@/components/Home/lobby.vue";
import gameIntro from "@/components/Home/gameIntro.vue";
import itchPage from "@/components/Home/itchPage.vue";
import homenavbar from "@/components/Home/navbar2col.vue";
import homebg from "@/components/Home/homeBG.vue";

import bk from "@/assets/background.png";
import $ from "jquery";

import barLogoImage from "../assets/Icon.png";
import eye from "../assets/Reincarnate_Cover.png";
import eyeball from "../assets/Reincarnate_Eyeball.png";
</script>


<script lang="ts">
export default {
  data() {
    return {
      ableToTransisit: true,
      nav: [
        { name: "Trailer", id: "trailer_pos", fade: true },
        { name: "Lobby", id: "goDowntoLobby", fade: false },
        { name: "Intro", id: "gameIntro_pos", fade: false },
      ],
      elements: [],
      scrollTop: null,
      eyeballImage: null,
      eyeImage: null,
      trailerImage: null,
      offsetTop: 0,
    };
  },
  methods: {
    reportWindowSize() {
      location.reload();
    },
    onPageChanged(ele: any) {
      let body = document.body;
      if (ele != null) {
        let id = ele.id;
        let fade = ele.fade;
        if (fade == true) {
          if (this.ableToTransisit == false) return;
          this.ableToTransisit = false;
          body.classList.add("fading");
          setTimeout(() => {
            body.classList.remove("fading");
            this.ableToTransisit = true;
          }, 2000);

          let offset = document.getElementById(id).getBoundingClientRect();
          $("html, body").animate(
            {
              scrollTop: offset.top,
            },
            500
          );
        } else {
          if (this.ableToTransisit == false) return;
          this.ableToTransisit = false;

          body.classList.add("fadingShort");
          setTimeout(() => {
            body.classList.remove("fadingShort");
            this.ableToTransisit = true;
          }, 500);

          let offset = document.getElementById(id).getBoundingClientRect();
          console.log(id, document.getElementById(id));
          document.getElementById("scroll-target-page").scrollTop = offset.top;
          console.log(document.getElementById("scroll-target-page").scrollTop);
        }
      } else {
        if (this.ableToTransisit == false) return;
        this.ableToTransisit = false;
        body.classList.add("fadingLong");
        setTimeout(() => {
          body.classList.remove("fadingLong");
          this.ableToTransisit = true;
        }, 5000);
      }
    },
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;
    },
  },
  mounted() {
    window.onresize = this.reportWindowSize;
    // this.onPageChanged();

    this.nav.map((obj) => {
      let id = obj.id;
      this.elements.push(document.getElementById(id));
    });

    this.scrollTop = document.getElementById("scroll-target-page");

    this.eyeballImage = eyeball;
    this.eyeImage = eye;
    this.trailerImage = barLogoImage;
  },
  computed: {
    getImg() {
      let _imgs = [];
      let currentPage = 0;
      let index = 0;

      this.elements.map((obj) => {
        if (index > 0) {
          let offset = obj.getBoundingClientRect().top;
          if (offset <= 1) currentPage = index;
          console.log("index", index, "offset", offset, this.offsetTop);
        }
        index++;
      });

      index = 0;
      this.elements.map((obj) => {
        if (index == 0) _imgs.push(this.trailerImage);
        if (index > 0)
          _imgs.push(index == currentPage ? this.eyeballImage : this.eyeImage);
        index++;
      });

      console.log(_imgs);
      _imgs.push(eye);
      return _imgs;
    },
  },
};
</script>

<style>
.home {
  height: auto;
  width: auto;
}
.scroll_view {
  position: relative;
}
</style>
