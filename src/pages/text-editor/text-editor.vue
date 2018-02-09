<template>
    <div>
        <div>
            <textarea class='tinymce-textarea' id="tinymceEditer"></textarea>
        </div>
    </div>
</template>

<script>
import tinymce from 'tinymce';
export default {
    name: 'text-editor',
    data () {
        return {
            
        };
    },
    mounted () {
        this.$nextTick(() => {
            console.log('sth');
            let vm = this;
            var height = 300;
            console.log(tinymce);
            tinymce.init({
                selector: '#tinymceEditer',
                branding: false,
                elementpath: false,
                height: height,
                language: 'zh_CN.GB2312',
                menubar: 'edit insert view format table tools',
                plugins: [
                    'advlist autolink lists link image charmap print preview hr anchor pagebreak imagetools',
                    'searchreplace visualblocks visualchars code fullpage',
                    'insertdatetime media nonbreaking save table contextmenu directionality',
                    'emoticons paste textcolor colorpicker textpattern imagetools codesample'
                ],
                toolbar1: ' newnote print preview | undo redo | insert | styleselect | forecolor backcolor bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image emoticons media codesample',
                autosave_interval: '20s',
                image_advtab: true,
                table_default_styles: {
                    width: '100%',
                    borderCollapse: 'collapse'
                },
                setup: function (editor) {
                    editor.on('init', function (e) {
                        console.log('editor init')
                    });
                }
            });
        });
    },
    destroyed () {
        tinymce.get('tinymceEditer').destroy();
    }
};
</script>

<style scoped>
.tinymce-textarea {
    width: 95vw;
    margin: 300px auto;
    margin-bottom: 0px;
    height: 300px;
    border: 1px solid red;

}


</style>
