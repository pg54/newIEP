<template>
    <div class="paperform-content">
        <div id="paperform-form1">
            <DIV style="LINE-HEIGHT: 30px;font-size: 22px" class=size16 align=center>
                <STRONG><font color="#20a0ff">班级教学记录卡</font></STRONG>
            </DIV>

        </div>
        <div id="paperform-form2">
            <table class="tg">
                <tr>
                    <th class="tg-s6z2" colspan="2">姓名</th>
                    <th class="tg-s6z2" colspan="4" style='width: 118px'></th>
                    <th class="tg-s6z2" colspan="2">性别</th>
                    <th class="tg-s6z2" colspan="4" style='width: 118px'></th>
                    <th class="tg-s6z2" colspan="2">出生年月</th>
                    <th class="tg-s6z2" colspan="4" style='width: 118px'></th>
                    <th class="tg-s6z2" colspan="2">班别</th>
                    <th class="tg-s6z2" colspan="4" style='width: 118px'></th>
                </tr>

                <tr>
                    <td class="tg-yw4l" colspan="2">任教<br>老师</td>
                    <td class="tg-s6z2" colspan="10"></td>
                    <td class="tg-s6z2" colspan="2">训练日期</td>
                    <td class="tg-s6z2" colspan="10"></td>
                </tr>
                <tr>
                    <td class="tg-s6z2" colspan="2">教学<br>目标</td>
                    <td class="tg-s6z2" colspan="22" style="height: 148px">
                    </td>
                </tr>
                <tr>
                    <td class="tg-s6z2" colspan="2">项目</td>
                    <td class="tg-s6z2" colspan="22">
                        <span style="display:block;height:20px;">教学内容及学术表现</span>
                    </td>
                </tr>
                <tr>
                    <td class="tg-s6z2" colspan="2">生活<br>自理</td>
                    <td class="tg-s6z2" colspan="22" style="height: 148px">
                    </td>
                </tr>
                <tr>
                    <td class="tg-s6z2" colspan="2">感官<br>知觉</td>
                    <td class="tg-s6z2" colspan="22">
                    </td>
                </tr>
                <tr>
                    <td class="tg-s6z2" colspan="2">认知</td>
                    <td class="tg-s6z2" colspan="22" style="height: 148px">
                    </td>
                </tr>
                <tr>
                    <td class="tg-s6z2" colspan="2">语言<br>交往</td>
                    <td class="tg-s6z2" colspan="22" style="height: 148px">
                    </td>
                </tr>


   
                <tr>
                    <td class="tg-s6z2" colspan="2">社会<br>技能</td>
                    <td class="tg-s6z2" colspan="22" style="height: 148px">
                       
                    </td>
                </tr>
                <tr>
                    <td class="tg-s6z2" colspan="2">美术<br>/手工</td>
                    <td class="tg-s6z2" colspan="22" style="height: 148px">
                        
                    </td>
                </tr>
                <tr>
                    <td class="tg-s6z2" colspan="2">音乐<br>活动<br>/游戏</td>
                    <td class="tg-s6z2" colspan="22" style="height: 148px">
                    </td>
                </tr>
                <tr>
                    <td class="tg-s6z2" colspan="2">感统<br>训练/<br>体育<br>活动<br></td>
                    <td class="tg-s6z2" colspan="22" style="height: 148px">
                    </td>
                </tr>
                <tr>
                    <td class="tg-s6z2" colspan="2">其它</td>
                    <td class="tg-s6z2" colspan="22" style="height: 102px">
                    </td>
                </tr>
                <tr>
                    <td class="tg-s6z2" colspan="2">家长<br>意见<br>反馈</td>
                    <td class="tg-s6z2" colspan="22" style="height: 238px;text-align: left;">
                        <P style="margin-top: 200px"><span style="display: inline-block;width: 70%">家长签名：</span>年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日</P>
                    </td>
                </tr>


            </table>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'classTeachRecordCard',
        props: [''],
        data() {
            return {

            }
        },
        computed: {
            patientName: function () {
                return this.$store.state.mystudent.patientDeptObj.Name;
            },
            patientSex: function () {
                return this.$store.state.mystudent.patientDeptObj.Sex;
            },
            patientBirthday: function () {
                return this.$store.state.mystudent.patientDeptObj.BirthDate;
            }
        },
        methods: {

        }

    }

</script>

<style scoped>
.tg {
    border-collapse: collapse;
    border-spacing: 0;
    border-color: black;
    width: 714px;
}

.tg td {
    font-family: Arial, sans-serif;
    font-size: 14px;
    padding: 15px 5px;
    border-style: solid;
    border-width: 1px;
    overflow: hidden;
    word-break: normal;
}

.tg th {
    font-family: Arial, sans-serif;
    font-size: 14px;
    font-weight: normal;
    padding: 15px 5px;
    border-style: solid;
    border-width: 1px;
    overflow: hidden;
    word-break: normal;
}

.tg .tg-s6z2 {
    text-align: center
}

.tg .tg-yw4l {
    text-align: left;
    vertical-align: middle;
}

</style>
