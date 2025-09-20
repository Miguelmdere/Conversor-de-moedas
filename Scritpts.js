const USD = 5.37
const EUR = 6.34
const GBP = 7.37  


const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

amount.addEventListener("input", () =>{

  const hasCharactersRegex = /\D+,[. ,]+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")

  console.log(amount.value)
})

form.onsubmit = (e) => {
  e.preventDefault()

  switch(currency.value){
    case "USD":
      convert(amount.value, USD, "US$")
      break
    case "EUR":
      convert(amount.value, EUR, "€")
      break
    case "GBP":
      convert(amount.value, GBP, "£")
      break
    default:
      alert("Selecione uma moeda")
      break
  }

}
function convert(amount, price, symbol){
  try{
      
    description.textContent = `${symbol} 1 = ${price}`
      footer.classList.add("show-result")

      function calculate(amount){

      if(currency.value == "USD"){
         amount = amount * USD
         result.textContent = `${amount} Reais`
        }else if(currency.value == "EUR"){
          amount = amount * EUR
          result.textContent = `${amount} Reais`
        }else if(currency.value == "GBP"){
         amount = amount * GBP
         result.textContent = `${amount} Reais`
        }else{
          alert("Selecione uma moeda")
        }
        result.textContent = formatCurrency(amount)
      }
    calculate(amount)
    

  }catch(error){
    console.log(error)

    footer.classList.remove("show-result")
    alert("Ocorreu um erro ao converter a moeda, Tente novamente mais tarde!!!")

  }
}


function formatCurrency(value){
  return Number(value).toLocaleString('pt-BR', {
    style: 'currency', 
    currency: 'BRL'})
}
