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
        '!/public/assets/js/common.min.js'
      ]
    },
    less: {
      dist: {
        files: {
          'public/assets/css/main.min.css': [
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
          'public/assets/js/common.min.js': [
            'public/assets/js/vendor/bootstrap/transition.js',
            'public/assets/js/vendor/bootstrap/alert.js',
            'public/assets/js/vendor/bootstrap/button.js',
            'public/assets/js/vendor/bootstrap/carousel.js',
            'public/assets/js/vendor/bootstrap/dropdown.js',
            'public/assets/js/vendor/bootstrap/modal.js',
            'public/assets/js/vendor/bootstrap/tooltip.js',
            'public/assets/js/vendor/bootstrap/popover.js',
            'public/assets/js/vendor/bootstrap/scrollspy.js',
            'public/assets/js/vendor/bootstrap/tab.js',
            'public/assets/js/vendor/bootstrap/affix.js',
            'public/assets/js/vendor/*.js',
            'public/assets/js/_*.js'
          ]
        }
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
          'public/assets/css/common.min.css',
          'public/assets/js/common.min.js'
        ]
      }
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Register tasks
  grunt.registerTask('default', [
    'less',
    'uglify'
  ]);

  grunt.registerTask('dev', [
    'watch'
  ]);

};
