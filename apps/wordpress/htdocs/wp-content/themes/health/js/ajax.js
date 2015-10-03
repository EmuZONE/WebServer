 $(document).ready( function() 
   { 
    // обрабатываем событие нажатия на кнопку "Добавить новый товар"   
    $('input[name=go]').click( 
        function () 
        {
           var article_title = $('input[name=userdata]').val();
           var article_title = $('input[name=email]').val();
           var article_title = $('input[name=gender]').val();
           var article_title = $('input[name=birthdate]').val();
           var article_title = $('input[name=region]').val();
           var article_title = $('input[name=city]').val();
           var article_title = $('input[name=phone]').val();
           // отправляем AJAX запрос
           $.ajax(
              {
                 type: "POST",
                 url: "http://localhost/MyAjax/addArticle.php",
                 data: "article_title=" + article_title,
                 success: function(response) 
                 {
                    if(response == "OK")
                    {
                       alert("Товар " + article_title + " добавлен!");
                       location.reload();
                    }
                    else
                    alert("Ошибка в запросе! Сервер вернул вот что: " + response);
                 }
              }
              );
        }
     );
   });