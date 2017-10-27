module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.initConfig({
        less: {
            style: {
                files: {
                      "css/style.css": ["less/variables.less","less/style.less", "less/blocks/page-header.less", "less/blocks/main-nav.less","less/blocks/stats.less","less/blocks/advantages.less","less/blocks/news.less","less/blocks/reviews.less", "less/blocks/page-footer.less" , "less/blocks/works.less", "less/blocks/work.less", "less/blocks/price.less", "less/blocks/sale.less", "less/blocks/form.less"]
                }
              
            }
        }
        
    });
};