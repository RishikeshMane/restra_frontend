

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
var table_name = window.localStorage.getItem('tablename')
fetch('http://162.240.56.117:5000/invoice_runningordertable'+'/'+table_name , {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(function(response) {
        return response.json();
      }).then(function(data) {
        // console.log(data);
        for (var i = 0; i < data.rows.length; i++) 
        {  
      
         }  
        document.getElementById('bookingid').innerHTML = '#'+ data.otp;
        if (data.rows.length > 0) {
          
          var temp = "";
          data.rows.forEach((itemData, i) => {
            temp += "<tr>";
            temp += "<td>" + [i+1] + "</td>";
            temp += `<td  class="text-center">` + itemData.order_name + "</td>";
            temp += "<td>" + itemData.quantity + "</td>";
            temp += "<td>" + itemData.price + "</td>";
            temp += "<td>" + itemData.price + "</td>";
            document.getElementById('totalprice').innerHTML = itemData.price;
          
          });
          document.getElementById('data').innerHTML = temp;
          
          }
          var date = (new Date()).toISOString().split('T')[0];
          document.getElementById('bookingdate').innerHTML = date;
          document.getElementById('paymode').innerHTML = window.localStorage.getItem('paymentmode')
          var restraname = window.localStorage.getItem('restraname');
          document.getElementById('restraname').innerHTML = restraname
          var total = document.getElementById('totalprice').textContent * 0.18;
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