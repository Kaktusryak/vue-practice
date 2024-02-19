<template>
    <div class="post-container">
        <div class="post-text">
            <div>{{ post.id }}</div>
            <div>  <strong>Name: </strong> {{ post.title }}</div>
            <div><strong>Description: </strong>{{ post.body }}</div>
        </div>
        
        <my-button class="delete" @click="$emit('remove',post)">Delete</my-button>
        <my-button class="open" @click="$router.push(`/posts/${post.id}`)">Open</my-button>
    </div>
    
</template>

<script>
import MyButton from './UI/MyButton.vue';

export default{
    components:{
        MyButton
    },
    props:{
        post:{
            type:Object,
            required:true
        }
    }

}


</script>

<style>

.post-container{
    display: flex;
}
.delete{
    width:10% !important;
    background-color: white;
    border: 3px solid rgb(31, 90, 31);
    
    color: rgb(31, 90, 31);
    font-weight: 600;
}
.post-text{
    width: 78%;
}
.open{
    width:10% !important;
    background-color: white;
    border: 3px solid rgb(31, 90, 31);
    
    color: rgb(31, 90, 31);
    font-weight: 600;
    margin-left: 2%;
}
</style>