

console.log(window.location.href)

function getProductDetail () {
    //Lấy tham số từ url
    var param = new URL(window.location.href);

    var thamSo =param.searchParams.get('id')



    var promise = axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${thamSo}`,
        method:'GET'
    }) 

    promise.then(function(res){
        console.log('data',res.data.content);
        //Dom đến các phần trên giao diện để append vào

    })

  

}

getProductDetail();