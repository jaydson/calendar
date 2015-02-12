module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		clean: ['dist'],
		'6to5': {
			options: {
				modules: 'common'
			},

			main: {
				files: [{
					src: ['./src/app.js'],
					dest: 'dist/app.js',
				}]
			}
		},

		browserify: {
			main: {
				src: ['dist/sample/common/app.js'],
				dest: 'dist/sample/common/bundle.js'
			}
		},

		copy: {
			main: {
				expand: true,
				cwd: './src',
				src: ['static/**'],
				dest: 'dist'
			}
		}
	});

	grunt.registerTask('default', ['copy', '6to5','browserify']);
}