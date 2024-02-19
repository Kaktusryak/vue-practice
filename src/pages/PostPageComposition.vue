<template>
    <div >
        
        <h1>Post page</h1>
        <h2>{{ likes }}</h2>
        <my-button @click="addLikes">+</my-button>
        <my-input v-model="searchQuery"  placeholder="Search here"/>
       
        <div class="app_buttons">
            <my-button >Create post</my-button>
            <my-select v-model="selectedSort" :options="sortOptions"/>
            
        </div>
        
        <my-dialog v-model:show="dialogVisible">
            <post-form  />
        </my-dialog>
        
        <post-list v-bind:posts="sortedAndSearchedPosts"  v-if="!isPostLoading"/>
        <div class="loading" v-else>Loading...............</div>
      
        <div v-show="posts.length==0">Really nothing here</div>
        
        
        





    </div>
</template>
<script>
import PostForm from "@/components/PostForm.vue"
import PostList from "@/components/PostList.vue"
import MyDialog from "@/components/UI/MyDialog.vue"
import MyButton from "@/components/UI/MyButton.vue"
import MySelect from "@/components/UI/MySelect.vue"
import MyInput from "@/components/UI/MyInput.vue"
import axios from "axios"
import {ref} from 'vue'
import usePosts from '@/hooks/usePosts'
import useSortedPosts from '@/hooks/useSortedPosts'
import useSordetAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts'




export default {
    components:{
        PostForm, PostList, MyDialog,MyButton, MySelect, MyInput
    },



    data(){
        
        return{
            
            dialogVisible:false,
            sortOptions:[
                
                {value:'title', name:'title'},
                {value:'body', name:'body'},
                

            ],
            
            
            
        }
    },
    setup(props){
        // const likes = ref(0)

        // const addLikes = ()=>{
        //     likes.value +=1
        // }

        const {posts,totalPages, isPostLoading, isWorking } = usePosts(10)
        const {sortedPosts, selectedSort}= useSortedPosts(posts)
        const {searchQuery,sortedAndSearchedPosts} = useSordetAndSearchedPosts(sortedPosts)

        return{
            posts, totalPages, isPostLoading, isWorking, sortedPosts, selectedSort, searchQuery, sortedAndSearchedPosts
        }
    }
}
   



</script>
<style>

.loading{
    background-color: rgb(6, 63, 44);
    color: white;
}
.app_buttons{
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
}
.page_wrapper{
    display: flex;
    margin-top: 15px;
}
.page{
    border:1px solid black;
    padding:10px;
    margin-right: 5px;
}
.current-page{
    border: 3px solid teaL;
}
.observer{
    height: 30px;
    background-color: gray;
    margin-top: 15px;
}

</style>
