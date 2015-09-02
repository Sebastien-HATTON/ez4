angular.module('APP.ngControllers', ['ngRoute', 'ui.bootstrap'])
//////////////
// nav ctrl //
//////////////
.controller('navController', function($scope, $location){
  $scope.isActive = function (viewLocation) {
     var active = (viewLocation === $location.url());
     return active;
  };
})
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

.controller('AboutUsController', function($scope, $modal){
  $scope.modalClick = function(url){
    var aboutUsModal = $modal.open({
      animation: true,
      templateUrl: url,
      size: 'lg'
    });
  };
})

.controller('ArticlesController', function($scope, $modal, $http){
    $http.get('/api/articles').success(function(data){
      $scope.articles = data;
    });
    $scope.getDetail = function(url){
      var detailModal = $modal.open({
      animation: true,
      templateUrl: '#/',
      controller: 'detailModal',
      size: 'lg',
      });
    };
})
.controller('detailModal', function($scope, $modalInstance){
  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
})
///////////////////
// Lecturer ctrl //
///////////////////
.controller('LecturerController', function($scope, $http){
  $http.get('/api/lecturer').success(function(data){
    $scope.lecturers = data;
  });
})
///////////////////////
// Contact From Ctrl //
///////////////////////
.controller('ContactUsController', function($scope, $http){
  $scope.contact = {
    fname : '',
    lname : '',
    email : '',
    phone : '',
    content: ''
  };
  $scope.submit = function(){
    var tmp = {
    	"FirstName": $scope.contact.fname,
    	"LastName": $scope.contact.lname,
    	"EmailAddress": $scope.contact.email,
    	"Phone": $scope.contact.phone,
    	"Content": $scope.contact.content
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