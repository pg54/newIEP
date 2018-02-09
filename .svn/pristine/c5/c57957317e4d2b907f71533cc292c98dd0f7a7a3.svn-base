<template>
  <div>
      <vueTab :tabtitles="['新订单','未回复','已回复']" :current-page="1">
          <div class="tab-content-container">
              <div class="tab">
                  <Tabs class="pg-tab" :tabs="tabsdata" :dymaStatus='0'></Tabs>
              </div>
          </div>

          <div class="tab-content-container">
              <div class="tab">
                  <Tabs class="pg-tab" :tabs="tabsdata" :dymaStatus='1'></Tabs>
              </div>

          </div>
          <div class="tab-content-container">
              <div class="tab">
                  <Tabs class="pg-tab" :tabs="tabsdata" :dymaStatus='2'></Tabs>
              </div>
          </div>
      </vueTab>
  </div>
</template>
<script>
  import Tabs from '../Tabs';
  import vueTab from '../../../components/vue-tab.vue';
  export default {
    name: 'serviceDyma',
    components: {
      vueTab,
      Tabs
    },
    data() {
      return {
        tabsdata: ['图文咨询', '视频咨询', '康教管家']
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
<style scoped>
  .tab {position: relative;width: 100%;height: 570px;}
</style>
