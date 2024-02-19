import axios from "axios"
export const postModule={
    state:()=>({
        posts:[
                
        ],
        isPostLoading:false,
        selectedSort:'',
        sortOptions:[
            {value:'', name:'nothing'},
            {value:'title', name:'title'},
            {value:'body', name:'body'},
            

        ],
        searchQuery:'',
        page:1,
        limit:10,
        totalPages:0,
        isWorking:false
        
    }),
    getters:{
        sortedPosts(state){
            return [...state.posts].sort((post1,post2)=>{
                return post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
            })
        },
        sortedAndSearchedPosts(state,getters){
            return getters.sortedPosts.filter((item)=>item.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }
    },
    mutations:{ 
        setPosts(state, posts){
            state.posts=posts
        },
        setIsPostLoading(state, isPostLoading){
            state.isPostLoading=isPostLoading
        },
        setSelectedSort(state, selectedSort){
            state.selectedSort=selectedSort
        },
        setSearchQuery(state, searchQuery){
            state.searchQuery=searchQuery
        },
        setPage(state, page){
            state.page=page
        },
        setPages(state, totalPages){
            state.totalPages=totalPages
        },
        setIsWorking(state, isWorking){
            state.isWorking=isWorking
        },
        
    },  
    actions:{
        async fetchPosts({state,commit}){
            try {
                commit('setIsPostLoading',true)
                setTimeout(async()=>{
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
                        params:{
                            _page:state.page,
                            _limit:state.limit
                        }
                    })
                    
                    commit('setPosts',response.data)
                    commit('setIsPostLoading',false)
                    commit('setPages',(Math.ceil(response.headers['x-total-count']/state.limit)))
                    
                    commit('setIsWorking',true)
                    commit('setPage', state.page+1)
                    
                },300)
   
            } catch (error) {
                alert('Error')
            }finally{}
        },
      
        async fetchMorePosts({state,commit}){
            if(state.isWorking){
                try {
                
                    
                    setTimeout(async()=>{
                        const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
                            params:{
                                _page:state.page,
                                _limit:state.limit
                            }
                        })
                        
                        commit('setPosts', [...state.posts,...response.data]  )
                        commit('setPage', state.page+1)
                        
                    },300)
                
                
                //console.log(response)
                
                } catch (error) {
                    alert('Error')
                }finally{} 
            }
            
        },
    },
    namespaced:true
}