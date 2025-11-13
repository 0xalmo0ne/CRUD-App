var inputName = document.getElementById('ProudactName');
var SearchProudacts = document.getElementById("SearchProudact");

var productContainear;
if (localStorage.getItem("product") == null) {
  productContainear = [];
} else {
  productContainear = JSON.parse(localStorage.getItem("product"))
  displayProduct()
}

function addProduct() {
  var product = {
    code: inputName.value,
  }
  productContainear.push(product)
  localStorage.setItem("product", JSON.stringify(productContainear));
  displayProduct()
  clearForm()
}

function clearForm() {
  inputName.value=""
}

function displayProduct() {
  cartoona = ""
  for (let i = 0; i < productContainear.length; i++) {
    cartoona+=`<div class="col-lg-3 col-md-4 col-sm-6 col-10 mb-3">
  <div class="mx-auto proudact mt-5 border border-2 rounded-3 shadow-lg py-2 px-1">
<h5 class="text-truncate"><span class="fw-bold">Name :</span>
    ${productContainear[ i ].code}</h5>
<div class="d-grid gap-2 mt-3">
      <button onclick="deletedProduct(${i})" type="button" class="btn btn-outline-danger btn-sm">
      Delete
        <i class="fa-solid fa-trash me-2"></i>
      </button>
    </div>
  </div>`
  }
  document.getElementById("rowData").innerHTML = cartoona;
}

function deletedProduct(index) {
  productContainear.splice(index, 1)
  localStorage.setItem("product", JSON.stringify(productContainear));
  displayProduct()
}

function SearchProudact() {
  var term = SearchProudacts.value.toLowerCase();
  var hambozo = "";
  for (let i = 0; i < productContainear.length; i++) {
    if (productContainear[ i ].code.toLowerCase().includes(term)) {
      hambozo += `<div class="col-lg-3 col-md-4 col-sm-6 col-10 mx-auto mb-4 d-flex justify-content-center">
  <div class="proudact border border-2 rounded-3 shadow-lg py-3 px-2 w-100">
    <h5 class="text-truncate">
      <span class="fw-bold">Name :</span> ${productContainear[i].code}
    </h5>

    <div class="d-grid gap-2 mt-3">
      <button onclick="deletedProduct(${i})" type="button" class="btn btn-outline-danger btn-sm">
        Delete <i class="fa-solid fa-trash me-2"></i>
      </button>
    </div>
  </div>
</div>
`
    }
  }
  document.getElementById("rowData").innerHTML = hambozo;
}
