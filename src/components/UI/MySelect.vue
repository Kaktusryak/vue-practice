<template>
    <select :modelValue="modelValue" @change="changeOption">
        <option disabled default value="">Pick filter from the list</option>
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
    </select>
</template>
<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex"
export default{
    name:'my-select',
    props:{
        modelValue:{
            type:String
        },
        options:{
            type:Array,
            default:()=>[]

        }
    },
    methods:{
        changeOption(event){
            this.$emit('update:modelValue', event.target.value)
            
        },
        
    },
    computed:{
      
    }

}
</script>
<style>

</style>