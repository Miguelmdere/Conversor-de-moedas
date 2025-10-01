// Taxas de câmbio fixas
// Em busca de futuras APIs
const USD = 5.37
const EUR = 6.34
const GBP = 7.37  

// Selecionando elementos do DOM/FORMULÀRIO
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Adicionando evento de input ao campo de valor
amount.addEventListener("input", () =>{

  // Regex para permitir apenas números e vírgulas  
  const hasCharactersRegex = /\D+,[. ,]+/g
  // Substituindo caracteres inválidos
  amount.value = amount.value.replace(hasCharactersRegex, "")

  console.log(amount.value)
})

// capturando evento de submit do formulário

form.onsubmit = (e) => {

  // Prevenindo o comportamento padrão do formulário
  e.preventDefault()
  
  //switch para selecionar a moeda
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

// Função para converter o valor

function convert(amount, price, symbol){
  // Tratando possíveis erros com try...catch
  try{
      
    // Exibindo o resultado da conversão
    description.textContent = `${symbol} 1 = ${price}`
      footer.classList.add("show-result")

    // Função para calcular o valor convertido
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
        // Formatando o valor para o padrão brasileiro
        result.textContent = formatCurrency(amount)
      }
    calculate(amount)
    
      
  }catch(error){
    console.log(error)

    // Em caso de erro, removo a exibição do resultado e mostro um alerta
    footer.classList.remove("show-result")
    alert("Ocorreu um erro ao converter a moeda, Tente novamente mais tarde!!!")

  }
}

// Função para formatar o valor para o padrão brasileiro
function formatCurrency(value){
  return Number(value).toLocaleString('pt-BR', {
    style: 'currency', 
    currency: 'BRL'})
}
