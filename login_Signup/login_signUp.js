//code for employee signup
var employeeData = {
      name:"john",
      email:"john@gmail.com",
      password:"password",
      mobile:123456789,
    
};
$("#companysignup").click(function(){
    console.log("inside");
    $.ajax(
        {
            url: "http://kaam-kaaj.epizy.com/employer2/checksignup", 
            //dataType: "text",
            type: "POST",
            ContentType: 'application/json',
            data: JSON.stringify(employeeData),
            success: function(response)
            {
               console.log("response is",response);
            },
            error: function (error) {
                console.log("error is",error);
            }
    });
    
  });
 //code for employee login
 var employeeData = {
    
    email:"john@gmail.com",
    password:"password",
   };
$("#companylogin").click(function(){
  console.log("inside");
  $.ajax(
      {
          url: "http://kaam-kaaj.epizy.com/employer2/check_login", 
          //dataType: "html",
          type: "POST",
          ContentType: 'application/json',
          data: JSON.stringify(employeeData),
          success: function(response)
          {
             console.log("response is",response);
          },
          error: function (error) {
              console.log("error is",error);
          }
  });
  
});