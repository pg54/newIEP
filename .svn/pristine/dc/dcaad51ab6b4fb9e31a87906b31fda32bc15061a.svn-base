<template>
    <div v-if="showTabsContent">
        <div v-for="(tab,index) in tabs" class="tab-content" v-show="currentTab === index">

            <div v-if="index === 0">

                <div class="center-content">

                    <div class="toolBox">
                        <div class="addWrap">
                            <el-button @click="addCollectivePlan">新增计划</el-button>
                        </div>
                    </div>

                    <div class="newsList">

                        <div v-for="o in collectiveData" class="item">
                            <div class="planBox">
                                <div class="planBoxLeft">
                                    <span class="planTitle">{{o.Title}}</span>
                                </div>
                                <div class="planBoxRight">
                                    <el-button @click="goPlanDetails(o.ID)">详情</el-button>
                                    <el-button @click="modifyCollectivePlan(o)">修改</el-button>
                                    <el-button>删除</el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="float: right">
                        <el-pagination
                                @current-change="collectiveNextPage"
                                layout="prev, pager, next"
                                :total="collectiveTotal">
                        </el-pagination>
                    </div>

                </div>

            </div>

            <div v-if="index === 1">


                <div class="center-content">

                    <div class="toolBox">
                        <div class="addWrap">
                            <el-button @click="addPersonoalPlan">新增计划</el-button>
                        </div>
                    </div>

                    <div class="newsList">

                        <div v-for="o in persononalData" class="item">
                            <div class="planBox">
                                <div class="planBoxLeft">
                                    <span class="planTitle">{{o.Title}}</span>
                                </div>
                                <div class="planBoxRight">
                                    <el-button @click="goPlanDetails(o.ID)">详情</el-button>
                                    <el-button @click="modifyPersonoalPlan(o)">修改</el-button>
                                    <el-button>删除</el-button>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div style="float: right">
                        <el-pagination
                                @current-change="persononalNextPage"
                                layout="prev, pager, next"
                                :total="persononalTotal">
                        </el-pagination>
                    </div>


                </div>
            </div>
        </div>

    </div>
</template>
<script>

  export default {
    name: ''
  };
</script>
<style scoped>

</style>
