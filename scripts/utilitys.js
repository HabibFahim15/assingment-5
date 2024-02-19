let selectedSeats = [];
  let totalPrice = 0;
  const seatPrice = 550;
  const maxSeats = 4; 

  // Function to handle seat selection
  function selectSeat(seatId) {
    const seatButton = document.getElementById(seatId);
    if (!seatButton.classList.contains("selected")) {
        

      if (selectedSeats.length < maxSeats) {
        seatButton.classList.add("selected");


        const titleContainer =document.getElementById('title-container')
      
        const p = document.createElement('p')
        const seatButtonText = seatButton.innerText;
        p.innerText = seatButtonText;
        
    
    
        const divElement = document.createElement("div");
        divElement.classList.add( "flex","justify-between","text-[#03071299]", "font-semibold", "p-4");
    
            divElement.appendChild(p)
            let child1 = document.createElement("p");
            child1.textContent = "economy";
            let child2 = document.createElement("p");
            child2.textContent = "550";
    
            divElement.appendChild(p)
            divElement.appendChild(child1)
            divElement.appendChild(child2)
    
            titleContainer.appendChild(divElement)



        selectedSeats.push(seatId);
        totalPrice += seatPrice;
        updatePriceDisplay();
        seatRemain()
        seatCount()
      } else {
        alert("You can't select more than " + maxSeats + " seats.");
      }
    }
  }

  // Function to update price display
  function updatePriceDisplay() {
    document.getElementById("total-price").textContent = totalPrice;
  }

  // Add event listeners to seat buttons
  const seatButtons = document.querySelectorAll(".btn.btn-lg");
  seatButtons.forEach(button => {
    button.addEventListener("click", () => {
      selectSeat(button.id);
    });
  });

  



      // Function to handle button click to add seat price to total price
      function addSeatPrice(seatPrice) {
        var totalPriceSpan = document.getElementById("total-price");
       
        var currentTotalPrice = parseFloat(totalPriceSpan.textContent);
    
        var newTotalPrice = currentTotalPrice + seatPrice;
    
        totalPriceSpan.textContent = newTotalPrice.toFixed(2); 


        var subTotalSpan = document.getElementsById("sub-total");
        var currentSumPrice = parseFloat(subTotalSpan.textContent);
        var newSumTotalPrice = currentSumPrice + seatPrice;
        subTotalSpan.textContent = newSumTotalPrice.toFixed(2);
        
      }
    
      // Function to apply coupon code discount
      function applyCoupon() {

        var couponInput = document.getElementById("coupon-id");
        var totalPriceSpan = document.getElementById("total-price");
        var subTotalSpan = document.querySelector(".sub-total");
    
      
        var couponCode = couponInput.value.trim();
    
        
        if (couponCode === "New15") {
         
          var totalPrice = parseFloat(totalPriceSpan.textContent);
          var discountAmount = totalPrice * 0.15;
    
          
          var discountedTotalPrice = totalPrice - discountAmount;
    
          subTotalSpan.textContent = discountedTotalPrice.toFixed(2); 
        } else if(couponCode ==="Couple 20"){
         
          var totalPrice = parseFloat(totalPriceSpan.textContent);
          var discountAmount = totalPrice * 0.20;
    
         
          var discountedTotalPrice = totalPrice - discountAmount;
    
          subTotalSpan.textContent = discountedTotalPrice.toFixed(2); 

        }else {
          alert("Invalid coupon code. Please enter a valid coupon code.");
        }
    
        couponInput.value = "";
      }
