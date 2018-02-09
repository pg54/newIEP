<template>
    <div class="rhFile">
            <div id="sidebar">
                <ul slot="links" class="links">
                    <li>
                        <router-link class='link' to="/studentFile/rehabilitationFile/rFRegister">
                            <p>入学登记</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link class='link' to="/studentFile/rehabilitationFile/rFAssessment">
                            <p>能力评估</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link class='link' to="/studentFile/rehabilitationFile/rFAnalysis">
                            <p>评测分析</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link class='link' to="/studentFile/rehabilitationFile/rFEntrance">
                            <p>入学评测</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link class='link' to="/studentFile/rehabilitationFile/rFPlan">
                            <p>教学计划</p>
                        </router-link>
                    </li>
                    <li v-if="false">
                        <router-link class='link' to="/studentFile/rehabilitationFile/rFRecord">
                            <p>成绩记录</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link class='link' to="/studentFile/rehabilitationFile/rFTrack">
                            <p>后续跟踪</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link class='link' to="/studentFile/rehabilitationFile/rFAttachment">
                            <p>附件上传</p>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="main">
                <router-view :key="key"></router-view>
            </div>
    </div>
</template>
<script>
export default {
    name: 'rehabilitationFile',
    components: {
    },
    computed: {
        key() {
            if (this.$router.currentRoute.path == '/studentFile/rehabilitationFile') {
                this.$router.push({ path: '/studentFile/rehabilitationFile/rFRegister' });
            }
            this.$store.dispatch('setShowPacientList', false);
            return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date();
        }
    },
    methods: {
        goBack() {
            this.$store.dispatch('setShowPacientList', true);
            this.$router.push({ path: '/studentFile' });
        }
    },
    created() {
    }
};
</script>
<style scoped>
.rhFile {
    position: relative;
}
#sidebar {
    width: 95px;
    height: 583px;
    position: absolute;
    top:42px;
    left:0;
    border-right: 1px solid #EFEFEF;
    background-color: #EFEFEF
}

.main {
    position: absolute;
    left: 95px;
    height: 626px;
    top: 0;
    width: calc(100% - 95px);
}

.links {
    width: 94px;
    height: 100%;
    background-color: #EFEFEF
}

.link {
    display: flex;
    width: 94px;
    height: 70px;
    font-size: 14px;
    color: #333333;
    align-items: center;
    justify-content: center
}

.link span {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 20px;
}

.router-link-active {
    background-color: RGBA(254, 255, 255, 1.00);
    color: RGBA(47, 189, 252, 1.00);
    border-left: 6px solid #31BBFC
}

/*.navigation {
    font-size: 16px;
    padding-left: 18px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    width: 100%;
    padding-top: 10px;
    border-bottom: 1px solid gray;
}

.navigation span:hover {
    text-decoration: underline;
    color: #42ABD8;
}*/

.pageNavbar {
    position: absolute;
    left: 0;
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

