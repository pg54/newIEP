<template>
  <div class="main">
    <div class="pageNavbar">
      <span style="color: black">当前位置&nbsp;&nbsp;>&nbsp;&nbsp;</span>
      <span @click="goBack">
        <i style="font-size: 16px;font-weight: bold">{{ chosedPatientName}}&nbsp;</i>的康复档案&nbsp;&nbsp;>&nbsp;&nbsp;</span>
      <span>附件上传&nbsp;&nbsp;>&nbsp;&nbsp;</span>
    </div>
      <div class="attachmentBox">
          <AttachUpload></AttachUpload>
      </div>
  </div>
</template>
<script>
import api from '../../../api/index.js';
import AttachUpload from '../../../components/AttachmentUpload.vue';
export default {
  name: 'RFAttachment',
    components: {
        AttachUpload
    },
  computed: {
    chosedPatientName: function () {
      return this.$store.state.mystudent.currentPatientId.Name;
    }
  },
  data() {
    return {


    }
  },
  methods: {
    goBack() {
      this.$store.dispatch('setShowPacientList', true);
      this.$router.push({ path: '/studentFile' });
    },
  },
  created() {

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
.attachmentBox {
    width: 100%;
    height: 580px;
    position: absolute;
    left: 0;
    top: 43px;
    overflow-y: scroll;
}
</style>
