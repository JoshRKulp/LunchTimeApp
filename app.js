var app = angular.module("sampleApp", ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebase) {
  var ref = new Firebase("https://lunchtimeapp.firebaseio.com/data");
  var sync = $firebase(ref);

  var syncObject = sync.$asObject();
  syncObject.$bindTo($scope, "data");
});
 