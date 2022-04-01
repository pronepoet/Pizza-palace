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

$(".proc").click(()=>{
    $(".carousel").slideToggle();
})


    $(".placeOrder").click(function () {
        $(".placeOrder").hide();
        $(".deliveryButtons").show();
        $(".final_checkout").show();
        var size = $(".pizzaSize option:selected").val();
        var crust = $(".pizzaCrust option:selected").val();
        var topping = $(".pizzaToppings option:selected").val();
        var quantity = $(".pizzaQuantity").val();
        let destination = $(".pizzaDeliveryInput");
        let nameOfCustomer = $(".customerName");

        // let phoneNo = $(".phoneNumber").val();
        //var order = $(".placeOrder").val();
        var grandTotal = 0;

        var total = (parseInt(size) + parseInt(crust) + parseInt(topping)) * parseInt(quantity);
        grandTotal = grandTotal + total

        // console.log(`your pizza will be delivered ${destination} and costs ${total} shillings`);
        var pizzaOrdered = new Pizza(size, crust, topping, total);


        // console.log(grandTotal)
        //clicks yes button for delivery option
        $(".deliveryYes").click(() => {
            let id = 1;
            $(".deliveryAmount").show();
            $(".pizzaDeliveryInput").show();
            $(".deliveryQuestion").show();

            // $(".grand h3").html(grandTotal + 200);
            grandTotal = grandTotal + 200;
            console.log(grandTotal)
            $(".grand_total").show()
            $("ul.grand_total_v").append("<li> Please prepare KES: " + grandTotal + "</li>")
            $(".deliveryButtons").hide();
            $(".pizzaTable").slideToggle();
            $(".pizzaTable").append("<tbody> <td>" + id + "</td> <td>" + pizzaOrdered.order() + "</td> <td>" + grandTotal + "</td></tbody>");
        })
        //clicks no for delivery
        $(".deliveryNo").click(() => {
            let id = 1;

            $(".deliveryAmount").hide();
            $(".pizzaDeliveryInput").hide();
            $(".deliveryQuestion").hide();
            $(".deliveryButtons").hide();
            $(".final_checkout").hide();
            $(".deliveryMessage").show();
            $(".grand_total").show()
            $("ul.grand_total_v").append("<li> Please prepare KES: " + grandTotal + "</li>")
            $(".deliveryInfo").append("<li> Thank you for ordering with us! Your pizza will be ready shortly.</li>");
            $(".giphy-embed").show();
            $(".pizzaTable").slideToggle();
            $(".pizzaTable").append("<tbody> <td>" + id + "</td> <td>" + pizzaOrdered.order() + "</td> <td>" + grandTotal + "</td></tbody>");
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

            $(".deliveryInfo").append("<li> " + nameOfCustomer.val() + " Your Pizza will be delivered to " + destination.val() + " shortly. Enjoy!</li>");

            $(".final_checkout").hide();
            $(".giphy-embed").show();

        });



    });


});