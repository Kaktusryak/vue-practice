<template>
    <div>

        <div class="title">List of something:</div>
        <transition-group name="post-list">
            
            <post-item class="post" :post="post" v-for="post in posts" :key="post.id" @remove="$emit('remove',post)"/>
            
        </transition-group>
        
    </div>
    


</template>

<script>
import PostItem from "@/components/PostItem.vue" 

export default{
    components:{
        PostItem
    },

    props:{
        posts:{
            type:Array,
            required:true
        }
    }
}
</script>

<style>
.title{
    margin-top: 10px;
    text-align: center;
}
.post{
    padding: 15px;
    border: 3px solid rgb(31, 90, 31);
    border-radius: 10px;
    margin-top: 15px;
}

.post-list-item{
    display: inline-block;
    margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active{
    transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to{
    opacity: 0;
    transform: translateX(-30px);

}
.post-list-move{
    transition: transform 0.3s ease;
}

</style>