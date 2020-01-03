$(function(){
    let productName = $('#productName')
    let productManufacturer =$('#productManufacturer')
    let productPrice = $('#productPrice')
    console.log(productPrice.val())
    $('#btnProductAdd').click(function () {

        addProduct(
            productName.val(), 
            productManufacturer.val(), 
            productPrice.val(),
            function(addedProduct){
                  window.alert("Added" + addedProduct.name)
            })

    })
})
