<template>
  <v-row class="bor box">
      <v-col class="bor box1 "  >box1
        <v-row class="bor box1-1">text</v-row>
        <v-row class=" bor box1-2">
            <v-col class="bor box1-3">
                <p class="bor"> release date</p>
                <v-row class="bor">
                    <v-btn class="ma-2" outlined color="indigo"
                    >
                        steam
                    </v-btn>
                    <v-btn class="ma-2" outlined color="indigo"
                    >
                        steam
                    </v-btn>
                    <!-- <v-btn class="ma-2" outlined color="indigo"
                    >
                        steam
                    </v-btn> -->
                </v-row>
            </v-col>
          <div class=" link"></div>
          <v-col class="bor box1-3">
            <p class="bor re"> release date</p>
            <h3 class="bor"> comming soon</h3>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="bor box1" c>you</v-col>
    </v-row>
</template>

<script>
export default {

}
</script>

<style>
.bor{
    border: 3px solid brown;
    margin: 5px;
    /* padding: 10px; */
}
.box{

  height: 100vh;
  
}


.box1-1{
    height: 60%;
    
}
.box1-2{
    display: flex;
    /* justify-content: center; */

    height: 25%;

}
.box1-3{
    display: flex;
    flex-direction: column;

    background-color: #ccc;
    
}
.link{
    border-right: 5px solid black ;
    /* line-height:120px; */
}

.re{
    
}
</style>