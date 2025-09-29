const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});


  const stockEl = document.getElementById("divcolor");
  const cartBtn = document.getElementById("cartBtn");

  if (stockEl.textContent.trim().toLowerCase() === "stock out") {
    cartBtn.disabled = true; // disable button
    cartBtn.textContent = "Stock Out"; // change button text
    cartBtn.style.backgroundColor = "red"; // gray color to indicate disabled
    cartBtn.style.cursor = "not-allowed";
  }

//   add cart func 
function addToCart(name, price, img, soldout) {
    // Parse soldout as number
    soldout = parseInt(soldout);

    // Get existing cart
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if item exists
    let existing = cart.find(item => item.name === name);
    if (existing) {
        existing.quantity += 1;   // increment quantity
        existing.soldout = soldout; // update soldout
    } else {
        cart.push({
            name: name,
            price: price,
            img: img,
            quantity: 1,
            soldout: soldout
        });
    }

    // Save cart
    localStorage.setItem("cart", JSON.stringify(cart));

    // Show success popup
    Swal.fire({
        icon: 'success',
        title: `${name} added to cart!`,
        showConfirmButton: false,
        timer: 1500
    });
}


// Mycartpage

