<template>
  <div class="members">
      <desktop class="hidden-sm-and-down" :members="members" :members_2="members_2" />
      <phone class="hidden-md-and-up" :members="members"/>
  </div>

</template>

<script setup lang="ts">
import desktop from "./members/desktop.vue";
import phone from "./members/phone.vue";

import mimi_4 from "../../assets/members/mimi_4.png";
import a2 from "../../assets/members/attitute.png";

import mimi_3 from "../../assets/members/mimi_3.png";

// import mimi_5 from "../../assets/members/mimi_5.png";
</script>

<script lang="ts">
export default {
  data(){
    return{
      members:[
      {
        src: a2,
      },
      {
        src: a2,
      },
      {
        src: a2,
      },
      {
        src: mimi_4,
      },
      {
        src: a2,
      },
      {
        src: a2,
      },
      {
        src: a2,
      },
      
      ],
      // members_2:[
      // {
      //   src: mimi_4,
      // },
      // {
      //   src: mimi_4,
      // },

      // ]

    }
  }
}
</script>