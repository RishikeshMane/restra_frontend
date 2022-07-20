
jQuery("form").submit(function(e){
    e.preventDefault();  
  
  });
  

const form = document.getElementById('logForm');
function check()
{
  if(document.getElementById("txtPhone").value.length != 0 && form.checkValidity() == true)
  {
    const data = {
        'phoneno' : document.getElementById('txtPhone').value,
    };
    console.log(JSON.stringify(data));
    window.localStorage.setItem("mobile", data.phoneno);
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
        // if(data.Message == "Enter Registered Mobile Number")
        // {
        //   document.getElementById("messageverify").innerHTML = "Please Kindly Register!";
        //   document.getElementById('registerlink').style.display = "block";
        // }
        if( data.Message == 'OTP is sent to vendor Mobile Number')
         {
                $('#psw').prop('required',false);
                window.location.href = "vendormobileotp.html"
         }
        })
       } catch (e) {
                console.log(e);
      }
       document.getElementById("logForm").reset()
      //  $('#mobilenum').prop('required',false);
  }
}