<template>
    <div class="container pa-0 ma-0" >
        <div class="title_ph">
            <v-img :src="starry" />
        </div>
        <div class="members_container_ph" >
            <div class="text_box_ph">
                <p>Project Starry 是來自台灣的獨立遊戲工作室，奉遊戲為「第九藝術」。以此為目標，開發畫面精緻、具有深沉原創故事、有趣新穎遊玩方式的2D遊戲。團隊由七個人組成，成員都剛大學畢業不到一年，甚至有些成員還在還學貸。現在資金主要倚賴Attitude的貸款以及朋友們微薄的支持、接案製作教育類型的遊戲開發，擔任專案中的PM及企劃。為了貫徹我們的精神勢必需要大量的時間和金錢全力進行開發。我們目前在patreon募集資金，希望能得到您的支持。讓Project Starry持續開發能觸動人、讓人讚不絕口的好遊戲。不管結果如何我們會帶著您的信任奮力成為那片璀璨星空裡的其中一顆星。</p>
            </div>
            <div class="patreon_btn_container_ph">
                <v-btn
                color="#EB5254"
                href="https://www.patreon.com/bePatron?u=56283261"
                class="patreon_btn_ph"
                
                >
                <!-- <v-img width="10%" class="pa-1" :src="patreonImg"> </v-img> -->
                <span class="patreon_btn_text_ph text-white"> {{ $t("becomeAPatreon") }} </span>
                </v-btn>
            </div>


            <div class="member_box_ph">
                <div 
                    v-for="(member, index) in members"
                    :key="index"
                    class="member_ph">
                    <v-img cover class="bor" :src="members[index].src" />
                </div>
           
            </div>
            
        </div>
    </div>
</template>

<script setup lang="ts">
import starry from "../../../assets/Starry_Logo.png";
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
} 
.title_ph{
    margin-top: 4rem;
    width: 10vw;
    color: aliceblue;
}
.text_box_ph{
    font-size: 1rem;
    color: aliceblue;
}

.patreon_btn_container_ph{
    display: flex;
    justify-content: center;
    margin-top: 2rem;
}
.patreon_btn_ph{
    padding: 1rem 1rem;
    border-radius: 10rem;
}
.members_container_ph{
    padding-top: 2rem;
    width: 70vw;

}
.patreon_btn_text_ph{
    display: flex;
    justify-content: center;
    font-size: 0.8rem;
}
.member_box_ph{

    display: flex;
    flex-flow: row wrap;
    justify-content:center;
    margin-top: 2rem;

}
.member_ph{
    padding: 0.2rem 0.5rem ;
    width: 25%;

}

.bor{
    /* border: 5px solid grey; */
}
</style>