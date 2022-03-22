function Pizza (sizeP,crustP,toppingP,totalP){
    this.size = sizeP;
    this.topping = toppingP;
    this.crust = crustP;
    this.total = totalP;
}
Pizza.prototype.order = function(){
    return this.size + " " + this.topping + " " + this.crust + " " + this.total;
}
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
        var pizzaOrdered = new Pizza (size,crust,topping,total);
        $(".orderDetails").toggle();
        $("ul.checkout").append("<li>" +pizzaOrdered.order()+ "</li>");

        
})
});

