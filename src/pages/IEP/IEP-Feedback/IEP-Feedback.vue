<template>
    <div class="iepFeedbackBox">
        <div class="pageNavbar">
            <span style="color: black">当前位置&nbsp;&nbsp;>&nbsp;&nbsp;</span>
            <span style="cursor: none;color: black">反馈评价&nbsp;&nbsp;>&nbsp;&nbsp;</span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'iepFeedback',
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
    .iepFeedbackBox {
        position: relative;
        width: 100%;
        height: 100%;
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
