function Pizza (sizeP,crustP,toppingP,totalP){
    this.size = sizeP;
    this.topping = toppingP;
    this.crust = crustP;
    this.total = totalP;
}
Pizza.prototype.order = function(){
    return ("Pizza Size: "+this.size) + " " + ("Pizza Toppings :"+this.topping) + " " + ("Pizza crust" + this.crust) + " " + ("TOTAL: "+this.total);
}
$(document).ready(()=>{
    //sees whether a customer wants delivery 
 



$(".placeOrder").click(function(){
        $(".final_checkout").show();
        var size = $(".pizzaSize option:selected").val();
        var crust = $(".pizzaCrust option:selected").val();
        var topping = $(".pizzaToppings option:selected").val();
        var quantity = $(".pizzaQuantity").val();
        let destination = $(".pizzaDeliveryInput").val();
        //var order = $(".placeOrder").val();
        var grandTotal = 0;
     
        var total = (parseInt(size) + parseInt(crust) + parseInt(topping)) * parseInt(quantity);
        grandTotal = grandTotal + total

        console.log(`your pizza will be delivered ${destination} and costs ${total} shillings`);
        var pizzaOrdered = new Pizza (size,crust,topping,total);
        $(".orderDetails").show();
        $("ul.checkout").append("<li>" +pizzaOrdered.order()+ "</li>");
        grandTotal = grandTotal + total
        $(".grand h3").text(grandTotal + 200);

        //clicks yes button for delivery option
        $(".deliveryYes").click(()=>{
            $(".deliveryAmount").show();
            $(".pizzaDeliveryInput").show();
            $(".deliveryQuestion").show();
            $(".grand h3").html(grandTotal + 200);

           })
           //clicks no for delivery
           $(".deliveryNo").click(()=>{
            $(".deliveryAmount").hide();
            $(".pizzaDeliveryInput").hide();
        });  
        // clicks checkout button
        $(".final_checkout").click(function(){
            $(".placeOrder").hide();
            $(".deliveryAmount").hide();
            $(".pizzaDeliveryInput").hide();

        })
})
});

