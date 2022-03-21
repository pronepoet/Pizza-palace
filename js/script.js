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