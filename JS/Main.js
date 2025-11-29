var nameInput= document.getElementById("ProudactName");
var price= document.getElementById("ProudactPrice");
var category= document.getElementById("ProudactCategory");
var discrption= document.getElementById("ProudactDiscrption");
var image = document.getElementById("ProudactImage");
var searchInput = document.getElementById("SearchProudact");
var addBtn = document.getElementById("addBtn");
var updateBtn = document.getElementById("updateBtn");
var valid = document.getElementById("valid");
var validx = document.getElementById("validx");
var validp = document.getElementById("validp");
var validc = document.getElementById("validc");
var searchBar = document.getElementById("searchBar");

var productContainear;

if (localStorage.getItem("products") === null) {
  productContainear = [];
} else {
  productContainear = JSON.parse(localStorage.getItem("products"));
         displayProduct()
}

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 4000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});


addBtn.addEventListener("click",
function addProduct() {
  if (dontEmpty()) {
      var proudact = {
    code: nameInput.value,
    price: price.value,
    category:category.value,
    discrption: discrption.value,
    image: `image/${image.files[0].name}`,
  }
  productContainear.push(proudact);
  clearForme()
  displayProduct()
  localStorage.setItem(`products`, JSON.stringify(productContainear));

  console.log(productContainear);

Toast.fire({
  icon: "success",
  title: "تم اضافة منتج بنجاح"
});
  }
}
);



function dontEmpty() {
   let state = true;
  if (nameInput.value === "") {
    validx.classList.remove("d-none")
    state = false;
  } else {
    validx.classList.add("d-none")
    state = true;
  }
  if (price.value === "") {
    validp.classList.remove("d-none")
    state = false;
  } else {
    validp.classList.add("d-none")
    state = true;
  }
  if (category.value === "") {
    validc.classList.remove("d-none")
    state = false;
  } else {
     validc.classList.add("d-none")
     state = true;
  }
return state;
}


function clearForme() {
  nameInput.value = ""
  price.value = ""
  category.value = ""
  discrption.value = ""
  image.value = ""
}


function displayProduct() {
  var cartoona = "";
  for (let i = 0; i < productContainear.length; i++) {
    cartoona += `  <div class="z-3 col-md-2 col-sm-8 col-lg-3 mb-3">
  <div class="mx-auto proudact mt-5 border border-1 shadow-lg rounded-3 py-4 px-4">
<img src='${productContainear[i].image}' class="w-100 rounded-3 overflow-hidden" alt="">
<h5 class="text-truncate"><span class="fw-bold">Name :</span>${productContainear[ i ].code}</h5>
<h5 class="text-truncate"><span class="fw-bold">Price :</span>${productContainear[ i ].price}</h5>
<p class="text-truncate"><span class="fs-5 fw-bold">Category :</span>${productContainear[ i ].category} </p>
<p class="description text-truncate" ><span class="fw-bold">Discrption :</span>${productContainear[ i ].discrption}</p>
<div class="d-flex flex-column gap-2 mt-3">
      <button onclick="deletedProduct(${i})" type="button" class="btn btn-outline-danger">
      Delete
        <i class="fa-solid fa-trash me-2"></i>
      </button>
<button id="updateBtn" type="button" onclick="setFormForUpdate(${i});" class="btn btn-outline-warning">
  Update Product
 <i class="fa-solid fa-pen-to-square me-2"></i>
</button>
    </div>
  </div>
  </div>`
  }
  document.getElementById("rowData").innerHTML = cartoona
}


function deletedProduct(deletedIndex) {
  productContainear.splice(deletedIndex,1)
  displayProduct()
  localStorage.setItem(`products`, JSON.stringify(productContainear));
}



function SearchProudact() {
  var term = searchInput.value.toLowerCase();
  var hambozo = "";
  for (var i = 0; i < productContainear.length; i++) {
    if (productContainear[ i ].code.toLowerCase().includes(term)) {
      hambozo += `<div class="col-md-2 col-sm-8 col-lg-3 mb-3">
  <div class="mx-auto proudact mt-5 border border-2 rounded-3 shadow-lg py-2 px-1">
<img src="./Image/zoro-roronoa-one-piece-5k-io.jpg" class="w-100 rounded-3 overflow-hidden" alt="">
<h5 class="text-truncate"><span class="fw-bold">Name :</span>${productContainear[ i ].code}</h5>
<h5 class="text-truncate"><span class="fw-bold">Price :</span>${productContainear[ i ].price}</h5>
<p class="text-truncate"><span class="fs-5 fw-bold">Category :</span>${productContainear[ i ].category} </p>
<p class="description text-truncate" ><span class="fw-bold">Discrption :</span>${productContainear[ i ].discrption}</p>
<div class="d-grid gap-2 mt-3">
      <button onclick="deletedProduct(${i})" type="button" class="btn btn-outline-danger btn-sm">
      Delete
        <i class="fa-solid fa-trash me-2"></i>
      </button>
   <button id="updateBtn" type="button" onclick="setFormForUpdate(${i});" class="btn btn-outline-warning">
  Update Product
 <i class="fa-solid fa-pen-to-square me-2"></i>
</button>
    </div>
  </div>
  </div>`
    }
  }
  document.getElementById("rowData").innerHTML = hambozo;
}


//^ هنا انا خليت الاندكس جلوبل عشان اعرف استخدمو اكتر من مرة
var updateIndex;

function setFormForUpdate(i) {
  updateIndex = i;
  addBtn.classList.add("d-none")
  updateBtn.classList.remove("d-none")
  nameInput.value = productContainear[ i ].code
  price.value =productContainear[ i ].price
  category.value = productContainear[ i ].category
  discrption.value = productContainear[ i ].discrption
  image.value = productContainear[ i ].image
}

updateBtn.addEventListener("click",
  function updateProduct() {
    addBtn.classList.remove("d-none")
    updateBtn.classList.add("d-none")
    productContainear[ updateIndex ].code = nameInput.value
    productContainear[ updateIndex ].price = price.value
    productContainear[ updateIndex ].category = category.value
    productContainear[ updateIndex ].discrption = discrption.value
    displayProduct()
    clearForme()
    localStorage.setItem(`products`, JSON.stringify(productContainear));
  }
);
// function inputNameValidation() {
//   var nameRejex = /^[A-Z][a-z]{3,8}$/;

//   valid.classList.remove("d-none", "valid", "validx");

//   if (nameRejex.test(nameInput.value)) {
//     valid.classList.add("valid");
//     valid.innerHTML = "Success";
//     return true;
//   } else {
//     valid.classList.add("validx");
//     valid.innerHTML = "Error: First letter must be capital";
//     return false;
//   }
// }
