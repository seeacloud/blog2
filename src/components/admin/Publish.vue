<template>
  <div>
    <h1>发表文章</h1>

    <div>title: <input type="text" v-model="articleTitle"></div>
    <div>content: <textarea v-model="input" cols="30" rows="10" ></textarea>
    </div>

    <div>result:
      <div v-html="compiledmarkdown">

      </div>
    </div>
    <button type="submit" @click="publish">发表文章</button>
  </div>
</template>

<script>
  import Marked from 'marked'
  export default {
    data () {
      return {
        articleTitle: '',
        input: ''
      }
    },
    computed: {
      compiledmarkdown: function () {
        return Marked(this.input, {sanitize: true})
      }
    },
    methods: {
      publish: function () {
        let _article = {title: this.articleTitle, content: this.input}
        if (this.articleTitle !== '' && this.articleContent !== '') {
          this.$http.post('/api/register/publish', _article)
        } else {
          console.log('标题和内容不能为空')
        }
      }
    }
  }
</script>

<style scoped>

  h1{
    text-align: center;
  }
</style>
