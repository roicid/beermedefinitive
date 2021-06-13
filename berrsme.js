var input = document.querySelector(".cityfilter")
var button = document.querySelector(".citybutton")


  function callcity() {
    var city = input.value

    fetch("https://api.openbrewerydb.org/breweries?by_city="+ city   )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        document.getElementById("beerme").innerHTML = data[5].name
        document.getElementById("beerme1").innerHTML = data[6].name
        document.getElementById("beerme2").innerHTML = data[7].name
        document.getElementById("type").innerHTML = data[5].street
        document.getElementById("type1").innerHTML = data[6].street
        document.getElementById("type2").innerHTML = data[7].street
        document.getElementById("urlbeer").innerHTML = data[5].website_url
        document.getElementById("urlbeer1").innerHTML = data[6].website_url
        document.getElementById("urlbeer2").innerHTML = data[7].website_url
        document.getElementById("urlbeer").setAttribute('href',data[5].website_url)
        document.getElementById("urlbeer1").setAttribute('href',data[6].website_url)
        document.getElementById("urlbeer2").setAttribute('href',data[7].website_url)
        console.log(data);
      }); 

  }
          

button.addEventListener("click", (event) =>{
  event.preventDefault()  // parar el efecto por defecto  del boton , 
  callcity()
} )

