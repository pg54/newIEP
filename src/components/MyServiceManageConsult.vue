<template>
    <div class="consultManage">
        <div class="consultItem">

            <div class="inlineWrap">
                <img src="../assets/images/图文.png" alt="logo" class="leftImg">
                <span class="title">图文咨询</span>
            </div>

            <div class="inlineWrap">
                <span class="noticePrice">设置价格(元/次)</span>
                <el-input v-model="service1.Price" placeholder="￥30/次" style="width: 100px"></el-input>
            </div>


            <el-switch v-model="service1.Valid" on-text="" off-text="" @change="switchChange">
            </el-switch>


            <el-button v-if="serviceOK" size="large" @click="submitServices(1,service1.Valid,service1.Price)">保存</el-button>
            <el-button v-if="!serviceOK" >服务暂未通过审核</el-button>


        </div>

        <div class="consultItem">

            <div class="inlineWrap">
                <img src="../assets/images/视频.png" alt="logo">
                <span class="title">视频咨询</span>
            </div>

            <div class="inlineWrap">
                <span class="noticePrice">设置价格(元/次)</span>
                <el-input v-model="service2.Price" placeholder="￥30/次" style="width: 100px"></el-input>
            </div>

            <el-switch v-model="service2.Valid" on-text="" off-text="">
            </el-switch>

            <el-button v-if="serviceOK" size="large" @click="submitServices(3,service2.Valid,service2.Price)">保存</el-button>
            <el-button v-if="!serviceOK" >服务暂未通过审核</el-button>


        </div>

        <div class="consultItem">

            <div class="inlineWrap">
                <img src="../assets/images/康复管家.png" alt="">
                <span class="title">康教管家</span>
            </div>

            <div class="inlineWrap">
                <span class="noticePrice">设置价格(元/次)</span>
                <el-input v-model="service3.Price" placeholder="￥30/次" style="width: 100px"></el-input>
            </div>

            <el-switch v-model="service3.Valid" on-text="" off-text="">
            </el-switch>

            <el-button v-if="serviceOK" size="large" @click="submitServices(4,service3.Valid,service3.Price)">保存</el-button>
            <el-button v-if="!serviceOK" >服务暂未通过审核</el-button>

        </div>
    </div>
</template>
<script>
    import api from '../api/index.js';

    export default {
        name: 'consultManage',
        computed: {},
        data() {
            return {
                service1: {Price: '', Valid: false},
                service2: {Price: '', Valid: false},
                service3: {Price: '', Valid: false},
                serviceOK: true
            }
        },
        methods: {
            switchChange() {
                console.log('当前的值');
                console.log(this.service1.Valid);
            },
            submitServices(index, swith, price) {
                if (this.serviceOK) {
                    var params = {
                        'Value': String(index),
                        'Price': String(price)
                    };
                    if (swith === true) {
                        api.DrServiceOpen(params).then(res => {
                            let msg = res.Msg;
                            if (res.Code === 0) {
                                this.$message({
                                    message: '开通成功',
                                    type: 'success'
                                });
                            }
                            else if (res.Code === 1) {
                                this.$message({
                                    message: msg,
                                    type: 'warning'
                                });
                            }
                            else if (res.Code === 2) {
                                this.$message({
                                    message: msg,
                                    type: 'warning'
                                });
                            }
                            else if (res.Code === 3) {
                                this.$message({
                                    message: msg,
                                    type: 'warning'
                                });
                            }
                            else if (res.Code === 4) {
                                this.$message({
                                    message: msg,
                                    type: 'warning'
                                });
                            }
                        })
                            .catch(err => {
                                this.$message({
                                    message: '网络错误，请重试',
                                    type: 'error'
                                });
                            })
                    } else {
                        var par = {'id': params.Value}
                        api.DrServiceClose(par).then(res => {
                            let msg = res.Msg;
                            if (res.Code === 0) {
                                this.$message({
                                    message: '关闭成功',
                                    type: 'success'
                                });
                            }
                            else if (res.Code === 1) {
                                this.$message({
                                    message: msg,
                                    type: 'warning'
                                });
                            }
                            else if (res.Code === 2) {
                                this.$message({
                                    message: msg,
                                    type: 'warning'
                                });
                            }
                            else if (res.Code === 3) {
                                this.$message({
                                    message: msg,
                                    type: 'warning'
                                });
                            }
                            else if (res.Code === 4) {
                                this.$message({
                                    message: msg,
                                    type: 'warning'
                                });
                            }
                        })
                            .catch(err => {
                                this.$message({
                                    message: '网络错误，请重试',
                                    type: 'error'
                                });
                            })
                    }

                } else {
                    this.$message({
                        message: '服务暂未通过审核，请联系工作人员',
                        type: 'warning'
                    });
                }

            },
            //获取用户资料
            getUserProfile: function () {
                api.drProfile().then(res => {
                    if (res.data.Services.length === 0) {
                        // this.serviceOK = false;
                    }else {
                        this.serviceOK = true;
                        if (res.data.Services[0].Valid) {
                            this.service1.Valid = res.data.Services[0].Valid;
                            this.service1.Price = res.data.Services[0].Price;
                        } else {
                            this.service1.Valid = res.data.Services[0].Valid;
                            this.service1.Price = '';  //即使是valid为false,price还是有值得
                        }
                        if (res.data.Services[1].Valid) {
                            this.service2.Valid = res.data.Services[1].Valid;
                            this.service2.Price = res.data.Services[1].Price;
                        } else {
                            this.service2.Valid = res.data.Services[1].Valid;
                            this.service2.Price = '';  //即使是valid为false,price还是有值得
                        }
                        if (res.data.Services[2].Valid) {
                            this.service3.Valid = res.data.Services[2].Valid;
                            this.service3.Price = res.data.Services[2].Price;
                        } else {
                            this.service3.Valid = res.data.Services[2].Valid;
                            this.service3.Price = '';  //即使是valid为false,price还是有值的
                        }
                    }
                });
            }
        },
        created: function () {
            this.getUserProfile();
        },
    };
</script>
<style scoped>
    .consultManage {
        width: 1080px;
        height: 240px
    }

    .inlineWrap {
        display: inline-flex;
        align-items: center;
    }

    .inlineWrap img {
    }

    .consultItem {
        width: 100%;
        height: 80px;
        padding: 0 20px;
        border-bottom: 1px solid RGBA(239, 239, 239, 1.00);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .demo-form-inline > span {
        margin-right: 146px
    }

    .title {
        margin-left: 10px
    }
    .noticePrice {
        margin-right: 10px;
    }
</style>
