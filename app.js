const productList = document.querySelector(".product-container");
const cartList = document.querySelector(".cart-items");
const totalCart = document.getElementById("cart-total");

// RENDER PRODUCTS
  function renderProductItems(){
     return(productList.innerHTML = productItems.map((x)=>{
        return `
        <div class = "product">
              <img src="${x.imgSrc}">
              <div class="desc">
                  <h4>${x.name}  </h4>
                 <div class="star">
                     <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                  </div>
                  <div class="amt">
                      <h6>#${x.price}</h6>
                      <a href="#" onclick = "addToCart(${x.id})"><i class="fa-solid fa-cart-shopping"></i></a>
               </div>
              </div>
             </div>
        `
     }).join(" ")
 )};

 renderProductItems();


 let cart = JSON.parse(localStorage.getItem("Product")) || [];
updateCart();


 function addToCart(id){
    if(cart.some((item)=>item.id === id)){
        const selectedItem = cart.find((y)=> y.id===id);
    selectedItem.numberOfItems +=1;
    }
    else{
        const item = productItems.find((y)=>y.id === id);

        cart.push({
            ...item,
            numberOfItems :1,
        });
        
    }

    
    calculation();
    
    localStorage.setItem("Product", JSON.stringify(cart));
 }

 function updateCart(){
    calculation();
    renderCartItems();

    localStorage.setItem("Product", JSON.stringify(cart));
}

 function calculation(){
    let cartAmount = document.getElementById("cart-amount");

    cartAmount.innerHTML = (cart.map((x)=>x.numberOfItems).reduce((a,b)=> a+b,0));

}





