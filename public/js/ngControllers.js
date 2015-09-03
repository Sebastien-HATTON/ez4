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
//////////////////
// AboutUs ctrl //
//////////////////
.controller('AboutUsController', function($scope, $modal){
  $scope.modalClick = function(url){
    var aboutUsModal = $modal.open({
      animation: true,
      templateUrl: url,
      size: 'lg'
    });
  };
})
///////////////
// News ctrl //
///////////////
.controller('NewsController', function($scope, $modal, $http){
    $http.get('/api/news').success(function(data){
      $scope.news = data;
    });
    $scope.test = function(url){
      var detailModal = $modal.open({
      animation: true,
      templateUrl: 'https://mp.weixin.qq.com/s?__biz=MjM5NzIyNzU1MQ==&mid=208052723&idx=1&sn=c088033e98ef615bf6d645ecfd9ffc76#rd',
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
// Mentor ctrl //
///////////////////
.controller('MentorsController', function($scope, $http, $modal){
  // query getting all mentor
  $http.get('/api/mentors').success(function(data){
    $scope.mentors = data;
  });
  
  // modal function
  $scope.getDetail = function(mentor){
      var detailModal = $modal.open({
      animation: true,
      templateUrl: '/views/MentorsModal.html',
      controller: 'MentorsModal',
      size: 'md',
      resolve: {
        "mentor" : function(){
          return mentor
        }
      }
      });
  };
})
.controller('MentorsModal', function($scope, $modalInstance, mentor){
  $scope.mentor = mentor;
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
/////////////////
// Course ctrl //
/////////////////
.controller('CourseController', function($scope, $http){
  // set up variables
  $scope.inputCourse = "";
  $scope.search = { "Code" : ""};
  $scope.signup = {
	"name": "",
	"faculty": "",
	"weChat": "",
	"email": "",
	"phone": "",
	"selected": [],
	"comment": ""
  };
  
  // content of alert.
  $scope.alert = {
    type:"",
    msg: ""
  };
  
  $http.get('/api/courses').success(function(data){
    $scope.courses = data;
  });
  
  $scope.searchCourse = function(){
    $scope.search.Code = $scope.inputCourse;
  };
  
  $scope.addCourse = function(code){
    if($scope.signup.selected.indexOf(code) === -1){
      $scope.signup.selected.push(code);
    }
  };
  
  $scope.deleteCourse = function(code){
    $scope.selected.pop($scope.signup.selected.indexOf(code));
  };
  
  $scope.closeAlert = function(){
    $scope.alert.msg = "";
  };
  
  $scope.submit = function(){
      var tmp = {
      	"Name": $scope.signup.name,
      	"Faculty": $scope.signup.faculty,
      	"WeChat": $scope.signup.wechat,
      	"Email": $scope.signup.email,
      	"Ceil": $scope.signup.phone,
      	"Courses": $scope.signup.selected,
      	"Comments": $scope.signup.comment
      };
      if(!tmp.Name || !tmp.Email || !tmp.Courses || !tmp.Faculty || !tmp.Ceil || !tmp.WeChat){
            $scope.alert.type = "danger";
            $scope.alert.msg = "Please fill all blanks!"
      }
      else {
        $http.post('/api/signup', tmp).success(function(data){
          if(data.state == "success"){
            $scope.alert.type = "success";
            $scope.alert.msg = "Thanks for choosing Easy4.0!"
          }
          else{
            $scope.alert.type = "danger";
            $scope.alert.msg = "Oh snap! Something wrong happens!"
          }
      });
      }
  }
})