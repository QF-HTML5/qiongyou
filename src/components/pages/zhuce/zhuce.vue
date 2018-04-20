<template>
    <div class="veui-cell">
        <input v-for='(item,i) in setZhuce' :key="i" type="text" :placeholder="item" class="weui-input" >
    </div>
</template>
<script>

export default {
    name:'zhuce',
    data(){
        return {
            setZhuce: [
                    '手机号',
                    '新密码',
                    '确认密码',
            ]
        }
    }
}
</script>
<style lang="scss" scoped>

</style>


