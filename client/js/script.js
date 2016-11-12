$(document).ready(function(){
  changeTitle()
  changeTitleSkills()
})

function changeTitleSkills(){
  $('#btn_submit_skill').on('click', function(e){
    // $.urlParam = function(name){
    // 	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    // 	return results[1] || 0;
    // }
    //
    // var new_title = $.urlParam('title').split('%20').join(' ')
    console.log($.url().param('title'));
    e.preventDefault()
    $('#title_skills').text($.url().param('title'))
  })
}

function changeTitle(){
  $('#btn_submit').on('click', function(e){
    e.preventDefault()

    var new_title = $('#title').val()
    $('#data-heading').text(new_title)
  })
}
