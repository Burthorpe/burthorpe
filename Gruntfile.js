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
        '!/public/assets/js/build/*.js'
      ]
    },
    less: {
      dist: {
        files: {
          'public/assets/css/build/common.min.css': [
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
            'public/assets/js/vendor/bootstrap-sidebar/*.js',
            'public/assets/js/vendor/*.js',
            'public/assets/js/*.js'
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
      options: {
        livereload: true
      },
      less: {
        files: [
          'public/assets/less/*.less',
          'public/assets/less/burthorpe/*.less',
          'public/assets/less/vendor/bootstrap/*.less',
          'public/assets/less/vendor/font-awesome/*.less'
        ],
        tasks: ['less']
      },
      js: {
        files: [
          '<%= jshint.all %>',
          'public/assets/js/**/*',
          '!public/assets/js/build/*'
        ],
        tasks: ['jshint', 'uglify']
      },
      imagemin: {
        files: [
          'public/assets/img/src/**/*'
        ]
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
