<template>
  <div>
    <input type="text" v-model="username">
    <input type="password" v-model="password">
    <button type="submit" @click="register">注册</button>

    <div>
      <input type="text" v-model="deleteName">
      <button type="submit" @click="removeUser">删除</button>
    </div>

    <div>
      username:{{username}}
      password:{{password}}
    </div>

    <div>
      show all user
      <div v-for="(user, index) in users" :key="index">
        <p>userName:{{user.username}} password:{{user.password}}</p>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        username: '',
        password: '',
        users: [],
        deleteName: ''
      }
    },
    methods: {
      register: function () {
        let params = {
          username: this.username,
          password: this.password
        }
        this.$http.post('/api/register/createUser', params)

        this.$http.get('/api/register/getUser')
          .then((res) => {
            console.log('res is:', res)
            this.users = res.body
          })
      },
      removeUser: function () {
        this.$http.post('/api/register/removeUser', {username: this.deleteName})
      }
    }
  }
</script>

<style scoped>
</style>


signin: function () {
let _this = this;
if (this.name.length < 6) {
this.$message.error('用户名不能为空或小于六个字符')
return
}

if (this.password.length < 6) {
this.$message.error('密码不能为空或小于六个字符')
return
}

this.$http.get('/api/admin/getUser/' + this.name).then(
response => {
if (_this.password !== response.body.password) {
_this.$message.error('用户名或密码不正确')
} else {
let obj = {
name: _this.name,
password: _this.password
}
_this.$http.post('/api/admin/signin', {
userInfo: obj
}).then(
response => {
_this.$message({
message: '登录成功',
type: 'success'
})
delete _this.password;
_this.$router.go(-1)
},
response => console.log('登录失败'+response)
)
}
},
response => {
_this.$message.error('该用户不存在')
return
}
)
}
