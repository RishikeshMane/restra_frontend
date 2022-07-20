
jQuery("form").submit(function(e){
    e.preventDefault();  
  
  });
  
//   const form = document.getElementById('logForm');

// function check() {      
// if(document.getElementById("email").value.length != 0 && document.getElementById("psw").value.length != 0
//  &&  document.getElementById('logForm') != form.checkValidity() && form.checkValidity() == true)
// {
//   const data = {
//       'email' : document.getElementById('email').value,
//       'password' : document.getElementById('psw').value
//   };
//   console.log(JSON.stringify(data));
//   try {

//     const api = "http://162.240.56.117:5000/login";
    
//     let options = {
//         method: 'POST',
//         headers: {"Access-Control-Allow-Origin" : "*",
//             'Content-Type': 'application/json;charset=utf-8'
//         },
//         body: JSON.stringify(data)
//     }

//     let fetchRes = fetch(
//         api,
//         options);
//     fetchRes.then(res => {
//         return res.json();
//     }).then((data) => {
//         console.log(data);
//         window.localStorage.setItem('login_data', JSON.stringify(data));
//        var messageverify =  data.message;
//       console.log(messageverify);
 
//       if(messageverify == "Login succesful")
//       {
//         $('#psw').prop('required',false);
//       }
//       if(messageverify == "Mobile number is not verified")
//       {
//         window.location.href="../mobileverify.html"
//       }
//       else if( messageverify == "Email is not verified")
//       {
//        $('#psw').prop('required',false)
//        document.getElementById("messageverify").innerHTML = "Email is not verified. Please, check your mail box!";
//       }
     
//       else{
//         document.getElementById("messageverify").innerHTML = messageverify;
//       }
//       localStorage.setItem("login_token", data.token);
//       window.localStorage.setItem('restraname', data.userDetail.restraname)
//       window.localStorage.setItem('admin', data.verificationError.accessID );
//       window.localStorage.setItem('userid',data.userDetail.userid);
//       var firstTimeLogin = data.firstTimeLogin
//       if(firstTimeLogin == true)
//       {
//         window.location.href = "../forgetpass.html"
//       }
//       else{
//         var mobileverify  = data.verificationError.phoneNumber
//         if(mobileverify == 1)
//         {
//         window.location.href = "../index.html"
//         }
//         else{
//         window.location.href="../mobileverify.html"
//         }
        
//       }
     
//     })
// } catch (e) {
//     console.log(e);
// }
 
//     document.getElementById("logForm").reset()
  

// }
// else
// {
//     return;
// }
// }
const form = document.getElementById('logForm');
function check()
{
  if(document.getElementById("txtPhone").value.length != 0 && form.checkValidity() == true)
  {
    const data = {
        'phoneno' : document.getElementById('txtPhone').value,
    };
    // console.log(JSON.stringify(data));
    window.localStorage.setItem("mobile", data.phoneno);
    try {
  
      const api = "http://162.240.56.117:5000/new_phonelogin";
      
      let options = {
          method: 'POST',
          headers: {"Access-Control-Allow-Origin" : "*",
              'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(data)
          
      }
  
      let fetchRes = fetch(
          api,
          options);
      fetchRes.then(res => {
          return res.json();
      }).then((data) => {
          // console.log(data);
         var messageverify =  data.Message;
        // console.log(messageverify);
        if(data.Message == "Enter Registered Mobile Number")
        {
          document.getElementById("messageverify").innerHTML = "Your Mobile Number Is Not Register!";
          document.getElementById('registerlink').style.display = "block";
        }
        if(messageverify == "OTP is sent to Mobile Number")
         {
                $('#psw').prop('required',false);
                window.location.href = "../mobileotp.html"
    }
    if(messageverify == "OTP is sent to vendor Mobile Number")
    {
           $('#psw').prop('required',false);
           window.location.href = "../mobileotp.html"
}
       })
       } catch (e) {
                // console.log(e);
      }
       document.getElementById("logForm").reset()
      //  $('#mobilenum').prop('required',false);
  }

}