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
