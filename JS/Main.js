var nameInput= document.getElementById("ProudactName");
var price= document.getElementById("ProudactPrice");
var category= document.getElementById("ProudactCategory");
var discrption= document.getElementById("ProudactDiscrption");
var image = document.getElementById("ProudactImage");

var productContainear = [];
function addProduct() {
  var proudact = {
    code: nameInput.value,
    price: price.value,
    category:category.value,
    discrption: discrption.value,
    image: image.value,
  }
  productContainear.push(proudact);
  clearForme()
  displayProduct()
    console.log(productContainear);
      Swal.fire({
  title: "تم اضافة منتج بنجاح",
  icon: "success",
  draggable: true
        });
}


function clearForme() {
  nameInput.value = null
  price.value = null
  category.value = null
  discrption.value = null
  image.value = null
}

function displayProduct() {

  var cartoona = "";
  for (let i = 0; i < productContainear.length; i++) {
    cartoona+=`  <div class="col-md-2 ">
  <div class="mx-auto proudact mt-5 border border-2 rounded-3 shadow-lg py-2 px-1">
<img src="./Image/zoro-roronoa-one-piece-5k-io.jpg" class="w-100 rounded-3" alt="">
<h5><span>Name :</span> Iphone 13 pro max</h5>
<h5><span>Price :</span>33000</h5>
<h5><span>Category :</span> Phone</h5>
<h5><span>Discrption :</span> very good</h5>
  </div>
  </div>`
  }
  document.getElementById("rowData").innerHTML=cartoona
}
