<template>
    <div class="timeline-container pa-0 ma-0" id="timeline-1">
        <!-- <div class="timeline-header">
            <h2 class="timeline-header_title">mmmmm</h2>
            <h3 class="timeline-header_subtitle">FATHER OF THE TURKS</h3>
        </div> -->
        <div 
            v-for="(item, index) in filteredEvents"
            :key="index"
            width="50%"
            height="50%"
            class="timeline"
        >
        <!-- <p>{{index}}</p> -->
          <div class="timeline-item" data-text="FATHER OF THE TURKS">
              <div class="timeline_content">
                  <v-img cover class="timeline_img" :width="imgs.width" :height="imgs.height" :src="items[item.id-1].src"></v-img>
                  <h2 class="timeline_content-title">{{ $t(items[item.id-1].title) }}</h2>
                  <p class="timeline_content-desc">{{ $t(items[item.id-1].content) }} </p>
         
              </div>
            </div>
            <div class="timeline-item" data-text="FATHER OF THE TURKS">
              <div class="timeline_content">
                  <v-img cover class="timeline_img" :width="imgs.width" :height="imgs.height" :src="items[item.id].src"></v-img>
                  <h2 clsass="timeline_content-title">{{ $t(items[item.id].title) }}</h2>
                  <p class="timeline_content-desc">{{ $t(items[item.id].content) }} </p>
              </div>
            </div>



              
            <!-- <div>{{ items.title }}</div> -->
            <!-- <div class="timeline-item" data-text="FATHER OF THE TURKS">
                <div class="timeline_content">
                    <v-img cover class="timeline_img" :src="item.src"></v-img>
                    <h2 class="timeline_content-title">{{ $t(items[2*i].title) }}</h2>
                    <p class="timeline_content-desc">{{ $t(items[2*i].content) }} </p>
                </div>
            </div> -->
      
        </div>
    </div>
  
</template>

<script lang="ts">
export default {
    props: ["items" , "imgs"],
    data() {
        return {};
    },
    mounted(){
      console.log(this.items)
    },
    computed: {
      filteredEvents() {
        let t = this.items.filter(x => {
          console.log(x);
          return x.id % 2 != 0
        });
        console.log(t)
        return t;
      }
    }
}
</script>

<style>
/* @import url('https://fonts.googleapis.com/css?family=Cardo|Pathway+Gothic+One'); */
.timeline {
	 display: flex;
	 margin: 0 auto;
	 flex-wrap: wrap;
	 flex-direction: column;
	 max-width: 70vw;
	 position: relative;
     /* background: rgba(142, 138, 138, 0.8); */
}
  
.timeline_content{
    width: 60%;
    /* height: 100%; */
}

.timeline_content-title {
  font-weight: normal;
  font-size: 60px;
  margin: -10px 0 0 0;
  transition: 0.4s;
  /* padding: 0 10px; */
  box-sizing: border-box;
  font-family: 'Pathway Gothic One', sans-serif;
  color: #fff;
}
.timeline_content-desc {
  margin: -10px 0 0 0;
  font-size: 16px;
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.7);
  font-family: Cardo;
  font-weight: normal;
  line-height: 25px;
  width: 100%;
}
.timeline:before {
  position: absolute;
  left: 50%;
  width: 5px;
  height: 100%;
  margin-left: -1px;
  content: "";
  background: rgba(255, 255, 255, 0.07);
}
@media only screen and (max-width: 767px) {
  .timeline:before {
    left: 40px;
  }
}
.timeline-item {
  /* background: rgba(204, 193, 230, 0.8); */
  padding: 40px 0;
  /* filter: blur(2px);  */
  /* transition: 0.5s; */
  box-sizing: border-box;
  /* width: calc(30% - 40px); */
  width: 30%;
  display: flex;
  position: relative;
  transform: translateY(-80px);
}
.timeline-item:before {
  content: attr(data-text);
  letter-spacing: 3px;
  width: 100%;
  position: absolute;
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
  font-family: 'Pathway Gothic One', sans-serif;
  border-left: 2px solid rgba(255, 255, 255, 0.5);
  top: 70%;
  margin-top: -5px;
  /* padding-left: 15px; */
  opacity: 0;
  /* right: calc(-100% - 56px); */
  
}

.timeline-item:nth-child(even) {
  align-self: flex-end;
}
.timeline-item:nth-child(even):before {
  right: auto;
  text-align: right;
  /* left: calc(-100% - 56px); */
  padding-left: 0;
  border-left: none;
  border-right: 2px solid rgba(255, 255, 255, 0.5);
  padding-right: 15px;
}
/*.timeline-item--active {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
}
.timeline-item--active:before {
  top: 50%;
  transition: 0.3s all 0.2s;
  opacity: 1;
}
/* .timeline-item--active .timeline_content-title {
  margin: -50px 0 20px 0;
} */
/* @media only screen and (max-width: 767px) {
  .timeline-item {
    align-self: baseline !important;
    width: 100%;
    padding: 0 30px 150px 80px;
  }
  .timeline-item:before {
    left: 10px !important;
    padding: 0 !important;
    top: 50px;
    text-align: center !important;
    width: 60px;
    border: none !important;
  }
  .timeline-item:last-child {
    padding-bottom: 40px;
  }
} */
.timeline_img {
    /* background-color: aquamarine; */
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
}
.timeline-container {
  width: 100%;
  position: relative;
  padding: 80px 0;
  transition: 0.3s ease 0s;
  background-attachment: fixed;
  background-size: cover;
}
.timeline-container:before {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /* background: rgba(99, 99, 99, 0.8); */
  content: "";
}
/*.timeline-header {
  width: 100%;
  text-align: center;
  margin-bottom: 80px;
  position: relative;
}
.timeline-header_title {
  color: #fff;
  font-size: 46px;
  font-family: Cardo;
  font-weight: normal;
  margin: 0;
}
.timeline-header_subtitle {
  color: rgba(255, 255, 255, 0.5);
  font-family: 'Pathway Gothic One', sans-serif;
  font-size: 16px;
  letter-spacing: 5px;
  margin: 10px 0 0 0;
  font-weight: normal;
}
.demo-footer {
  padding: 60px 0;
  text-align: center;
}
.demo-footer a {
  color: #999;
  display: inline-block;
  font-family: Cardo;
} */

</style>
