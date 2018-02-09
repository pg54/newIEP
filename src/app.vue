<template>
  <div id="app">
    <div class="fullWidthContent">
      <div class="centerContent">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  methods: {
  },
  created: function () {
    if (this.$route.path == "/" ||this.$route.path == "" ) {
      this.$router.push({ path: '/dynamicConsultation' });
    } else {
      this.$router.push({ path: this.$router.path });
    }
  }
};
</script>
<style>
/*   css reset*/

html ::-webkit-scrollbar {
     /*不要滚动条*/
     display: block;
 }
 .fullWidthContent {
    width: 100vw;
}
.centerContent {
    margin: 0 auto;
    width: 1280px;
    position: relative;
}

.clearfix:after {
    display: block;
    content: '';
    clear: both;
    height: 0;
    width: 0;
    visibility: hidden;
}

a:visited {
    color: #444;
    text-decoration: none;
}
li {
    list-style: none;
}

/*   css reset------------------------------------------------end*/


/*   content*/

.centerContent {
  margin: 0 auto;
  width: 1280px;
  position: relative;
}

.clearfix:after {
  display: block;
  content: '';
  clear: both;
  height: 0;
  width: 0;
  visibility: hidden;
}

a:link,
a:visited {
  color: #444;
  text-decoration: none;
}





/*   content------------------------------------------------end*/
</style>
