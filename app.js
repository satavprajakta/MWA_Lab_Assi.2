const app = angular.module("eventApp", []);

app.controller("EventController", function($scope, $http) {
  $scope.events = [];
  $scope.timeline = [];
  $scope.advantages = [];
  $scope.faqs = [];
  $scope.search = '';
  $scope.form = {
    name: '',
    email: '',
    message: ''
  };

  // Fetch JSON data
  $http.get('data/events.json').then(
    res => $scope.events = res.data,
    err => console.error("Failed to load events.json", err)
  );

  $http.get('data/timeline.json').then(
    res => $scope.timeline = res.data,
    err => console.error("Failed to load timeline.json", err)
  );

  $http.get('data/advantages.json').then(
    res => $scope.advantages = res.data,
    err => console.error("Failed to load advantages.json", err)
  );

  $http.get('data/faqs.json').then(
    res => $scope.faqs = res.data,
    err => console.error("Failed to load faqs.json", err)
  );
  

  // Form submission
  $scope.submitForm = function () {
    if ($scope.contactForm.$valid) {
      alert(`✅ Thank you ${$scope.form.name}, your message has been received!`);
      $scope.form = {};
      $scope.contactForm.$setPristine();
    } else {
      alert("⚠️ Please fill out all required fields correctly.");
    }
  };
});
