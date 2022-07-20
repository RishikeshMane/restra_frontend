// var token = window.localStorage.getItem('login_token');

// fetch('http://162.240.56.117:5000/dashboard'+'/'+token , {
//     method: 'GET',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//   }).then(function(response) {
//         return response.json();
//       }).then(function(data) {
//         console.log(data);
//         if(token == null )
//       {
//         window.location.href ="pages/login.html";
        
//       }
//       if(data.message == "login again : TokenExpiredError: jwt expired")
//       {
//         window.location.href ="pages/login.html";
//       }
//       }).catch(function() {
       
//       });

function checkPasswordMatch() {
    var password = $("#newpass").val();
    var confirmPassword = $("#repass").val();
    if (password != confirmPassword)
        $("#CheckPasswordMatch").html("Passwords does not match!");
    else
        $("#CheckPasswordMatch").html("Passwords match.");
}

$(document).ready(function () {
   $("#repass").keyup(checkPasswordMatch);
});

var password = $("#newpass").val();
var confirmPassword = $("#repass").val();

jQuery("form").submit(function(e){
    e.preventDefault();  
    //or
    //return false;
  });
  
  const formdata = document.getElementById('changeform');

function changepass()
{ 
  
    // event.preventDefault();
    var token = window.localStorage.getItem('token');
    console.log(token);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('token')
    if(formdata.checkValidity() == true)
    {
    const data = {
        'newPassword' : document.getElementById('newpass').value,
    };
    console.log(JSON.stringify(data));
    
    try {
    
        // Options to be given as parameter
        // in fetch for making requests
        // other then GET
        const api = "http://162.240.56.117:5000/resetTokenCheck"+"/"+code;
        
        let options = {
            method: 'POST',
            headers: {"Access-Control-Allow-Origin" : "*",
                'Content-Type': 'application/json;charset=utf-8',
                // "Authorization": token
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
            console.log(data);
            var message = data.message
         if(message == "password changed successfully")
         {
           window.location.href="../resturant/pages/login.html"
         }
        })
    } catch (e) {
        console.log(e);
    }
    document.getElementById("changeform").reset()
}    
}