<template>

    <div class="navbar">
        <a  
            id=""
            href=""
            v-for="(item, index) in nav"
            :key="index"
            >
            {{ item.name }}
        </a>
    </div>


    
</template>

<script>
export default {
    data() {
        return {
        nav: [{ name: "trailer" }, { name: "iOS" }, { name: "Android" }],
        };
    }

}
</script>

<style>

.navbar{
    position: fixed;
    top: 30%;
    right: 3rem;
    display: flex;
    flex-direction: column;
    width: 3vw;
    height: 50vh;

    justify-content: space-around;
    align-content: center;

 
}
a{
    color: rgb(234, 223, 210);
    text-decoration:none;
    font-weight: bolder;
}
</style>