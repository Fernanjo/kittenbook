module.exports = function(grunt) {
	//Project configuration
	grunt.initConfig({
		//Tasks configured here
		concat: {
			release: {
				src: ['js/values.js', 'js/prompt.js', 'js/getImages.js', 'js/replaceImages.js', 'js/main.js'],
				dest: 'release/main.js'
			}
		},
		copy: {
			release: {
				src: 'manifest.json',
				dest: 'release/manifest.json'
			}
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			files: ['release/main.js']
		},
		watch: {
			files: ['js/*.js', 'manifest.json'],
			tasks: ['default']
		},
		jsdoc: {
			dist: {
				src: ['js/*.js'],
				dest: 'doc'
			}
		},
		jasmine: {
			test: {
				src: ['js/values.js', 'js/prompt.js', 'js/getImages.js', 'js/replaceImages.js', 'js/main.js'],
				options: {
					specs: 'test/*.js'
				}
			}
		}
	});
	
	//Grunt plugins loaded here
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-jsdoc');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	
	//Register tasks here
	grunt.registerTask('default', ['concat', 'jshint', 'copy']);
};