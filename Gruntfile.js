module.exports = function (grunt) {
//    配置
//    initConfig是grunt的一种方法
    grunt.initConfig(
        {
            pkg: grunt.file.readJSON('package.json'),
            //检查style CSS语法
            csslint: {
                src: ['public/stylesheets/*.css']
            },
            concat:{
                css:{
                    src:['public/stylesheets/*.css'],
                    dest:'public/images/<%=pkg.name%>.css'
                }
            },
            //压缩style CSS文件为.min.css
            cssmin:{
                options:{
                //    移除css文件中所有的注释
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

//    加载插件
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
//    默认任务
    grunt.registerTask('default', ['csslint','concat','cssmin']);
//    合并CSS文件


}