<template>
    <div id="appMain" class="appWrap" v-loading="homeLoading" element-loading-text="拼命加载中">
        <Navbar></Navbar>
        <div class="main">
            <router-view key="key"></router-view>
        </div>
        <div id='footer' class="clearfix">
            <span class="linkTitle">其它网站</span>
            <a target='_blank' href="http://www.onenewcare.com/">一新康复</a>
            <a target='_blank' href="http://112.74.115.13:8082/">一新儿童康复中心</a>
            <span class="versionNumber">版本号v1.0.0</span>
        </div>
    </div>
</template>
<script>
    import Navbar from '../components/Navbar.vue';
    import api from '../api/index.js';
    export default {
        name: 'home',
        computed: {
            key() {
                return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
            }
        },
        data() {
            return {
                homeLoading: false
            }
        },
        components: {
            Navbar
        },
        methods: {},
        created() {
            api.drProfile().then(res => {
                this.$store.dispatch('addUserProfile', res.data);
                api.getDoctorPatientList().then(res => {
                    let arr = [];
                    var groupInfo = res.data.List;
                    for (var i = 0, j = groupInfo.length; i < j; i++) {
                        var obj = {
                            'groupName': groupInfo[i].Name,
                            'groupID': groupInfo[i].ID,
                            'groupPatients': groupInfo[i].Agents
                        };
                        arr.push(obj);
                    }
                    this.$store.dispatch('addPatientList', arr);
                    this.homeLoading = false;
                    this.$router.push({path: this.$router.path});
                }).catch(err => {
                    console.log('患者组网络请求有问题');
                    console.log(err)
                })
            }).catch( err => {
                console.log(err)
                console.log('home医生信息网络请求有问题');
                console.log(err)
            })
        }
    };
</script>
<style scoped>
    .appWrap {
        position: absolute;
        left: 0;
        top: 0;
        width: 1280px;
        height: 760px;
        border: 1px solid #efefef;


        overflow: hidden;
    }

    .main {
        position: absolute;
        left: 0;
        top: 94px;
        width: 1280px;
        height: 626px;
    }

    #footer {
        position: absolute;
        left: 0;
        top: 720px;
        width: 1280px;
        height: 40px;
    }

    #footer a {
        height: 40px;
        line-height: 40px;
        margin: 0 10px;
        font-size: 18px;
    }
    .linkTitle{
        display: inline-block;
        height: 40px;
        line-height: 40px;
        margin: 0 10px;
        font-size: 18px;
    }
    .versionNumber {
        float: right;
        height: 40px;
        line-height: 40px;
        margin: 0 10px;
        font-size: 14px;
    }
    .clearfix:after {
        display: block;
        content: '';
        clear: both;
        height: 0;
        width: 0;
        visibility: hidden;
    }

</style>
