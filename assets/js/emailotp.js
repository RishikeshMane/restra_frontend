var logindata = JSON.parse(window.localStorage.getItem('login_data'));
// console.log(logindata.access_id);
     if(logindata.access_id != 1 && logindata.access_id != 0)
     {
      document.getElementById("messageverify").innerHTML = "Please click to resend OTP! ";
     }

function verifyotp()
{
  if(document.getElementById("otp").value.length != 0)
{
  const data = {
    "otp":  document.getElementById('otp').value,
    "email": window.localStorage.getItem('email'),
  
  };
// console.log(JSON.stringify(data));

try {

 // Options to be given as parameter
 // in fetch for making requests
 // other then GET
 const api = "http://162.240.56.117:5000/new_emailverify";
 
 let options = {
     method: 'POST',
     headers: {"Access-Control-Allow-Origin" : "*",
         'Content-Type': 'application/json;charset=utf-8',
         
     },
     body: JSON.stringify(data)
 }

 // Fake api for making post requests
 let fetchRes = fetch(
     api,
     options);
 fetchRes.then(res => {
     return res.json();
 }).then((data) => {
    //  console.log(data);
     if(data.Message == "Valid otp")
     {
        window.location.href="pages/login.html"
     }
     if(data.Message == "Invalid otp")
     {
        document.getElementById("messageverify").innerHTML = "Invalid OTP";
     }
     
 })
 $("#form").trigger('reset');
} catch (e) {
//  console.log(e);
}     
}
}

function resendotp(event)
{  
  
  var email = window.localStorage.getItem("email");
  event.preventDefault();
  const data = {
    "email": email
      
  };
// console.log(JSON.stringify(data));

try {

  // Options to be given as parameter
  // in fetch for making requests
  // other then GET
  const api = "http://162.240.56.117:5000/new_resendotpemail";
  
  let options = {
      method: 'POST',
      headers: {"Access-Control-Allow-Origin" : "*",
          'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data)
  }

  // Fake api for making post requests
  let fetchRes = fetch(
      api,
      options);
  fetchRes.then(res => {
      return res.json();
  }).then((data) => {
      // console.log(data);
      document.getElementById("messageverify").innerHTML = data.Message;
  })
} catch (e) {
  // console.log(e);
}     

}
