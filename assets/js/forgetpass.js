

jQuery("form").submit(function(e){
    e.preventDefault();  
    //or
    //return false;
  });

function checkemail() {      
 // event.preventDefault();
 if(document.getElementById("femail").value.length != 0)
 {
    const data = {
        "email" : document.getElementById('femail').value,
    };
    console.log(JSON.stringify(data));
    try {

      // Options to be given as parameter
      // in fetch for making requests
      // other then GET
      const api = "http://162.240.56.117:5000/resetpasswordController";
      
      let options = {
          method: 'POST',
          headers: {"Access-Control-Allow-Origin" : "*",
              'Content-Type': 'application/json;charset=utf-8'
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
         window.localStorage.setItem("token", data.token);
         var messagerepo  = data.message;
         console.log(messagerepo);
         if(messagerepo == "Mail send")
         {        
              document.getElementById("messageverify").innerHTML = "Check your mail";
         }
         else
         {
            document.getElementById("messageverify").innerHTML = "Email not found"
            return;
         }
         //window.location.href="forgetpass.html";
        // window.open('changepss.html','popUpWindow','height=500,width=500,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
      })
  } catch (e) {
      console.log(e);
  }
}

}
