
const cartlist = document.getElementById("cart-items");
const cartPage = document.getElementById("cart");
const label = document.getElementById("label");
const cartCalculation = document.getElementById("addCart");

let cart = JSON.parse(localStorage.getItem("Product")) || [];
updateCart();

// TO DISPLAY CART ITEMS IN CART TABLE

function renderCartItems(){
    if(cart.length !== 0){
    return(cartlist.innerHTML  = cart.map((x)=>{
       return `
    
           <div class = "cart-item">
               <tr>
               <td><i class="fa-solid fa-xmark" onclick ="removeItem(${x.id})"></i></td>
               <td><img src="${x.imgSrc}" alt=""></td>
             <td>${x.name}</td>
              <td>#${x.price}</td>
              <td class="addMinus">
              <button onclick = "decrement(${x.id})">-</button>
              <p>${x.numberOfItems}</p>
              <button onclick = "increment(${x.id})">+</button>
            </td>
            <td class ="subtotal">#${x.numberOfItems*x.price}</td>
           </tr>
           <div>
           
       `
    }).join(" ")
    
)}
else{
   
    cartlist.innerHTML =` `
    cartPage.innerHTML = `
                <h2>Cart Is Empty</h2>
                <p>Check Out Our Products <a href="shop.html">here</a></p>
    `
    cartCalculation.innerHTML = ``
   
}
};




function increment(id){
    const selectedItem = cart.find((y)=> y.id===id);
    selectedItem.numberOfItems +=1


    updateCart();
    renderCartItems();
}
function decrement(id){
    const selectedItem = cart.find((y)=> y.id===id);
    if (selectedItem.numberOfItems === 0)return;
    else{selectedItem.numberOfItems -=1};

cart = cart.filter((y)=>y.numberOfItems !== 0);

    updateCart();
    
}

function updateCart(){
    
    renderCartItems();
    calculation();
    totalPrice();

    localStorage.setItem("Product", JSON.stringify(cart));
}

function calculation(){
    let cartAmount = document.getElementById("cart-amount");

    cartAmount.innerHTML = (cart.map((x)=>x.numberOfItems).reduce((a,b)=> a+b,0));

 
}


function removeItem(id){
    cart = cart.filter((x)=>x.id !== id);


    calculation();
    totalPrice();
    renderCartItems();
  
    localStorage.setItem("Product", JSON.stringify(cart));

}


function totalPrice(){
    const totalCart = document.getElementById("cart-total");
    const finalCost = document.getElementById("final-cost");
    const CheckoutBtn = document.getElementById("checkBtn");

    if(cart.length !== 0){
        let totalPrice = cart.map((x)=>{
       return  x.numberOfItems * x.price
        }).reduce((a,b)=>a + b, 0);
          
        totalCart.innerHTML =`
        <td >Cart Subtotal</td>
        <td>#${totalPrice}</td>
        `

        finalCost.innerHTML =`
        <td><strong>Total</strong></td>
        <td><strong>#${totalPrice}</strong></td>
    
        `
        CheckoutBtn.innerHTML =`
        <button id="checkOut" onclick ="checkOut()">Proceed to checkout</button>
        `
     
    }
    else return;

  
}

function checkOut(){

    cart =[];

    cartPage.innerHTML = `
        <h2>Order successfully Placed!!</h2>
`
cartCalculation.innerHTML = ``

calculation();

    localStorage.setItem("Product", JSON.stringify(cart));
}