
function getProductDetail() {
    //Lấy tham số từ url

    let param = new URLSearchParams(window.location.search);
    const thamSo = param.get('id');// id 

    let promise = axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${thamSo}`,
        method: 'GET',

    });

    promise.then(function (res) {
        console.log('data', res.data.content);

        let valid = -1;
        var output = '';
        for (let index in (res.data.content)) {

            if ((res.data.content)[index] !== valid) {
                let arr = res.data.content; // gán dữ liệu từ api về = arr cho nó ngắn + nhìn đỡ rối
                output +=
                    `
                    <div>
                    <div class="proItem-left">
                        <img src="${arr.image}" alt="1">
                    </div>
                    <div class="proItem-right">
                        <h2>Product name</h2>
                        <p>${arr.description}</p>
                        <h3>${arr.name}</h3>
                        <div>
                            ${arr.size}
                        </div>
                        <p>${arr.price}</p>
                        <p>Phần add to cart này a làm dc thì làm k thì em làm luôn</p>
                    </div>
        
                </div>
            `
                break;// tìm dc thì thoát ra k nó in ra 1 đống luôn
            }
        }
        document.getElementById('productsDetail').innerHTML = output;
    });

    promise.catch(function (err) {
        console.log(err);
    });
}

window.addEventListener('load', function () {
    getProductDetail();

});