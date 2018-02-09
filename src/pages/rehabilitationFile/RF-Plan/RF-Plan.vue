<template>
    <div>
        <TeachSchedule :isIEP="false" :patientID="chosedPatientID"></TeachSchedule>
    </div>
</template>
<script>
    import TeachSchedule from '../../../components/teachSchedule.vue'
export default {
    name: 'iepPlan',
    computed: {
        chosedPatientID: function () {
            return this.$store.state.mystudent.currentPatientId.ID;
        }
    },
    components: {
        TeachSchedule
    },
    data() {
        return {}
    },
    methods: {},
    created() {

    }
};
</script>

<style scoped>

</style>

