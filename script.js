$(document).ready(function(){
    $("#submit-form").validate({
      rules:{
        fname:{
          required:true,
        },
        sname:{
          required:true
        },
        email:{
          required:true,
          email:true
        },
        phone:{
          required:true,
          number:true,
          minlength:8,
          maxlength:8
        },
        Address:{
          required:true,
        }
      },
      messages: {
        fname:{
          required: "First name required"
        },
        sname:{
          required: "Last name required"
        },
        email:{
          required: "E mail Address required"
        },
        phone: {
          required: "Phone number required",
          number: "Please enter a valid phone number",
          minlength: "Invalid phone number",
          maxlength: "Invalid phone number"
        },
        Address:{
          required: "Message required"
        }
      }   
    }) 
});
$('#btnSubmit').on('click',function() {
  if ($('#submit-form').valid()) {
    $("#submit-form").submit((e)=>{
      e.preventDefault()
      $.ajax({
          url:"https://script.google.com/macros/s/AKfycbw6u7MI1gkN3k5M0_Y4FoIP_txW8qKZf6f4uwjaykV5hgzBHMnF9dwIljdfKnfBVQ00/exec",
          data:$("#submit-form").serialize(),
          method:"post",
          success:function (response){
              alert("Thank you for visiting lets travel.com")
              window.location.reload()
              //window.location.href="https://google.com"
          },
          error:function (err){
              alert("Something Error")
          }
      })
    })
  }
  
})
