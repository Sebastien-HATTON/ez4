angular.module('APP', ['ngRoute', 'APP.ngControllers', 'ui.bootstrap'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider, $location){
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
    .when('/News/:newId', {
      templateUrl: function(params){ return '../views/News/' + params.newId; },
      disableCache: true
    })
    .otherwise({
        redirectTo: '/'
    });
    
    // cleanup url
    $locationProvider.html5Mode(true);

    }
]);