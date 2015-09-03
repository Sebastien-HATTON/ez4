angular.module('APP', ['ngRoute', 'APP.ngControllers', 'ui.bootstrap'])

.config(function($routeProvider, $locationProvider){
    $routeProvider
    .when('/', {
      templateUrl: '../views/AboutUs.html',
      controller: 'AboutUsController',
      disableCache: true
    })
    .when('/News',{
      templateUrl: '../views/News.html',
      controller: 'NewsController',
      disableCache: true
    })
    .when('/ContactUs',{
      templateUrl: '../views/ContactUs.html',
      controller: 'ContactUsController',
      disableCache: true
    })
    .when('/Mentors', {
      templateUrl: '../views/Mentors.html',
      controller: 'MentorsController',
      disableCache: true
    })
    .when('/Courses', {
      templateUrl: '../views/Course.html',
      controller: 'CourseController',
      disableCache: true
    })
    .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
    }
);