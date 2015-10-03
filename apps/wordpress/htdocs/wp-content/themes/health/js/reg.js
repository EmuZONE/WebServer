var form = $( ".info" );
form.validate({
   rules:{
        userdata:{
            required: true,
            maxlength: 50,
        },
        email:{
            required: true,
           email:true,
        },
        birthdate:{
            required: true,
            date:true,
        },
        region:{
            required: true,
        },
        city:{
            required: true,
        },
        phone:{
            required: true,
            phoneUA:true,
        },            
   },
   messages:{
        userdata:{
            required: "Це поле обов'язкове для заповнення",
            maxlength: "Максимальне число символів - 50",
        },
        email:{
            required: "Це поле обов'язкове для заповнення",
            email: "Введiть правильний E-mail",
        },
        birthdate:{
            required: "Це поле обов'язкове для заповнення",
        },            
        region:{
            required: "Це поле обов'язкове для заповнення",
            maxlength: "Максимальне число символів - 50",
        },
        city:{
            required: "Це поле обов'язкове для заповнення",
            maxlength: "Максимальне число символів - 50",
        },
        phone:{
            required: "Це поле обов'язкове для заповнення",
        },            
   }
});
function clear() {
	$('.info table input').each(function(){$(this).val('')});
	$('.results').fadeOut()
} 
function call() {
	if(form.valid()){                
    	$.ajax({
    	    type: 'POST',
    	    url: 'http://localhost/wordpress/wp-content/themes/health/db/reg.php',
    	    data: form.serialize(),
    	    success: function(data) {
    	        if (data.indexOf('добавлены') != -1) {
                    $(".create").addClass("loading");
                    setTimeout(function() {
                      $(".create").addClass("hide-loading");
                      // For failed icon just replace ".done" with ".failed"
                      $(".done").addClass("finish");
                    }, 3000);
                    setTimeout(function() {
                      $(".create").removeClass("loading");
                      $(".create").removeClass("hide-loading");
                      $(".done").removeClass("finish");
                      $(".failed").removeClass("finish");
                    },4000);
    	            $('.results').html('Додано').fadeIn();					
					setTimeout(clear, 1000);
    	        } else {
    	            $('.results').html('Помилка').fadeIn();
    	        }                 
    	    },
    	    error: function(xhr, str) {          
    	        alert('Возникла ошибка: ' + xhr.responseCode);            
    	    }        
    	});  
		
    }
}
