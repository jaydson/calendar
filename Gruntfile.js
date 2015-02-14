module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		clean: ['dist'],
		'6to5': {
			options: {
				modules: 'common'
			},

			build: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: ['**/*.js'],
					dest: 'dist/',
				}],
			},

			tests: {
				files: [{
					expand: true,
					cwd: 'src/',
					flatten: true,
					src: ['tests/**/*.js'],
					dest: 'dist/__tests__',
				}]
			}
		},

		browserify: {
			main: {
				src: ['dist/app.js'],
				dest: 'dist/bundle.js'
			}
		},

		copy: {
			main: {
				expand: true,
				flatten: true,
				cwd: './src',
				src: ['static/**'],
				dest: 'dist'
			}
		}
	});

	grunt.registerTask('default', ['clean','copy', '6to5','browserify']);
}