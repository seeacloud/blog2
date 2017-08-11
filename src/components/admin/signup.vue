<template>
  <div class="con">
    <h1>signup</h1>
    <div>
      username: <input type="text" v-model="username">
    </div>
    <div>
      password: <input type="text" v-model="password">
    </div>
    <button type="submit" @click="signup">注册</button>
    <div v-show="isTaken"> 用户名被占用</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        username: '',
        password: '',
        isTaken: false
      }
    },
    methods: {
      signup: function () {
        let _this = this
        if (this.username.length < 1) {
          console.log('username must longer than 1')
          return
        }

        if (this.password.length < 1) {
          console.log('password must > 1')
          return
        }

        // get user by name to validate the new name
        this.$http.get('/api/register/getUser/' + this.username).then(
          response => {
            console.log('res is:', response.body)
            if (response.body.username === _this.username) {
              console.log('username taken')
              _this.isTaken = true
              _this.username = ''
            } else {
              _this.isTaken = false
              let newuser = {
                username: _this.username,
                password: _this.password
              }
              _this.$http.post('/api/register/createUser', newuser).then(
                console.log('register success')
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


<!--signup: function () {-->
<!--let _this = this;-->
<!--if (this.name.length < 6) {-->
<!--this.$message.error('用户名不能为空或小于六个字符')-->
<!--return-->
<!--}-->

<!--if (this.password.length < 6) {-->
<!--this.$message.error('密码不能为空或小于六个字符')-->
<!--return-->
<!--}-->

<!--this.$http.get('/api/admin/getUser/' + this.name).then(-->
<!--response => {-->
<!--if (response.body.name === _this.name) {-->
<!--_this.$message.error('该用户已存在')-->
<!--_this.name = '';-->
<!--// 由于异步，name的改变比正常流执行得慢，所以不能通过判断name去执行是否post-->
<!--// 所以我把post移入else中，而不是在外面通过判断name执行-->
<!--} else {-->
<!--let obj = {-->
<!--name: _this.name,-->
<!--password: _this.password-->
<!--}-->

<!--_this.$http.post('/api/admin/signup', {-->
<!--userInfo: obj-->
<!--}).then(-->
<!--response => {-->
<!--_this.$message({-->
<!--message: '注册成功',-->
<!--type: 'success'-->
<!--})-->
<!--},-->
<!--response => console.log('注册失败' + response)-->
<!--)-->
<!--}-->
<!--},-->
<!--response => console.log(response)-->
<!--)-->
<!--},-->

<!--register: function () {-->
<!--let params = {-->
<!--username: this.username,-->
<!--password: this.password-->
<!--}-->
<!--this.$http.post('/api/register/createUser', params)-->

<!--this.$http.get('/api/register/getUser')-->
<!--.then((res) => {-->
<!--console.log('res is:', res)-->
<!--this.users = res.body-->
<!--})-->
<!--},-->
