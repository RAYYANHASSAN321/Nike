function add(){
    let price= +document.getElementById("price").innerHTML
    let qty= +document.getElementById("qty").value
    let total= price*qty;
    alert("your order is placed successfully"+total)
}