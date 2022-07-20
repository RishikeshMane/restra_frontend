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
fetch('http://162.240.56.117:5000/supplyget/' + id, {
   
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    
  }).then(function(response) {
        return response.json();
      }).then(function(data) {
      //  console.log(data);
       window.localStorage.setItem('vendordata', JSON.stringify(data.rows))
    if (data.rows.length > 0) {

   data.rows.forEach((itemData, i) => { 
     
    var select = document.getElementById("vendorename");
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
    var data = JSON.parse(window.localStorage.getItem('vendordata'))
    // console.log(data);
    data.forEach((itemData, i) => {
        if(document.getElementById('vendorename').value == itemData.name)
        {
          document.getElementById('yemail').setAttribute('value', itemData.email); 
          document.getElementById('ymobile').setAttribute('value',itemData.phno);
          document.getElementById('yaddress').setAttribute('value',itemData.billingaddr);
        }
    });
}
$(document).ready(function(){
  
    function calculateTotal(currentGroup) {
      var groupTotal = 0;
      currentGroup.parents('table').find('.rowTotal').each(function( i ){
        groupTotal = Number(groupTotal) + Number( $(this).text() );
      });
      currentGroup.parents('table').find('.total').text(groupTotal.toFixed(2));
      currentGroup.parents('table').find('.subtotal').text(groupTotal.toFixed(2));
    }

    $(".document.active").delegate( ".tdDelete", "click", function() {
      if ($(this).parents('tbody').children().length > 1){
        $(this).prev().text('0');
        calculateTotal($(this));
        
        $(this).parents('tr').remove();
      }
    });
  
    $(".document.active").delegate( ".trAdd", "click", function() {
        $(this).parents('table').find('tbody').append( $(this).parents('table').find('tbody tr:last-child').clone() );
        calculateTotal($(this));
    });
  
  $(".document.active").delegate( ".amount", "keyup", function() {
    //console.log('test');
    calculateTotal($(this));
  });
  
  
  
  
    var tdValues = [];
    $(".document.active .proposedWork").delegate( "td:not(.description .unit)", "keyup", function() {
      tdValues.length = 0;
  
        //Paint
        $(this).parents('tr').find('td').each(function( i ){
          if(i > 4){return false}
          if(i == 4){$(this).text( tdValues[0]*tdValues[3] )}
          tdValues[i] = Number( $(this).text() );
        });

      calculateTotal($(this));
    });
 
});
jQuery("form").submit(function(e){
    e.preventDefault();  
    //or
    //return false;
  });

  const formdata = document.getElementById('addform');

function sendrfq()
{  var rows=[];
    var rows1=[]
    $("#dataTable tbody tr").each(function(){
           var itemname = $(this).closest('tr').find('td:nth-child(2) input').val();
           var quantity = $(this).closest('tr').find('td:nth-child(1) input').val();
        //    var vals={quantity, itemname};
           rows.push(quantity);
           rows1.push(itemname)
           window.localStorage.setItem('itemdataquantity', JSON.stringify(rows))
           window.localStorage.setItem('itemdataname', JSON.stringify(rows1))
     });
   
    var itemdata = JSON.parse(window.localStorage.getItem('itemdata'));
  
   if( formdata.checkValidity() == true)
     {
         var quantitylast = window.localStorage.getItem('itemdataquantity');
         var itemnamelast = window.localStorage.getItem('itemdataname');
        var data1 = quantitylast.replace(/[\[\"\]']+/g,"",)
        // console.log(data1);
        var data2 = itemnamelast.replace(/[\[\"\]']+/g,"",)
        // console.log(data2);
     const data = {
        "rest_id": window.localStorage.getItem('resturantid'),
        "vendorname": document.getElementById('vendorename').value,
        "vendoremail": document.getElementById('yemail').value,
         "vendorphno": document.getElementById('ymobile').value,
         "vendoraddress": document.getElementById('yaddress').value,
         "quantity": data1,
         "item": data2
        };
        // console.log(JSON.stringify(data));
try {

    // Options to be given as parameter
    // in fetch for making requests
    // other then GET
    const api = "http://162.240.56.117:5000/order_rfq";
    
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
     if(data.msg == "success in Insert")
     {
      document.getElementById('messageverify').innerHTML = "Request for quotation sent successfully!!.."
       window.location.reload()
     }
       
    })
   
} catch (e) {
    // console.log(e);
}     
     }
$("#addform").trigger('reset');
     }


   