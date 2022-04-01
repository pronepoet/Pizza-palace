// var i = 0; text;
// text = 'Please come again'
// function typing() {
//     if(i<text.length){
//         document.getElementById("text").innerHTML += text.charAt(i);
//         i++;
//         setTimeout(typing,50);
//     }
// }
// typing();




function Pizza(sizeP, crustP, toppingP, totalP) {
    this.size = sizeP;
    this.topping = toppingP;
    this.crust = crustP;
    this.total = totalP;
}
Pizza.prototype.order = function () {
    return ("Pizza Size: " + this.size) + " " + ("Pizza Toppings :" + this.topping) + " " + ("Pizza crust" + this.crust) + " " + ("TOTAL: " + this.total);
}
$(document).ready(() => {
    //sees whether a customer wants delivery 




    $(".placeOrder").click(function () {
        $(".placeOrder").hide();
        $(".deliveryButtons").show();
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

        // console.log(`your pizza will be delivered ${destination} and costs ${total} shillings`);
        var pizzaOrdered = new Pizza(size, crust, topping, total);
        $(".orderDetails").show();
        $("ul.checkout").append("<li>" + pizzaOrdered.order() + "</li>");

        // console.log(grandTotal)
        //clicks yes button for delivery option
        $(".deliveryYes").click(() => {
            $(".deliveryAmount").show();
            $(".pizzaDeliveryInput").show();
            $(".deliveryQuestion").show();

            // $(".grand h3").html(grandTotal + 200);
            grandTotal = grandTotal + 200;
            console.log(grandTotal)
            $(".grand_total").show()
            $("ul.grand_total_v").append("<li> Your total amount to be paid is KES: " + grandTotal + "</li>")
            $(".deliveryButtons").hide();
        })
        //clicks no for delivery
        $(".deliveryNo").click(() => {
            $(".deliveryAmount").hide();
            $(".pizzaDeliveryInput").hide();
            $(".deliveryQuestion").hide();
            $(".deliveryButtons").hide();
        });
        // clicks checkout button
        $(".final_checkout").click(function () {

            $(".deliveryAmount").hide();
            $(".pizzaDeliveryInput").hide();
            $(".checkout").hide();
            // $(".grand_total").hide()
            $(".deliveryQuestion").hide();
            //removes the items kwa div
            $("ul.grand_total_v li").eq(0).remove();
            $(".deliveryMessage").show();
            $(".deliveryInfo").append("<li> Your Pizza will be delivered shortly. Enjoy!</li>");
            $(".final_checkout").hide();
            $(".giphy-embed").show()
    
        })
        //refrehes the page
        $(".refresh").click(()=>{
            $("window").location.reload()
        })
    
    })


});