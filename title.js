
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    const popup = document.getElementById("pop");
    popup.classList.remove("hidden");
  }, 5000);
  const claimBtn = document.getElementById("claimBtn");
  claimBtn.addEventListener("click", function() {
    alert("Voucher claimed! Enjoy your discount!");
    document.getElementById("pop").classList.add("hidden");
  });
});
