<template>
  <div>
    <h1>manage</h1>
    <div class="a-item" v-for="(item, index) in archive" :key="index">
      <div>{{item.title}}
        <button type="submit" @click="remove(item._id)">删除</button>
        <button type="submit" @click="modify(item._id)">修改</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        archive: []
      }
    },
    methods: {
      remove: function (id) {
        this.$http.post('/api/register/deleteArticle', {_id: id})
          .then(
            response => {
            }
          )
      },
      modify: function (id) {
        this.$router.push('/admin/modifyArticle/' + id)
      }
    },
    mounted: function () {
      this.$http.get('/api/register/archive')
        .then((res) => {
          this.archive = res.body.reverse()
        })
    }
  }
</script>

<style scoped>

  .a-item {
    padding: 20px;
    border-bottom: 1px dashed #dddddd;
  }

  button {
    display: inline-block;
    float: right;
    margin-right: 20px;
  }
</style>
