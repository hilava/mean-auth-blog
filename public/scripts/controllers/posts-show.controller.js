PostsShowController.$inject = ["$location", "$http", "$routeParams"]; // minification protection
function PostsShowController ($location, $http, $routeParams) {
  var vm = this;
  vm.post = {
    title: "",
    content:""
  };
  $http({
    method: 'GET',
    url:'/api/posts/' + $routeParams.id
  }).then(onGetSuccess, onGetError);

  function onGetSuccess(response){
    vm.post = response.data;
  }
  function onGetError(err){
    console.error("Failed to create post", err);
    $location.path('/');
  }

//close PostsShowController
}
