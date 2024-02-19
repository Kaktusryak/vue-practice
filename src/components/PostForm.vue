<template>
    <div>
        <form @submit.prevent>
            <h4>Create post</h4>
            <input v-focus class="input" type="text" placeholder="Name" v-model="post.title"> 
            <input class="input" type="text" placeholder="Body" v-bind:value="post.body" @input="post.body=$event.target.value">
            <!-- <button class="btn" @click="createPost">Create</button> -->
            <my-button @click="createPost">Create</my-button>
        </form>
    </div>

</template>

<script>
import MyButton from "@/components/UI/MyButton.vue"
export default{
    components:{
        MyButton
    },
    data(){
        return {
            post:{
                title:'',
                body:'',
                
            }
        }
    },
    methods:{
        createPost(){
            this.post.id = Date.now()
            this.$emit('create',this.post)

            this.post={
                title:'',
                body:''
            }
        }
    },
    watch:{
        post:{
            handler(newVal){
                console.log(newVal)
            },
            deep:true
        }
    }
}

</script>

<style>

.input{
    width:100%;
    border: 3px solid rgb(31, 90, 31);
    border-radius: 10px;
    padding:10px;
    margin-top: 10px;
}
form{
    display: flex;
    flex-direction: column;

}


</style>