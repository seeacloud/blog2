<template>
  <div class="con">
    <div class="logo-con">
      <img src="../../static/img/moya-logo.jpg" alt=""/>
    </div>
    <router-link class="r-link" to="/">首页</router-link>
    <router-link class="r-link" to="/about">关于</router-link>
    <router-link class="r-link" to="/admin/signin">登录</router-link>
    <router-link class="r-link" to="/admin/signup">注册</router-link>
    <router-link class="r-link" to="/admin/manage">管理</router-link>
  </div>
</template>s

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style scoped>

  .con {
    border-right: 1px solid #dddddd;
  }

  .logo-con {
    text-align: center;
  }

  img {
    width: 60%;
  }

  .r-link {
    display: block;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
  }

</style>
