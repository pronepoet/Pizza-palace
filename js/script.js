$(document).ready(()=>{
    //sees whether a customer wants delivery 
    $(".deliveryYes").click(()=>{
       
        $(".deliveryAmount").show();
    })
    $(".deliveryNo").click(()=>{
        $(".deliveryAmount").hide();
    })
})