<template>
 
    <div class="veui-cell">
        <input
            v-for='(item,i) in setLogin' 
            :key="i" 
            type="text" 
            :placeholder="item" 
            class="weui-input" 
        >
    </div>

</template>
<script>
export default {
    name:'login',
    data(){
        return {
            setLogin: [
                '手机号',
                '密码'
            ]
        }
    }
}
</script>
<style lang="scss" scoped>


</style>


