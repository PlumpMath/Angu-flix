var app = angular.module("appName", []);

var list = [];
var balance = 9;
var images = ['https://t2.gstatic.com/images?q=tbn:ANd9GcTsDyUc-W2TutFDdKSvtfOfOtux-08Ch-bNS08aE0nlbx2nPTi2', 'https://t3.gstatic.com/images?q=tbn:ANd9GcRljv9bdvrNTFg4I47i6suGoLYmKf3jUvCVbuhgAXOAFCo9eXA3', 'https://t0.gstatic.com/images?q=tbn:ANd9GcR2JHdGbPgU8FNYnZ1icR553j9gfNvLwbycAl1e_dGWog7LKkGh', 'https://t0.gstatic.com/images?q=tbn:ANd9GcRHPhEfHFuoSVQZY087c33LPuF8D2oTG6mGcnjbhxFqWyNXrC0Q', 'https://t0.gstatic.com/images?q=tbn:ANd9GcSfGJLGU1xpuhSMZplCN5_pZZLEHoPnwijfZCVnNnwu8zr8vtve', 'https://t3.gstatic.com/images?q=tbn:ANd9GcQ3LwI85EUzYvfrCnuvhh1vqkvXJyaN3eEWUxieAtU8sPHPP4vJ', 'https://t2.gstatic.com/images?q=tbn:ANd9GcThBScsw26hWu-fsBMW9jGXvqHDCAjCJ4T42ZkQIXtp687X16eM'];
var titles = ['Doctor Strange', 'Keeping Up with the Joneses', 'The Last Band in Lebanon', "The Women's Balcony", 'Storks', 'Rock Dog', 'American Honey'];
var prodYear = [2016, 2016, 2016, 2016, 2016, 2017, 2016];
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
var price = [3, 3, 3, 3, 3, 3, 3]
var movie = [];
var myCollection = [];

for (var i=(new Date().getFullYear()); i>1970; i--) {
  list.push(i);
};

for (i=0; i<images.length; i++) {
  movie.push({img: images[i], ttl: titles[i], prody: prodYear[i], txt: text, prc: price[i]});
};

app.controller('general', function ($scope) {
  $scope.years = list;

  $scope.balance = balance;

  $scope.myCol = myCollection;

  $scope.movies = movie;

  $scope.addToMyColl = function (i) {
    $scope.myVar = true
    var exists = false
    for (j=0; j<myCollection.length; j++) {
      if (movie[i].ttl === myCollection[j].ttl) {
        exists = true
      }
    }
    if ($scope.balance - movie[i].prc >=0 && !exists) {
      myCollection.push({img: images[i], ttl: titles[i], prody: prodYear[i], txt: text});
      $scope.balance -= movie[i].prc;
    } else {
      console.log ('not enough $$$ or already exists')
    }
  };
});