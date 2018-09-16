$(function()
{
  var formData = {
            'email': $('input[name=email]').val(),
            'dob': $('input[name=dob]').val(),
            'phone': $('input[name=phone]').val(),
            'addr': $('input[name=addr]').val()
        };

var form = $('#dataForm');
  form.submit(function(e) {

    $.ajax({
     type: 'POST',
     url: 'http://localhost:3000/data',
     data: formData,
      contentType: 'application/json',// serializes the form's elements.
     success: function(data)
     {
         alert(data); // show response from the php script.
     }
   });
   e.preventDefault(); // avoid to execute the actual submit of the form.
});
});
