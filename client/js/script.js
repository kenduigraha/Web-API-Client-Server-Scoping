$(document).ready(function(){
  changeTitle()
})

function changeTitle(){
  $('#btn_submit').on('click', function(e){
    e.preventDefault()

    var new_title = $('#title').val()
    $('#data-heading').text(new_title)
  })
}
