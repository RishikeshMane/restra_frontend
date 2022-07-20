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
  
  $('#cdate').attr('min', minDate);
});
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

var data = JSON.parse(window.localStorage.getItem('userid'))
var userid = data
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
              var uniq = 'PO' +  Math.random().toString(16).slice(2);
            // console.log(uniq);
               document.getElementById('cname').setAttribute('value',itemData.RestraName);
               document.getElementById('caddress').setAttribute('value',itemData.address);
               document.getElementById('czcode').setAttribute('value',itemData.PinCode);
               document.getElementById('cphone').setAttribute('value',itemData.phoneno);
              //  document.getElementById('cmobile').setAttribute('value',);
               document.getElementById('pno').setAttribute('value', uniq);
            });
        }
        
       }).catch(function() {
        
       });

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
    window.localStorage.setItem('vaddress', itemData.billingaddr);
    window.localStorage.setItem('vmobile', itemData.phno)
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
        document.getElementById('clzcode').setAttribute('value', itemData.zipcode); 
        document.getElementById('clmobile').setAttribute('value',itemData.phno);
        document.getElementById('claddress').setAttribute('value',itemData.billingaddr);
  
      }
  });
  if(document.getElementById('vendorename').value == "add")
  {
    window.location.href="addsupplier.html";
  }
}

var id = window.localStorage.getItem('resturantid');
fetch('http://162.240.56.117:5000/getallrfqbyid/' + id, {
   
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    
  }).then(function(response) {
        return response.json();
      }).then(function(data) {
      //  console.log(data);
    if (data.msg.length > 0) {

   data.msg.forEach((itemData, i) => { 
    const quantitys = itemData.item.split(",");
    quantitys.forEach((item)=>{
    var select = document.getElementById("item");
    var opt = item;
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
    });
   });
   
      
  }
      }).catch(function() {
});

function additem() {
  var data = JSON.parse(window.localStorage.getItem('vendordata'))
  // console.log(data);
  data.forEach((itemData, i) => {
      if(document.getElementById('item').value == itemData.name)
      {
        document.getElementById('clzcode').setAttribute('value', itemData.zipcode); 
        document.getElementById('clmobile').setAttribute('value',itemData.phno);
        document.getElementById('claddress').setAttribute('value',itemData.billingaddr);
      }
  });
}

jQuery("form").submit(function(e){
    e.preventDefault();  
    //or
    //return false;
  });

  const formdata = document.getElementById('addform');

function Addpurchaseorder()
{     var rows=[];
      var rows1=[]
      $("#dataTable tbody tr").each(function(){
            var itemname = $(this).closest('tr').find('td:nth-child(3) select').val();
            var quantity = $(this).closest('tr').find('td:nth-child(1)').text();
          //    var vals={quantity, itemname};
            rows.push(quantity);
            rows1.push(itemname);
            window.localStorage.setItem('itemquantity', JSON.stringify(rows))
            window.localStorage.setItem('itemname', JSON.stringify(rows1))
      });
      if( formdata.checkValidity() == true)
      {
          var quantitylast = window.localStorage.getItem('itemquantity');
          var itemnamelast = window.localStorage.getItem('itemname');
         var data1 = quantitylast.replace(/[\[\"\]']+/g,"",)
        //  console.log(data1);
         var data2 = itemnamelast.replace(/[\[\"\]']+/g,"",)
        //  console.log(data2);
     const data = {
        "restid" : window.localStorage.getItem('resturantid'),
        "companyname":document.getElementById('cname').value,
        "addr":document.getElementById('caddress').value,
        "zipcode":document.getElementById('czcode').value,
        "phone":document.getElementById('czcode').value,
        "date":document.getElementById('date').value,
        "purchaseid":document.getElementById('pno').value,
        "bname":document.getElementById('vendorename').value,
        "baddress":document.getElementById('claddress').value,
        "bzipcode":document.getElementById('clzcode').value,
        "bphone":document.getElementById('clmobile').value,
        "sname":document.getElementById('sname').value,
        "saddress":document.getElementById('saddress').value,
        "szipcode":document.getElementById('szcode').value,
        "sphone":document.getElementById('smobile').value,
        "terms":document.getElementById('shipmentterm').value,
        "method":document.getElementById('shipmentmethod').value,
        "deliverydate":document.getElementById('deliverydate').value,
        "quantity":data1,
        "item":data2,
        "cost":document.getElementById('cost').textContent,
        "total":document.getElementById('total').textContent,
        "comments" : document.getElementById('comment').textContent,
        };
        // console.log(JSON.stringify(data));
try {

    // Options to be given as parameter
    // in fetch for making requests
    // other then GET
    const api = "http://162.240.56.117:5000/orderpurchasedeatils";
    
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
      document.getElementById("messageverify").innerHTML = "Added Successfully!!!...";
      window.location.href = "getpurchaseorder.html"
     }
     else
     {
      document.getElementById("messageverify").innerHTML = data.msg;
     }
       
    })
   
} catch (e) {
    // console.log(e);
}    
 }

$("#addform").trigger('reset');
}

     var id = window.localStorage.getItem('resturantid');
     fetch('http://162.240.56.117:5000/getallorderpurchasesbyrestid/' + id, {
        
         method: 'GET',
         headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json',
         },
         
       }).then(function(response) {
             return response.json();
           }).then(function(data) {
            // console.log(data);
         if (data.msg.length > 0) {
          var temp = "";
          var temp1 = "";
        data.msg.forEach((itemData, i) => {
          temp += "<tr>";
          temp += "<td>" + [i+1] + "</td>";
          temp += `<td  class="text-center">` + itemData.description + "</td>";
          temp += "<td>" + itemData.quantity + "</td>";
          temp += "<td>" + itemData.cost + "</td>";
          temp += "<td>" + itemData.total + "</td>";
          document.getElementById('totalprice').innerHTML = itemData.totalfinal;
          document.getElementById('address').innerHTML = itemData.iaddress;
          document.getElementById('mobile').innerHTML = itemData.iphno;
          document.getElementById('name').innerHTML = itemData.iname;
          document.getElementById('vname').innerHTML = itemData.vendorname;
          temp1 += "<tr>";
          temp1 += `<td  class="text-center">` + itemData.shipmethod + "</td>";
          temp1 += `<td  class="text-center">` + itemData.specifiedby + "</td>";
          temp1 += `<td  class="text-center">`+ itemData.sidemark + "</td>";
        
        });
        document.getElementById('data').innerHTML = temp;
        document.getElementById('data1').innerHTML = temp1;
      }
        document.getElementById('vaddress').innerHTML = window.localStorage.getItem('vaddress');
        document.getElementById('vmobile').innerHTML = window.localStorage.getItem('vmobile');
   
        var date = (new Date()).toISOString().split('T')[0];
        document.getElementById('bookingdate').innerHTML = date;
        document.getElementById('date').innerHTML = date;
        var restraname = window.localStorage.getItem('restraname');
        document.getElementById('company_name').innerHTML = restraname
        var total = document.getElementById('totalprice').textContent * 0.05;
        // console.log(total);
        var tot_price = parseInt(document.getElementById('totalprice').textContent) + parseInt(total);
        // console.log(tot_price);
        document.getElementById('gstprice').innerHTML = tot_price

    }).catch(function() {
     
    });

    function printDiv(divName) {
      var printContents = document.getElementById(divName).innerHTML;
      var originalContents = document.body.innerHTML;
 
      document.body.innerHTML = printContents;
 
      window.print();
 
      document.body.innerHTML = originalContents;
 }

 function gotovendor()
 {
  var zone = document.getElementById("vendorename");

  if (zone.value == "add"){

     window.location.href = "vendor.html"
  }
 }

 