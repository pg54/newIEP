<template>
    <div class="tabs">
        <div class="tabsChoserWrap">
            <div class="tabs-chose">
                <li v-for="(tab, index) in tabs" :class="{active : currentTab === index }" @click="currentTab = index">{{tab}}
                </li>
            </div>
        </div>
        <div class="tabContentWrap" >
            <div class="tabs-content">
                <div v-for="(tab,index) in tabs" class="tab-content" v-show="currentTab === index">
                    <div v-if="index === 0">
                        <ConsultManage></ConsultManage>
                    </div>
                    <div v-if="index === 1">
                        <div class="toolArea">
                            <el-button style="" @click="rowAllAction('add')">新增服务</el-button>
                        </div>

                        <el-card class="cardBox colorHeader" :body-style="{ padding: '0px'}">
                            <div class="tableWrap">
                                <el-table :data="drServiceList" style="width: 100%">

                                    <el-table-column label="服务名称" width="180" prop="Name">
                                    </el-table-column>

                                    <el-table-column prop="Status" label="状态" :formatter="formatStatus" :filters="[
                                    { text: '等待审核', value: 1 },
                                    { text: '审核失败', value: 2 },
                                    { text: '审核通过', value: 3 },
                                    { text: '已上线', value: 4 },
                                    { text: '已下线', value: 5 }
                                    ]" :filter-method="filterTag">
                                    </el-table-column>

                                    <el-table-column prop="Location" label="地点" show-overflow-tooltip width="200">
                                    </el-table-column>

                                    <el-table-column prop="DeptName" label="科室">
                                    </el-table-column>

                                    <el-table-column prop="Tags" label="病种" show-overflow-tooltip :formatter="getTagInfo">
                                    </el-table-column>

                                    <el-table-column label="详情">
                                        <template scope="scope">
                                            <el-button @click.native.prevent="rowAllAction('check', scope.row)" type="text" size="small">
                                                <i class="el-icon-document"></i>
                                            </el-button>
                                        </template>
                                    </el-table-column>
                                    <el-table-column label="编辑">
                                        <template scope="scope">
                                            <el-button @click.native.prevent="rowAllAction('edit', scope.row)" type="text" size="small">
                                                <i class="el-icon-edit"></i>
                                            </el-button>
                                        </template>
                                    </el-table-column>

                                    <el-table-column label="删除">
                                        <template scope="scope">
                                            <el-button @click.native.prevent="rowAllAction('delete', scope.row)" type="text" size="small">
                                                <i class="el-icon-delete"></i>
                                            </el-button>
                                        </template>
                                    </el-table-column>

                                </el-table>
                            </div>
                            <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="serviceListPageSize" :total="total"
                                style="float:right;"></el-pagination>
                        </el-card>
                        
                        <!-- <el-form ref="testFormEl" :model="testForm" :rules="testRules">
                            <el-form-item prop="name">
                                <el-input type="text" v-model="testForm.name"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <button @click="resetForm">重置表单</button>
                            </el-form-item>
                        </el-form> -->

                        <el-dialog title="服务编辑" :visible="editFormVisible" :close-on-click-modal="false">
                            <el-form ref="addServiceformEle" :model="addServiceform" label-width="80px">
                                <el-form-item label="服务图例">
                                    <el-upload class="avatar-uploader" :action="getuploadURL()" :headers="getAuth()" :show-file-list="false" :on-success="handleAvatarScucess"
                                        :before-upload="beforeAvatarUpload">
                                        <img v-if="imageUrl" :src="imageUrl" class="avatar" v-model="addServiceform.Logo" style="width: 84px;height: 84px">
                                        <i v-else class="icon iconfont icon-upload" style="font-size: 50px"></i>
                                    </el-upload>
                                </el-form-item>

                                <el-form-item label="服务名称:">
                                    <el-input v-model="addServiceform.Name"></el-input>
                                </el-form-item>

                                <el-form-item label="服务价格:">
                                    <el-input v-model="addServiceform.Price"></el-input>
                                </el-form-item>


                                <el-form-item label="是否课时服务:">
                                    <el-switch v-model="useClassPeriod" on-text="" off-text="">
                                    </el-switch>
                                </el-form-item>

                                <el-form-item label="总课时:" v-show="useClassPeriod">
                                    <el-input v-model="addServiceform.Count"></el-input>
                                </el-form-item>

                                <el-form-item label="授课时间" v-show="useClassPeriod">
                                    <el-checkbox-group v-model="addServiceform.Rule.Col1">
                                        <el-checkbox v-for="(ele, index) in serviceTimes" :key="index" :label="ele"></el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>


                                <el-form-item label="服务地址:">
                                    <el-input v-model="addServiceform.Location"></el-input>
                                </el-form-item>

                                <el-form-item label="服务类型:">
                                    <el-select v-model="addServiceform.Type" placeholder="请选择">
                                        <el-option v-for="(ele, index) in serviceTypes" :key="index" :label="ele.Name" :value="ele.Value"></el-option>
                                    </el-select>
                                </el-form-item>

                                <el-form-item label="病种选择:">
                                    <el-select v-model="tagsArr" multiple placeholder="请选择">
                                        <el-option v-for="item in tagsOptions" :key="item.ID" :label="item.Name" :value="item.ID">
                                        </el-option>
                                    </el-select>
                                </el-form-item>


                                <el-form-item label="服务详情:">
                                    <el-input type="textarea" v-model="addServiceform.Comments"></el-input>
                                </el-form-item>

                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button @click.native="concelAction('edit')">返回</el-button>
                                <el-button type="primary" @click.native="addServiceSubmit">提交</el-button>
                            </div>
                        </el-dialog>

                        <el-dialog title="服务查看" :visible="serviceOrderVisible" :close-on-click-modal="false">

                            <el-form ref="addServiceformEle" :model="addServiceform" label-width="80px">

                                <el-form-item label="服务图例">
                                    <img :src="addServiceform.Logo" alt="logo" style="width: 84px;height: 84px">
                                </el-form-item>

                                <el-form-item label="服务名称:">
                                    <el-input v-model="addServiceform.Name" disabled></el-input>
                                </el-form-item>

                                <el-form-item label="服务价格:">
                                    <el-input v-model="addServiceform.Price" disabled></el-input>
                                </el-form-item>

                                <el-form-item label="是否课时服务:">
                                    <el-switch v-model="useClassPeriod" disabled on-text="" off-text="">
                                    </el-switch>
                                </el-form-item>

                                <el-form-item label="总课时:" v-show="useClassPeriod">
                                    <el-input v-model="addServiceform.Count" disabled></el-input>
                                </el-form-item>

                                <el-form-item label="授课时间" v-show="useClassPeriod">
                                    <el-checkbox-group v-model="addServiceform.Rule.Col1">
                                        <el-checkbox v-for="(ele, index) in serviceTimes" :key="index" :label="ele" :disabled="true"></el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>

                                <el-form-item label="服务地址:">
                                    <el-input v-model="addServiceform.Location" disabled></el-input>
                                </el-form-item>

                                <el-form-item label="服务类型:">
                                    <el-select v-model="addServiceform.Type" disabled placeholder="请选择">
                                        <el-option v-for="(ele, index) in serviceTypes" :key="index" :label="ele.Name" :value="ele.Value"></el-option>
                                    </el-select>
                                </el-form-item>

                                <el-form-item label="病种选择:">
                                    <el-select v-model="tagsArr" multiple disabled placeholder="请选择">
                                        <el-option v-for="item in tagsOptions" :key="item.ID" :label="item.Name" :value="item.ID">
                                        </el-option>
                                    </el-select>
                                </el-form-item>

                                <el-form-item label="服务详情:">
                                    <el-input type="textarea" v-model="addServiceform.Comments" disabled></el-input>
                                </el-form-item>

                            </el-form>

                            <div slot="footer" class="dialog-footer">
                                <el-button @click.native="concelAction('check')">返回</el-button>
                            </div>
                        </el-dialog>

                        <el-dialog title="新增服务" :visible="addServiceFormVisible" :close-on-click-modal="false">
                            <el-form ref="addServiceformEle" :model="addServiceform" label-width="80px">

                                <el-form-item label="服务图例">
                                    <el-upload class="avatar-uploader" :action="getuploadURL()" :headers="getAuth()" :show-file-list="false" :on-success="handleAvatarScucess"
                                        :before-upload="beforeAvatarUpload">
                                        <img v-if="imageUrl" :src="imageUrl" class="avatar" v-model="addServiceform.Logo" style="width: 84px;height: 84px">
                                        <i v-else class="icon iconfont icon-upload" style="font-size: 50px"></i>
                                    </el-upload>
                                </el-form-item>

                                <el-form-item label="服务名称:">
                                    <el-input v-model="addServiceform.Name"></el-input>
                                </el-form-item>

                                <el-form-item label="服务价格:">
                                    <el-input v-model="addServiceform.Price"></el-input>
                                </el-form-item>


                                <el-form-item label="是否课时服务:">
                                    <el-switch v-model="useClassPeriod" on-text="" off-text="">
                                    </el-switch>
                                </el-form-item>


                                <el-form-item label="总课时:" v-show="useClassPeriod">
                                    <el-input v-model="addServiceform.Count"></el-input>
                                </el-form-item>

                                <el-form-item label="授课时间" v-show="useClassPeriod">
                                    <el-checkbox-group v-model="addServiceform.Rule.Col1">
                                        <el-checkbox v-for="(ele, index) in serviceTimes" :key="index" :label="ele"></el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>

                                <el-form-item label="服务地址:">
                                    <el-input v-model="addServiceform.Location"></el-input>
                                </el-form-item>

                                <el-form-item label="服务类型:">
                                    <el-select v-model="addServiceform.Type" placeholder="请选择">
                                        <el-option v-for="(ele, index) in serviceTypes" :key="index" :label="ele.Name" :value="ele.Value"></el-option>
                                    </el-select>
                                </el-form-item>

                                <el-form-item label="病种选择:">
                                    <el-select v-model="tagsArr" multiple placeholder="请选择">
                                        <el-option v-for="item in tagsOptions" :key="item.ID" :label="item.Name" :value="item.ID">
                                        </el-option>
                                    </el-select>

                                </el-form-item>

                                <el-form-item label="服务详情:">
                                    <el-input type="textarea" v-model="addServiceform.Comments"></el-input>
                                </el-form-item>

                            </el-form>

                            <div slot="footer" class="dialog-footer">
                                <el-button @click.native="concelAction('add')">返回</el-button>
                                <el-button type="primary" @click.native="addServiceSubmit()">提交</el-button>
                            </div>
                        </el-dialog>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import api from '../../../api/index.js';
    import ConsultManage from '../../../components/MyServiceManageConsult.vue';
    export default {
        name: 'serviceManage',
        components: {
            ConsultManage
        },
        data() {
            return {
                currentTab: 0,
                consultData: [],
                tabs: ['咨询管理', '服务管理'],
                serviceTimes: [
                    '周一',
                    '周二',
                    '周三',
                    '周四',
                    '周五',
                    '周六',
                    '周日',
                ],
                drServiceList: [],
                serviceOrderData: [],
                total: 1,
                orderTotal: '',
                serviceOrderVisible: false,
                addServiceFormVisible: false,
                editFormVisible: false,
                serviceID: '',
                imageUrl: '',
                imgMsg: '',
                tagsOptions: [],
                serivceListPageIndex: 1,
                serviceListPageSize: 10,
                tagsArr: [],
                serviceTypes: [], //服务类型
                addServiceform: {
                    Name: '',
                    Logo: '',
                    Price: '',
                    Type: '',
                    Comments: '',
                    Location: '',
                    Count: '',
                    Rule: {
                        Type: '1',
                        Col1: [],
                    },
                    Tags: []
                },
                useClassPeriod: false,
                testForm: {
                    name: ''
                },
                testRules: {
                    name: [{
                        required: true,
                        message: '请输入账号',
                        trigger: 'blur'
                    }],
                }
            };
        },
        computed: {
            chosedTags: function () {
                let tags = [];
                for (let i = 0; i < this.tagsArr.length; i++) {
                    tags.push({
                        TagID: this.tagsArr[i]
                    });
                }
                return tags
            }
        },
        methods: {
            filterTag(value, row) {
                return row.Status === value;
            },
            getTagesArr(obj) {
                let tagsArr = []
                for (let ele in obj) {
                    tagsArr.push(obj[ele].TagID);
                }
                this.tagsArr = tagsArr;
            },
            formatStatus: function (row, column) {
                var status = row.Status;
                var resulut;
                switch (status) {
                    case 1:
                        resulut = '等待审核';
                        break;
                    case 2:
                        resulut = '审核失败';
                        break;
                    case 3:
                        resulut = '审核通过';
                        break;
                    case 4:
                        resulut = '已上线';
                        break;
                    case 5:
                        resulut = '已下线';
                        break;
                }
                return resulut;
            },
            //获取病种名称
            getTagInfo: function (row, column) {
                var tags = row.Tags;
                if (tags.length > 0) {
                    return tags[0].TagName;
                }
                return '';
            },
            //获取病种列表
            getDiagnosisesList() {
                api.getDiagnosises().then(res => {
                    this.tagsOptions = res.List[0].Diagnosises;
                });
            },
            getuploadURL() {
                return api.uploadIMGURL;
            },
            concelAction(concelStatus) {
                this.useClassPeriod = false;
                switch (concelStatus) {
                    case 'edit':
                        this.editFormVisible = false;
                        break;
                    case 'add':
                        this.addServiceFormVisible = false;
                        break;
                    case 'check':
                        this.serviceOrderVisible = false;
                        break;
                }
            },
            //编辑、添加服务
            addServiceSubmit() {
                var that = this;
                let obj = JSON.parse(JSON.stringify(that.addServiceform))
                obj.Tags = that.chosedTags;
                if (this.useClassPeriod) {
                    if (obj.Rule.Col1.length > 0) {
                        obj.Rule.Col1 = that.formatTime(obj.Rule.Col1);
                    } else {
                        obj.Rule.Col1 = [];
                    }
                } else {
                    delete obj.Rule;
                    delete obj.Count;
                }
                let foo = that.checkAddformRules(obj);
                if (foo) {
                    api.addDrService(obj).then(res => {
                        let msg = res.Msg
                        if (res.Code === 0) {
                            that.$message.success('保存成功');
                            that.refreshForm();
                            that.addServiceFormVisible = false;
                            that.editFormVisible = false;
                            that.getServiceList();
                        } else {
                            that.$message.warning(msg);
                        }
                    }).catch(function (err) {
                        that.$message.error(err.Msg);
                    });
                    this.useClassPeriod = false;
                }
            },
            checkAddformRules(arr) {
                let statusArr = [false, false, false, false, false, false, false, false];
                if (arr.Logo === '') {
                    this.$message.warning('请上传图片');
                } else {
                    statusArr[0] = true;
                }
                if (arr.Name === '') {
                    this.$message.warning('请输入服务名称');
                } else {
                    statusArr[1] = true;
                }

                if (Number(arr.Price) > 0) {
                    statusArr[2] = true;
                } else {
                    this.$message.warning('请输入正确的价格');
                }

                statusArr[3] = true;

                if (arr.Location === '') {
                    this.$message.warning('请输入服务地址');
                } else {
                    statusArr[4] = true;
                }

                if (arr.Type === '') {
                    this.$message.warning('请选择服务类型');
                } else {
                    statusArr[5] = true;
                }

                if (arr.Tags.length === 0) {
                    this.$message.warning('请选择病种类型');
                } else {
                    statusArr[6] = true;
                }
                if (arr.Comments === '') {
                    this.$message.warning('请输入服务详情');
                } else {
                    statusArr[7] = true;
                }
                let statusResult = statusArr.filter(function (ele) {
                    return ele === true;
                })
                if (statusResult.length === 8) {
                    return true;
                } else {
                    return false;
                }
            },
            //获取医生服务列表
            getServiceList() {
                api.getDrServiceList(this.serivceListPageIndex, this.serviceListPageSize).then(res => {
                    var foo = res.data.Records;
                    this.drServiceList = foo.map(function (ele) {
                        ele.Type = '' + 　ele.Type
                        ele.Price = '' + ele.Price
                        return ele;
                    });
                    this.total = res.data.Total;
                });
            },
            getServiceTypes() {
                api.getServiceType().then(res => {
                    this.serviceTypes = res.data.List;
                })
            },
            getAuth() {
                return {
                    'authorization': localStorage.getItem('accessToken')
                };
            },
            //添加服务
            refreshForm() {
                this.addServiceform = {
                    Name: '',
                    Logo: '',
                    Price: '',
                    Type: '',
                    Comments: '',
                    Location: '',
                    Count: '',
                    Rule: {
                        Type: '1',
                        Col1: [],
                    },
                    Tags: []
                };
                this.imageUrl = '';
                this.tagsArr = [];
                this.addServiceFormVisible = true;
            },
            //查看、编辑、删除
            rowAllAction(actionStatus, row) {
                if (actionStatus === 'add') {
                    this.refreshForm();
                } else if (actionStatus === 'delete') {
                    var params = row.ID;
                    api.deleteService(params).then(res => {
                        var code = res.Code;
                        if (code === 0) {
                            this.$message.success('删除成功');
                        } else if (code === 1) {
                            this.$message.success('服务存在');
                        } else if (code === 2) {
                            this.$message.success('服务正在使用');
                        } else {
                            this.$message.error('操作异常');
                        }
                        this.getServiceList();
                    });
                } else {
                    var params = row.ID;
                    api.getDrServiceDetail(params).then(res => {
                        if (res.status === 200) {
                            console.log(res);
                            var newRow = JSON.parse(JSON.stringify(res.data))
                            this.formatRes(newRow)
                            if (actionStatus === 'edit') {
                                this.editFormVisible = true;
                            } else if (actionStatus === 'check') {
                                this.serviceOrderVisible = true;
                            }
                        }
                    }).catch(function (err) {
                        that.$message.error(err.Msg);
                    });
                }
            },
            formatRes(row) {
                if (row.Rule) { //开启了课时服务
                    this.useClassPeriod = true;
                    if (row.Rule.Col1 === '') { //开启了课时服务，没有安排
                        row.Rule.Col1 = [];
                    } else {
                        var arr = row.Rule.Col1.split('-').map(ele => this.serviceTimes[ele - 1]);
                        row.Rule.Col1 = arr;
                    }
                } else { //该服务没开启课时服务，默认是没有Rule字段，编辑时可能回开启课时服务，添加上该字段
                    row.Rule = {
                        Col1: [],
                        Type: '1',
                    }
                }
                this.addServiceform = row;
                this.imageUrl = this.addServiceform.Logo;
                this.getTagesArr(this.addServiceform.Tags);
            },
            //分页跳转
            handleCurrentChange(pageIndex) {
                this.serivceListPageIndex = pageIndex;
                this.getServiceList();
            },
            handleAvatarScucess(res, file) {
                if (res.Code === 0) {
                    this.imageUrl = res.Path;
                    this.addServiceform.Logo = res.Msg;
                } else {
                    this.$message.error('没有找到文件');
                }
            },
            beforeAvatarUpload(file) {

            },
            formatTime(time) {
                let serviceTimes = this.serviceTimes
                return time.map(function (ele) {
                    return serviceTimes.indexOf(ele) + 1
                }).join('-')
            },
            resetForm() {
                console.log('重置表单');
                console.log(this.$refs.testFormEl)
                this.$refs.testFormEl[0].resetFields();
            }
        },
        created() {
            this.getServiceList();
            this.getDiagnosisesList();
            this.getServiceTypes();
        }
    };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .tabs {
        width: 100%;
        display: flex;
        align-items: stretch
    }

    .tabs-chose {
        width: 106px;
        height: 583px;
        border-right: 1px solid #EFEFEF
    }

    .tabs-content {
        width: 1080px;
        height: 583px;
    }

    .tabs-chose li {
        width: 105px;
        height: 70px;
        text-align: center;
        line-height: 70px;
        cursor: pointer;
    }

    .toolArea {
        display: flex;
        justify-content: flex-end;
        width: 1040px;
        margin: 5px auto;
    }

    .icon-msnui-cloud-upload {
        font-size: 60px
    }

    .tabs-chose .active {
        color: #48C4FC;
    }

    .colorHeader {
        border-top: 4px solid RGBA(49, 187, 252, 1.00)
    }

    .cardBox {
        width: 1040px;
        margin: 0 auto;
    }

    .tableWrap {
        width: 100%;
        height: 460px;
    }

</style>
