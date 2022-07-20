
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


var id = window.localStorage.getItem('resturantid');
      

fetch('http://162.240.56.117:5000/gettablebooking/'+ id,  {
    method: 'GET',

    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify(data)
  }).then(function(response) {
        return response.json();
      }).then(function(data) {
        // console.log(data.Data);
        for (var i = 0; i < data.Data.length; i++) {
        }
        if(data.Data.length == 0)
        {
          document.getElementById('table_div').style.display = "none";
          document.getElementById('messageverify').innerHTML = "NO RESERVATION HERE!!.."
        }
        if (data.Data.length > 0) {
          // console.log(data.Data);
          var temp = "";
          data.Data.forEach((itemData, i) => {
          
            if(itemData.status == "inactive")
            {
            temp += "<tr>";
            temp += "<td>" + [i+1] + "</td>";
            temp += "<td>" + itemData.customername + "</td>";
            temp += "<td>" + itemData.assignedtable + "</td>";
            temp += "<td>" + itemData.numofpeople + "</td>";
            temp += "<td>" + itemData.phonenum + "</td>";
            temp += "<td>" + itemData.email + "</td>";
            temp += "<td>" + itemData.bookingdate + "</td>";
            temp += "<td>" + itemData.time + "</td>";
            // temp += "<td>" + `<i onclick = "gotoedit('${itemData.id}','${itemData.phonenum}','${itemData.numofpeople}','${itemData.bookingdate}', '${itemData.time}')" class= "fas fa-edit" ></i>`     + "</td>";
            temp += "<td>" +  `<i onclick = "gotodelete(${itemData.id})"  class=" fas fa-trash-alt "  >`    + "</td>"
            }
          });
          document.getElementById('data').innerHTML = temp;
        
      }
      
      }).catch(function() {
       
      });

      
function gotodelete(id)
{
    document.getElementById('id01').style.display='block'
    // console.log(id);
   window.localStorage.setItem('deletebookid', id)

}
function gotoproductdelete()
{
  var id = window.localStorage.getItem('deletebookid');
  const data = {
       "status": document.getElementById('staussel').value,
      };
      // console.log(JSON.stringify(data));
  fetch('http://162.240.56.117:5000/changeactstatus/'+id, {
  method: 'POST',
  headers: {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  },
  body: JSON.stringify(data)
  }).then(function(response) {
  return response.json();
  }).then(function(data) {
  // console.log(data);
  if(data.Message == "Done edit")
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


// function gotoedit(id,phonenum, numofpeople, bookingdate, time)
// {
//   console.log(id,phonenum, numofpeople, bookingdate, time);
//   window.localStorage.setItem('upuser', phonenum)
//   document.getElementById("myForm").style.display = "block";
//   document.getElementById('mobilenum').setAttribute('value', phonenum);
//   document.getElementById('num_people').setAttribute('value', numofpeople);
//   document.getElementById('date').setAttribute('value', bookingdate);
//   document.getElementById('time').setAttribute('value', time);
//   window.localStorage.setItem('bookupid', id)
// }
// function closeForm() {
//   document.getElementById("myForm").style.display = "none";
// }
// jQuery("form").submit(function(e){
//   e.preventDefault();  
//   //or
//   //return false;
//   });
// const formupdata = document.getElementById('upreserveForm');
// function updatereserveForm()
// {
//   var id = window.localStorage.getItem('bookupid');
//   if( formupdata.checkValidity() == true)
// {
//   const data = {
//     "bookingdate": document.getElementById('date').value,
//     "time" :  document.getElementById('time').value,
//     "phonenumber": document.getElementById('mobilenum').value,
//     "noofpeople": document.getElementById('num_people').value,
//     "restid": window.localStorage.getItem('resturantid'),
//     };
//     console.log(JSON.stringify(data));
// try {

// // Options to be given as parameter
// // in fetch for making requests
// // other then GET
// const api = "http://162.240.56.117:5000/changebookent/" + id;

// let options = {
//     method: 'PUT',
//     headers: {"Access-Control-Allow-Origin" : "*",
//         'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify(data)
// }

// // Fake api for making post requests
// let fetchRes = fetch(
//     api,
//     options);
// fetchRes.then(res => {
//     return res.json();
// }).then((data) => {
//     console.log(data);
//     if(data.Message == "Done edit")
//     {
//       window.location.reload();
//     }
// })

// } catch (e) {
// console.log(e);
// }     
// }
// }