const citiesByState = {
   "Andaman & Nicobar": ["Port Blair", "South Andaman", "North and Middle Andaman"],
   "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur"],
   "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Namsai"],
   "Assam": ["Guwahati", "Silchar", "Dibrugarh"],
   "Bihar": ["Patna", "Gaya", "Bhagalpur"],
   "Chandigarh": ["Chandigarh"],
   "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur"],
   "Dadra & Nagar Haveli": ["Silvassa"],
   "Daman & Diu": ["Daman", "Diu"],
   "Delhi": ["New Delhi", "Delhi Cantonment", "Narela"],
   "Goa": ["Panaji", "Margao", "Vasco da Gama"],
   "Gujarat": ["Ahmedabad", "Surat", "Vadodara"],
   "Haryana": ["Faridabad", "Gurgaon", "Panipat"],
   "Himachal Pradesh": ["Shimla", "Mandi", "Solan"],
   "Jammu & Kashmir": ["Srinagar", "Jammu", "Anantnag"],
   "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad"],
   "Karnataka": ["Bangalore", "Mysore", "Hubli"],
   "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode"],
   "Lakshadweep": ["Kavaratti", "Agatti", "Amini"],
   "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur"],
   "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
   "Manipur": ["Imphal", "Thoubal", "Bishnupur"],
   "Meghalaya": ["Shillong", "Tura", "Jowai"],
   "Mizoram": ["Aizawl", "Lunglei", "Saiha"],
   "Nagaland": ["Kohima", "Dimapur", "Mokokchung"],
   "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela"],
   "Puducherry": ["Puducherry", "Karaikal", "Mahe"],
   "Punjab": ["Ludhiana", "Amritsar", "Jalandhar"],
   "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur"],
   "Sikkim": ["Gangtok", "Namchi", "Gyalshing"],
   "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
   "Telangana": ["Hyderabad", "Warangal", "Nizamabad"],
   "Tripura": ["Agartala", "Udaipur", "Dharmanagar"],
   "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi"],
   "Uttarakhand": ["Dehradun", "Haridwar", "Roorkee"],
   "West Bengal": ["Kolkata", "Asansol", "Siliguri"]
 };
 

// selectCity.innerHTML = '<option value="" disabled selected>Choose a city...</option>';

function citychanges(){


let selectState = document.getElementById("State");
let selectCity = document.getElementById("City");
let selectedState = selectState.value;
console.log(selectedState);


if(selectedState && citiesByState[selectedState]){
  citiesByState[selectedState].forEach(city => {
      const option = document.createElement("option");
      option.value = city;
      option.text = city;
      selectCity.appendChild(option);  
  });

}
}

document.getElementById("State").addEventListener("change", citychanges);