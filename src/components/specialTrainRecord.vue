<template>
    <div class="paperform-content">
        <div id="paperform-form1">
            <DIV style="LINE-HEIGHT: 30px;font-size: 22px" class=size16 align=center>
                <STRONG><font color="#20a0ff">个别训练记录卡</font></STRONG>
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
                    <td class="tg-s6z2" colspan="2" style="height: 113px">训练<br>目标</td>
                    <td class="tg-yw4l" colspan="22"></td>
                </tr>
                <tr>
                    <td class="tg-s6z2" colspan="2">训练<br>项目</td>
                    <td class="tg-s6z2" colspan="22">训练内容</td>
                </tr>
                <tr>
                    <td class="tg-s6z2" colspan="2" rowspan="10">个别<br>训练<br>语言<br>认知<br>感觉<br>统合</td>
                    <td class="tg-yw4l" colspan="22">1.</td>
                </tr>
                <tr>
                    <td class="tg-yw4l" colspan="22">2.</td>
                </tr>
                <tr>
                    <td class="tg-yw4l" colspan="22">3.</td>
                </tr>
                <tr>
                    <td class="tg-yw4l" colspan="22">4.</td>
                </tr>
                <tr>
                    <td class="tg-yw4l" colspan="22">5.</td>
                </tr>
                <tr>
                    <td class="tg-yw4l" colspan="22">6.</td>
                </tr>
                <tr>
                    <td class="tg-yw4l" colspan="22">7.</td>
                </tr>
                <tr>
                    <td class="tg-yw4l" colspan="22">8.</td>
                </tr>
                <tr>
                    <td class="tg-yw4l" colspan="22">9.</td>
                </tr>
                <tr>
                    <td class="tg-yw4l" colspan="22">10.</td>
                </tr>
                <tr>
                    <td class="tg-yw4l" colspan="2" style='height: 158px'>学生<br>综合<br>表现</td>
                    <td class="tg-yw4l" colspan="22"></td>
                </tr>
                <tr>
                    <td class="tg-yw4l" colspan="2" style='height: 87px'>康复<br>建议</td>
                    <td class="tg-yw4l" colspan="22"></td>
                </tr>
                <tr>
                    <td class="tg-yw4l" colspan="2" style='height: 113px'>家长<br>意见<br>反馈</td>
                    <td class="tg-yw4l" colspan="22"></td>
                </tr>
            </table>

        </div>
    </div>

</template>

<script>
    export default {
        name: 'specialTrainRecord',
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

        },
        created() {

        },
        beforeMount() {

        },
        mounted() {

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
    padding: 12px 5px;
    border-style: solid;
    border-width: 1px;
    overflow: hidden;
    word-break: normal;
}

.tg th {
    font-family: Arial, sans-serif;
    font-size: 14px;
    font-weight: normal;
    padding: 12px 5px;
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
