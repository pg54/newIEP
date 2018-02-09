<template>
    <div class="onc-select">
        <div class="inputBox" @click="expandHappen">
            <input type="text" class="el-input-inner">
            <i class="el-input-icon el-icon-arrow-down"></i>
        </div>
        <div class="resize-triggers">
            <div class="expand-trigger">
                <div  class="oneOption" v-for="ele in options" style="width: 60px;height: 37px">ele</div>
            </div>
            <div class="contract-trigger"></div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'oncSelect',
        data() {
            return {
                options: ['volvo','saab','fiat','audi']
            };
        },
        computed: {

        },
        methods: {
            expandHappen: function () {

            }
        },
    }
</script>

<style scoped>
    .inputBox {
        width: 100px;
        height: 30px;
        border: 1px solid #cccccc;
        border-radius: 4px;
        position: relative;
    }

    .resize-triggers {
        position: absolute;
        left: 0;
        bottom: -1px;
        width: 100%;
        height: 0;
        transition: height .2s ease-in-out;
    }
    .oneOption {

    }
    .oneOption:hover {
        background-color: #00c261;
    }





</style>
