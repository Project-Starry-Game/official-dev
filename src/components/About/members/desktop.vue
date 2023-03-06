<template>
    <div class="container pa-0 ma-0" >
        <div class="title">
            <v-img :src="starry_logo" />
        </div>
        <div class="members_container" >
            <div class="text_box">
                <p>Project Starry 是來自台灣的獨立遊戲工作室，奉遊戲為「第九藝術」。以此為目標，開發畫面精緻、具有深沉原創故事、有趣新穎遊玩方式的2D遊戲。團隊由七個人組成，成員都剛大學畢業不到一年，甚至有些成員還在還學貸。現在資金主要倚賴Attitude的貸款以及朋友們微薄的支持、接案製作教育類型的遊戲開發，擔任專案中的PM及企劃。為了貫徹我們的精神勢必需要大量的時間和金錢全力進行開發。我們目前在patreon募集資金，希望能得到您的支持。讓Project Starry持續開發能觸動人、讓人讚不絕口的好遊戲。不管結果如何我們會帶著您的信任奮力成為那片璀璨星空裡的其中一顆星。</p>
            </div>
            <div class="patreon_btn">
                <v-btn
                color="#EB5254"
                
                href="https://www.patreon.com/bePatron?u=56283261"
                elevation="0"
                
                >
                <v-img width="10%" class="pa-3" :src="patreonImg"> </v-img>
                <!-- <span class="text-white pa-2"> {{ $t("becomeAPatreon") }} </span> -->
                </v-btn>
            </div>


            <div class="member_box">
                <div 
                    v-for="(member, index) in members"
                    :key="index"
                    class="member">
                    <v-img cover class="bor" :src="members[index].src" />
                </div>
           
            </div>
            
        </div>
    </div>
</template>

<script setup lang="ts">
import starry_logo from "../../../assets/Logotype.png";
import patreonImg from "../../../assets/Digital-Patreon-Logo_White.png";
</script>

<script lang="ts">
export default {
    props: ["members"],
    data() {
        return {};
    },
}

</script>


<style>

.container{
    display:flex;
    flex-direction: column;
    align-items:center;
    /* justify-content:center; */
    /* background-color: rgb(111, 174, 230); */
} 
.title{
    margin-top: 8rem;
    width: 12vw;
    color: aliceblue;
}
.text_box{

    font-size: 1.2rem;
    color: aliceblue;
    /* background-color: aqua; */
}

.patreon_btn{
    display: flex;
    justify-content: flex-end;
    margin-top: 3rem;
  
}

.members_container{

    padding-top: 3rem;
    width: 35vw;
    /* background-color: antiquewhite; */
}

.member_box{

    /* background-color: antiquewhite; */
    display: flex;
    flex-flow: row wrap;
    justify-content:center;
    margin-top: 5%;
    /* margin-bottom: 20%; */
}
.member{
    /* border:1px solid aquamarine; */
    padding: 0.5rem 1rem ;
    width: 25%;
    /* height: auto; */
}

.bor{
    /* border: 5px solid grey; */
}
</style>