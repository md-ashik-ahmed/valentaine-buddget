document.getElementById("kitkat-buy-btn").addEventListener("click", function(){
  const quantity = getInputValue("kitkat-quantity");
  const kitkatCost = quantity * 200;
 setInnerText("chocolate",kitkatCost);
 total();
})

document.getElementById("rose-buy-btn").addEventListener("click", function(){
  const quantity = getInputValue("rose-quantity");
  const roseCost = quantity * 100;
  setInnerText("rose",roseCost);
  total();
})

document.getElementById("diary-buy-btn").addEventListener("click", function(){
  const quantity = getInputValue("diary-quantity");
  const diaryCost = quantity * 100;
  setInnerText("diary",diaryCost);
  total();
})


function setInnerText(id, value){
  document.getElementById(id).innerText = value;
}

function getInputValue(id){
  const value = document.getElementById(id).value;
  return parseInt(value);
}

function stringToNumberConverter(id) {
  const element = document.getElementById(id).innerText;
  return parseFloat(element);
}
 

function total() {
  const chocolate = stringToNumberConverter("chocolate");
  const rose = stringToNumberConverter("rose");
  const diary = stringToNumberConverter("diary");
  const total = chocolate + rose + diary;
  setInnerText("total", total);
}

document.getElementById("promo-apply").addEventListener("click", function(){
  const promoCode = getInputValue("promo-code");
  if (promoCode == 101){
    const total = document.getElementById("total").innerText;
    const sum = total - parseInt(total) * 0.1;
    setInnerText("all-total", sum)
  }
  else {
    alert("wrong")
  }
})
 

