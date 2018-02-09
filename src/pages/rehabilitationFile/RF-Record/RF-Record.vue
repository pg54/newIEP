<template>
    <div class="main">
        <div class="pageNavbar">
            <span style="color: black">当前位置&nbsp;&nbsp;>&nbsp;&nbsp;</span>
            <span @click="goBack" >康复档案&nbsp;&nbsp;>&nbsp;&nbsp;</span>
            <span>成绩记录&nbsp;&nbsp;>&nbsp;&nbsp;</span>
        </div>
        <div class="registerBox"></div>
    </div>
</template>
<script>
  export default {
    name: 'RFRecord',
      methods: {
          goBack() {
              this.$store.dispatch('setShowPacientList', true);
              this.$router.push({ path: '/studentFile' });
          },
      }
  };
</script>
<style scoped>
    .main {
        width: 100%;
        height: 626px;
        position: absolute;
        left: 0;
        top: 0;
    }
    .pageNavbar {
        position: absolute;
        left: -94px;
        top: 0;
        width: 1280px;
        height: 42px;
        border-bottom: 1px solid #cccccc;
        line-height: 42px;
        font-size: 16px;
    }
    .registerBox {
        width: 100%;
        height: 580px;
        position: absolute;
        left: 0;
        top: 43px;
        overflow-y: scroll;
    }

</style>
