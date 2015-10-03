$.get("/wordpress/wp-content/themes/health/db/list.php",{},onAjaxSuccess);
 
function onAjaxSuccess(data){
  // Здесь мы получаем данные, отправленные сервером и выводим их на экран.
  $('#dtable').html($(data,'table').html());
  $('#dtable').DataTable();
}