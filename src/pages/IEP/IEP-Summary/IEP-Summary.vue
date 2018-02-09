<template>
    <div class="iepSummaryBox">
        <div class="pageNavbar">
            <span style="color: black">当前位置&nbsp;&nbsp;>&nbsp;&nbsp;</span>
            <span style="cursor: none;color: black">记录总结&nbsp;&nbsp;>&nbsp;&nbsp;</span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'iepSummary',
        data() {
            return {
            };
        },
        computed: {
        },
        methods: {
        },
        components: {
        },
        mounted() {
        }
    };
</script>
<style scoped>
    .iepSummaryBox {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .pageNavbar {
        position: absolute;
        left: -94px;
        top: 0;
        width: 1280px;
        height: 42px;
        border-bottom: 1px solid #cccccc;
    }
    .pageNavbar span {
        font-size: 16px;
        cursor: pointer;
        line-height: 42px;
    }
    .pageNavbar span:hover {
        color: rgb(66, 171, 216);
    }

</style>
