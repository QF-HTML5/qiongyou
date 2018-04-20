<template>
    <div class="veui-cell">
        <input v-for='(item,i) in setForget' :key="i" type="text" :placeholder="item" class="weui-input" >
    </div>
</template>
<script>
export default {
    name:'forget',
    data(){
        return {
            setForget: [
                    '手机号',
                    '验证码',
                    '密码',
                    '新密码',
                    '确认密码',
            ]
        }
    },
}
</script>
<style lang="scss" scoped>

</style>


