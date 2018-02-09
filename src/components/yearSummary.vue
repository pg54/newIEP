<template>
    <div class="paperform-content">
        <div id="paperform-form1">
            <DIV style="LINE-HEIGHT: 30px;font-size: 22px" class=size16 align=center>
                <STRONG><font color="#20a0ff">年度评估与总结</font></STRONG>
            </DIV>

        </div>
        <div id="paperform-form2">
            <div class="summary">
                <p>______年______月至______年______月&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年度评估总结</p>
                <p>1、本年度初次至末次评估提高分数_______分</p>
                <p>2、儿童康复训练： <span class="choseOption short1">⎕&nbsp; 显效</span>  <span class="choseOption short1">⎕&nbsp;有效</span>    <span class="choseOption short1">⎕&nbsp;无效</span> </p>
                <p>3、参加有组织的文化、体育、娱乐等社会融入活动：_______次</p>
                <p>4、家长培训： <span class="choseOption short2">⎕&nbsp;集中授课</span>  <span class="choseOption">⎕&nbsp;亲子同训</span>  <span class="choseOption">⎕&nbsp;个别指导 </span>   <span class="choseOption">⎕&nbsp;家庭辅导 </span>  </p>
                <p>5、家长对培训工作的满意度： <span class="choseOption">⎕&nbsp; 满意</span> <span class="choseOption">⎕&nbsp;基本满意</span>  <span class="choseOption">⎕&nbsp;不满意</span> </p>
                <p>6、家长对儿童康复的满意度：  <span class="choseOption">⎕&nbsp;满意</span>  <span class="choseOption">⎕&nbsp;基本满意</span>  <span class="choseOption">⎕&nbsp;不满意</span> </p>
                <p>7、进一步的建议和意见：</p>
                <p class='advise'></p>
                <p class='advise'></p>
                <p class='advise'></p>
                <p class='advise adviseLong'></p>
                <p class="sign">
                    <span class="signLine">家长签名： </span>
                    <span class="signLine signLong">负责人员签名： </span>
                    <span class="">评估总结日期： &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日 </span>
                </p>
            </div>
           <div class="summary">
                <p>______年______月至______年______月&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年度评估总结</p>
                <p>1、本年度初次至末次评估提高分数_______分</p>
                <p>2、儿童康复训练： <span class="choseOption short1">⎕&nbsp; 显效</span>  <span class="choseOption short1">⎕&nbsp;有效</span>    <span class="choseOption short1">⎕&nbsp;无效</span> </p>
                <p>3、参加有组织的文化、体育、娱乐等社会融入活动：_______次</p>
                <p>4、家长培训： <span class="choseOption short2">⎕&nbsp;集中授课</span>  <span class="choseOption">⎕&nbsp;亲子同训</span>  <span class="choseOption">⎕&nbsp;个别指导 </span>   <span class="choseOption">⎕&nbsp;家庭辅导 </span>  </p>
                <p>5、家长对培训工作的满意度： <span class="choseOption">⎕&nbsp; 满意</span> <span class="choseOption">⎕&nbsp;基本满意</span>  <span class="choseOption">⎕&nbsp;不满意</span> </p>
                <p>6、家长对儿童康复的满意度：  <span class="choseOption">⎕&nbsp;满意</span>  <span class="choseOption">⎕&nbsp;基本满意</span>  <span class="choseOption">⎕&nbsp;不满意</span> </p>
                <p>7、进一步的建议和意见：</p>
                <p class='advise'></p>
                <p class='advise'></p>
                <p class='advise'></p>
                <p class='advise adviseLong'></p>
                <p class="sign">
                    <span class="signLine">家长签名： </span>
                    <span class="signLine signLong">负责人员签名： </span>
                    <span class="">评估总结日期： &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日 </span>
                </p>
            </div>

        </div>
    </div>
  
</template>
<script>
export default {
  name: 'yearSummary'
}
</script>
<style scoped>
.summary {
    width: 100%;
    height: 446px;
    border: 1px solid black;
    font-size: 14px;
    box-sizing: border-box;
    padding-top: 28px;
}
.summary p {
    margin-left: 20px;
    margin-bottom: 6px;

}
.summary .advise {
    margin-left: 10px;
}
.summary .sign {
    margin-left: 10px;
}
.advise {
    width: 90%;
    height: 28px;
    border-bottom: 1px dotted black;
    
}
.sign {
    margin-top: 24px;
}

.choseOption {
    display: inline-block;
    width: 120px;
}
.short1 {
    width: 60px;
}
.short2 {
    width: 94px;
}

.signLine {
    display: inline-block;
    width: 180px;
}
.signLong {
    width: 240px;
}
.adviseLong {
    width: 95%
}

</style>

