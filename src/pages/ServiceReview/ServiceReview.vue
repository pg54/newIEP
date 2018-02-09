<template>
    <div>
        <div class="center-content">
            <el-row :gutter="20">
            <el-col :span="6">
                <div class="grid-content">
                    <span>请选择时间范围</span>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content">
                    <span>开始时间</span>
                    <el-date-picker
                        v-model="serviceStartDate"
                        type="date"
                        placeholder="选择开始日期"
                        :picker-options="pickerOptions0">
                    </el-date-picker>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content">
                    <span>结束时间</span>
                    <el-date-picker
                        v-model="serviceEndDate"
                        type="date"
                        placeholder="选择结束日期"
                        :picker-options="pickerOptions0">
                    </el-date-picker>
                </div>
            </el-col>
        </el-row>
        </div>

    </div>
</template>
<script>
    import api from '../../api/index.js';
    export default {
        name: 'serviceReview',
        components: {

        },
        data() {
            return {
                pickerOptions0: {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 8.64e7;
                    }
                },
                serviceStartDate: null,
                serviceEndDate: null
            }
        },
        getPageData(pageIndex, startDate, endDate) {
            let params = {
                PageIndex: pageIndex,
                PageSize: 10,
                StartDate: startDate,
                EndDate: endDate
            }
            api.getServiceReviewData(params)
                .then( res => {

                })
                .catch( err => {

                })
        },
        getFirstPage() {
            let pageIndex = 1;
            let startDate = '2017-1-1';
            let endDate = '2017-6-26';

        },
        created(){
        }
    };
</script>
<style scoped>
    .center-content {
        width: 100%;
        height: 584px;
        padding: 5px 20px;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
        line-height: 36px;
    }

</style>
