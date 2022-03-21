//business logic
let size = document.querySelector(".pizzaSize").value;
let crust = document.querySelector(".pizzaCrust").value;
let topping = document.querySelector(".pizzaToppings").value;
let quantity = document.querySelector(".pizzaQuantity").value;
let destination = document.querySelector(".pizzaDelivery").value;
let order = document.querySlelector(".placeOrder");

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
    })
    
})