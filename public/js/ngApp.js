angular.module('APP', ['ngRoute', 'APP.ngControllers', 'ui.bootstrap'])

.config(function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: '../views/AboutUs.html',
      controller: 'AboutUsController',
      disableCache: true
    })
    .when('/Articles',{
      templateUrl: 'http://mp.weixin.qq.com/s?__biz=MjM5NzIyNzU1MQ==&mid=208008385&idx=1&sn=59ad806232d084be256a6241c8046f79#rd',
      controller: 'ArticlesController',
      disableCache: true
    })
    .when('/ContactUs',{
      templateUrl: '../views/ContactUs.html',
      controller: 'ContactUsController',
      disableCache: true
    });
    }
);