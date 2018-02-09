<template>
    <div class="paperform-form">
        <div id="canvasArea" style="width: 610px;height: 920px;position: relative;">
            <div style="width:600px">
                <canvas id="b" width=600 height=560 style="border:1px solid grey"></canvas>
            </div>
            <p style="text-align: center;font-size: 18px;font-weight: bold;width: 610px">儿童孤独症综合能力测评</p>
            <p style="text-align: center;font-size: 10px;width: 610px">（孤独症谱系及相关发育障碍儿童评估用心理教育量表C-PEP-3报告）</p>
            <p class="chartText">
                测试者信息：
                <br> 编号：________姓名：____________性别：________年龄：____________
            </p>
            <div>
                <p>测试结果：</p>
                <div class="twoCharts">
                    <div class="blxData">
                        <P style="text-align: center">病理学数据</P>
                        <table class="tg">
                            <tr>
                                <th class="tg-s6z2"></th>
                                <th class="tg-s6z2">情感</th>
                                <th class="tg-s6z2">人际关系</th>
                                <th class="tg-s6z2">物品喜好</th>
                                <th class="tg-s6z2">感知模式</th>
                                <th class="tg-s6z2">语言</th>
                            </tr>
                            <tr>
                                <td class="tg-s6z2">#</td>
                                <td class="tg-s6z2">6</td>
                                <td class="tg-s6z2">7</td>
                                <td class="tg-s6z2">6</td>
                                <td class="tg-s6z2">14</td>
                                <td class="tg-s6z2">11</td>
                            </tr>
                            <tr>
                                <td class="tg-s6z2">A</td>
                                <td class="tg-s6z2">{{roundData[0].Result.A}}</td>
                                <td class="tg-s6z2">{{roundData[1].Result.A}}</td>
                                <td class="tg-s6z2">{{roundData[2].Result.A}}</td>
                                <td class="tg-s6z2">{{roundData[3].Result.A}}</td>
                                <td class="tg-s6z2">{{roundData[4].Result.A}}</td>
                            </tr>
                            <tr>
                                <td class="tg-s6z2">M</td>
                                <td class="tg-s6z2">{{roundData[0].Result.M}}</td>
                                <td class="tg-s6z2">{{roundData[1].Result.M}}</td>
                                <td class="tg-s6z2">{{roundData[2].Result.M}}</td>
                                <td class="tg-s6z2">{{roundData[3].Result.M}}</td>
                                <td class="tg-s6z2">{{roundData[4].Result.M}}</td>
                            </tr>
                            <tr>
                                <td class="tg-s6z2">S</td>
                                <td class="tg-s6z2">{{roundData[0].Result.S}}</td>
                                <td class="tg-s6z2">{{roundData[1].Result.S}}</td>
                                <td class="tg-s6z2">{{roundData[2].Result.S}}</td>
                                <td class="tg-s6z2">{{roundData[3].Result.S}}</td>
                                <td class="tg-s6z2">{{roundData[4].Result.S}}</td>
                            </tr>
                        </table>
                    </div>
                    <div class='fzgnData'>
                        <P style="text-align: center">发展功能数据</P>
                        <table class="tg">
                            <tr>
                                <th class="tg-s6z2"></th>
                                <th class="tg-s6z2">模仿</th>
                                <th class="tg-s6z2">知觉</th>
                                <th class="tg-s6z2">精细动作</th>
                                <th class="tg-s6z2">粗大动作</th>
                                <th class="tg-s6z2">手眼协调</th>
                                <th class="tg-s6z2">认知表现</th>
                                <th class="tg-s6z2">口语认知</th>
                            </tr>
                            <tr>
                                <td class="tg-s6z2">#</td>
                                <td class="tg-s6z2">10</td>
                                <td class="tg-s6z2">11</td>
                                <td class="tg-s6z2">10</td>
                                <td class="tg-s6z2">11</td>
                                <td class="tg-s6z2">14</td>
                                <td class="tg-s6z2">20</td>
                                <td class="tg-s6z2">19</td>
                            </tr>
                            <tr>
                                <td class="tg-s6z2">P</td>
                                <td class="tg-s6z2">{{lineData[0].Result.P}}</td>
                                <td class="tg-s6z2">{{lineData[1].Result.P}}</td>
                                <td class="tg-s6z2">{{lineData[2].Result.P}}</td>
                                <td class="tg-s6z2">{{lineData[3].Result.P}}</td>
                                <td class="tg-s6z2">{{lineData[4].Result.P}}</td>
                                <td class="tg-s6z2">{{lineData[5].Result.P}}</td>
                                <td class="tg-s6z2">{{lineData[6].Result.P}}</td>
                            </tr>
                            <tr>
                                <td class="tg-s6z2">E</td>
                                <td class="tg-s6z2">{{lineData[0].Result.E}}</td>
                                <td class="tg-s6z2">{{lineData[1].Result.E}}</td>
                                <td class="tg-s6z2">{{lineData[2].Result.E}}</td>
                                <td class="tg-s6z2">{{lineData[3].Result.E}}</td>
                                <td class="tg-s6z2">{{lineData[4].Result.E}}</td>
                                <td class="tg-s6z2">{{lineData[5].Result.E}}</td>
                                <td class="tg-s6z2">{{lineData[6].Result.E}}</td>
                            </tr>
                            <tr>
                                <td class="tg-s6z2">F</td>
                                <td class="tg-s6z2">{{lineData[0].Result.F}}</td>
                                <td class="tg-s6z2">{{lineData[1].Result.F}}</td>
                                <td class="tg-s6z2">{{lineData[2].Result.F}}</td>
                                <td class="tg-s6z2">{{lineData[3].Result.F}}</td>
                                <td class="tg-s6z2">{{lineData[4].Result.F}}</td>
                                <td class="tg-s6z2">{{lineData[5].Result.F}}</td>
                                <td class="tg-s6z2">{{lineData[6].Result.F}}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div id="roundInsert">
                <div>
                    <div style="margin-top: 20px;">
                        <p>利眼：无明显&nbsp;利手：偏右&nbsp;利足：无明显</p>
                        <p>发展评分总分 26</p>
                        <p>年龄当量 26-30个月&nbsp;&nbsp;&nbsp;即___年龄段</p>
                        <p>项目评分：</p>
                        <div class="projectScore">
                            <span>模仿</span>
                            <span>{{cddzData.s}}分</span>
                            <span>{{cddzData.t - 2}}-{{cddzData.t + 2}}个月</span>
                        </div>
                        <div class="projectScore">
                            <span>知觉</span>
                            <span>{{zjData.s}}分</span>
                            <span>{{zjData.t - 2}}-{{zjData.t + 2}}个月</span>
                        </div>
                        <div class="projectScore">
                            <span>精细动作</span>
                            <span>{{jxdzData.s}}分</span>
                            <span>{{jxdzData.t - 2}}-{{jxdzData.t + 2}}个月</span>
                        </div>
                        <div class="projectScore">
                            <span>粗大动作</span>
                            <span>{{cddzData.s}}分</span>
                            <span>{{cddzData.t - 2}}-{{cddzData.t + 2}}个月</span>
                        </div>
                        <div class="projectScore">
                            <span>手眼协调</span>
                            <span>{{syxtData.s}}分</span>
                            <span>{{syxtData.t - 2}}-{{syxtData.t + 2}}个月</span>
                        </div>
                        <div class="projectScore">
                            <span>认知表现</span>
                            <span>{{rzbxData.s}}分</span>
                            <span>{{rzbxData.t - 2}}-{{rzbxData.t + 2}}个月</span>
                        </div>
                        <div class="projectScore">
                            <span>口语认知</span>
                            <span>{{kyrzData.s}}分</span>
                            <span>{{kyrzData.t - 2}}-{{kyrzData.t + 2}}个月</span>
                        </div>
                        <div class="projectScore">
                            <span>适应行为</span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="projectScore">
                            <span>个人自理</span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div id=blockChart>
                        <div class="titleBox">
                            <div class="titleItem ligcolor">A</div>
                            <div class="titleItem midcolor">M</div>
                            <div class="titleItem heavycolor"></div>
                        </div>
                        <div class="contentBox">
                            <!-- <p>{{ roundData }}</p> -->
                            <div class="contentItem">
                                <div v-for="(el, index) in 8" :key="index" class="bgcolor"></div>
                                <div v-for="(el, index) in roundData[0].Result.A" :key="index" class="ligcolor"></div>
                                <div v-for="(el, index) in roundData[0].Result.M" :key="index" class="midcolor"></div>
                                <div v-for="(el, index) in roundData[0].Result.S" :key="index" class="heavycolor"></div>
                                <div class="contenttIitle">{{ roundData[0].Domain }}</div>
                            </div>
                            <div class="contentItem">
                                <div v-for="(el, index) in 7" :key="index" class="bgcolor"></div>
                                <div v-for="(el, index) in roundData[1].Result.A" :key="index + 10" class="ligcolor"></div>
                                <div v-for="(el, index) in roundData[1].Result.M" :key="index + 10" class="midcolor"></div>
                                <div v-for="(el, index) in roundData[1].Result.S" :key="index + 10" class="heavycolor"></div>
                                <div class="contenttIitle">{{ roundData[1].Domain }}</div>
                            </div>
                            <div class="contentItem">
                                <div v-for="(el, index) in 8" :key="index" class="bgcolor"></div>
                                <div v-for="(el, index) in roundData[2].Result.A" :key="index + 20" class="ligcolor"></div>
                                <div v-for="(el, index) in roundData[2].Result.M" :key="index + 20" class="midcolor"></div>
                                <div v-for="(el, index) in roundData[2].Result.S" :key="index + 20" class="heavycolor"></div>
                                <div class="contenttIitle">{{ roundData[2].Domain }}</div>
                            </div>
                            <div class="contentItem">
                                <div v-for="(el, index) in roundData[3].Result.A" :key="index + 30" class="ligcolor"></div>
                                <div v-for="(el, index) in roundData[3].Result.M" :key="index + 30" class="midcolor"></div>
                                <div v-for="(el, index) in roundData[3].Result.S" :key="index + 30" class="heavycolor"></div>
                                <div class="contenttIitle">{{ roundData[3].Domain }}</div>
                            </div>
                            <div class="contentItem">
                                <div v-for="(el, index) in 3" :key="index" class="bgcolor"></div>
                                <div v-for="(el, index) in roundData[4].Result.A" :key="index + 40" class="ligcolor"></div>
                                <div v-for="(el, index) in roundData[4].Result.M" :key="index + 40" class="midcolor"></div>
                                <div v-for="(el, index) in roundData[4].Result.S" :key="index + 40" class="heavycolor"></div>
                                <div class="contenttIitle">{{ roundData[4].Domain }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="lineChart"></div>
            </div>
            <p style="margin: 10px 0;">报告简介:</p>
            <div class="reportSumary">
                该儿童七大发展功能中，知觉、粗大动作的发展相对其他功能发展区域发展较好；模仿、知觉、精细动作、粗大动作、手眼协调 呈现发展空间；其中：认知表现、口语认知发展空间狭窄或发展相对（严重）滞后。在病理分析中，可呈现语言病理问题严重 程度突出；情感、人际关系、物品喜好、感知模式问题趋于中度水平。
            </div>
            <p style="margin: 10px 0;">测试单位：深圳市一新儿童康复服务有限公司</p>
            <div class="reporterAndDate" style="margin: 10px 0;">
                <span>评估者： 管理员</span>
                <span>评估日期：</span>
            </div>

            <div id="developChartWrap">
                <div style="width:610px">
                    <canvas id="c" width=480 height=960 style="width: 290px;height: 580px;"></canvas>
                </div>
                <div style="visibility: hidden">
                    <button @click="drawDevelopChart(lineData)">加载图表</button>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
    import api from '../api/index.js';
    import html2canvas from 'html2canvas';
    export default {
        name: 'printCECP',
        props: ['cpepChartData'],
        data() {
            return {
                resultData: '',
                roundData: [],
                lineData: [],
                mfData: '',
                zjData: '',
                jxdzData: '',
                cddzData: '',
                syxtData: '',
                rzbxData: '',
                kyrzData: '',
                syxwData: '',
                grzlData: '',
            }
        },
        methods: {
            drawRound(roundData) {
                CanvasRenderingContext2D.prototype.sector = function (x, y, radius, sAngle, eAngle, counterclockwise,
                    total, storeS, storeM, img) {
                    let distance = radius / total
                    for (let i = total - 1; i >= 0; i--) {
                        this.save()
                        this.beginPath()
                        this.translate(x, y);
                        this.arc(0, 0, distance + distance * i, sAngle, eAngle, counterclockwise)
                        this.save();
                        this.rotate(eAngle);
                        this.moveTo(distance + distance * i, 0)
                        this.lineTo(0, 0)
                        this.restore()
                        this.rotate(sAngle)
                        this.lineTo(distance + distance * i, 0)
                        this.strokeStyle = '#000'
                        this.stroke()
                        if (i >= storeS && i < storeS + storeM) {
                            //                            var _this = this;
                            //                            img.onload = (function(img) {
                            //                                console.log('setImg');
                            //                                var pattern = _this.createPattern(img,"repeat");
                            //                                _this.fillStyle = pattern;
                            //                            })(img)
                            this.fillStyle = '#cecece'
                            this.fill()
                        }
                        if (storeS !== 0 && i < storeS) {
                            this.fillStyle = '#aaaaaa'
                            this.fill()
                        }
                        this.restore()
                    }
                    return this;
                };
                let canvasWrap = document.getElementById('canvasArea')
                var canvas = document.getElementById("b");
                let ctx = canvas.getContext('2d');
                let deg = Math.PI / 180;
                var img = new Image(); //创建Image对象
                img.src = 'http://osp49ppau.bkt.clouddn.com/xiexian.png';


                ctx.sector(300, 300, 200, 252 * deg, 324 * deg, false, 6, roundData[0].Result.S, roundData[0].Result.M,
                    img)
                ctx.sector(300, 300, 200, 324 * deg, 36 * deg, false, 7, roundData[1].Result.S, roundData[1].Result.M,
                    img)
                ctx.sector(300, 300, 200, 36 * deg, 108 * deg, false, 6, roundData[2].Result.S, roundData[2].Result.M,
                    img);
                ctx.sector(300, 300, 200, 108 * deg, 180 * deg, false, 14, roundData[3].Result.S, roundData[3].Result.M,
                    img);
                ctx.sector(300, 300, 200, 180 * deg, 252 * deg, false, 11, roundData[4].Result.S, roundData[4].Result.M,
                    img);

                let textArr = ['情感', '人际关系', '游戏及物品喜好', '感觉模式', '语言']
                let coordinateArr = [{
                        x: 260,
                        y: 40
                    },
                    {
                        x: 500,
                        y: 200
                    },
                    {
                        x: 400,
                        y: 480
                    },
                    {
                        x: 20,
                        y: 400
                    },
                    {
                        x: 20,
                        y: 200
                    }
                ]

                for (var i = 0; i < textArr.length; i++) {
                    ctx.beginPath()
                    ctx.rect(coordinateArr[i].x, coordinateArr[i].y, 80, 30)
                    ctx.strokeStyle = '#000'
                    ctx.font = "10px serif";
                    ctx.textAlign = 'center';
                    ctx.fillText(textArr[i], coordinateArr[i].x + 30, coordinateArr[i].y + 20, 40);
                    ctx.stroke()
                }
                // this.convertCanvasToImage(canvas)
                canvasWrap.removeChild(canvasWrap.childNodes[0])
            },
            drawDevelopChart(lineData) {
                let dymaDataP = this.lineData.map(ele => ele.Result.P)
                let dymaDataPE = this.lineData.map(ele => ele.Result.P + ele.Result.E)
                let canvasWrap = document.getElementById('developChartWrap')
                var myCanvas = document.getElementById("c");
                var c = myCanvas.getContext("2d");
                var w = 480;
                var head = 40;
                var h = 960 - head;
                var count = 80;
                var categories = ['年龄（岁）', '模仿', '知觉', '精细动作', '粗大动作', '手眼协调', '认知表现', '口语认知', '总评分', '年龄（岁）']

                //分类
                let tickSize = w / 10
                let tickCnt = 10
                for (var i = 0; i < tickCnt; i++) {
                    c.beginPath()
                    c.rect(tickSize * i, 0, tickSize, 40)
                    c.strokeStyle = '#000'
                    c.font = "10px serif";
                    c.textAlign = 'center';
                    c.fillText(categories[i], 30 + tickSize * i, 20);
                    c.stroke()
                }

                //横向80等分线
                c.clearRect(0, 40, w, h);
                var tickSizeH = h / count
                c.moveTo(0, head);
                c.lineTo(0, head + h);
                for (var i = 1; i < count; i++) {
                    c.beginPath()
                    c.moveTo(0, 40 + tickSizeH * i);
                    c.lineTo(w, 40 + tickSizeH * i);
                    c.strokeStyle = '#efefef'
                    c.stroke();
                }

                //纵向10等分线
                for (var i = 0; i < tickCnt + 1; i++) {
                    if (1 < i < tickCnt + 1) {
                        c.beginPath()
                        c.moveTo(tickSize * i, head);
                        c.lineTo(tickSize * i, head + h);
                        c.strokeStyle = '#000'
                        c.stroke()
                    }
                }
                //最底部
                c.beginPaw
                c.moveTo(0, head + h);
                c.lineTo(w, head + h);
                c.strokeStyle = '#000'
                c.stroke()
                //最后连线
                //年龄（岁）
                for (var i = 1; i < 7; i++) {
                    c.beginPath()
                    c.moveTo(tickSize * 0 + 0, 40 + (count - 12 * i) / count * h);
                    c.lineTo(tickSize * 0 + 15, 40 + (count - 12 * i) / count * h);
                    c.strokeStyle = '#000'
                    c.textAlign = 'center';
                    c.fillText(i, tickSize * 0 + 20, 45 + (count - 12 * i) / count * h);
                    c.stroke();
                }
                //模仿  0-10
                var arr2 = [23, 25, 28, 30, 32, 35, 37, 39, 42, 44, 62]
                this.mfData = {s: this.lineData[0].Result.E, t: arr2[this.lineData[0].Result.E]}
                console.log('mfData')
                console.log(this.mfData)
                for (var i = 0; i < 11; i++) {
                    c.beginPath()
                    c.moveTo(tickSize * 1 + 0, 40 + (count - arr2[i]) / count * h);
                    c.lineTo(tickSize * 1 + 15, 40 + (count - arr2[i]) / count * h);
                    c.strokeStyle = '#000'
                    c.textAlign = 'center';
                    c.fillText(i, tickSize * 1 + 20, 45 + (count - arr2[i]) / count * h);
                    c.stroke();
                }
                //知觉 0-11
                var arr3 = [10, 14, 19, 23, 28, 32, 37, 41, 46, 50, 54, 60]
                this.zjData = {s: this.lineData[1].Result.E, t: arr3[this.lineData[1].Result.E]}
                for (var i = 0; i < 12; i++) {
                    c.beginPath()
                    c.moveTo(tickSize * 2 + 0, 40 + (count - arr3[i]) / count * h);
                    c.lineTo(tickSize * 2 + 15, 40 + (count - arr3[i]) / count * h);
                    c.strokeStyle = '#000'
                    c.textAlign = 'center';
                    c.fillText(i, tickSize * 2 + 20, 45 + (count - arr3[i]) / count * h);
                    c.stroke();
                }
                //精细动作 0-10
                var arr4 = [22, 25, 28, 31, 33, 36, 39, 42, 45, 55, 71]
                this.jxdzData = {s: this.lineData[2].Result.E, t: arr4[this.lineData[2].Result.E]}
                for (var i = 0; i < 11; i++) {
                    c.beginPath()
                    c.moveTo(tickSize * 3 + 0, 40 + (count - arr4[i]) / count * h);
                    c.lineTo(tickSize * 3 + 15, 40 + (count - arr4[i]) / count * h);
                    c.strokeStyle = '#000'
                    c.textAlign = 'center';
                    c.fillText(i, tickSize * 3 + 20, 45 + (count - arr4[i]) / count * h);
                    c.stroke();
                }
                //粗大动作 0-11
                var arr5 = [21, 24, 26, 28, 30, 32, 35, 37, 39, 41, 44, 60]
                this.cddzData = {s: this.lineData[3].Result.E, t: arr5[this.lineData[3].Result.E]}
                for (var i = 0; i < 12; i++) {
                    c.beginPath()
                    c.moveTo(tickSize * 4 + 0, 40 + (count - arr5[i]) / count * h);
                    c.lineTo(tickSize * 4 + 15, 40 + (count - arr5[i]) / count * h);
                    c.strokeStyle = '#000'
                    c.textAlign = 'center';
                    c.fillText(i, tickSize * 4 + 20, 45 + (count - arr5[i]) / count * h);
                    c.stroke();
                }
                //手眼协调 0-14
                var arr6 = [12, 16, 20, 24, 28, 32, 37, 41, 45, 49, 53, 57, 62, 66, 70]
                this.syxtData = {s: this.lineData[4].Result.E, t: arr6[this.lineData[4].Result.E]}
                for (var i = 0; i < 15; i++) {
                    c.beginPath()
                    c.moveTo(tickSize * 5 + 0, 40 + (count - arr6[i]) / count * h);
                    c.lineTo(tickSize * 5 + 15, 40 + (count - arr6[i]) / count * h);
                    c.strokeStyle = '#000'
                    c.textAlign = 'center';
                    c.fillText(i, tickSize * 5 + 20, 45 + (count - arr6[i]) / count * h);
                    c.stroke();
                }
                //认知表现 0-20
                var arr7 = [13, 16, 20, 23, 25, 28, 31, 34, 37, 41, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71, 74]
                this.rzbxData = {s: this.lineData[5].Result.E, t: arr7[this.lineData[5].Result.E]}
                for (var i = 0; i < 21; i++) {
                    c.beginPath()
                    c.moveTo(tickSize * 6 + 0, 40 + (count - arr7[i]) / count * h);
                    c.lineTo(tickSize * 6 + 15, 40 + (count - arr7[i]) / count * h);
                    c.strokeStyle = '#000'
                    c.textAlign = 'center';
                    c.fillText(i, tickSize * 6 + 20, 45 + (count - arr7[i]) / count * h);
                    c.stroke();
                }
                //口语认知 0-19
                var arr8 = [21, 24, 27, 30, 33, 36, 39, 42, 45, 47, 50, 53, 56, 59, 62, 65, 68, 71, 74, 76]
                this.kyrzData = {s: this.lineData[6].Result.E, t: arr8[this.lineData[6].Result.E]}
                for (var i = 0; i < 21; i++) {
                    c.beginPath()
                    c.moveTo(tickSize * 7 + 0, 40 + (count - arr8[i]) / count * h);
                    c.lineTo(tickSize * 7 + 15, 40 + (count - arr8[i]) / count * h);
                    c.strokeStyle = '#000'
                    c.textAlign = 'center';
                    c.fillText(i, tickSize * 7 + 20, 45 + (count - arr8[i]) / count * h);
                    c.stroke();
                }
                //总评分 0-95
                var arr9 = [{
                        sc: 0,
                        y: 8
                    }, {
                        sc: 1,
                        y: 9
                    }, {
                        sc: 2,
                        y: 10
                    }, {
                        sc: 3,
                        y: 11
                    }, {
                        sc: 4,
                        y: 12
                    }, {
                        sc: 5,
                        y: 13
                    }, {
                        sc: 6,
                        y: 14
                    }, {
                        sc: 7,
                        y: 15
                    }, {
                        sc: 8,
                        y: 16
                    },
                    {
                        sc: 9,
                        y: 17
                    }, {
                        sc: 10,
                        y: 18
                    }, {
                        sc: 11,
                        y: 19
                    }, {
                        sc: 12,
                        y: 20
                    }, {
                        sc: 13,
                        y: 21
                    }, {
                        sc: 14,
                        y: 22
                    }, {
                        sc: 15,
                        y: 23
                    }, {
                        sc: 16,
                        y: 24
                    }, {
                        sc: 18,
                        y: 25
                    },
                    {
                        sc: 20,
                        y: 26
                    }, {
                        sc: 23,
                        y: 27
                    }, {
                        sc: 26,
                        y: 28
                    }, {
                        sc: 28,
                        y: 29
                    }, {
                        sc: 31,
                        y: 30
                    }, {
                        sc: 34,
                        y: 31
                    }, {
                        sc: 37,
                        y: 32
                    }, {
                        sc: 39,
                        y: 33
                    }, {
                        sc: 42,
                        y: 34
                    },
                    {
                        sc: 45,
                        y: 35
                    }, {
                        sc: 47,
                        y: 36
                    }, {
                        sc: 50,
                        y: 37
                    }, {
                        sc: 52,
                        y: 38
                    }, {
                        sc: 55,
                        y: 39
                    }, {
                        sc: 58,
                        y: 40
                    }, {
                        sc: 61,
                        y: 41
                    }, {
                        sc: 63,
                        y: 42
                    }, {
                        sc: 66,
                        y: 43
                    },
                    {
                        sc: 69,
                        y: 44
                    }, {
                        sc: 71,
                        y: 45
                    }, {
                        sc: 73,
                        y: 47
                    }, {
                        sc: 74,
                        y: 49
                    }, {
                        sc: 75,
                        y: 50
                    }, {
                        sc: 76,
                        y: 52
                    }, {
                        sc: 77,
                        y: 53
                    }, {
                        sc: 78,
                        y: 55
                    }, {
                        sc: 79,
                        y: 56
                    },
                    {
                        sc: 80,
                        y: 58
                    }, {
                        sc: 81,
                        y: 59
                    }, {
                        sc: 82,
                        y: 60
                    }, {
                        sc: 83,
                        y: 62
                    }, {
                        sc: 84,
                        y: 63
                    }, {
                        sc: 85,
                        y: 65
                    }, {
                        sc: 86,
                        y: 66
                    }, {
                        sc: 87,
                        y: 68
                    }, {
                        sc: 88,
                        y: 69
                    },
                    {
                        sc: 89,
                        y: 70
                    }, {
                        sc: 90,
                        y: 72
                    }, {
                        sc: 91,
                        y: 73
                    }, {
                        sc: 92,
                        y: 75
                    }, {
                        sc: 93,
                        y: 76
                    }, {
                        sc: 94,
                        y: 78
                    }, {
                        sc: 95,
                        y: 79
                    },
                ]
                for (var i = 0; i < 61; i++) {
                    c.beginPath()
                    c.moveTo(tickSize * 8 + 0, 40 + (count - arr9[i].y) / count * h);
                    c.lineTo(tickSize * 8 + 15, 40 + (count - arr9[i].y) / count * h);
                    c.strokeStyle = '#000'
                    c.textAlign = 'center';
                    c.fillText(arr9[i].sc, tickSize * 8 + 20, 45 + (count - arr9[i].y) / count * h);
                    c.stroke();
                }
                for (var i = 1; i < 7; i++) {
                    c.beginPath()
                    c.moveTo(tickSize * 10 - 15, 40 + (count - 12 * i) / count * h);
                    c.lineTo(tickSize * 10, 40 + (count - 12 * i) / count * h);
                    c.strokeStyle = '#000'
                    c.textAlign = 'center';
                    c.fillText(i, tickSize * 10 - 20, 45 + (count - 12 * i) / count * h);
                    c.stroke();
                }
                setLine('P总数', dymaDataP, false)
                setLine('P、E总数', dymaDataPE, true)

                this.chartConvertCanvasToImage(myCanvas)
                canvasWrap.removeChild(canvasWrap.childNodes[0])

                function setLine(lineTitle, dymaDataP, isDashLine) {
                    let score = 0
                    let minWidth = w / 10
                    for (let i = 0; i < dymaDataP.length; i++) {
                        score += dymaDataP[i]
                    }
                    let scoreH = calcScoreH(score, arr9)
                    let scoreInt = parseInt(scoreH.y)
                    let ageYear = scoreInt < 12 ? 0 : parseInt(scoreInt / 12)
                    let ageMouth = scoreInt % 12
                    let ageTitle = ageYear + '岁' + ageMouth + '月'
                    if (isDashLine) {
                        c.setLineDash([5, 5]);
                    }
                    c.beginPath()
                    c.fillText(lineTitle, 20, head + (count - arr2[dymaDataP[0]]) / count * h - 10, 20);
                    c.moveTo(0, head + (count - arr2[dymaDataP[0]]) / count * h);
                    c.lineTo(minWidth + minWidth * 0, head + (count - arr2[dymaDataP[0]]) / count * h);
                    c.lineTo(minWidth + minWidth * 1, head + (count - arr3[dymaDataP[1]]) / count * h);
                    c.lineTo(minWidth + minWidth * 2, head + (count - arr4[dymaDataP[2]]) / count * h);
                    c.lineTo(minWidth + minWidth * 3, head + (count - arr5[dymaDataP[3]]) / count * h);
                    c.lineTo(minWidth + minWidth * 4, head + (count - arr6[dymaDataP[4]]) / count * h);
                    c.lineTo(minWidth + minWidth * 5, head + (count - arr7[dymaDataP[5]]) / count * h);
                    c.lineTo(minWidth + minWidth * 6, head + (count - arr8[dymaDataP[6]]) / count * h);
                    c.lineTo(minWidth + minWidth * 7, head + (count - scoreH.y) / count * h);
                    c.lineTo(minWidth + minWidth * 9, head + (count - scoreH.y) / count * h); //测试显示儿童的年龄
                    c.strokeStyle = '#000'
                    c.textAlign = 'left';
                    c.fillText(ageTitle, minWidth * 9, head + (count - scoreH.y) / count * h + 10);
                    c.stroke();
                }

                function calcScoreH(score, arr) {
                    for (let i = 0; i < arr.length; i++) {
                        if (arr[i].sc >= score) {
                            if (arr[i].sc === 0) {
                                return 0
                            }
                            return arr[i - 1]
                        }
                    }
                }
            },
            convertCanvasToImage(canvas) {
                let image = new Image();
                image.src = canvas.toDataURL("image/png");
                image.setAttribute('class', 'round_img')
                document.getElementById('roundInsert').appendChild(image)
            },
            chartConvertCanvasToImage(canvas) {
                let image = new Image();
                image.src = canvas.toDataURL("image/png");
                image.width = 290;
                image.height = 580;
                document.getElementById('lineChart').appendChild(image)
            },
            createdLastImg() {
                let p = document.querySelector(".paperform-form");
                let c = document.querySelector("#canvasArea")
                html2canvas(p)
                    .then(canvas => {
                        p.removeChild(c)
                        p.appendChild(canvas)
                        let image = new Image();
                        image.src = canvas.toDataURL("image/png");
                        p.removeChild(p.childNodes[0])
                        p.appendChild(image)
                    });
            }
        },
        created() {
            let originData = this.cpepChartData.Result
            for (let i = 0; i < 5; i++) {
                this.roundData.push(originData[i])
            }
            console.log(this.roundData)
            for (let j = 5; j < originData.length; j++) {
                this.lineData.push(originData[j])
            }
            console.log(this.lineData)
        },
        beforeMount() {
            console.log('beforeMount')
        },
        mounted() {
            this.drawRound(this.roundData);
            this.drawDevelopChart(this.lineData);
            this.createdLastImg();
        },
        beforeUpdate() {
            console.log('beforeUpdate')
        },
        updated() {
            console.log('updated')
        }
    }

</script>
<style scoped>
    * {
        font-size: 12px;
    }

    .tg {
        border-collapse: collapse;
        border-spacing: 0;
    }

    .tg td {
        font-family: Arial, sans-serif;
        font-size: 12px;
        padding: 4px 2px;
        border-style: solid;
        border-width: 1px;
        overflow: hidden;
        word-break: normal;
    }

    .tg th {
        font-family: Arial, sans-serif;
        font-size: 12px;
        font-weight: normal;
        padding: 4px 2px;
        border-style: solid;
        border-width: 1px;
        overflow: hidden;
        word-break: normal;
    }

    .tg .tg-s6z2 {
        text-align: center
    }



    .chartText {
        width: 610px;
    }

    #blockChart {
        width: 310px;
        height: 400px;
    }

    .titleBox {
        display: flex;
        margin-bottom: 20px;
    }

    .titleItem {
        width: 35px;
        height: 14px;
        line-height: 14px;
        text-align: center;
    }


    .contentBox {
        display: flex;
    }

    .contentItem {
        width: 35px;
        margin-right: 8px;
    }

    .contentItem div {
        width: 100%;
        height: 14px;
        line-height: 14px;
        text-align: center;
        margin-bottom: 4px;
    }

    .contentItem .contenttIitle {
        font-size: 10px;
    }

    .bgcolor {
        background: white;
    }

    .ligcolor {
        background: #dddddd;
    }

    .midcolor {
        background: #646464;
    }

    .heavycolor {
        background: #242424;
    }

    #roundInsert {
        width: 610px;
        height: 600px;
        display: flex;
        margin-bottom: 10px;
    }

    #roundInsert>div:nth-child(1) {
        width: 310px;
        margin-right: 10px;
    }

    #roundInsert>div:nth-child(2) {
        margin-top: 28px;
    }

    .twoCharts {
        display: flex;
        justify-content: space-between;
    }

    .reporterAndDate {
        display: flex;
        justify-content: space-between;
    }

    .projectScore {
        margin-bottom: 5px;
        padding-left: 10px;
    }
    .projectScore span {
        margin-right: 20px;
    }

</style>
