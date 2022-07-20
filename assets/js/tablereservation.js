
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

function gotologout1()
{
   window.location.href ="login.html";
   window.sessionStorage.clear();
   window.localStorage.clear();
}

$(function(){
  var dtToday = new Date();
  
  var month = dtToday.getMonth() + 1;
  var day = dtToday.getDate();
  var year = dtToday.getFullYear();
  if(month < 10)
      month = '0' + month.toString();
  if(day < 10)
      day = '0' + day.toString();
  
  var minDate= year + '-' + month + '-' + day;
  
  $('#date').attr('min', minDate);
});


jQuery("form").submit(function(e){
  e.preventDefault();  

});

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

var  restid = window.localStorage.getItem('resturantid');
fetch('http://162.240.56.117:5000/kottable'+'/'+restid , {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(function(response) {
        return response.json();
      }).then(function(data) {
        // console.log(data);
        for (var i = 1; i < data.Data.length; i++) {
          
        }
        if (data.Data.length > 0) {
            data.Data.forEach((itemData, i) => {
              var select = document.getElementById("tablename");
              var opt = itemData.name;
              var el = document.createElement("option");
              el.textContent = opt;
              el.value = opt;
              select.appendChild(el);
        });
       
    }
      }).catch(function() {
       
      });
function checkCategory() {
  if(document.getElementById('tablename').value == "add")
        {
          window.location.href="table.html";
        }
      }
const formdata = document.getElementById('form');
function booktable()
{
      jQuery.support.cors = true;
        if( formdata.checkValidity() == true)
         {
         const data = {
            "id": window.localStorage.getItem('resturantid'),
            "customername": document.getElementById('fname').value,
            "email": document.getElementById('email').value,
            "availability": document.getElementById('availability').value,
            "date": document.getElementById('date').value,
            "numofpeople": document.getElementById('num_people').value,
            "phonenumber": document.getElementById('mobilenum').value,
            "assignedtable": document.getElementById('tablename').value,
            "time" :  document.getElementById('time').value
            };
            // console.log(JSON.stringify(data));
            window.localStorage.setItem('book_mobilenumber', data.phonenumber)
    try {
    
        // Options to be given as parameter
        // in fetch for making requests
        // other then GET
        const api = "http://162.240.56.117:5000/tablereserve";
        
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
            // console.log(data);
         if(data.msg == "booking is successful")
         {
          document.getElementById("messageverify").innerHTML = data.msg
          window.location.href= "reservationlist.html"
         }
           
        })
       
    } catch (e) {
        // console.log(e);
    }     
    
    $("#form").trigger('reset');
      }
    
    }

   
function booktableotp()
{
    var logintoken = window.localStorage.getItem('login_token');
    var id = window.localStorage.getItem('resturantid');
         const data = {
          "phone_num":"7767056281",
          "token":logintoken,
          "id": id
            };
            // console.log(JSON.stringify(data));
            window.localStorage.setItem('book_mobilenumber', data.phonenumber)
    try {
    
        // Options to be given as parameter
        // in fetch for making requests
        // other then GET
        const api = "http://162.240.56.117:5000/mobileVerifications";
        
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
            // console.log(data);
        
           
        })
       
    } catch (e) {
        // console.log(e);
    }    
  }

    var id = window.localStorage.getItem('resturantid');
    fetch('http://162.240.56.117:5000/gettablebooking/' + id, {
       
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        
      }).then(function(response) {
            return response.json();
          }).then(function(data) {
            window.localStorage.setItem('reaervationlist', JSON.stringify(data.Data))
            for (var i = 0; i < data.length; i++) {
            }
          
          }).catch(function() {
    });
    function gotodetails()
   {
    document.getElementById("messageverify").innerHTML = ""
    document.getElementById('fn').style.display = "none"
    document.getElementById('table_div').style.display = "block"
   
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
                    document.getElementById('messageverify').innerHTML = "RESERVATION NOT ADDED!!.."
                  }
                  if (data.Data.length > 0) {
                    // console.log(data.Data);
                    var temp = "";
                    data.Data.forEach((itemData, i) => {
                      if(itemData.status == "active")
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
                      temp += "<td>" + `<i onclick = "gotoedit('${itemData.id}','${itemData.phonenum}','${itemData.numofpeople}','${itemData.bookingdate}',
                      '${itemData.time}')" class= "fas fa-edit" ></i>`     + "</td>";
                      temp += "<td>" +  `<i onclick = "gotodelete(${itemData.id})"  class=" fas fa-window-close "  >`    + "</td>"
                      }
                    });
                    document.getElementById('data').innerHTML = temp;
                  
                }
                
                }).catch(function() {
                 
                });
               
              }

  function specific()
  {
    document.getElementById("messageverify").innerHTML = ""
    document.getElementById('table_div').style.display = "none"
    document.getElementById('fn').style.display = "block"
  }
  window.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
       var button = document.getElementById("checkbutton");
       button.click();
    }
  }, false);
  function check()
  {
    document.getElementById('table_div').style.display = "block"
    var list = JSON.parse(window.localStorage.getItem('reaervationlist'));
    // console.log(list);
    // console.log(document.getElementById('mobile_num').value);
       
        for (var i = 0; i < list.length; i++) {
        }
        if (list.length > 0) {
        
          var temp = "";
          list.forEach((itemData, i) => {
            if(itemData.phonenum == document.getElementById('mobile_num').value && itemData.status == "active")
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
            temp += "<td>" + `<i onclick = "gotoedit('${itemData.id}','${itemData.phonenum}','${itemData.numofpeople}',
            '${itemData.bookingdate}','${itemData.time}')" class= "fas fa-edit" ></i>`     + "</td>";
            temp += "<td>" +  `<i onclick = "gotodelete(${itemData.id})"  class=" fas fa-window-close"  >`    + "</td>"
            }
            document.getElementById('data').innerHTML = temp;
            
          if ($('#data').is(':empty')){
            document.getElementById('table_div').style.display = "none"
            document.getElementById("messageverify").innerHTML = "Data Not Found..!";
           
          }else
          {
            document.getElementById("messageverify").innerHTML = "";
          }
          });
         
       }
  }
  

  function Todays_book()
  {
    document.getElementById('mobile_num').value = ''
    document.getElementById('fn').style.display = "none"
    document.getElementById('table_div').style.display = "block"
    var todaysDate = $.datepicker.formatDate('dd-mm-yy', new Date());
    // console.log(todaysDate);
    var list = JSON.parse(window.localStorage.getItem('reaervationlist'));
    // console.log(list);
      for (var i = 0; i < list.length; i++) {
      }
      if (list.length == 0) {
        document.getElementById('table_div').style.display = "none";
        document.getElementById("messageverify").innerHTML = "RESERVATION NOT ADDED!!.."
      }

      if (list.length > 0) {
        var temp = "";
        list.forEach((itemData, i) => {

          if(itemData.bookingdate == todaysDate && itemData.status == "active")
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
          temp += "<td>" + `<i onclick = "gotoedit('${itemData.id}','${itemData.phonenum}','${itemData.numofpeople}',
          '${itemData.bookingdate}','${itemData.time}')" class= "fas fa-edit" ></i>`     + "</td>";
          temp += "<td>" +  `<i onclick = "gotodelete(${itemData.id})"  class=" fas fa-window-close"  >`    + "</td>"
          } 
          document.getElementById('data').innerHTML = temp;

          // if ($('#data').is(':empty')){
          //   document.getElementById('table_div').style.display = "none"
          //   document.getElementById("messageverify").innerHTML = "Data Not Found..!";
           
          // }else
          // {
          //   document.getElementById("messageverify").innerHTML = "";
          // }
        });
        
     }
        
    
  }



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

function gotoedit(id,phonenum, numofpeople, bookingdate, time)
{
  // console.log(id,phonenum, numofpeople, bookingdate, time);
  window.localStorage.setItem('upuser', phonenum)
  document.getElementById("myForm").style.display = "block";
  document.getElementById('mobilenum').setAttribute('value', phonenum);
  document.getElementById('num_people').setAttribute('value', numofpeople);
  document.getElementById('date').setAttribute('value', bookingdate);
  document.getElementById('time').setAttribute('value', time);
  window.localStorage.setItem('bookupid', id)
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
jQuery("form").submit(function(e){
  e.preventDefault();  
  //or
  //return false;
  });
const formupdata = document.getElementById('upreserveForm');
function updatereserveForm()
{
  var id = window.localStorage.getItem('bookupid');
  if( formupdata.checkValidity() == true)
{
  const data = {
    "bookingdate": document.getElementById('date').value,
    "time" :  document.getElementById('time').value,
    "phonenumber": document.getElementById('mobilenum').value,
    "noofpeople": document.getElementById('num_people').value,
    "restid": window.localStorage.getItem('resturantid'),
    };
    // console.log(JSON.stringify(data));
try {

// Options to be given as parameter
// in fetch for making requests
// other then GET
const api = "http://162.240.56.117:5000/changebookent/" + id;

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
    if(data.Message == "Done edit")
    {
      window.location.reload();
    }
})

} catch (e) {
// console.log(e);
}     
}
}
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
//         window.location.href ="login.html";
        
//       }if(data.message == "login again : TokenExpiredError: jwt expired")
//       {
//         window.location.href ="login.html";
//       }
//       }).catch(function() {
       
//       });
