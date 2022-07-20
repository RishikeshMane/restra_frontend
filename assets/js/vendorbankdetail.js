
jQuery("form").submit(function(e){
    e.preventDefault();  
  
  });
  const formdata = document.getElementById('addform');

function Addvendor()
{  
 jQuery.support.cors = true;

    if( formdata.checkValidity() == true)
    {
    
        const fd = new FormData();
        
        fd.append("name",  document.getElementById('pyname').value),
        fd.append("accountno", document.getElementById('acno').value)
        fd.append("ifsc_code", document.getElementById('ifsc').value),
        fd.append("bank_name", document.getElementById('bkname').value),
        fd.append("account_type", document.getElementById('accounttype').value),
        fd.append("upi_id", document.getElementById('upiid').value),
        fd.append("phone_no",window.localStorage.getItem('vendormobilenumber')),
        fd.append("Image",document.getElementById('myFile').files[0]),     

          console.log();
    //   const data = {
    //       "name": document.getElementById('pyname').value,
    //       "accountno": document.getElementById('acno').value,
    //       "ifsc_code": document.getElementById('ifsc').value,
    //       "bank_name" : document.getElementById('bkname').value,
    //       "account_type": document.getElementById('accounttype').value,
    //       "upi_id": document.getElementById('upiid').value,

    //       "phone_no" : window.localStorage.getItem('vendormobilenumber')
    //       };
    //     console.log(JSON.stringify(data));
      
        try {

        // Options to be given as parameter
        // in fetch for making requests
        // other then GET
        const api = "http://162.240.56.117:5000/edit_vendor_bank";

        let options = {
            method: 'PUT',
            headers: {"Access-Control-Allow-Origin" : "*",
                         'Accept': 'application/json'
            },
            body: fd
        }

    // Fake api for making post requests
        let fetchRes = fetch(
            api,
            options);
        fetchRes.then(res => {
            return res.json();
        }).then((data) => {
            // console.log(data);
            if(data.Message == "Edit successful")
            {
           document.getElementById('messageverify').innerHTML = "Vendore Details Added Successful!!.."
           window.location.href = "thankyou.html"
            }
          
        })

    } catch (e) {
    // console.log(e);
}     

$("#form").trigger('reset');
}
}