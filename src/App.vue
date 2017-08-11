<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->

    <div class="con">

      <div class="content-con">
        <div class="side-con">
          <side-menu></side-menu>
        </div>
        <router-view></router-view>

      </div>
    </div>
  </div>
</template>

<script>
  import SideMenu from '@/components/SideMenu'
  export default {
    name: 'app',
    data () {
      return {}
    },
    components: {SideMenu}
  }
</script>

<style>
  .con
  {
    display: block;
    width: 100%;
  }
  .side-con {
    display: block;
    width: 200px;
    position: absolute;
    top: 0;
    left: 0;

  }

  .content-con {
    position: relative;
    display: block;
    padding-left: 220px;
  }
</style>
