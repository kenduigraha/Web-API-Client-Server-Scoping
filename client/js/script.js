$(document).ready(function(){
  changeTitle()
  changeTitleSkills()
  changeTitleMeals()
})

function changeTitleMeals(){
  $('#btn_submit_meals').on('click', function(e){
    e.preventDefault()
    $.ajax({
      url: 'http://localhost:3000/api/meals',
      method: 'GET',
      dataType: 'JSON',
      contentType: 'application/www-x-form-urlencoded',
      success: function(data_meal){
        console.log(data_meal);
        $('#title_meals').text(data_meal)
      }
    })
  })

}

function changeTitleSkills(){
  $('#btn_submit_skill').on('click', function(e){
    // $.urlParam = function(name){
    // 	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    // 	return results[1] || 0;
    // }
    //
    // var new_title = $.urlParam('title').split('%20').join(' ')
    console.log($.url().param('title'));
    // e.preventDefault()
    $('#title_skills').text($.url().param('title'))
    e.preventDefault()
  })
}

function changeTitle(){
  $('#btn_submit').on('click', function(e){
    e.preventDefault()

    var new_title = $('#title').val()
    $('#data-heading').text(new_title)
  })
}
