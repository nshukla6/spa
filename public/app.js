
    'use strict';
    angular.module('app', ['ngRoute','angularUtils.directives.dirPagination'])
        
        .controller('controller2', Controller2)
        .controller('studentController', StudentController)
        .controller('controller1', Controller1)
        .config(function ($routeProvider) {
            $routeProvider
                .when('/home', {
                    templateUrl: 'pages/home.html',
                    controller: 'controller1'

                })
                .when('/contact', {
                    templateUrl: 'pages/contact.html',
                    controller: 'controller2'

                })
                .when('/student', {
                    templateUrl: 'pages/student.html',
                    controller: 'studentController'

                });
        });

    
    Controller2.$inject = ['$scope', '$http'];
    StudentController.$inject = ['$scope', '$http'];
    Controller1.$inject = ['$scope', '$http'];

function Controller1($scope, $http) {
        console.log('hi basu1');
        $scope.image='giphy.gif';
        $scope.load=false;
        $scope.myVar=true;
        $scope.pageDir=false;
        $scope.onPress=function(){
            $scope.myVar=false;
             $scope.load=true;

        $http({
            url:'https://jsonplaceholder.typicode.com/comments',
            method:'GET'
        })
        .then(function(result){
            console.log(result.data);
            $scope.data=result.data;
             $scope.pageDir=true;
        })
        .catch(function(error){
            console.log('error',error);
        });

    }

    }

    
    function Controller2($scope, $http) {
       console.log('hi basu2');
        $scope.myVar=true;
        $scope.image='giphy.gif';
        $scope.load=false;
         $scope.pageDir=false;
       $scope.onPress=function(){
             $scope.myVar=false;
             $scope.load=true;
        $http({
            url:'https://jsonplaceholder.typicode.com/photos',
            method:'GET'
        })
        .then(function(result){
            console.log(result.data);
            $scope.data=result.data;
             $scope.pageDir=true;
        })
        .catch(function(error){
            console.log('error',error);
        });

    }
}
   function StudentController($scope, $http) {
       $scope.myVar=true;
       $scope.image='giphy.gif';
        $scope.load=false;
         $scope.pageDir=false;
        console.log('hi student');
       $scope.onPress=function(){
              $scope.myVar=false;
             $scope.load=true;
           
        $http({
            url:'https://jsonplaceholder.typicode.com/posts',
            method:'GET'
        })
        .then(function(result){
            console.log('inside then');
            console.log(result.data);
            $scope.data=result.data;
            $scope.myVar=false;
             $scope.pageDir=true;
        })
        .catch(function(error){
            console.log('inside error');
            console.log('error',error);
        });

    }
    }
    
