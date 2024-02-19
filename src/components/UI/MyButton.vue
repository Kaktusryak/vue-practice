<template>
    <button class="btn">
        <slot></slot>
    </button>

</template>

<script>
export default{

}

</script>

<style>
.btn{
    width:100%;
    border: 3px solid rgb(31, 90, 31);
    border-radius: 10px;
    padding:10px;
    margin-top: 10px;
    background-color: rgb(101, 236, 142);
}

</style>