angular.module('APP', ['ngRoute', 'APP.ngControllers', 'ui.bootstrap'])

.config(function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: '../views/AboutUs.html',
      controller: 'AboutUsController',
      disableCache: true
    })
    .when('/Articles',{
      templateUrl: '../views/Articles.html',
      controller: 'ArticlesController',
      disableCache: true
    })
    .when('/ContactUs',{
      templateUrl: '../views/ContactUs.html',
      controller: 'ContactUsController',
      disableCache: true
    })
    .when('/Lecturer', {
      templateUrl: '../views/Lecturer.html',
      controller: 'LecturerController',
      disableCache: true
    });
    }
);