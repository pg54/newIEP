<template>
    <div>
        <div class="paperform-content">
            <div id="paperform-form1">
                <DIV style="LINE-HEIGHT: 30px;font-size: 22px" class=size16 align=center>
                    <STRONG><font color="#20a0ff">
                        {{ iepTitle }}
                    </font></STRONG>
                </DIV>
            </div>
            <div id="paperform-form2">
                <table class="tg">
                    <tr>
                        <th class="tg-s6z2" colspan="2" rowspan="2">儿童姓名</th>
                        <th class="tg-s6z2" colspan="3" rowspan="2">
                            <SPAN id=rpt_Pro_Order_List_ctl00_lbl_eShop_Name><b>{{ patientName }}</b></SPAN>
                        </th>
                        <th class="tg-s6z2" colspan="2" rowspan="2">性别</th>
                        <th class="tg-s6z2" colspan="3" rowspan="2">
                            <SPAN>{{ (patientSex === 1)? '男':'女' }}</SPAN>
                        </th>
                        <th class="tg-s6z2" colspan="3" rowspan="2">出生日期</th>
                        <th class="tg-s6z2" colspan="5" rowspan="2">
                            <SPAN>{{ patientBirthday }}</SPAN>
                        </th>
                        <th class="tg-s6z2" colspan="3" rowspan="2">班别</th>
                        <th class="tg-s6z2" colspan="3" rowspan="2"></th>
                    </tr>
                    <tr>
                    </tr>
                    <tr>
                        <td class="tg-s6z2" colspan="7">计划人</td>
                        <td class="tg-s6z2" colspan="6"></td>
                        <td class="tg-s6z2" colspan="11">
                            {{ iepTitle.split('-')[1] }}
                        </td>
                    </tr>

                    <tr>
                        <th class="tg-s6z2" colspan="2" rowspan="2">主题</th>
                        <th class="tg-s6z2" colspan="2" rowspan="2">课程名称</th>
                        <th class="tg-s6z2" colspan="8" rowspan="2">长期目标</th>
                        <th class="tg-s6z2" colspan="8" rowspan="2">短期目标</th>
                        <th class="tg-s6z2" colspan="4">评鉴结果</th>
                    </tr>
                    <tr>
                        <td class="tg-s6z2">3</td>
                        <td class="tg-s6z2">2</td>
                        <td class="tg-s6z2">1</td>
                        <td class="tg-s6z2">0</td>
                    </tr>

                    <tr>
                        <td class="tg-s6z2" colspan="2" :rowspan="iepMothInfo.length">
                            <template v-for='el in iepTheme'>
                                {{ el }}<br>
                            </template>
                        </td>
                        <td class="tg-yw4l" colspan="2">{{ iepMothInfo[0].Name }}</td>
                        <td class="tg-yw4l" colspan="8">{{ iepMothInfo[0].TeachTarget }}</td>
                        <td class="tg-yw4l" colspan="8">{{ iepMothInfo[0].TeachContent }}</td>
                        <td class="tg-031e" v-for="item in iepMothInfo[0].History">
                            {{item.Count}}
                        </td>
                    </tr>

                    <template v-for="(ele, index) in iepMothInfo">
                        <template v-if='index > 0'>
                            <tr>
                                <td class="tg-yw4l" colspan="2">{{ ele.Name }}</td>
                                <td class="tg-yw4l" colspan="8">{{ ele.TeachTarget }}</td>
                                <td class="tg-yw4l" colspan="8">{{ ele.TeachContent }}</td>
                                <td class="tg-031e" v-for="item in ele.History">
                                    {{item.Count}}
                                </td>

                            </tr>
                        </template>
                    </template>

                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'iepPrinter',
        props: ['iepMothInfo', 'iepTitle', 'iepTheme'],
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
                return this.$store.state.mystudent.patientDeptObj.BirthDate.split(' ')[0];
            },
            verticalTitle: function () {
                console.log(this.iepTheme.split('').map(ele => ele + '<br>').join(''))
                return this.iepTheme.split('').map(ele => ele + '<br>').join('');
            }

        },
        methods: {
            getTitle(str) {
                console.log(str.split('').map(ele => ele + '<br>').join(''))
                return str.split('').map(ele => ele + '<br>').join('');
            }
            
        },
        created() {

        },
        beforeMount() {

        },
        mounted() {

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

        .paperform-subTitle {
            text-align: center;
        }

        .paperform-form {
            width: 100%;
        }

        /*1080*1920 页面展示时设置padding:2px 10px   打印时的设置  padding:10px 18px*/
        .tg {
            border-collapse: collapse;
            border-spacing: 0;
            width: 100%
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
