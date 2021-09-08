window.onscroll = function(){
    fixarMenuNoTopo();
}
var produtos = document.getElementsByClassName("produtos");
var stick = produtos.offsetTop;
function fixarMenuNoTopo(){
    if(window.pageYOffset >= stick){
        produtos.clasList.add("stick");
    }else {
        produtos.clasList.remove("stick");
    }
}