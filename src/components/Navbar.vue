<template>
    <div class="nav">
        <p class="pip">Navbar</p>
        <router-link to="/posts">Posts</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/postsStore">Posts with store</router-link>
        <router-link to="/postsComposition">Posts with composition</router-link>
        <router-link to="/">Home</router-link>
        <my-button class="btn" @click="$router.push('/')" style="color: rgb(0, 252, 134);">And this is the button</my-button>
    </div>

</template>
<script>
import MyButton from './UI/MyButton.vue';
export default{
    components:{
        MyButton
    }
    
}
</script>
<style scoped>
.nav{
    background-color:rgb(38, 136, 99);
    display: flex;
    justify-content: center;
    height: 50px;
    align-items: center;
}
.nav > *{
    margin-left: 20px;
    margin-right: 20px;
    color: white;
    border: 1px solid white;
    border-radius: 10px;
    align-items: center;
    height: 50%;
    padding-left: 7px;
    padding-right: 7px;
    padding-top: 3px;
}
.pip{
    margin-left: 20px;
    margin-right: 20px;
    color: white;
    border: none;
    
    align-items: center;
    height: 50%;
    padding-left: 7px;
    padding-right: 7px;
}
.btn{
    background-color:rgb(38, 136, 99);
    width: fit-content;
    margin-top: 0;
}
</style>