//business logic
// var size = document.getElementBiId("pizzaSize").value;
// var crust = document.querySelector(".pizzaCrust").value;
// var topping = document.querySelector(".pizzaToppings").value;
// var quantity = document.querySelector(".pizzaQuantity").value;
//let destination = document.querySelector(".pizzaDeliveryInput").value;
// var order = document.querySlelector(".placeOrder");

// user interface logic
$(document).ready(()=>{
    //sees whether a customer wants delivery 
    $(".deliveryYes").click(()=>{
     $(".deliveryAmount").show();
     $(".pizzaDelivery").show();
    })
    $(".deliveryNo").click(()=>{
        $(".deliveryAmount").hide();
        $(".pizzaDelivery").hide();
    });  


$(".placeOrder").click(function(){

        var size = $(".pizzaSize option:selected").val();
        var crust = $(".pizzaCrust option:selected").val();
        var topping = $(".pizzaToppings option:selected").val();
        var quantity = $(".pizzaQuantity").val();
        let destination = $(".pizzaDeliveryInput").val();
        //var order = $(".placeOrder").val();
  
     
        var total = (parseInt(size) + parseInt(crust) + parseInt(topping)) * parseInt(quantity);
        console.log(`your pizza will be delivered ${destination} and costs ${total} shillings`);
        
        
})
});

