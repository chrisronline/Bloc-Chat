(function() {
    function AddRoomCtrl($rootScope, $uibModal, $scope, Room) {
        
        
        $scope.text = '';
        $scope.submit = function() {
    
            if($scope.text) {
                Room.addRoom(this.text);
                $scope.text='';
                $rootScope.modalInstance.close();
            }
            
        }
    }
    
    angular
        .module('blocChat')
        .controller('AddRoomCtrl', ['$rootScope', '$uibModal', '$scope','Room', AddRoomCtrl])
})();