// Karma configuration
// Generated on Thu Oct 06 2016 11:58:18 GMT+0800 (中国标准时间)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '.',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        //test/**/*.js
        //"./10.1addtest.js"
        //文件需要按顺序依赖
        "./angular.js",
        "./angular-mocks.js",
        "./10.3app.js",
        //测试控制器controller
        //"./10.2userCtrl.js",
        //"./10.4userCtrl_spec.js"，
        //测试服务service
      //"./10.5userService.js",
      //"./10.6userService_spec.js"
        //测试过滤器
       // "10.7userFilter.js",
       // "10.8userFilter_spec.js"
        //测试指令
       // "10.9userDirective.js",
       // "10.10userDirective_spec.js"
        //测试接口请求数据
        "10.11userHttp_spec.js"

    ],


    // list of files to exclude
    exclude: [
      'yes'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
