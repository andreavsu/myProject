var qtyOfBox = document.querySelectorAll(".drum").length;

for(var i=0; i<qtyOfBox; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInner = innerHTML;
        alert("got clicked")
    })
    
}