
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
    localStorage.clear();
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

$("#button").click(function() {  
  $("#form").toggle("slow");
  return false;
});
jQuery("form").submit(function(e){
    e.preventDefault();  
    //or
    //return false;
    });

    $(document).ready(function(){
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myDIV *").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });
function myFunction() {

    // console.log("hii");
    var form = document.getElementById('form'),
        list = document.getElementById('list');
    
    list.innerHTML = [].map.call(form.querySelectorAll('input'), function(el) {
      return '<li>' + el.value + '</li>';
    }).join('');
  }

  // var restid = window.localStorage.getItem('resturantid');
 var table_name = window.localStorage.getItem('tablename')
fetch('http://162.240.56.117:5000/workingtable'+'/'+table_name , {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(function(response) {
        return response.json();
      }).then(function(data) {
        // console.log(data);
        if (data.length > 0) {
          var temp = "";
          data.forEach((itemData, i) => {
              temp +=` <div class="list" id="myDIV">
              <div class="num">
                <label>${itemData.table_name}</label>
                <button class="kc_fab_main_btn" style="align-items: center;"><i class='fas fa-pencil-alt text-secondary' onclick = "gotoedit(${itemData.id})"></i></button>
                <i class="kc_fab_eye far fa-trash-alt ms-text-danger" onclick = "gotodelete(${itemData.id})"></i>
                <button onclick="openmodal(${itemData.price})" class="button-76" role="button">Make Payment</button>
              </div>
            
            </div>`
          });
          document.getElementById('data').innerHTML = temp;
        }
      }).catch(function() {
       
      });
 
function gotoedit(id)
{
  // console.log(id);
  window.localStorage.setItem('statuseditid', id)
  $("#statusform").toggle("slow");
  return false;
}
function editstatus()
{
         const data = {
            "id": window.localStorage.getItem('statuseditid'),
            "status":document.getElementById('staussel').value,
            };
            // console.log(JSON.stringify(data));
    try {
    
        // Options to be given as parameter
        // in fetch for making requests
        // other then GET
        const api = "http://162.240.56.117:5000/workingtable";
        
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
            if(data.msg == "success in Edit")
            {
                window.location.reload();
            }
        })
       
    } catch (e) {
        console.log(e);
    }     
   
}
function gotodelete(id)
{
    fetch('http://162.240.56.117:5000/workingtable/'+ id, {
    method: 'DELETE',
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    },

    }).then(function(response) {
    return response.json();
    }).then(function(data) {
    // console.log(data);
    if(data.msg == "success in Delete")
    {
      window.location.reload();
    }

    }).catch(function() {

    });
}

function openmodal(price)
{
  // console.log(price);
  window.localStorage.setItem("pricepayment", price)
  window.location.href = "#demo-modal";
  $("input[name='select']").click(function () {
   var paymentmode = $(".clspaymode:checked").val();
   window.localStorage.setItem('paymentmode', paymentmode)

   if(paymentmode == "card")
   {
    window.location.href = "cardpayment.html";
    window.localStorage.setItem('paymentmode', "card" )
   }
   if(paymentmode == "cash")
   {
    window.location.href = "cashpayment.html";
    window.localStorage.setItem('paymentmode', "cash" )
   }
});
 
}
//   function myserchFunction() {
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     var length = document.getElementsByClassName('target').length;

//     for (i=0; i<length; i++){
// if(document.getElementsByClassName('target')[i].innerHTML.toUpperCase().indexOf(filter) > -1) {     
//     document.getElementsByClassName("target")[i].style.display = "block";
//             }
//         else{
//         	document.getElementsByClassName("target")[i].style.display = "none";
//         } 
//     }
//   }