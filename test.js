var inputName = document.getElementById("ProudactName");

var productContainear;
if (localStorage.getItem("proudact") == null) {
  productContainear = [];
} else {
  productContainear = JSON.parse(localStorage.getItem("proudact"))
  displayProduct()
}



function addProduct() {
  var product = {
    code:inputName.value,
  }
  productContainear.push(product)
  localStorage.setItem("proudact", JSON.stringify(productContainear))
  deletForm()
  displayProduct()
}

function deletForm() {
  inputName.value = "";
}


function displayProduct() {
  hamboozo = "";
  for (let i = 0; i < productContainear.length; i++) {
    hamboozo += `
<div class="col-md-2 col-sm-8 col-lg-3 mb-3">
  <div class="mx-auto proudact mt-5 border border-2 rounded-3 shadow-lg py-2 px-1">
<h5><span class="fw-bold">Name :</span>${productContainear[ i ].code}</h5>
<button onclick="deletProudact(${i})" class="btn btn-danger">Delete</button>
  </div>
  </div>
    `
  }
  document.getElementById("rowData").innerHTML = hamboozo;
}

function deletProudact(index) {
  productContainear.splice(index, 1)
  localStorage.setItem("proudact", JSON.stringify(productContainear))
  displayProduct()
}
