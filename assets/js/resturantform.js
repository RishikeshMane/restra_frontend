// var stateObject = {
//     "India": {  "Andaman and Nicobar Islands":["Bakultala","Bambooflat","Garacharma","Port Blair","Prothrapur"],
//                 "Andhra Pradesh":["Adoni","Amaravati","Anantapur", "Bhimavaram","Chilakaluripet Chittoor"," Andhra Pradesh"
//                                  ,"Dharmavaram, Anantapur district","Eluru","Gudivada ","Guntakal","Guntur","Hindupur",
//                                   "Kadapa","Kadiri","Kakinada","Kurnool","Machilipatnam","Madanapalle","Nandyal","Narasaraopet",
//                                   "Nellore","Ongole","Palakollu","Proddatur","Rajahmundry","Srikakulam","Tadepalligudem","Tadipatri",
//                                   "Tenali","Tirupati","Vijayawada","Visakhapatnam","Vizianagaram"],
//                 "Arunachal Pradesh": ["Anjaw","Changlang","Dibang Valley","East Kameng","East Siang","Kurung Kumey","Lohit","Lower Dibang Valley",
//                                     " Lower Subansiri","Papum Pare","Tawang","Tirap","Upper Siang","Upper Subansiri","West Kameng","West Siang"],
//                 "Assam": ["Udalguri","Karimganj","Cachar", "Kamrup", "Kamrup Metro"," Karbi Anglong"," Kokrajhar","Golaghat", "Goalpara",
//                          "Chirang","Dibrugarh","Dima Hasao","Tinsukia","Darrang","Dhubri","Dhemaji","Nagaon","Nalbari","Bongaigaon","Barpeta",
//                          "Baksa","Morigaon","Jorhat","Lakhimpur","Sivasagar","sonitpur","Hailakandi" ],
//                 "Bihar": ["Patna","Gaya","Bhagalpur","Muzaffarpur", "Purnia (Purnea)","Darbhanga","Bihar (Bihar Sharif)","Ara (Arrah)","Begusarai", "Katihar","Chapra","Munger (Monghyr)",
//                           "Saharsa","Bettiah","Hajipur","Sasaram","Dehri","Siwan","Motihari","Nawada","Bagaha", "Buxar", "Sitamarhi", "Kishanganj", "Jamalpur"],
//                 "Chandigarh": ["Behlana","Chandigarh","Daria", "Khuda Alisher", "Mani Majra", "Basti Kishangarh", "Basti Bhagwanpura"],
//                 "Chhattisgarh":["Raipur","Bilaspur","Bhilai-Durg","Korba","Jagdalpur","Ambikapur","Raigarh"],
//                 "Dadra and Nagar Haveli": ["Silvassa Municipal Council","Naroli Census Town","Dadra Census Town","Samarvarni Census Town","Masat Census Town","Rakholi Census Town"],
//                 "Daman and Diu": ["Bhimpore","Dadhel","Dadra","Daman","Diu","Dunetha","Kachigam","Kadaiya","Marwad"],
//                 "Delhi": ["New Delhi","Central Delhi","East Delhi","North Delhi","North East Delhi","North West Delhi","Shahdara"," South Delhi","South East Delhi","South West Delhi","West Delhi "],
//                 "Goa": ["Bicholim","Canacona","Cuncolim","Curchorem","Mapusa","Margao","Mormugao","Panaji","Pernem","Ponda","Quepem","Sanguem","Sanquelim","Valpoi"],
//                 "Gujarat": ["Ahmedabad","Surat","Vadodara","Rajkot","Bhavnagar","Jamnagar","Junagadh","Gandhinagar","Gandhidham","Anand,Navsari","Morbi,Nadiad","Surendranagar","Bharuch","Mehsana","Bhuj","Porbandar","Palanpur","Valsad","Vapi"
//                             ,"Gondal","Veraval","Godhra","Patan","Kalol","Dahod","Botad","Amreli","Deesa","Jetpur"],
//                 "Haryana": ["Faridabad","Gurugram","Panipat","Ambala","Yamunanagar","Rohtak","Hisar","Karnal","Sonipat","Panchkula", "Bhiwani"
//                             ,"Sirsa"," Bahadurgarh","Jind","Thanesar","Kaithal","Rewari","Narnaul","Pundri","Kosli"],
//                 "Himachal Pradesh": ["Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahul & Spiti","Mandi","Shimla","Sirmaur","Solan","Una"],
//                 "Jammu and Kashmir": ["Anantnag","Badgam","Bandipore(Bandipora)","Baramula(Baramulla)","Doda","Ganderbal", "Jammu",
//                                     "Kathua","Kishtwar","Kulgam","Kupwara","Pulwama","Punch(Poonch)","Rajouri","Ramban","Reasi","Samba","Shupiyan (Shopian)","Srinagar","Udhampur"],
//                 "Jharkhand": ["Jamshedpur","Dhanbad","Ranchi","Bokaro Steel City","Deoghar","Phusro","Hazaribagh","Giridih","Ramgarh","Medininagar(Daltonganj)","Chirkunda"],
//                 "Karnataka": ["Bengaluru","Mysore","Hubli-Dharwar","Mangalore","Belgaum","Gulbarga","Davanagere", "Bellary","Bijapur","Shimoga","Tumkur","Raichur","Bidar"
//                              ,"Hospet","Hassan","Gadag-Betigeri","Udupi","Robertson Pet","Bhadravati",'Chitradurga',"Kolar","Mandya","Chikmagalur", "Gangawati","Bagalkot"],
//                 "Kerala": ["Thiruvananthapuram","Kochi","Kozhikode","Kollam","Thrissur","Alappuzha","Palakkad","Malappuram","Manjeri","Thalassery","Ponnani",
//                             "Vadakara","Kanhangad","Taliparamba","Payyanur","Koyilandy","Neyyattinkara","Beypore","Kayamkulam","Kannur","Tirur","Kottayam","Nileshwaram","Kasaragod","Kunnamkulam"],
//                 "Lakshadweep": ["Amini","Andrott","Kadmat","Kalpeni","Kavaratti","Minicoy"],
//                 "Madhya Pradesh": ["Indore","Bhopal [Bhopal]","Jabalpur","Gwalior","Ujjain","Sagar","Dewas","Satna","Ratlam","Rewa","Murwara","Singrauli","Burhanpur"
//                                 ,"Khandwa", "Morena","Bhind","Chhindwara","Guna","Shivpuri","Vidisha","Damoh","Chhatarpur","Mandsaur","Khargone","Nimach(Neemuch)"],
//                 "Maharashtra": ["Mumbai","Pune","Nagpur","Thane","Pimpri-Chinchwad","Nashik","Kalyan-Dombivli","Vasai-Virar City MC","Aurangabad","Navi Mumbai","Solapur","Mira-Bhayandar","Bhiwandi-Nizampur MC","Amravati","Nanded Waghala","Kolhapur","Ulhasnagar","Sangli-Miraj-Kupwad","Malegaon","Jalgaon","Akola","Latur","Dhule","Ahmednagar","Chandrapur","Parbhani","Ichalkaranji","Jalna",
//                                 "Ambarnath","Bhusawal","Panvel","Badlapur","Beed","Gondia","Satara","Barshi","Yavatmal","Achalpur","Osmanabad","Nandurbar","Wardha","Udgir","Hinganghat"],
//                 "Manipur": ["Bishnupur","Thoubal","Imphal East","Imphal West","Senapati","Ukhrul","Chandel","Churachandpur","Tamenglong","Jiribam","Kangpokpi(Sadar Hills)","Kakching","Tengnoupal","Kamjong","Noney","Pherzawl"],
//                 "Meghalaya": ["East Garo Hills","East Khasi Hills","Jaintia Hills","Ribhoi","South Garo Hills","West Garo Hills","West Khasi Hills"],
//                 "Mizoram": ["Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip"],
//                 "Nagaland": ["Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Peren","Phek","Tuensang","Wokha","Zunheboto"],
//                 "Odisha": ["Bhubaneswar","Cuttack","Rourkela","Berhampur","Sambalpur","Puri","Balasore","Bhadrak","Baripada"],
//                 "Puducherry": ["Karaikal district","Mahé district","Puducherry district","Yanam district"],
//                 "Punjab": ["Ludhiana","Amritsar","Jalandhar","Patiala","Bathinda","Mohali","Firozpur","Batala","Pathankot","Moga"
//                             ,"Abohar","Malerkotla","Khanna","Phagwara","Muktsar","Barnala", "Rajpura","Hoshiarpur","Kapurthala","Faridkot","Sunam"],
//                 "Rajasthan": ["Jaipur","Jodhpur","Kota","Bhiwadi","Bikaner","Udaipur","Ajmer","Bhilwara","Alwar","Sikar"
//                               ,"Bharatpur","Pali","Sri Ganganagar","Kishangarh","Baran","Dhaulpur","Tonk","Beawar","Hanumangarh"],
//                 "Sikkim": ["Gangtok","Gyalshing","Jorethang","Mangan","Namchi","Nayabazar","Rangpo","Rhenak(Rhenock)","Singtam"],
//                 "Tamil Nadu": ["Avadi","Chennai","Coimbatore","Cuddalore","Dindigul","Erode","Hosur","Kancheepuram","Karur","Kumbakonam","Madurai","Nagercoil","Salem","Sivakasi","Tambaram","Thanjavur","Thoothukkudi","Tiruchirappalli","Tirunelveli","Tiruppur","Vellore"],
//                 "Telangana": ["Adilabad","Hyderabad","Karimnagar","Khammam","Mahbubnagar","Medak","Nalgonda","Nizamabad","Rangareddy","Warangal"],
//                 "Tripura": ["Dhalai	District","North Tripura","South Tripura","West Tripura"],
//                 "Uttar Pradesh": ["Kanpur","Lucknow","Ghaziabad","agra [Agra]", "Varanasi [Benares]","Meerut","Allahabad [Allahabad]","Bareilly","Aligarh"
//                                 ,"Moradabad","Saharanpur","Gorakhpur","Noida","Firozabad","Jhansi","Muzaffarnagar","Mathura","Rampur","Shahjahanpur","Farrukhabad"
//                                 ,"Maunath Bhanjan","Hapur","Faizabad","Etawah","Mirzapur"],
//                 "Uttarakhand": ["Dehradun","Roorkee","Haridwar","Haldwani","Rudrapur","Kashipur","Rishikesh"],
//                 "West Bengal": ["Bankura","Barddhaman(Burdwan)","Birbhum","Dakshin Dinajpur","Darjiling(Darjeeling)","Haora(Howrah)","Hugli(Hooghly)","Jalpaiguri","Koch Bihar(Cooch Behar)"
//                 ,"Kolkata","Maldah","Murshidabad","Nadia","North Twenty Four Parganas","Paschim Medinipur","Purba Medinipur","Puruliya(Purulia)","South Twenty Four Parganas", "Uttar Dinajpur"],
//     },

 
//     }
//     window.onload = function () {
//     var countySel = document.getElementById("countySel"),
//     stateSel = document.getElementById("stateSel"),
//     districtSel = document.getElementById("districtSel");
//     for (var country in stateObject) {
//     countySel.options[countySel.options.length] = new Option(country, country);
//     }
//     countySel.onchange = function () {
//     stateSel.length = 1; // remove all options bar first
//     districtSel.length = 1; // remove all options bar first
//     if (this.selectedIndex < 1) return; // done
//     for (var state in stateObject[this.value]) {
//     stateSel.options[stateSel.options.length] = new Option(state, state);
//     }
//     }
//     countySel.onchange(); // reset in case page is reloaded
//     stateSel.onchange = function () {
//     districtSel.length = 1; // remove all options bar first
//     if (this.selectedIndex < 1) return; // done
//     var district = stateObject[countySel.value][this.value];
//     for (var i = 0; i < district.length; i++) {
//     districtSel.options[districtSel.options.length] = new Option(district[i], district[i]);
//     }
//     }
//     }



    // fetch('http://162.240.56.117:5000/getcountries' , {
       
    //     method: 'GET',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     },
        
    //   }).then(function(response) {
    //         return response.json();
    //       }).then(function(data) {
    //           console.log(data);
    //           var html = '';
    //           for (var i = 0; i < data.countries.length; i++) {  
    //         }
    //         if (data.countries.length > 0) {
    //             html += '<option value="' + i + '">' +  data.countries[100].name + '</option>';
    //             window.localStorage.setItem('countryid' ,data.countries[100].id )
    //         }
    //         $("#countySel").append(html);
    //       }).catch(function() {
    // });

    // var id = window.localStorage.getItem('countryid')
    // fetch('http://162.240.56.117:5000/getstates/'+ id, {
       
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     },
        
    //   }).then(function(response) {
    //         return response.json();
    //       }).then(function(data) {
    //           console.log(data);
    //           var html = '';
    //           for (var i = 0; i < data.states.length; i++) {  
    //             html += '<option value="' + i + '">' +  data.states[i].name + '</option>';
    //             window.localStorage.setItem('stateid' , data.states[i].id )
    //         }
    //         $("#stateSel").append(html);
    //       }).catch(function() {
    // });


    // fetch('http://162.240.56.117:5000/getcity' , {
       
    //     method: 'GET',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     },
        
    //   }).then(function(response) {
    //         return response.json();
    //       }).then(function(data) {
    //           console.log(data);
             
    //       }).catch(function() {
    // });
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

    $(document).ready(function() {
        //-------------------------------SELECT CASCADING-------------------------//
        var selectedCountry = (selectedRegion = selectedCity = "");
     
        url =
          "http://162.240.56.117:5000/getcountries";
      
        // EXTRACT JSON DATA.
        $.getJSON(url, function(data) {
          // console.log(data);
          $.each(data.countries, function(index, value) {
            // APPEND OR INSERT DATA TO SELECT ELEMENT.
            $("#countySel").append(
              '<option value="' + value.id + value.name +'">' + value.name + "</option>"
             
            );
          });
        });
        // Country selected --> update region list .
        $("#countySel").change(function() {
          selectedCountry = this.options[this.selectedIndex].value;
          // console.log(selectedCountry);
          countryCode = $("#countySel").val();
          // Populate country select box from battuta API
          url =
            "http://162.240.56.117:5000/getstates/" + selectedCountry;
          $.getJSON(url, function(data) {
            $("#stateSel option").remove();
            $('#stateSel').append('<option value="">Please select your region</option>');
            $.each(data.states, function(index, value) {
              // APPEND OR INSERT DATA TO SELECT ELEMENT.
              $("#stateSel").append(
                '<option value="' + value.id + value.name+'">' + value.name + "</option>"
              );

            });
          });
        });
      
    

        });

      
    
jQuery("form").submit(function(e){
    e.preventDefault();  
  });
var data = JSON.parse(window.localStorage.getItem('login_data'))
var ownerid = data.userID;
var restaurantName = data.RestraName
document.getElementById('restraname').setAttribute('value', restaurantName);
document.getElementById('ownerid').setAttribute('value', ownerid);
const formdata = document.getElementById('form');

function checkCategory() {
// console.log(document.getElementById('role').value);
if(document.getElementById('role').value == "No")
{
  document.getElementById('billing').style.display = "block";
  document.getElementById('baddress').required =true; 
}
if(document.getElementById('role').value == "yes")
{
  document.getElementById('billing').style.display = "none";
  $('#baddress').val('');
  document.getElementById('baddress').required =false; 
}
}


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


function resturantForm()
{  
    jQuery.support.cors = true;
    if( formdata.checkValidity() == true)
     {
      whole_state = document.getElementById('stateSel').value;
      split_state = whole_state.split(/(\d+)/);
      whole_country = document.getElementById('countySel').value;
      split_country = whole_country.split(/(\d+)/);
      if(document.getElementById('mobiletype').value == "landline")
      {
        var mobile = document.getElementById('lnum').value
        window.localStorage.setItem('returantmobile',mobile)
      }
      if(document.getElementById('mobiletype').value == "mobile")
      {
        var mobile = document.getElementById('mnum').value
        window.localStorage.setItem('returantmobile',mobile)
      }
     const data = {
        "restaurantName": document.getElementById('restraname').value,
        "country": split_country[2],
        "State": split_state[2],
        "City": document.getElementById('city').value,
        "PinCode": document.getElementById('pincode').value,
        "address": document.getElementById('address').value,
        "extra_address" : document.getElementById('baddress').value,
        "license_Id": document.getElementById('license').value,
        "GST_Number" : document.getElementById('gstnumber').value,
        "owner_Id" : document.getElementById('ownerid').value,
        "opening_time" : document.getElementById('opening_time').value,
        "closing_time" : document.getElementById('closing_time').value,
        "phoneno" : window.localStorage.getItem("returantmobile"),
        "phone_type" : document.getElementById('mobiletype').value,
        };
        // console.log(JSON.stringify(data));
        // window.localStorage.setItem("mobile", data.phone_num);
        
       
try {

    // Options to be given as parameter
    // in fetch for making requests
    // other then GET
    const api = "http://162.240.56.117:5000/restaurant/addRestaurant";
    
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

        if(data.message == "Restaurant Added")
        {
            window.location.href = "subscription.html"
        }else
        {
            document.getElementById("messageverify").innerHTML = data.message;
        }
    })
   
} catch (e) {
    // console.log(e);
}     

$("#form").trigger('reset');
}
}