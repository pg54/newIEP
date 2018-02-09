<template>
    <div class="reportWrap">
        <reportPaper :testID="testTestID" :paticentID="testPaticentID"></reportPaper>
    </div>
</template>
<script>
    import { getPacientTestReport } from '../../../api/api';
    import reportPaper from '../../../components/reportPaper.vue';

    export default {
        name: 'testReport',
        components: {
            reportPaper
        },
        data() {
            return {
                testTestID: '',
                testPaticentID: ''
            }
        },
        methods: {
            setComponProps() {
                this.testTestID = this.$route.params.id;
                this.testPaticentID = this.$route.params.patiend_id;
            }
        },
        mounted() {
            this.setComponProps();
        }
    };
</script>
<style scoped>
    .reportWrap {
        width: 1185px;
        height: 583px;
        position: absolute;
        left: 95px;
        top: 0;
    }
</style>
