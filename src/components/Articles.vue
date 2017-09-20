<template>
  <div>
    <h1>Articles</h1>
    <div class="ariticle-block" v-for="(item,index) in archive" :key="index">
      <h2>{{item.title}}</h2>
      <div v-html="item.content"></div>

    </div>
  </div>
</template>

<script>
  import Marked from 'marked'
  export default {
    data () {
      return {
        archive: []
      }
    },
    methods: {
      compile: function (ctnt) {
        this.temp = Marked(ctnt, {sanitize: true})
      }
    },
//    computed: {
//      compiledcontent: function (ctnt) {
//        return Marked(ctnt, {sanitize: true})
//      }
//    },
    mounted: function () {
      this.$http.get('/api/register/archive')
        .then((res) => {
          console.log('res.body is:', res.body)
          this.archive = res.body.reverse()
          for (let item in this.archive) {
            this.archive[item].content = Marked(this.archive[item].content, {sanitize: true})
            console.log('content is:', this.archive[item].content)
          }
          console.log(this.archive)
        })
    }
  }
</script>

<style scoped>
  .ariticle-block {
    padding: 20px;
    border-bottom: 1px dashed #dddddd;
  }
</style>
