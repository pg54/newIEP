<template>

  <div class="maintontent">

    <el-card>

      <div class="basicHeader">
        <h1>{{ questions.PaperName }}</h1>
      </div>

      <div class="basicInfo">
        <p>创建时间:{{ questions.CreatedOn }}</p>
        <p>完成状态:{{ questions.Status?"已完成":"未完成" }}</p>
      </div>

      <!--EditType 编辑类型，1病人，2医生-->
      <div class="questionBoxs">
        <li v-for="item in questions.Items" :key="item.Type">
          <!--选择题-->
          <div v-show="item.Type === 1">
            <h2><span>{{item.Sequence}}:</span>{{ item.Title}}</h2>
            <el-radio-group v-model="item.Sequence">
              <el-radio disabled v-for="ele in item.Options" :key="ele.ID" :label="ele.Result">{{ele.Name}}</el-radio>
            </el-radio-group>
          </div>

          <!--单行文本-->
          <div v-show="item.Type === 2">
            <h2><span>{{item.Sequence}}:</span>{{ item.Title}}</h2>
            <el-input placeholder="" v-model="item.Result"></el-input>
          </div>

          <!--多行文本-->
          <div v-show="item.Type === 3">
            <h2><span>{{item.Sequence}}:</span>{{ item.Title}}</h2>
            <el-input
              type="textarea"
              :rows="4"
              placeholder=""
              v-model="item.Result">
            </el-input>
          </div>
        </li>

      </div>


  </el-card>


  </div>
</template>
<script>
  export default {
    name: 'QuestionPaper',
    data() {
      return {
      };
    },
    computed: {
      questions: function () {
        return this.$store.state.questionPaper.questionsData;
      }
    },
    methods: {
    },
    components: {
    },
    mounted() {
    }
  };
</script>
<style scoped>
  .maintontent {width: 88%;margin: 10px auto}
  .basicHeader {width: 40%;margin: 0 auto}
  .basicInfo>p{border-bottom: 1px solid #F5F4F5;margin-bottom: 5px}
  .questionBoxs {margin-top: 20px}

</style>
