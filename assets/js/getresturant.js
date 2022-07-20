
var is_login = window.sessionStorage.getItem("is_login");
// console.log(is_login);

if(is_login != "true")
{
window.location.href = "login.html"
}
window.onbeforeunload = () => {
  localStorage.removeItem(key);
  sessionStorage.removeItem(key);
}

function gotologout()
{
window.location.href ="login.html";
window.sessionStorage.clear();
window.localStorage.clear();
}
window.history.forward();
function noBack() {
window.history.forward();
window.sessionStorage.clear();
window.localStorage.clear();
}        
var data = JSON.parse(window.localStorage.getItem('userdata'));
if (data.length > 0) {
  var temp = "";
  data.forEach((itemData) => {
    var firstName = itemData.Fname;
    var lastName = itemData.Lname;
    var intials = itemData.Fname.charAt(0) + itemData.Lname.charAt(0);
    // console.log(intials);
    var profileImage = $('#profileImage').text(intials);
  });
}
if(window.localStorage.getItem('login_data') != null)
{
  var data = JSON.parse(window.localStorage.getItem('login_data'));
  var y = document.getElementById("myadddiv");
  y.querySelector('.text-disabled').innerHTML = data.firstname + ' ' + data.lastname ;

}


var userid = JSON.parse(window.localStorage.getItem('userid'))
 fetch('http://162.240.56.117:5000/getrestaurant/' + userid , {
     method: 'GET',
     headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
     },
   }).then(function(response) {
         return response.json();
       }).then(function(data) {
        //  console.log(data);
         for (var i = 0; i < data.Data.length; i++) {
        }
        if (data.Data.length > 0) {
            data.Data.forEach((itemData) => {
              if(itemData.extra_address == "" || itemData.extra_address == "null" || extra_address == null)
            {
              document.getElementById('extra_address').setAttribute('value', itemData.address);
              document.getElementById('extra_address').required = false ;
            }
            else
            {
              document.getElementById('extra_address').setAttribute('value', itemData.extra_address);
            }
            
              // $('#countySel').val(itemData.country);
               document.getElementById('country').setAttribute('value',itemData.country);
               document.getElementById('state').setAttribute('value',itemData.State);
               document.getElementById('city').setAttribute('value',itemData.City);
               document.getElementById('pincode').setAttribute('value',itemData.PinCode);
               document.getElementById('address').setAttribute('value',itemData.address);
               document.getElementById('license').setAttribute('value', itemData.license_Id);
               document.getElementById('gstnumber').setAttribute('value', itemData.GST_Number);
               document.getElementById('opening_time').setAttribute('value', itemData.opening_time);
               document.getElementById('closing_time').setAttribute('value', itemData.closing_time);
              
               $("#mobiletype").val(itemData.phone_type)
              //  document.getElementById('mobiletype').setAttribute('selected', itemData.phone_type);
              if(document.getElementById('mobiletype').value == "landline")
              {
                
                document.getElementById('lannum').style.display = "block";
                document.getElementById('lnum').setAttribute('value', itemData.phoneno);
              }
              if(document.getElementById('mobiletype').value == "mobile")
              {
                document.getElementById('mobilenum').style.display = "block";
                document.getElementById('mnum').setAttribute('value', itemData.phoneno);
                
              }
               if(itemData.extra_address !== "null" )
               {
                  document.getElementById('extrabillfield').style.display = "block";
                  document.getElementById('extra_address').required = false ;
                  
               }
              //  if(itemData.extra_address == "" )
              //  {
              //     document.getElementById('extrabillfield').style.display = "none";
              //     document.getElementById('extra_address').required = false ;
              //  }
            });
        }
        
       }).catch(function() {
        
       });

       function checkmobileType() {
        // console.log(document.getElementById('mobiletype').value);
        if(document.getElementById('mobiletype').value == "landline")
        {
          document.getElementById('lannum').style.display = "block";
          document.getElementById('lnum').required =true ;
          document.getElementById('mobilenum').style.display = "none";
          document.getElementById('mnum').required = false ;
        }
        if(document.getElementById('mobiletype').value == "mobile")
        {
          document.getElementById('mobilenum').style.display = "block";
          document.getElementById('mnum').required =true ;
          document.getElementById('lannum').style.display = "none";
          document.getElementById('lnum').required = false ;
        }
        }
      
      

       jQuery("form").submit(function(e){
        e.preventDefault();  
        //or
        //return false;
        });
      const formupdata = document.getElementById('form');
      function updateForm()
      {
        var id = window.localStorage.getItem('resturantid');
        if(document.getElementById('mobiletype').value == "landline")
        {
          var mobile = document.getElementById('lnum').value
          window.localStorage.setItem('getreturantmobile',mobile)
        }
        if(document.getElementById('mobiletype').value == "mobile")
        {
          var mobile = document.getElementById('mnum').value
          window.localStorage.setItem('getreturantmobile',mobile)
        }
        if( formupdata.checkValidity() == true)
      {
        const data = {
        "restaurantName": document.getElementById('restraname').value,
        "country": document.getElementById('country').value,
        "State": document.getElementById('state').value,
        "City": document.getElementById('city').value,
        "PinCode": document.getElementById('pincode').value,
        "address": document.getElementById('address').value,
        "extraaddress": document.getElementById('extra_address').value,
        "license_Id": document.getElementById('license').value,
        "GST_Number" : document.getElementById('gstnumber').value,
        "opentime" : document.getElementById('opening_time').value,
        "closetime" : document.getElementById('closing_time').value,
        "phno" : window.localStorage.getItem('getreturantmobile'),
        "phno_type" :  document.getElementById('mobiletype').value,
        "ownerid":window.localStorage.getItem('userid'),
          };
          // console.log(JSON.stringify(data));
      try {
      
      // Options to be given as parameter
      // in fetch for making requests
      // other then GET
      const api = "http://162.240.56.117:5000/editrestaurant/" + id;
      
      let options = {
          method: 'PUT',
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
          // console.log(data);
        if(data = "Edit successfully")
        {
          window.location.reload();
          
        }
      })
      
      } catch (e) {
      // console.log(e);
      }     
      }
      }


  