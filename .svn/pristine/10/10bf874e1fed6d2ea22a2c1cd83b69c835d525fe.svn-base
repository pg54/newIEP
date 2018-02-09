<template>
    <div>
        <div class="addTestFormWrap">
            <el-form ref="addTestform" :model="testFormData" label-width="100px">
                <el-form-item label="名称">
                    <el-input v-model="testFormData.Name" type="mini" style="width: 100%"></el-input>
                </el-form-item>
                <el-form-item label="课程包">
                    <el-select v-model="testFormData.PaperPackageID" placeholder="请选择课程包" style="width: 100%">
                        <el-option v-for="o in testPaperData" :label="o.Name" :value="o.ID"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="添加课程包:">
                    <el-collapse v-model="activeName" accordion>
                        <el-collapse-item title="" name="1">
                            <div class="checkBoxWrap">
                                <el-row :gutter="10">
                                    <el-col :span="16">
                                        <input class="onc-input" style="margin-left: 15px" placeholder="请输入课程包名" v-model="addPackageOBJ.Name">
                                    </el-col>
                                    <el-col :span="8">
                                        <el-button style="margin-left: 15px" @click="createNewPakage()">确认添加新的课程包</el-button>
                                    </el-col>
                                </el-row>

                                <el-checkbox-group v-model="addPackageOBJ.Courses">
                                    <el-checkbox v-for="item in courseData" :label="item.ID" class="courseCheckBox">{{ item.Name }}</el-checkbox>
                                </el-checkbox-group>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </el-form-item>

            </el-form>
        </div>
        <div class="addTestsubmit">
            <el-button @click.native="submitTestPaper">确认</el-button>
        </div>

    </div>
</template>
<script>
    import api from '../api/index.js';
    export default {
        name: 'createNewAnalysist',
        data () {
          return {
            testFormData: {
                    Name: '',
                    PaperPackageID: ''
                },
                addPackageOBJ: {
                    Courses: [],
                    Name: ''
                },
                courseData: [],
          }
        },
        methods: {
          getCheckBoxContents() {
            api.getIEPCourses().then(res => {
                    this.courseData = res.data.List;
                });
          },
          createNewPakage() {
                let CourseIDs = this.addPackageOBJ.Courses.map(function (ele) {
                    let obj = {
                        ID: ele
                    }
                    return obj
                })
                let name = this.addPackageOBJ.Name
                if (CourseIDs.length === 0) {
                    this.$message.warning('请选中课程!');
                    return;
                }
                if (name === "") {
                    this.$message.warning('请输入课程包名称!');
                    return;
                }
                let params = {
                    Courses: CourseIDs,
                    Name: name
                }
                api.addPackage(params).then(res => {
                    if (res.Code === 0) {
                        this.$message.success('课程包添加成功');
                        this.activeName = '2'
                        api.requestCourseList().then(res => {
                            this.testPaperData = res.List;
                        }).catch(err => {
                            this.$message.error('网络错误');
                        })
                    } else {
                        this.$message.warning(res.Msg)
                    }
                }).catch(err => {
                    this.$message.error('网络错误');
                })
            },
            submitTestPaper() {
                let params = this.testFormData;
                api.addTestPaper(params).then(res => {
                    if (res.Code === 0) {
                        this.$message.success('成功');
                        this.addTestPaperVisible = false;
                        this.getTestList(this.testedPatientCurrentPage);
                    } else {
                        this.$message.err('失败');
                    }
                });
            },
          requestInitData() {
            this.getCheckBoxContents(); //获取课程list

          },
        },
        created() {
          this.requestInitData();
        }
    }

</script>

<style scoped>
    .courseCheckBox {
        width: 200px;
        height: 40px;
        line-height: 40px;
    }

    .courseCheckBox:nth-child(1) {
        margin-left: 15px
    }

    .onc-input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #bfcbd9;
        box-sizing: border-box;
        color: #1f2d3d;
        display: block;
        font-size: inherit;
        height: 36px;
        line-height: 1;
        outline: 0;
        padding: 3px 10px;
        transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
        width: 100%;
    }

    .onc-input:focus {
        border: 1px solid rgba(32, 160, 255, 1);
    }
</style>

