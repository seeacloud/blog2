<template>
  <div>
    <h1>modify article</h1>
    <div>title: <input type="text" v-model="title"></div>
    <div>content: <textarea name="" id="" cols="30" rows="10" v-model="content"></textarea></div>

    <button type="submit" @click="saveArticle">保存</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        content: ''
      }
    },
    mounted: function () {
      if (this.$route.params.id) {
        this.$http.get('/api/register/archive/' + this.$route.params.id)
          .then(
            response => {
              let article = response.body
              this.title = article.title
              this.content = article.content
              this._id = this.params.id
            }
          )
      }
    },
    methods: {
      saveArticle: function () {
        if (this.$route.params.id) {
          let _article = {
            _id: this.$route.params.id,
            title: this.title,
            content: this.content
          }
          this.$http.post('/api/register/updateArticle', {article: _article})
        }
      }
    }
  }
</script>

<style scoped>
</style>
