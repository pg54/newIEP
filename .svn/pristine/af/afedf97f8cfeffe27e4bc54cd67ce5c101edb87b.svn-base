<template>
  <div class="centerInfo">
    <p class="headTitle">单位详情</p>
    <el-card :body-style="{ padding: '0px' } " class="card">
      <div class="mainContent">
        <div>
          <p>
            <span class="leftText">单位名称:</span>
            <span class="title">{{ institutionInfo.Name }}</span>
          </p>
        </div>
        <div>
          <p>
            <span class="leftText">单位类型: </span>
            <span class="title">{{ institutionInfo.TypeName }}</span>
          </p>
        </div>

        <div>
          <p>
            <span class="leftText">级别: </span>
            <span class="title ">{{ institutionInfo.LevelName }}</span>
          </p>

        </div>
        <div>
          <p>
            <span class="leftText">城市:</span>
            <span class="title ">{{ institutionInfo.Area }}</span>
          </p>

        </div>
        <div>
          <p>
            <span class="leftText">详细地址: </span>
            <span class="title">{{ institutionInfo.Address }}</span>
          </p>

        </div>
        <div>
          <p>
            <span class="leftText">联系方式: </span>
            <span class="title">{{ institutionInfo.Phone }}</span>
          </p>

        </div>
        <div>
          <p class="intro">
            <span class="leftText">单位介绍:</span>
            <span class="title right">{{ institutionInfo.Comments }}</span>
          </p>
        </div>

      </div>

    </el-card>
  </div>
</template>
<script>
import api from '../../api/index.js';

export default {
  name: 'serviceFile',
  data() {
    return {
      institutionInfo: []
    };
  },
  methods: {
    init() {
      api.drProfile().then(res => {
        api.institutionInfo(res.data.InstitutionID).then(res => {
          this.institutionInfo = res.data;
        });
      });
    }
  },
  mounted() {
  },
  created() {
    this.init();
  }
};
</script>
<style scoped>
.centerInfo {
  width: 90%;
  height: 583px;
  margin: 0 auto;
    padding-top: 20px;
}

.card {
  width: 1026px;
  height: 518px
}


.mainContent {
  width: 90%;
  margin: 20px auto
}

.mainContent p {
    font-size: 16px;
    font-weight: bold;
}

.mainContent>div:nth-child(1) {
  margin-top: 20px
}

.mainContent>div {
  margin-bottom: 20px
}

.title {
  font-size: 18px;
  margin-left: 20px;
  font-weight: normal
}

.right {
  margin-left: 20px;
  display: inline-block;
  width: 500px
}

.level {
  margin-left: 70px
}

.city {
  margin-left: 70px
}

.intro {}

.leftText {
  float: left;
  width: 100px;
  text-align: right;
}

.headTitle {
  margin-bottom: 14px;
    font-size: 18px;
    font-weight: bold;
}
</style>
