
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
  var y = document.getElementById("myuserdiv");
  y.querySelector('.text-disabled').innerHTML = data.firstname + ' ' + data.lastname ;

}
jQuery("form").submit(function(e){
    e.preventDefault();  
    //or
    //return false;
    });

const formdata = document.getElementById('addform');
function Addvendor()
{
    
    if( formdata.checkValidity() == true)
    {
        
        const fd = new FormData();

            fd.append("name", document.getElementById('pname').value),
            fd.append("phno", document.getElementById('phonenum').value),
            fd.append("email", document.getElementById('email').value),
            fd.append("streetname", document.getElementById('sname').value),
            fd.append("area", document.getElementById('area').value),
            fd.append("billingaddr", document.getElementById('baddress').value),
            fd.append("country", document.getElementById('country').value),
            fd.append("state", document.getElementById('state').value),
            fd.append("city", document.getElementById('city').value),
            fd.append("zipcode", document.getElementById('zipcode').value),
            fd.append("creditdays", document.getElementById('cdays').value),
            fd.append("outamount", document.getElementById('oamount').value),
            fd.append("gstno", document.getElementById('gst').value),
            fd.append("restid", window.localStorage.getItem('resturantid'))
            console.log(fd);
    try {
    
        // Options to be given as parameter
        // in fetch for making requests
        // other then GET
        const api = "http://162.240.56.117:5000/supplierpost";
        
        let options = {
            method: 'POST',
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
            console.log(data);
            if(data.msg == "Data Insert Successs ")
            {
                window.location.href = "vendor.html";
            }
        })
       
    } catch (e) {
        // console.log(e);
    }     
 }  
}
var id = window.localStorage.getItem('resturantid');
fetch('http://162.240.56.117:5000/supplyget/' + id, {
   
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    
  }).then(function(response) {
        return response.json();
      }).then(function(data) {
    //    console.log(data);
       
       for (var i = 0; i < data.rows.length; i++) {
    }
    if(data.rows.length == 0)
        {
          document.getElementById('tablediv').style.display = "none";
          document.getElementById('messagedisplay').innerHTML = "VENDOR NOT REGISTERD!!.."
        }
    if (data.rows.length > 0) {
        document.getElementById('messagedisplay').innerHTML = ""
      var temp = "";
   data.rows.forEach((itemData, i) => {
      
    temp += "<tr>";
    temp += "<td>" + [i+1] + "</td>";
    temp += "<td>" + itemData.name + "</td>";
    // temp += "<td>"+ `<img src="http://162.240.56.117:5000/product/${itemData.picture}" style ="max-width: 45px">` + "</td>";
    temp += "<td>" + itemData.outamount + "</td>";
    temp += "<td>" + itemData.email + "</td>";
    temp += "<td>" + itemData.phno + "</td>";
    temp += "<td>" + itemData.billingaddr + "</td>";
    temp += "<td>"+ itemData.gstno + "</td>";
    temp += "<td>" + `<a><i class='fas fa-pencil-alt text-secondary' onclick = "gotoedit(${itemData.id})"></i></a>
    <a ><i class='far fa-trash-alt ms-text-danger' onclick = "gotodelete(${itemData.id})"></i></a>`     + "</td>";
    temp += "</tr>"
      });
     
      document.getElementById('card').innerHTML = temp;
      
  }
      }).catch(function() {
});

// function addvendor()
// {
//     document.getElementById("myForm").style.display = "block";
// }
function closeaddForm() {
    document.getElementById("myForm").style.display = "none";
}

function gotoedit(id)
{
    document.getElementById("myupForm").style.display = "block";
    // console.log(id);
    window.localStorage.setItem('editsuppid', id)
}

const formupdata = document.getElementById('upform');
function Upproduct()
{
    if( formupdata.checkValidity() == true)
    {
         const data = {
            "status":  document.getElementById('stausupsel').value,
            };
            // console.log(JSON.stringify(data));
    try {
    
        // Options to be given as parameter
        // in fetch for making requests
        // other then GET
        var id = window.localStorage.getItem('editsuppid')
        const api = "http://162.240.56.117:5000/supplystatus/" + id;
        
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
            if(data.msg == "success in edit")
            {
                window.location.reload();
            }
        })
       
    } catch (e) {
        // console.log(e);
    }     
 }  
}
function closeForm() {
    document.getElementById("myupForm").style.display = "none";
}

function gotodelete(id)
{
    document.getElementById('id01').style.display='block'
    // console.log(id);
   window.localStorage.setItem('deletesuppid', id)

}
function gotoproductdelete()
{

   var id = window.localStorage.getItem('deletesuppid');
    
  fetch('http://162.240.56.117:5000/supplydelete/' + id, {
  method: 'DELETE',
  headers: {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  },
  
  }).then(function(response) {
  return response.json();
  }).then(function(data) {
//   console.log(data);
  if(data.msg == "success in Delete")
  {
      window.location.reload();
  }
  
  }).catch(function() {
  
  });
}
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}