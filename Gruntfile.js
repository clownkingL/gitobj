module.exports = function (grunt) {
//    ����
//    initConfig��grunt��һ�ַ���
    grunt.initConfig(
        {
            pkg: grunt.file.readJSON('package.json'),
            //���style CSS�﷨
            csslint: {
                src: ['public/stylesheets/*.css']
            },
            concat:{
                css:{
                    src:['public/stylesheets/*.css'],
                    dest:'public/images/<%=pkg.name%>.css'
                }
            },
            //ѹ��style CSS�ļ�Ϊ.min.css
            cssmin:{
                options:{
                //    �Ƴ�css�ļ������е�ע��
                    keepSpecialComments:0
                },
            minify:{
                expand:true,
                cwd:'public/images/',
                src:['<%=pkg.name%>.css'],
                dest:'public/stylesheets/',
                ext:'.min.css'
            }
            },

        }
    );

//    ���ز��
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
//    Ĭ������
    grunt.registerTask('default', ['csslint','concat','cssmin']);
//    �ϲ�CSS�ļ�


}