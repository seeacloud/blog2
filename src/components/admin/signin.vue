<template>
  <div>
    <h1>signin</h1>
    <input type="text" v-model="uname">
    <input type="text" v-model="pwd">
    <button type="submit" @click="signin">登录</button>
    <div v-show="!pass">密码错误</div>
    <div v-show="signSuccess">登录成功</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        uname: '',
        pwd: '',
        pass: true,
        signSuccess: false
      }
    },
    methods: {
      signin: function () {
        let _this = this
        this.$http.get('/api/register/getUser/' + this.uname).then(
          response => {
            if (_this.pwd !== response.body.password) {
              _this.pass = false
              _this.signSuccess = false
            } else {
              let currentUser = {
                username: _this.uname,
                password: _this.pwd
              }
              _this.$http.post('/api/register/signin', {userinfo: currentUser}).then(
                response => {
                  _this.signSuccess = true
                  _this.pass = true
                }
              )
            }
          }
        )
      }
    }
  }
</script>

<style scoped>
</style>
