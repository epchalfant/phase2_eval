$(document).ready(function() {
  $('#teacher').on('submit',function(event){
    // debugger
    var name = $("#foobar").val();
    event.preventDefault();
    $.ajax({
      type:'post',
      url:'/teachers',
      data: { name: name },
      success: function(response){
        console.log(response)
      }
    })
    // $.post('/color', function(boxData){
    //   var cell = boxData["cell"]
    //   $('ul li:nth-child(' + cell + ')').css('background-color', boxData['color'])
    // }).success(function(){
    //   console.log('success')
    // }).fail(function(){
    //   console.log('failure')
  })
});


  // $('#get_color').on('click', function(event){
  //   event.preventDefault();
  //   $.post('/color', function(boxData){
  //     var cell = boxData["cell"]
  //     $('ul li:nth-child(' + cell + ')').css('background-color', boxData['color'])
  //   }).success(function(){
  //     console.log('success')
  //   }).fail(function(){
  //     console.log('failure')
  //   });
  // })