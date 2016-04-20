PostsNewController.$inject = ["$location", "$http"]; // minification protection
function PostsNewController ($location, $http) {
  var vm = this;
  vm.create = create;
  vm.post = {
    title:"",
    content:""
  }; // form data

  function create(){
    $http({
      method: 'POST',
      url:"/api/posts",
      data: vm.post
    }).then(onCreateSuccess, onCreateError);

    function onCreateSuccess(response){
      $location.path('/posts/' + response.data._id);
    }

    function onCreateError(response){
      console.error("Failed to create post", response);
    }
  }

//close PostsNewController
}
