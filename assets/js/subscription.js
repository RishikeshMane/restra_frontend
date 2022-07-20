var is_login = window.sessionStorage.getItem("is_login");
// console.log(is_login);

 if(is_login != "true")
 {
   window.location.href = "pages/login.html"
 }
 window.history.forward();
 function noBack() {
     window.history.forward();
     window.sessionStorage.clear();
     window.localStorage.clear();
 }
 
function gotocart() {
    // var count = parseInt($("#lblCartCount").text());
    // $("#lblCartCount").html(count + 1);
    var rows=[];
    var OrderName = document.getElementById("carttitle").textContent;
    var Price = document.getElementById("amount").textContent;
    var Description = document.getElementById("list").textContent;
    var vals={OrderName, Price, Description};
    rows.push(vals);
  //  console.log(rows);
   window.localStorage.setItem('addtocartarray', JSON.stringify(rows))
   window.localStorage.setItem('subscriptionpurchase', true)
   window.location.href = "pages/addtocart.html"
}
function gotogoldcart() {
  // var count = parseInt($("#lblCartCount").text());
  // $("#lblCartCount").html(count + 1);
  var rows=[];
  var OrderName = document.getElementById("carttitle1").textContent;
  var Price = document.getElementById("amount1").textContent;
  var Description = document.getElementById("list1").textContent;
  var vals={OrderName, Price, Description};
  rows.push(vals);
//  console.log(rows);
 window.localStorage.setItem('addtocartarray', JSON.stringify(rows))
 window.localStorage.setItem('subscriptionpurchase', true)
 window.location.href = "pages/addtocart.html";

}
function gotosilvercart() {
  // var count = parseInt($("#lblCartCount").text());
  // $("#lblCartCount").html(count + 1);
  var rows=[];
  var OrderName = document.getElementById("carttitle2").textContent;
  var Price = document.getElementById("amount2").textContent;
  var Description = document.getElementById("list2").textContent;
  var vals={OrderName, Price, Description};
  rows.push(vals);
//  console.log(rows);
 window.localStorage.setItem('addtocartarray', JSON.stringify(rows))
 window.localStorage.setItem('subscriptionpurchase', true)
 window.location.href = "pages/addtocart.html"

}

function removecart() {
  var count = parseInt($("#lblCartCount").text());
  $("#lblCartCount").html(count - 1);
}

function check() {      
  
    const data = {
      "rest_id": window.localStorage.getItem('resturantid'),
      "typeofsub":"Bronze",
      "phone_no":"7767056281",
      "amount":"500 rs",
      "datetime":"16-02-2022 09:45",
      "expire_time":"7months 09:45"
    };
    // console.log(JSON.stringify(data));
    try {
  
      const api = "http://162.240.56.117:5000/addsubscription";
      
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

fetch('http://162.240.56.117:5000/getsubscription/2' , {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(function(response) {
        return response.json();
      }).then(function(data) {
        // console.log(data);
            var temp = "";
              temp += `<h1  id="carttitle" class="pricingTable-firstTable_table__header" style="color:  #878a8b;">${data.Type} package</h1>
              <p class="pricingTable-firstTable_table__pricing"><span>₹</span><span id="amount">${data.Amount}</span>/-<span>Month</span></p>
              <ul class="pricingTable-firstTable_table__options">
                <li id="list">${data.Description[0]}</li>
                <li id="list">${data.Description[1]}</li>
                <li id="list">${data.Description[2]}</li>
              </ul>
              <button class="pricingTable-firstTable_table__getstart" id="addtocart" onclick="gotocart()" >Add to cart</button>`
            
            document.getElementById('template1').innerHTML = temp;
        
      }).catch(function() {
      });

      fetch('http://162.240.56.117:5000/getsubscription/1' , {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(function(response) {
        return response.json();
      }).then(function(data) {
        // console.log(data);
        temp=""
              temp += `<h1 id="carttitle1" class="pricingTable-firstTable_table__header" style="color: #D4AF37;">${data.Type} Packege</h1>
              <p class="pricingTable-firstTable_table__pricing"><span>₹</span><span id="amount1">${data.Amount}</span>/-<span>Month</span></p>
              <ul class="pricingTable-firstTable_table__options">
                <li id="list1">${data.Description[0]}</li>
                <li >${data.Description[1]}</li>
                <li>${data.Description[2]}</li>
                <li>${data.Description[3]}</li>
                <li>${data.Description[4]}</li>
              </ul>
              <button class="pricingTable-firstTable_table__getstart" onclick="gotogoldcart()" >Add to cart</button>`
           
            document.getElementById('template2').innerHTML = temp;
 
      }).catch(function() {
      });

      fetch('http://162.240.56.117:5000/getsubscription/3' , {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(function(response) {
        return response.json();
      }).then(function(data) {
        // console.log(data);
            var temp = "";
              temp += `<h1 id="carttitle2" class="pricingTable-firstTable_table__header" style="color: #98002F;">${data.Type} Packege</h1>
              <p class="pricingTable-firstTable_table__pricing"><span>₹</span><span id="amount2">${data.Amount}</span>/-<span>Month</span></p>
              <ul class="pricingTable-firstTable_table__options">
                <li  id="list2">${data.Description[0]}</li>
                <li>${data.Description[1]}</li>
                <li>${data.Description[2]}</li>
              </ul>
              <button class="pricingTable-firstTable_table__getstart" onclick="gotosilvercart()">Add to cart</button>`
            
            document.getElementById('template3').innerHTML = temp;
        
      }).catch(function() {
      });
     
      $('#addtocart').click(function(){
          var rows=[];
           var OrderName= document.getElementById('addtocart').value;
          //  var Type=$(this).closest('tr').find('td:nth-child(8)').text();
          //  var price=$(this).closest('tr').find('td:nth-child(5)').text();
          //  var quantity = $(this).closest('tr').find('td:nth-child(2) input').val();
          //  console.log(quantity);
           var vals={OrderName };
            rows.push(vals);
      
  
          // console.log(rows);
          // localStorage.setItem('orderdata',JSON.stringify(rows))
          // window.location.href = "ordertaken.html"
      });


      var userid = window.localStorage.getItem('userid')
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
         for (var i = 0; i < data.length; i++) {
        }
        if (data.Data.length > 0) {
            data.Data.forEach((itemData) => {
                window.localStorage.setItem('resturantid', itemData.Restaurant_Id)
            });
        }
        
       }).catch(function() {
        
       });