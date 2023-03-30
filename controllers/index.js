
//---GET---
function callAPIProducts() {
  //gọi API 
  let promise = axios({
    url: 'https://shop.cyberlearn.vn/api/Product',
    method: 'GET',
  });

  promise.then(function (res) {

    var valid = -1;
    var output = '';
    for (let index of (res.data.content)) {//res.data.content :content là thuộc tính có tên content trong data
  
      if (index !== valid) {
        output += `
        <div class=" col-12 col-md-6 col-lg-4" id="${index.id}">
        <div class="card">

          <img src="${index.image}" class="card-img-top" alt="1">

          <div class="card-body">
            <h2 class="card-title">${index.name}</h2>
            <p class="card-text">${index.shortDescription}</p>
          </div>

          <div class="card-footer">
            <span class="buy-now"><a href="../detail.html">Buy now</a></span>
            <span class="price">${index.price}$</span>
          </div>

        </div>

      </div>

        `
      }
    }

    document.getElementById('productFeature').innerHTML = output;

  });

  promise.catch(function (err) {
    console.log(err);

  });

}

window.addEventListener('load', function () {
  callAPIProducts();

});
