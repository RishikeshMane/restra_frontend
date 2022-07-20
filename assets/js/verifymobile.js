
var token = window.localStorage.getItem('login_token');

fetch('http://162.240.56.117:5000/dashboard'+'/'+token , {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(function(response) {
        return response.json();
      }).then(function(data) {
        // console.log(data);
        if(token == null )
      {
        window.location.href ="pages/login.html";
        
      }
      if(data.message == "login again : TokenExpiredError: jwt expired")
      {
        window.location.href ="pages/login.html";
      }
      }).catch(function() {
       
      });
   

jQuery("form").submit(function(e){
    e.preventDefault();  
    //or
    //return false;
  });

var mobile = window.localStorage.getItem('mobile');
// var last_digit = mobile.slice(mobile.length - 4);
// document.getElementById("mobilenum").placeholder = "......"   +last_digit;

function verifyMobile()
{  
    var phoneNumber = document.getElementById('mobilenum').value;
  //  window.localStorage.setItem("mobile", phoneNumber);
    var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    var phoneResult = phoneRGEX.test(phoneNumber);
    var token = window.localStorage.getItem('login_token')
     //event.preventDefault();
if(document.getElementById("mobilenum").value.length != 0 && phoneResult == true)
{
  const data = {
    "phone_num": document.getElementById('mobilenum').value,
    "token" : token
    
};
// console.log(JSON.stringify(data));

try {

    // Options to be given as parameter
    // in fetch for making requests
    // other then GET
    const api = "http://162.240.56.117:5000/mobileVerification";
    
    let options = {
        method: 'POST',
        headers: {"Access-Control-Allow-Origin" : "*",
            'Content-Type': 'application/json;charset=utf-8',
            "Authorization": token
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
        var message = data.message 
        if(message == "OTP generated")
        {
            window.location.href="mobileotp.html"
        }
        if(message == "Invalid Phone Number : use registered phone number")
        {
            document.getElementById("messageverify").innerHTML = "Invalid Phone Number : use registered phone number";
        }
        // window.localStorage.setItem("token", data.token);
        $("#form").trigger('reset');
    })
    
} catch (e) {
    // console.log(e);
}     

}else{
    // alert('Please enter a valid phone number');
    document.getElementById("messageverify").innerHTML = "Please enter a valid phone number";
    return false;
}

}


// var login_data = JSON.parse(window.localStorage.getItem('login_data'));
// accessid = login_data.verificationError.phoneNumber
// if(accessid == 1)
// {
//  window.location.href="index.html"
// }
