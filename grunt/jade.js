// Compile Jade templates
module.exports = {
	main: {
		options: {
				client: false,
				pretty: true
		},
		files: [ {
			cwd: '<%= dev.jade %>',
			src: ['*.jade'],
			dest: '<%= dev.html %>/',
			expand: true,
			ext: '.html'
		} ]
	}
}
