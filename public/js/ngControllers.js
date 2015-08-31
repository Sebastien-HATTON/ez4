angular.module('APP.ngControllers', ['ngRoute', 'ui.bootstrap'])
///////////////////////
//carousel Countroler//
///////////////////////
.controller('carousel', function ($scope) {
  $scope.slideInterval = 3000;
  var slides = $scope.slides = [{
      name: 'We are Strong', 
      image: '../src/carousel/carousel01.jpg',
      text: 'blablabla...',
      url: "#/"
    },
    {
      name: 'We are very good', 
      image: '../src/carousel/carousel02.jpg',
      text: 'blablabla...',
      url: "#/"
    },
    {
      name: 'We are 牛逼的要命', 
      image: '../src/carousel/carousel03.jpg',
      text: 'blablabla...',
      url: "#/"
    }];
})
.controller('AboutUsController', function($scope){
  
})
.controller('ArticleController', function($scope){
  
})
.controller('ContactUsController', function($scope, $http){
  $scope.user = {
    fname : '',
    lname : '',
    email : '',
    phone : '',
    content: ''
  };
  $scope.submit = function(){
    var tmp = {
    	"FirstName": $scope.user.fname,
    	"LastName": $scope.user.lname,
    	"EmailAddress": $scope.user.email,
    	"Phone": $scope.user.phone,
    	"Content": $scope.user.content
    };
    $http.post('/api/contact', tmp).success(function(data){
      if(data.state == "success"){
        alert("success");
      }
      else{
        alert("Internal Error");
      }
    });
  };
})