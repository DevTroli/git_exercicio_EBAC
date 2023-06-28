module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    './style/main.css': 'main.less'
                }
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    './style/main.min.css' : 'main.less'
                }
            }
        },
        concurrent: {
            target:['less', 'OlaGrunt']
        },
        uglify: {
            target:{
               files: {
                   './script/main.min.js': 'main.js'
               } 
            }
        }
    })

    grunt.registerTask('OlaGrunt', function() {
       const done = this.async();
        setTimeout(function() {
            console.log('oi');
            done();
        }, 3000);
    })

    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-concurrent')

    grunt.registerTask('default', 'uglify', ['concurrent'])
}