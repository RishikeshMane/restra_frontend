jQuery("form").submit(function(e){
    e.preventDefault();  
 
  });
  
function verifyotp()
{
    if(document.getElementById("otp").value.length != 0)
    {
        const data = {
        "otp": document.getElementById('otp').value,
        "phoneno": window.localStorage.getItem('mobile')
        
        };
    console.log(JSON.stringify(data));
    
    try {
    
       // Options to be given as parameter
       // in fetch for making requests
       // other then GET
       const api = "http://162.240.56.117:5000/vendor_verify";
       
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
           console.log(data);
           var messageverify =  data.message;
           console.log(messageverify);
           
           if(messageverify == "not valid entry")
            {
                   $('#psw').prop('required',false);
                   document.getElementById("messageverify").innerHTML = "Invalid OTP!";

                //  window.location.href = "resturant.html"
           } 
           if(messageverify == "Vendor")
            {
                   $('#psw').prop('required',false);
                 window.location.href = "vendorbankdetail.html"
           } 
        //    else
        //    {
        //     document.getElementById("messageverify").innerHTML = messageverify;   
        //    }
        //    if(messageverify == "Login Successfull" && data.access_id == 0){
        //      document.getElementById("messageverify").innerHTML = messageverify;
        //      window.location.href = "index.html"
        //    }
        //    if(data.email == 0)
        //    {
        //     document.getElementById("messageverify").innerHTML = "Your email is not verified";
        //     window.location.href = "emailverify.html"
        //    }
        //    if(messageverify == "Login Successfull" && data.email == 1 && data.access_id != 1 &&  data.access_id != 0)
        //    {
        //      window.location.href = "index.html"
        //    }
       })
       $("#form").trigger('reset');
      
    } catch (e) {
       console.log(e);
    }     
    }
 
} 


function resendotp(event)
{
    event.preventDefault();
    const data = {
        'phoneno' : window.localStorage.getItem('mobile'),
    };
    console.log(JSON.stringify(data));
    try {
  
      const api = "http://162.240.56.117:5000/vendor_verifyadd";
      
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
          console.log(data);
         var messageverify =  data.Message;
        console.log(messageverify);
        if(messageverify == "OTP is sent to Mobile Number")
         {
            document.getElementById("messageverify").innerHTML = messageverify;
        }else{
          document.getElementById("messageverify").innerHTML = messageverify;
        }
       })
       } catch (e) {
                console.log(e);
      }
}

