// 4.  Implement an Ajax enabled contact form

$(document).ready(function() {
    $('#demo-form').submit(function(evt) {
      evt.preventDefault();
      var url = $(this).attr("action");
      var formData = $(this).serialize();
       $.ajax(
       {
       	url : "https://httpbin.org/post",
       	data : formData,
       	type: "POST",
       	success : function(response) {
       		var name = response.form.nameField;
       		var email = response.form.userEmail;
       		var message = response.form.message;
       		var service = response.form.service;

       		console.dir(response);
       		$('.successmessage').html("<p>Thank you, "+name+" for contacting us! We will contact you back at " +email+"<br/>" + " Your service request : " +service+"<br/>" + " Your message : " +message+"</p>")
       		
       	}
       })
    }); 
  });