<template>

    <input  type="text" @change="search">

</template>

<script>
export default{
    name:'my-input',
    
    methods:{
        search(event){
            this.$emit('update:modelValue',event.target.value)
        }
    }
}
</script>

<style>


</style>