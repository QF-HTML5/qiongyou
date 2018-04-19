<template>
    <div class="zhuce">
        <logInPub :setAll='setZhuce'></logInPub>
    </div>
</template>
<script>
import logInPub from '../../commons/Header/logInPub'
export default {
    name:'zhuce',
    data(){
        return {
            setZhuce: [
                {
                    id:1,title:"注册",
                    phone:'手机号',
                    yanzheng:'验证码',
                    password:'密码',
                    newPassword:'新密码',
                    queren:'确认密码',
                    zhuce:'注册',
                    forgeet:'忘记密码'
                }
            ]
        }
    },
    components:{
        logInPub
    }
}
</script>
<style lang="scss" scoped>

</style>


