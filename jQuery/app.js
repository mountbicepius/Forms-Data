$('#data_form').submit(function()
{
  var data = { email : 'input[name="email"]' ,dateBirth :'input[name="dob"]', phone :'input[name="ph"]', postal : 'input[name="poa"]'};
  var jsonData = JSON.stringify(data);
    document.getElementById('output').innerHTML = jsonData;
  /*$.post("data.json",data).done(function(data){
    alert("Thanks for responding will let you know if number reaches ...X");
  });*/
  /*$.ajax({
   type: 'POST', 
   dataType: 'json', 
   url: 'data.json', 
   data: $(this).serialize(), 
   success: function(data) { 
       alert(data.message); 
   },
   failure: function (data) {
       alert('Please try again');
   }
});*/
});