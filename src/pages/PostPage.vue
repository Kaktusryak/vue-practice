<template>
    <div >
        <!-- Not working //first
        <div>
            <button v-on:click="addLike">
                Like
            </button>
            <button @click="addDislike">
                Dislike
            </button>
        </div>
        <div>
            Amount of likes <strong>{{ likes }}</strong>
        </div>
        <div>
            Amount of dislikes <strong>{{ dislikes }}</strong>
        </div> -->
        <!-- <div>
            <form @submit.prevent>
                <h4>Create post</h4>
                <input class="input" type="text" placeholder="Name" v-bind:value="title" @input="title=$event.target.value">
                <input class="input" type="text" placeholder="Description" v-bind:value="description" @input="description=$event.target.value">
                <button class="btn" @click="createPost">Create</button>
            </form>
        </div> -->
        <!-- <div class="post" v-for="post in posts">
            <div>Name: {{ post.title }}</div>
            <div>Description: {{ post.description }}</div>
        </div> -->
        <h1>Post page</h1>
        <my-input v-model="searchQuery"  placeholder="Search here"/>
        <!-- <my-button @click="fetchPosts">Fetch posts</my-button> -->
        <div class="app_buttons">
            <my-button @click="showDialog">Create post</my-button>
            <my-select v-model="selectedSort" :options="sortOptions"/>
            
        </div>
        
        <my-dialog v-model:show="dialogVisible">
            <post-form  @create="createPost" />
        </my-dialog>
        
        <post-list v-bind:posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostLoading"/>
        <div class="loading" v-else>Loading...............</div>
        <!-- <div class="page_wrapper">
            <div v-for="pageNumber in totalPages" :key="pageNumber" class="page"  :class="{'current-page':page===pageNumber}" @click="changePage(pageNumber)">{{ pageNumber }}</div>

        </div> -->
        <!-- It was cado for page selection -->
        <div v-show="posts.length==0">Really nothing here</div>
        <!-- <div ref="observer" class="observer"></div> -->
        <!-- here we used ref -->
        <div v-intersection="fetchMorePosts" class="observer"></div>
        <!-- for intersection observer -->





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




export default {
    components:{
        PostForm, PostList, MyDialog,MyButton, MySelect, MyInput
    },



    data(){
        // return{ first
        //     likes:1,
        //     dislikes:6,
        // }
        return{
            posts:[
                // {id:1,title:"javasript",body:"about javasript"},
                // {id:2,title:"java",body:"about java"},
                // {id:3,title:"SQL",body:"about SQL"}
            ],
            dialogVisible:false,
            isPostLoading:false,
            selectedSort:'',
            sortOptions:[
                {value:'', name:'nothing'},
                {value:'title', name:'title'},
                {value:'body', name:'body'},
                

            ],
            searchQuery:'',
            page:0,
            limit:10,
            totalPages:0
            
            
        }
    },
    methods: {
        // addLike(){ first
        //     this.likes++;
        // },
        // addDislike(){
        //     this.dislikes +=1;
        // },


        //second
        createPost(post){
            // event.preventDefault()
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
        async fetchPosts(){
            try {
                this.isPostLoading=true
                setTimeout(async()=>{
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
                        params:{
                            _page:this.page,
                            _limit:this.limit
                        }
                    })
                    this.posts = response.data
                    this.isPostLoading=false
                    this.totalPages = Math.ceil(response.headers['x-total-count']/this.limit)
                },300)
                
                
                //console.log(response)
                
            } catch (error) {
                alert('Error')
            }finally{}
        },
        // changePage(pageNumber){
        //     this.page = pageNumber;
        //     // this.fetchPosts()
        // }
        async fetchMorePosts(){
            try {
                
                this.page+=1;
                setTimeout(async()=>{
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
                        params:{
                            _page:this.page,
                            _limit:this.limit
                        }
                    })
                    this.posts = [...this.posts,...response.data]
                    
                    this.totalPages = Math.ceil(response.headers['x-total-count']/this.limit)
                },300)
                
                
                //console.log(response)
                
            } catch (error) {
                alert('Error')
            }finally{}
        },
        

    },
    mounted(){
        this.fetchPosts();
        
        // const options={
            
        //     rootMargin:'0px',
        //     threshold:1.0
        // }
        // const callback = (entries, observer)=>{
        //     if(entries[0].isIntersecting && this.page< this.totalPages){
        //         this.fetchMorePosts()
        //     }
        // }
        // const observer = new IntersectionObserver(callback, options);
        // observer.observe(this.$refs.observer)
        //this was used untill v-intersection came in

    },
    watch:{
        // page(){
        //     this.fetchPosts()
        // }
    },




    // watch:{
    //     selectedSort(newValue){//same name as a model in this component
    //         console.log(newValue)
    //         this.posts.sort((post1,post2)=>{
    //             return post1[newValue]?.localeCompare(post2[newValue])
    //         })
    //     },
        
    // },
    computed:{
        sortedPosts(){
            return [...this.posts].sort((post1,post2)=>{
                return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
            })
        },
        sortedAndSearchedPosts(){
            return this.sortedPosts.filter((item)=>item.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
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
