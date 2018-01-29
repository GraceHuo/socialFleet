angular.module( 'app' )
  .controller( 'Post', function( $scope, $http, $location, $state, toastr ) {

    $scope.dateOptions = {
      minDate: new Date()
    };

    $scope.opened = false;

    $scope.open = function( $event ) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = !$scope.opened;
    };

    $scope.time = new Date();

    $scope.delete = deletePost;

    var id = $location.search().id;

    if ( isEditingPost() ) {
      $scope.isEditing = true;
      getPost();
      $scope.save = editPost;
    }
    else {
      $scope.save = newPost;
    }

    $http.get( '/api/post/myPosts' ).then( function( posts ) {
      console.log( 'posts', posts );
    } );

    function getPost() {
      $http.get( '/api/post/' + id ).then( function( post ) {
        $scope.message = post.data.message;
        $scope.date    = new Date( post.data.datetime );
        $scope.date    = new Date( post.data.datetime );
      } );
    }

    function newPost() {
      var datetime = new Date(
        $scope.date.getFullYear(),
        $scope.date.getMonth(),
        $scope.date.getDate(),
        $scope.time.getHours(),
        $scope.time.getMinutes() );
      $http.post( './api/post/tweet', {
        message : $scope.message,
        datetime: datetime
      } ).then( function() {
        toastr.success( "New Post Created!" );
      } )
    }

    function editPost() {
      var datetime = new Date(
        $scope.date.getFullYear(),
        $scope.date.getMonth(),
        $scope.date.getDate(),
        $scope.time.getHours(),
        $scope.time.getMinutes() );
      $http.post( './api/post/update/' + id, {
        message : $scope.message,
        datetime: datetime
      } ).then( function() {
        toastr.success( "Post Edited!" );
      } )
    }

    function isEditingPost() {
      return id;
    }

    function deletePost(  ) {
      $http.post( './api/post/destroy/' + id)
        .then( function() {
        toastr.info( "Post Deleted!" );
        $state.go('posts');
      } )
    }
  } );