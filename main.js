(function (argument) {
$.get('chat.tag',function(data){
  $('chat').html(data)
})
})()
