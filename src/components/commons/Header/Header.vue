<template>
    <header class="app-header">
        <nav>
            <div class="nav_header">
                <p class="title-icon nav_header_left">
                   <span>淘二淘-大学生二手网</span>
                </p>
                <p class="nav_header_right">
                    <i class="fa fa-ticket right"></i>
                </p>
            </div>
        </nav>
      
    </header>
</template>
<script>
    export default{
        name:'AppHeader',
        components:{
        }
    }
</script>

<style lang="scss" scoped>
    nav{
        overflow: hidden;
        width: 100%;
        height:50px;
        line-height:50px;
        background:#11cd6e;
    }
    .nav_header{
        display: flex;
        justify-content: space-between;
        height: 30px;
        padding: 15px;
    }
    .nav_header_left{
        // flex: initial;
        font-size: 16px;
        line-height: 25px;
        color: #fff;
    }
    .nav_header_right .right{
        font-size: 26px;
        color:#fff;
        vertical-align: top;
    }
</style>