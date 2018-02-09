<template>
    <div class="centerBox">
        <resultPaper :paticentID="testResultPaticentID" :testID="testResultTestID"></resultPaper>
    </div>
</template>
<script>
    import resultPaper from '../../../components/resultPaper.vue';
    export default {
        name: 'testResult',
        components: {
            resultPaper
        },
        props: ['testResultPaticentID', 'testResultTestID'],
        data() {
            return {
                TestPaticentID: '',
                TesttestID: ''
            };
        },
        methods: {
//           setComponProps() {
//               this.TesttestID = this.$route.params.testID;
//               this.TestPaticentID = this.$route.params.patiend_id;
//           }
        },
        created() {
//            this.setComponProps();
        }
    };
</script>
<style scoped>
    .centerBox {width: 100%;height: 583px;padding: 0 80px}
</style>
