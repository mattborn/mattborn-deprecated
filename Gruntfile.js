module.exports = function (grunt) {

	grunt.initConfig({
		assemble: {
			options: {
				plugins: 'assemble-contrib-permalinks'
			},
			posts: {
				options: {
					layout: 'posts.hbs',
					permalinks: {
						preset: 'pretty'
					}
				},
				files: [{
					expand: true,
					cwd: 'source',
					src: '**/*.md',
					dest: 'public'
				}]
			}
		},
		sass: {
			options: {
				includePaths: require('node-bourbon').includePaths,
				outputStyle: 'compressed',
				sourceMap: true
			},
			main: {
				expand: true,
				cwd: 'source',
				src: '**/*.scss',
				dest: 'public',
				ext: '.css'
			}
		},
		watch: {
			markup: {
				files: 'source/**/*.md',
				tasks: 'assemble',
				options: { livereload: true }
			},
			styles: {
				files: 'source/**/*.scss',
				tasks: 'sass'
			},
			livereload: {
				files: 'public/**/*.css',
				options: { livereload: true }
			}
		},
		connect: {
			main: {
				options: { base: 'public' }
			}
		}
	});

	grunt.loadNpmTasks('assemble');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('build', [
		'assemble',
		'sass'
	]);

	grunt.registerTask('default', ['build', 'connect', 'watch']);

};
