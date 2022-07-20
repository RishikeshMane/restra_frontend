jQuery("form").submit(function(e){
    e.preventDefault();  
 
  });
  
function verifyotp()
{
    if(document.getElementById("otp").value.length != 0)
    {
        const data = {
        "otp": document.getElementById('otp').value,
        "phone_num": window.localStorage.getItem('mobile')
        
        };
    // console.log(JSON.stringify(data));
    
    try {
    
       // Options to be given as parameter
       // in fetch for making requests
       // other then GET
       const api = "http://162.240.56.117:5000/new_phoneverify";
       
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
        //    console.log(data);
           window.localStorage.setItem('login_data', JSON.stringify(data));
           window.localStorage.setItem('restraname', data.RestraName);
           window.localStorage.setItem('userid', data.userID);
           window.localStorage.setItem('email', data.useremail);
           window.localStorage.setItem('accessid', data.access_id);
           window.sessionStorage.setItem("is_login", true);
           var messageverify =  data.Message;
        //    console.log(messageverify);
           
           if(messageverify == "Login Successfull" && data.access_id == 1)
            {
                   $('#psw').prop('required',false);
                   document.getElementById("messageverify").innerHTML = messageverify;

                 window.location.href = "resturant.html"
           } 
           else
           {
            document.getElementById("messageverify").innerHTML = messageverify;   
           }
           if(messageverify == "Login Successfull" && data.access_id == 0){
             document.getElementById("messageverify").innerHTML = messageverify;
             window.location.href = "index.html"
           }
           if(data.email == 0)
           {
            document.getElementById("messageverify").innerHTML = "Your email is not verified";
            window.location.href = "emailverify.html"
           }
           if(messageverify == "Login Successfull" && data.email == 1 && data.access_id != 1 &&  data.access_id != 0)
           {
             window.location.href = "index.html"
           }
           if(data.message == "Vendor")
           {
             window.location.href = "pages/vendorbankdetail.html";
             document.getElementById("messageverify").innerHTML = "Vendor Login Successfull!!!..";   
             window.localStorage.setItem("vendormobilenumber", data.phoneno)
           }
           if(data.message == "not valid entry")
           {
            document.getElementById("messageverify").innerHTML = "Invalid OTP Try Again!!!..";   
           }
        //    if(data.message == "not valid entry")
        //    {
        //     document.getElementById("messageverify").innerHTML = "Invalid OTP Try Again!!!..";   
        //    }

       })
       $("#form").trigger('reset');
      
    } catch (e) {
    //    console.log(e);
    }  
    
    
    } 

} 


function resendotp(event)
{
    event.preventDefault();
    const data = {
        'phoneno' : window.localStorage.getItem('mobile'),
    };
    // console.log(JSON.stringify(data));
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
        //   console.log(data);
         var messageverify =  data.Message;
        // console.log(messageverify);
        if(messageverify == "OTP is sent to Mobile Number")
         {
            document.getElementById("messageverify").innerHTML = messageverify;
        }else{
          document.getElementById("messageverify").innerHTML = messageverify;
        }
       })
       } catch (e) {
                // console.log(e);
      }
}
//   function verifyotp()
//   {
      
//     var token = window.localStorage.getItem('login_token')
//     //event.preventDefault();
//     if(document.getElementById("otp").value.length != 0)
// {
//     const data = {
//     "phoneOtp": document.getElementById('otp').value,
//     "token" : token
    
//     };
// console.log(JSON.stringify(data));

// try {

//    // Options to be given as parameter
//    // in fetch for making requests
//    // other then GET
//    const api = "http://162.240.56.117:5000/otpAuthentication";
   
//    let options = {
//        method: 'POST',
//        headers: {"Access-Control-Allow-Origin" : "*",
//            'Content-Type': 'application/json;charset=utf-8',
           
//        },
//        body: JSON.stringify(data)
//    }

//    // Fake api for making post requests
//    let fetchRes = fetch(
//        api,
//        options);
//    fetchRes.then(res => {
//        return res.json();
//    }).then((data) => {
//        console.log(data);
//        var login_data = JSON.parse(window.localStorage.getItem('login_data'));
//        accessid = login_data.verificationError.accessID
//        console.log(accessid);
//        if(accessid == 1 &&  data.message == "mobile verification completed")
//        {
//         window.location.href="resturant.html"
//        }else{
//         if(data.message == "mobile verification completed")
//             {
//                 window.location.href="index.html"
//             }
//        }
//        if(data.message == "wrong OTP : Try again") 
//        {
//         document.getElementById("messageverify").innerHTML = "Enter valid OTP";
//        }
       
//    })
//    $("#form").trigger('reset');
// } catch (e) {
//    console.log(e);
// }     
// }
//   }

//   function resendotp(event)
// {  
    
//     var mobile = window.localStorage.getItem("mobile");
//     var token = window.localStorage.getItem('login_token')
//     event.preventDefault();
//     const data = {
//         "phone_num": mobile,
//         "token" : token
        
//     };
// console.log(JSON.stringify(data));

// try {
//     const api = "http://162.240.56.117:5000/mobileVerification";
    
//     let options = {
//         method: 'POST',
//         headers: {"Access-Control-Allow-Origin" : "*",
//             'Content-Type': 'application/json;charset=utf-8',
//             "Authorization": token
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
//         var message = data.message 
//     })
// } catch (e) {
//     console.log(e);
// }     

// }
