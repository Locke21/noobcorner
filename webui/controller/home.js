noobcorner.controller('HomeCtrl',function($scope, $compile){

  $scope.fetchMockData = function(){
    $.get( "/mockdata", function( data ) {
      $scope.mockdata = data;
      if($(window).width() < 768){
        $('#testStick').stick_in_parent({
          offset_top:20
        });
      }

    });
  };

  $scope.fetchMockData();

  $scope.testClick = function(index){
    alert(index);
  }

  $scope.toggleDetails = function(){
    $('#NewsDetail').toggle("collapse");
    $('#stickerTest').css("border-radius", 0);
  }
  if($(window).width() < 768){

    $('#demo').dragend();
    var oBoxes = $('.ContentBox');
    var oFirstBox = oBoxes[0];
    var oLastBox = oBoxes[(oBoxes.length)-1];

    $(oLastBox).css('margin-bottom', '100px');
    $(oFirstBox).css('margin-top', '0px');
    var star = $(oFirstBox).children('div:first-child')
                   .append("<i id='adminLogo' style='float: right;' class='glyphicon glyphicon-asterisk'></i>");
    star.click(function(){
      alert("test");
    });
    $compile(oFirstBox)($scope);





  }


})
