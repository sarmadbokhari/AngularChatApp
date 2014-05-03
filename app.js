angular.module("myChatRoom", ["firebase"])
  .factory("ChatService", ["$firebase", function($firebase) {
    var ref = new Firebase("https://sarmad-reminder-app.firebaseio.com");
    return $firebase(ref);
  }])
  .controller("ChatController", ["$scope", "ChatService",
    function($scope, chatService) {
      $scope.user = "Guest " + Math.round(Math.random()*101);
      $scope.messages = chatService;
      $scope.addMessage = function() {
        $scope.messages.$add({from: $scope.user, content: $scope.message});
        $scope.message = "";
      };
    }
  ]);


// angular.module("myChatRoom", [])
//   .factory("ChatService", function() {
//     var ref = new Firebase("https://sarmad-reminder-app.firebaseio.com/Reminders");
//     return {
//       getMessages: function() {
//         var messages = [];
//         ref.on("child_added", function(snapshot) {
//           messages.push(snapshot.val());
//         });
//         return messages;
//       },
//       addMessage: function(message) {
//         ref.push(message);
//       }
//     };
//   })
//   .controller("ChatController", ["$scope", "ChatService",
//     function($scope, service) {
//       $scope.user = "Guest " + Math.round(Math.random()*101);
//       $scope.messages = service.getMessages();
//       $scope.addMessage = function() {
//         service.addMessage({from: $scope.user, content: $scope.message});
//         $scope.message = "";
//       };
//     }
//   ]);
