<template>
    <div class="paperform-content">
        <div id="paperform-form1">
            <DIV style="LINE-HEIGHT: 30px;font-size: 22px" class=size16 align=center>
                <STRONG><font color="#20a0ff">{{ paperTitle + '入学登记表'}}</font></STRONG>
            </DIV>
            <TABLE border=0 cellSpacing=0 cellPadding=0 width="100%">
                <TBODY>
                    <TR>
                        <TD>
                            <font color="#20a0ff">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <SPAN></SPAN>
                            </font>
                        </TD>
                        <TD>
                            <font color="#20a0ff">档案编号：
                                <SPAN></SPAN>
                            </font>
                        </TD>
                    </TR>
                </TBODY>
            </TABLE>
        </div>
        <div id="paperform-form2">
            <table class="tg">
                <tr>
                    <th class="tg-s6z2" rowspan="5">儿<br>童<br>信<br>息</th>
                    <th class="tg-s6z2" colspan="3">姓名</th>
                    <th class="tg-031e" colspan="3">{{ userInfo.Name }}</th>
                    <th class="tg-s6z2">性<br>别</th>
                    <th class="tg-s6z2" colspan="3">{{ (userInfo.Sex === 1)? '男':'女' }}</th>
                    <th class="tg-s6z2" colspan="3">出生日期</th>
                    <th class="tg-s6z2" colspan="5">{{ userInfo.BirthDate ? userInfo.BirthDate.split(' ')[0]:''}}</th>
                    <th class="tg-s6z2" colspan="5" rowspan="4">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 贴照片 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </th>
                </tr>
                <tr>
                    <td class="tg-s6z2" colspan="3">临床诊断</td>
                    <td class="tg-031e" colspan="7">{{ userInfo.DiagnosisName }}</td>
                    <td class="tg-s6z2" colspan="3">诊断日期</td>
                    <td class="tg-s6z2" colspan="5">{{ userInfo.DiagnosisDate }}</td>
                </tr>
                <tr>
                    <td class="tg-s6z2" colspan="3">诊断科室</td>
                    <td class="tg-031e" colspan="7">
                        {{ curPatientDeptName }}
                    </td>
                    <td class="tg-s6z2" colspan="3">入学时间</td>
                    <td class="tg-s6z2" colspan="5"></td>
                </tr>
                <tr>
                    <td class="tg-s6z2" colspan="3">户籍<br>所在地</td>
                    <td class="tg-031e" colspan="15">{{ userInfo.Area}}</td>
                </tr>
                <tr>
                    <td class="tg-s6z2" colspan="3">现居住<br>地址</td>
                    <td class="tg-031e" colspan="12">{{ userInfo.Address2 }}</td>
                    <td class="tg-s6z2" colspan="3">家庭电话</td>
                    <td class="tg-s6z2" colspan="5"></td>
                </tr>


                <tr v-if="userInfo.Member1">
                    <td class="tg-s6z2" rowspan="8">家<br>庭<br>情<br>况</td>
                    <td class="tg-s6z2" colspan="3">父亲姓名</td>
                    <td class="tg-031e" colspan="3">{{ userInfo.Member1.Name }}</td>
                    <td class="tg-s6z2" rowspan="3">年<br>龄</td>
                    <td class="tg-s6z2" colspan="2">{{ userInfo.Member1.Age }}</td>
                    <td class="tg-s6z2" rowspan="3">文<br>化<br>程<br>度</td>
                    <td class="tg-s6z2" colspan="2">{{ userInfo.Member1.Degree }}</td>
                    <td class="tg-s6z2" rowspan="3">工<br>作<br>单<br>位<br>及<br>职<br>务</td>
                    <td class="tg-s6z2" colspan="4">{{ userInfo.Member1.WorkUnit }}</td>
                    <td class="tg-s6z2" rowspan="3">联<br>系<br>电<br>话</td>
                    <td class="tg-s6z2" colspan="5">{{ userInfo.Member1.Mobile }}</td>
                </tr>
                <tr v-else>
                    <td class="tg-s6z2" colspan="3">父亲姓名</td>
                    <td class="tg-031e" colspan="3"></td>
                    <td class="tg-s6z2" colspan="2"></td>
                    <td class="tg-s6z2" colspan="2"></td>
                    <td class="tg-s6z2" colspan="4"></td>
                    <td class="tg-s6z2" colspan="5"></td>
                </tr>

                <tr v-if="userInfo.Member2">
                    <td class="tg-s6z2" colspan="3">母亲姓名</td>
                    <td class="tg-031e" colspan="3">{{ userInfo.Member2.Name }}</td>
                    <td class="tg-s6z2" colspan="2">{{ userInfo.Member1.Age }}</td>
                    <td class="tg-s6z2" colspan="2">{{ userInfo.Member1.Degree }}</td>
                    <td class="tg-s6z2" colspan="4">{{ userInfo.Member1.WorkUnit }}</td>
                    <td class="tg-s6z2" colspan="5">{{ userInfo.Member1.Mobile }}</td>
                </tr>
                <tr v-else>
                    <td class="tg-s6z2" colspan="3">母亲姓名</td>
                    <td class="tg-031e" colspan="3"></td>
                    <td class="tg-s6z2" colspan="2"></td>
                    <td class="tg-s6z2" colspan="2"></td>
                    <td class="tg-s6z2" colspan="4"></td>
                    <td class="tg-s6z2" colspan="5"></td>
                </tr>

                <tr v-if="userInfo.Member3">
                    <td class="tg-s6z2" colspan="3">其他成员</td>
                    <td class="tg-031e" colspan="3">{{ userInfo.Member3.Name }}</td>
                    <td class="tg-s6z2" colspan="2"> {{ userInfo.Member3.Age }}</td>
                    <td class="tg-s6z2" colspan="2"> {{ userInfo.Member3.Degree }}</td>
                    <td class="tg-s6z2" colspan="4"> {{ userInfo.Member3.WorkUnit }}</td>
                    <td class="tg-s6z2" colspan="5"> {{ userInfo.Member3.Mobile }}</td>
                </tr>
                <tr v-else>
                    <td class="tg-s6z2" colspan="3">其他成员</td>
                    <td class="tg-031e" colspan="3"></td>
                    <td class="tg-s6z2" colspan="2"></td>
                    <td class="tg-s6z2" colspan="2"></td>
                    <td class="tg-s6z2" colspan="4"></td>
                    <td class="tg-s6z2" colspan="5"></td>
                </tr>

                <tr>
                    <td class="tg-s6z2" colspan="3">家庭模式</td>
                    <td class="tg-031e" colspan="20">
                        <br><br>
                        <span v-for="(ele,index) in fcData[0]">{{ele.Name}}（
                                        <img v-if="userInfo.FamilyModel === ele.Name" src="../assets/images/print/勾.png" alt="print">
                                        ）&nbsp;&nbsp;&nbsp;</span>
                        <br><br>
                    </td>
                </tr>

                <tr>
                    <td class="tg-s6z2" colspan="3">居住社区</td>
                    <td class="tg-031e" colspan="20">
                        <br><br>
                        <span v-for="(ele,index) in fcData[1]">{{ele.Name}}（
                                        <img v-if="userInfo.Community === ele.Name" src="../assets/images/print/勾.png" alt="print">
                                        ）&nbsp;&nbsp;&nbsp;</span>
                        <br><br>
                    </td>
                </tr>

                <tr>
                    <td class="tg-s6z2" colspan="3">教养方式</td>
                    <td class="tg-031e" colspan="20">
                        <br><br>
                        <span v-for="(ele,index) in fcData[2]">
                                        {{ele.Name}}
                                        （<img v-if="userInfo.EducationStyle === ele.Name" src="../assets/images/print/勾.png" alt="print">）&nbsp;&nbsp;&nbsp;
                        </span>
                        <br><br>
                    </td>
                </tr>

                <tr>
                    <td class="tg-s6z2" colspan="3">语言环境</td>
                    <td class="tg-031e" colspan="20">
                        <br><br>
                        <span v-for="(ele,index) in fcData[3]">{{ele.Name}}（
                                        <img v-if="userInfo.Language === ele.Name" src="../assets/images/print/勾.png" alt="print">
                                        ）&nbsp;&nbsp;&nbsp;</span>
                        <span>{{userInfo.Language}}</span>
                        <br><br>
                    </td>
                </tr>

                <tr>
                    <td class="tg-s6z2" colspan="3">抚养/<br>带教人</td>
                    <td class="tg-031e" colspan="20">
                        <br><br>
                        <span v-for="(ele,index) in fcData[4]">{{ele.Name}}（
                                        <img v-if="userInfo.Dependents === ele.Name" src="../assets/images/print/勾.png" alt="print">
                                        ）&nbsp;&nbsp;&nbsp;</span>
                        <br><br>
                    </td>
                </tr>

                <tr>
                    <td class="tg-s6z2" rowspan="16">儿<br>童<br>自<br>身<br>状<br>况<br>介<br>绍</td>
                    <td class="tg-s6z2" colspan="3" rowspan="2">妊娠史</td>
                    <td class="tg-031e" colspan="3">母妊娠年龄</td>
                    <td class="tg-s6z2" colspan="3">{{ userInfo.MotherGestationalAge }}</td>
                    <td class="tg-s6z2" colspan="3">胎教情况</td>
                    <td class="tg-baqh" colspan="3"> {{ userInfo.PrenatalEducation }}</td>
                    <td class="tg-baqh" colspan="3">先兆流产</td>
                    <td class="tg-baqh" colspan="5"> {{ (userInfo.ThreatenedAbortion == null)?'无':userInfo.ThreatenedAbortion }}</td>
                </tr>
                <tr>
                    <td class="tg-031e" colspan="3">心理状态</td>
                    <td class="tg-s6z2" colspan="3">{{ userInfo.Mentation }}</td>
                    <td class="tg-s6z2" colspan="3">生理状况</td>
                    <td class="tg-baqh" colspan="3">{{ userInfo.Physiological }}</td>
                    <td class="tg-baqh" colspan="3">环境情况</td>
                    <td class="tg-baqh" colspan="5">{{ userInfo.Environmental }}</td>
                </tr>
                <tr>
                    <td class="tg-s6z2" colspan="3" rowspan="2">分娩史</td>
                    <td class="tg-031e" colspan="3">足月</td>
                    <td class="tg-s6z2" colspan="3">{{ userInfo.Mature }}</td>
                    <td class="tg-s6z2" colspan="3">产程</td>
                    <td class="tg-baqh" colspan="3">{{ userInfo.Labor }}</td>
                    <td class="tg-baqh" colspan="3">分娩方式</td>
                    <td class="tg-baqh" colspan="5">{{ userInfo.Parturition }}</td>
                </tr>
                <tr>
                    <td class="tg-031e" colspan="3">早产或过期</td>
                    <td class="tg-s6z2" colspan="3"></td>
                    <td class="tg-s6z2" colspan="3">窒息</td>
                    <td class="tg-baqh" colspan="3">{{ userInfo.Suffocate }}</td>
                    <td class="tg-baqh" colspan="3">出生体重</td>
                    <td class="tg-baqh" colspan="5">{{ userInfo.BirthWeight }}</td>
                </tr>
                <tr>
                    <td class="tg-s6z2" colspan="3" rowspan="4">生长<br>发育史</td>
                    <td class="tg-031e" colspan="3">母乳喂养</td>
                    <td class="tg-s6z2" colspan="3">{{ userInfo.Breastfeeding }}</td>
                    <td class="tg-s6z2" colspan="3">人工喂养</td>
                    <td class="tg-baqh" colspan="3">{{ userInfo.ArtificialFeeding }}</td>
                    <td class="tg-baqh" colspan="3">高热抽搐</td>
                    <td class="tg-baqh" colspan="5">{{ userInfo.HighFeverTwitching }}</td>
                </tr>
                <tr>
                    <td class="tg-031e" colspan="3">会抬头时间</td>
                    <td class="tg-s6z2" colspan="3">{{ userInfo.LookedUpTime }}</td>
                    <td class="tg-s6z2" colspan="3">会翻身时间</td>
                    <td class="tg-baqh" colspan="3">{{ userInfo.TurnOverTime }}</td>
                    <td class="tg-baqh" colspan="3">会爬行时间</td>
                    <td class="tg-baqh" colspan="5">{{ userInfo.CrawlingTime }}</td>
                </tr>
                <tr>
                    <td class="tg-031e" colspan="3">会笑时间</td>
                    <td class="tg-s6z2" colspan="3">{{ userInfo.LaughTime }}</td>
                    <td class="tg-s6z2" colspan="3">会坐时间</td>
                    <td class="tg-baqh" colspan="3">{{ userInfo.SitTime }}</td>
                    <td class="tg-baqh" colspan="3">会爬行时间</td>
                    <td class="tg-baqh" colspan="5">{{ userInfo.CrawlingTime }}</td>
                </tr>
                <tr>
                    <td class="tg-yw4l" colspan="3">会发声时间</td>
                    <td class="tg-yw4l" colspan="3">{{ userInfo.PronouncedTime }}</td>
                    <td class="tg-yw4l" colspan="3">说单词时间</td>
                    <td class="tg-yw4l" colspan="3">{{ userInfo.SayWordTime }}</td>
                    <td class="tg-yw4l" colspan="3">说词语时间</td>
                    <td class="tg-yw4l" colspan="5">{{ userInfo.SpeakTime }}</td>
                </tr>
                <!--</table>-->
                <!--<table class="tg otherPage nextPage">-->
                <tr>
                    <!--<th class="tg-baqh" rowspan="8"></th>-->
                    <th class="tg-baqh" colspan="4">既往病史<br>（心脏病、癫痫等）</th>
                    <th class="tg-baqh" colspan="7">{{ userInfo.IllnessHistory }}</th>
                    <th class="tg-baqh" colspan="4"> 过敏史<br>（含药物、食物等）</th>
                    <th class="tg-yw4l" colspan="8">{{ userInfo.AllergyHistory }}</th>
                </tr>
                <tr>
                    <td class="tg-baqh" colspan="4">特殊的饮食习惯</td>
                    <td class="tg-baqh" colspan="7">{{ userInfo.SpecialEatingHabits }}</td>
                    <td class="tg-baqh" colspan="4">特殊的睡眠时间</td>
                    <td class="tg-yw4l" colspan="8">{{ userInfo.SpecialSleepingTime}}</td>
                </tr>
                <tr>
                    <td class="tg-s6z2" colspan="3" rowspan="2">最喜欢<br>的活动</td>
                    <td class="tg-baqh">室<br>内</td>
                    <td class="tg-baqh" colspan="7">{{ userInfo.FavouriteActivityIn }}</td>
                    <td class="tg-baqh" colspan="4">最爱看的<br>电视节目</td>
                    <td class="tg-yw4l" colspan="8">{{ userInfo.FavouriteTV }}</td>
                </tr>
                <tr>
                    <td class="tg-baqh">室<br>外</td>
                    <td class="tg-baqh" colspan="7">{{ userInfo.FavouriteActivityOut }}</td>
                    <td class="tg-s6z2" colspan="4">最常玩的玩具</td>
                    <td class="tg-yw4l" colspan="8">{{ userInfo.FavouriteToy }}</td>
                </tr>
                <tr>
                    <td class="tg-baqh" colspan="4">独处时常做的事情</td>
                    <td class="tg-baqh" colspan="7">{{ userInfo.AloneThing }}</td>
                    <td class="tg-baqh" colspan="4">经常一起的玩伴</td>
                    <td class="tg-yw4l" colspan="8">{{ userInfo.FavouritePlaymate }}</td>
                </tr>
                <tr>
                    <td class="tg-baqh" colspan="4">语言表达能力</td>
                    <td class="tg-baqh" colspan="7">{{ userInfo.LanguageExpressionAbility }}</td>
                    <td class="tg-baqh" colspan="4">认知/认字能力</td>
                    <td class="tg-yw4l" colspan="8">{{ userInfo.CognitiveAbility}}</td>
                </tr>
                <tr>
                    <td class="tg-baqh" colspan="4">数数</td>
                    <td class="tg-baqh" colspan="7">{{ userInfo.Counting }}</td>
                    <td class="tg-baqh" colspan="4">穿衣服</td>
                    <td class="tg-yw4l" colspan="8">{{ userInfo.WearClothes }}</td>
                </tr>
                <tr>
                    <td class="tg-baqh" colspan="4">吃饭</td>
                    <td class="tg-baqh" colspan="7">{{ userInfo.Eat }}</td>
                    <td class="tg-baqh" colspan="4">大小便</td>
                    <td class="tg-yw4l" colspan="8">{{ userInfo.Toilet }}</td>
                </tr>

                <tr>
                    <td class="tg-s6z2" rowspan="3">特<br>殊<br>行<br>为</td>
                    <td class="tg-baqh" colspan="4">伤害自己/他人</td>
                    <td class="tg-baqh" colspan="19">{{ userInfo.HurtSelfOrOthers }}</td>
                </tr>
                <tr>
                    <td class="tg-baqh" colspan="4">逃跑</td>
                    <td class="tg-baqh" colspan="19">{{ userInfo.RunAway }}</td>
                </tr>
                <tr>
                    <td class="tg-baqh" colspan="4">其他</td>
                    <td class="tg-baqh" colspan="19">{{ userInfo.OtherBehavior }}</td>
                </tr>
                <tr>
                    <td class="tg-s6z2" colspan="5" rowspan="3">
                        &nbsp;<br>智障成因<br>&nbsp;
                    </td>
                    <td class="tg-baqh" colspan="19" rowspan="3">{{ userInfo.MentalRetardationReason }}</td>
                </tr>


                <tr>
                </tr>
                <tr>
                </tr>
                <tr>
                    <td class="tg-s6z2" colspan="5" rowspan="3">
                        &nbsp;<br>目前主要障碍情况<br>&nbsp;
                    </td>
                    <td class="tg-baqh" colspan="19" rowspan="3">
                        {{userInfo.ObstacleState}}
                    </td>
                </tr>
                <tr>
                </tr>
                <tr>
                </tr>
                <tr>
                    <td class="tg-s6z2" colspan="5" rowspan="3">
                        &nbsp;<br>既往康复教育情况<br>&nbsp;
                    </td>
                    <td class="tg-baqh" colspan="19" rowspan="3">{{ userInfo.RecoveryHistory }}</td>
                </tr>
                <tr>
                </tr>
                <tr>
                </tr>
                <tr>
                    <td class="tg-s6z2" rowspan="4" colspan="5">说明</td>
                    <td class="tg-textleft" colspan="19" rowspan="4">
                        <br> 本人<u>&emsp;&emsp;&emsp;&emsp;&emsp;</u>是智力残疾孩子<u>&emsp;&emsp;&emsp;&emsp;&emsp;</u>之父（母），如实反映了孩子的病情和行为状况，如有隐瞒，愿承担相应责任。
                        <br>
                        <br>
                    </td>
                </tr>
                <tr>
                </tr>
            </table>
            <TABLE border=0 cellSpacing=0 cellPadding=0 width="100%">
                <TBODY>
                    <TR>
                        <TD width="25%">
                            <font color="#20a0ff">填表时间:
                                <SPAN id=rpt_Pro_Order_List_ctl00_lbl_eShop_Name><b></b></SPAN>
                            </font>
                        </TD>
                        <TD width="25%">
                            <font color="#20a0ff">填表人：
                                <SPAN></SPAN>
                            </font>
                        </TD>
                        <TD width="25%">
                            <font color="#20a0ff">注册日期：
                                <SPAN></SPAN>
                            </font>
                        </TD>
                        <TD width="25%">
                            <font color="#20a0ff">审核人：
                                <SPAN</SPAN>
                            </font>
                        </TD>
                    </TR>

                </TBODY>
            </TABLE>


        </div>
    </div>
</template>
<script>
    export default {
        name: 'registerPrinter',
        props: ['userInfo', 'fcData', 'dpData'], //fcData: [], //家庭模式 //居住社区 //教育方式 //语言环境 //抚养、带教人
        data() {
            return {}
        },
        computed: {
            birthData: function (str) {

            },
            curPatientDeptName: function () {
                return this.$store.state.mystudent.patientDeptObj.DeptName;
            },
            paperTitle: function() {
                return this.$store.state.printPaper.printPaperTitle
            }

        },
        methods: {
            //            getDiagnosisName() {
            //                for (let i = 0; i < this.dpData.length; i++) {
            //                    for (let j = 0; j < this.dpData[i].Diagnosises.length; j++) {
            //                        if (this.dpData[i].Diagnosises[j].ID == this.userInfo.DiagnosisID) {
            //                            return this.dpDate[i].Name;
            //                        }
            //                    }
            //                }
            //            }
        },
        created() {

        }
    }

</script>

<style>
    @media screen {
        .print-content {
            /*box-sizing: border-box;*/
        }

        .paperform-title {
            font-size: 22px;
            text-align: center
        }

        .paperform-filecode {
            text-align: right
        }

        .paperform-form {
            width: 100%;
        }

        /*1080*1920 页面展示时设置padding:2px 10px   打印时的设置  padding:10px 18px*/
        .tg {
            border-collapse: collapse;
            border-spacing: 0;
            border-color: black
        }
        .tg td {
            font-family: Arial, sans-serif;
            font-size: 12px;
            padding: 4px 8px;
            border-style: solid;
            border-width: 1px;
            overflow: hidden;
            word-break: normal;
        }
        .tg th {
            font-family: Arial, sans-serif;
            font-size: 12px;
            font-weight: normal;
            padding: 4px 8px;
            border-style: solid;
            border-width: 1px;
            overflow: hidden;
            word-break: normal;
        }
        .tg .tg-s6z2 {
            text-align: center;
            vertical-align: center
        }
        .tg .tg-baqh {
            text-align: center;
            vertical-align: center
        }
        .tg .tg-yw4l {
            text-align: center;
            vertical-align: center
        }
        .tg .tg-textleft {
            text-align: left;
            vertical-align: top
        }
    }

</style>
