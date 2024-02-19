export default{
    mounted(el,binding){
        console.log(el)
        console.log(binding)
        const options={
            
            rootMargin:'0px',
            threshold:1.0
        }
        const callback = (entries, observer)=>{
            if(entries[0].isIntersecting ){
                // this.fetchMorePosts()
                binding.value()
            }
        }
        const observer = new IntersectionObserver(callback, options);
        observer.observe(el)
    }
}