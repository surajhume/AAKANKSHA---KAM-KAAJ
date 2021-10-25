$(document).ready(function () {
    //code for employee signup
  $("#companysignup").click(function (event) {
    event.preventDefault();
   //Get form
    var form = $("#campany-signup-form")[0];
    // FormData object
    var data = new FormData(form);
    data.append("name", $("#company_name").val());
    data.append("email", $("#company_mail").val());
    data.append("password", $("#company_pass").val());
    data.append("mobile", $("#company_number").val());
    data.append("address", $("#company_address").val());
    data.append("website", $("#company_website").val());

    $.ajax({
      type: "POST",
      enctype: "multipart/form-data",
      url: "https://kaam-kaaj2.000webhostapp.com/employer2/checksignup",
      data: data,
      processData: false,
      contentType: false,
      cache: false,
      success: function (response) {
        response = JSON.parse(response);
        if (response.result == 1) {
         
          document.getElementById("message").innerHTML =
            "Registration Successful.";
        } else {
          document.getElementById("message").innerHTML = response.result;
        }
       
      },
      error: function (error) {
        console.log("error is", error);
      },
    });
  });

  //code for employee login

  $("#companylogin").click(function (event) {
   event.preventDefault();
  //Get form
  var form = $("#campany-login-form")[0];
  // FormData object
  var data = new FormData(form);
  data.append("email", $("#cmail").val());
    data.append("password", $("#cpass").val());
    $.ajax({
      type: "POST",
      enctype: "multipart/form-data",
      url: "https://kaam-kaaj2.000webhostapp.com/employer2/checklogin",
      data: data,
      processData: false,
      contentType: false,
      cache: false,
      success: function (response) {
        response = JSON.parse(response);
        console.log("response is", response.result.flag);
        if (response.result.flag === 1) {
           window.location.href = "../post_internship_page/company.html";
        } else {
          document.getElementById("loginMessage").innerHTML = response.result;
         }
      },
      error: function (error) {
        console.log("error is", error);
      },
    });
  });
});

