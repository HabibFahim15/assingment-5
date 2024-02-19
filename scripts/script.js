function applyCoupon() {
  const couponInput = document.getElementById('coupon-id')
  const couponText = couponInput.value;
  if (couponText === "New15") {
      console.log('15% discount')

  } else if (couponText === "Couple 20") {
      console.log('20% discount')
  }
}



function seatRemain() {
  const seatRemainTotal = document.getElementById('seat-remaining');
  const seatRemain = parseInt(seatRemainTotal.textContent)
  if (seatRemain > 0) {
      seatRemainTotal.textContent = seatRemain - 1;
  }
}

function seatCount() {
  const seatText = document.getElementById("seat-count");
  const seatNumber = parseInt(seatText.textContent)
  seatText.textContent = seatNumber + 1;

}

