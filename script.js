function updateRate() 
{
    var rateval = document.getElementById("interest").value;
    document.getElementById("rate_val").innerText=rateval;
}
function answer() {
  if (g_form.getValue('amount') <= 0 || g_form.getValue('amount') == '') {
        g_form.addErrorMessage('Fields can not be empty');
        return false;
    }
  var amount_input = parseInt(document.getElementById("amount").value);
  var interest_rate = parseInt(document.getElementById("interest").value);
  var time = parseInt(document.getElementById("year").value);
  var calculated = (amount_input*(interest_rate+100)*time)/100;
  var output1 = document.getElementById("output1");
  var output2 = document.getElementById("output2");
  var output3 = document.getElementById("output3");
  var output4 = document.getElementById("output4");
  var output5 = document.getElementById("output5");
  var output6 = document.getElementById("output6");
  var output7 = document.getElementById("output7");
  var output8 = document.getElementById("output8");
  output1.innerHTML = "If you deposit ";
  output5.innerHTML = amount_input + ",";
  output2.innerHTML = "at an interest rate of ";
  output6.innerHTML = interest_rate + "%.";
  output3.innerHTML = "You will receive an amount of ";
  output7.innerHTML = calculated + ",";
  output4.innerHTML = "in the year ";
  output8.innerHTML = (2022 + time) + ".";
}
        
