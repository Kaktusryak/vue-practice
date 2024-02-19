<template>
    <div >
        <!-- <h1>Post page. Likes:{{ $store.getters.doubleLikes }}</h1>
        <h2>Auth:{{ $store.state.isAuth ? 'Authorised' : 'who are you?'}}</h2>
        <div>
            <my-button @click="$store.commit('incrementLikes')">+</my-button>
            <my-button @click="$store.commit('decrementLikes')">-</my-button>
        </div> -->
        <my-input :model-value="searchQuery" @update:model-value="setSearchQuery"  placeholder="Search here"/>
        <div class="app_buttons">
            <my-button @click="showDialog">Create post</my-button>
            <my-select :model-value="selectedSort" @update:model-value="setSelectedSort" :options="sortOptions"/>   
        </div>
        <my-dialog v-model:show="dialogVisible">
            <post-form  @create="createPost" />
        </my-dialog>
        <post-list v-bind:posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostLoading"/>
        <div class="loading" v-else>Loading...............</div>
        <div v-show="posts.length==0">Really nothing here</div>
        <div v-intersection="fetchMorePosts" class="observer"></div>


        <!-- <h1>{{ $store.state.post.limit }}</h1> -->
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
import { mapState, mapActions, mapGetters, mapMutations } from "vuex"




export default {
    components:{
        PostForm, PostList, MyDialog,MyButton, MySelect, MyInput
    },

    data(){
      
        return{
            
            dialogVisible:false,
            
            
            
        }
    },
    methods: {
        ...mapMutations({
            setPage:'post/setPage',
            setSelectedSort:'post/setSelectedSort',
            setSearchQuery:'post/setSearchQuery'
        }),
        ...mapActions({
            fetchMorePosts:'post/fetchMorePosts',
            fetchPosts:'post/fetchPosts'
        }),
        createPost(post){
            
            this.dialogVisible = false;
            this.posts.push(post);
            
        },
        removePost(post){
            this.posts = this.posts.filter(p=> p.id!==post.id)
        },
        showDialog(){
            this.dialogVisible=true;
        },
        hello(){
            console.log('hello')
            return 'adadad'
        },
        
        

    },
    mounted(){
        console.log('adgfg')
        this.fetchPosts();
    },
    watch:{
       
    },

    computed:{
        ...mapState({
            posts:state=>state.post.posts,
            isPostLoading:state=>state.post.isPostLoading,
            selectedSort:state=>state.post.selectedSort,
            sortOptions:state=>state.post.sortOptions,
            searchQuery:state=>state.post.searchQuery,
            page:state=>state.post.page,
            limit:state=>state.post.limit,
            totalPages:state=>state.post.totalPages,
            isWorking:state=>state.post.isWorking,
        
        }),
        ...mapGetters({
            sortedPosts: 'post/sortedPosts',
            sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
        })
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
