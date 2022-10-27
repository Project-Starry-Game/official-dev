<template>
    <div class="trailer_container">
        <div class="section section-1" ref="first">
            <h1>STARRY</h1>
        </div>

        <div class="section section-2" ref="second">
            <div class="section2_container">
                <p>Swallow the Black liquid, tell me what you see. </p>
                <p>A beautiful world with silence? A broken coffin ?Or even just that empty bottle in your hand.</p>
            </div>
        </div>    

        <div class="img_container">
            <v-img class="background" ref="background" src="@/assets/building.png" />
            <v-img class="foreground" ref="foreground" src="@/assets/character.png" />
        </div>

        
    </div> 


</template>

<script>
export default {
    name: "Home",
    components: {},   
}
</script>

<style>
.trailer_container{
    background: #D99A57;
    overflow: scroll;
    max-height: 90vh;
}

img.background,
img.foreground{
    top:0;
    width: 50%;
    height:auto;
    position: sticky;
}
.section{
    display: flex;
    justify-content: center;
}
.section2_container{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>