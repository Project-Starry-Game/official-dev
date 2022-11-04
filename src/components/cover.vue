<template>
<div 
    class="container"
    id="scroll-target"> 

    <div class="box box2">
        <v-img class="background" ref="background" src="@/assets/building.png" />
        <v-img class="foreground" ref="foreground" src="@/assets/character.png" />
    </div>
    <div class="section">
        <v-img class="section-1" id="first" ref="first" src="@/assets/logo_shadow.png" />
        <div class="section-2" ref="second">
            <p>Swallow the Black liquid, tell me what you see.</p>
            <p>
            A beautiful world with silence? A broken coffin ?Or even just that
            empty bottle in your hand.
            </p>
        </div>
    </div>

    
</div>
  
</template>

<script>
export default {

}
</script>

<style>
.container{
    position: relative;
    max-height: 100vh;
    
    overflow: scroll;
}
.section{
    background-image: linear-gradient(to bottom, #dd6f21 70%, #9c8c83 180%);
    position: absolute;
    top: 0%;
    width: 100vw;
    min-height: 100vh;
    opacity: 10%;
    z-index: 300;
}

.section-1{
    width: 100vw;
    align-content: center;
    height: 50%;
    z-index: 500;
}
.section-2{
    width: 100vw;
    position:absolute;
        display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.box2{
    background: #b97e4f;
    position: absolute;
    top: 0%;


}
.background{
    width: 100vw;
}


</style>