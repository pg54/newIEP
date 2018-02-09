<template>
    <div>
        <p>通报提醒</p>
    </div>

</template>

<script>
    import api from '../../api/index.js';
    export default {
        name: 'noticeReminder',
        data() {
            return {
                nowData: (new Date()).toISOString()
            }
        },
        methods: {
            getPageData(pageIndex) {
                let params = {
                    PageIndex: pageIndex,
                    PageSize: 10,
                    StartDate: '2017-1-1',
                    EndDate: this.nowData
                }
                api.getServiceReviewData(params)
                    .then(res => {
                    })
                    .catch(err => {

                    })
            }
        },
        created() {
            this.getPageData(1);
        }
    };
</script>
<style scoped>
</style>
