'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'public/assets/js/*.js',
        '!/public/assets/js/build/common.min.js'
      ]
    },
    less: {
      dist: {
        files: {
          'public/assets/css/build/main.min.css': [
            'public/assets/less/app.less'
          ]
        },
        options: {
          compress: true
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'public/assets/js/build/common.min.js': [
            'public/assets/js/vendor/bootstrap/alert.js',
            'public/assets/js/vendor/bootstrap/button.js',
            'public/assets/js/vendor/bootstrap/dropdown.js',
            'public/assets/js/vendor/bootstrap/tooltip.js',
            'public/assets/js/vendor/*.js',
          ]
        }
      }
    },
    imagemin: {
      files: {
      },
      dynamic: {
        options: {
          optimizationLevel: 7,
          cache: false
        },
        files: [{
          expand: true,
          cwd: 'public/assets/img/src',
          src: [
            '**/*.{png,jpg,gif}'
          ],
          dest: 'public/assets/img/build'
        }]
      }
    },
    watch: {
      less: {
        files: [
          'public/assets/less/*.less',
          'public/assets/less/vendor/bootstrap/*.less'
        ],
        tasks: ['less']
      },
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['jshint', 'uglify']
      },
      livereload: {
        options: {
          livereload: true
        },
        files: [
          'public/assets/css/build/common.min.css',
          'public/assets/js/build/common.min.js'
        ]
      },
      imagemin: {
        files: [
          'public/assets/img/src/**/*'
        ],
      }
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Register tasks
  grunt.registerTask('default', [
    'less',
    'uglify',
    'imagemin'
  ]);

  grunt.registerTask('dev', [
    'watch'
  ]);

};
