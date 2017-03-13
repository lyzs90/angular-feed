/**
 * `babel`
 *
 * ---------------------------------------------------------------
 *
 * Transpile ES6 files located in `assets/js` into Javascript
 * and generate new `.js` files in `.tmp/public/js`.
 *
 * For usage docs see:
 *   https://github.com/babel/grunt-babel
 *
 */
module.exports = function(grunt) {

  grunt.config.set('babel', {
    dev: {
      options: {
        presets: ['es2015']
      },
      files: [{
        expand: true,
        cwd: 'assets/js',
        src: ['**/*.js', '!dependencies/**/*.js'],
        dest: '.tmp/public/js',
        ext: '.js'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-babel');
};