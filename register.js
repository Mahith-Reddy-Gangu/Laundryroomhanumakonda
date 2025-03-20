
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("registrationForm");
  const nitwCheck = document.getElementById("nitwCheck");
  const rollNumberRow = document.getElementById("rollNumberRow");
  const rollNumberInput = document.getElementById("rollNumber");
  const passwordInput = document.getElementById("password");
  const togglePassword = document.getElementById("togglePassword");

  nitwCheck.addEventListener("change", function() {
    if (nitwCheck.checked) {
      rollNumberRow.style.display = "table-row";
      const roll = prompt("Enter your Roll Number:");
      if (roll) {
        rollNumberInput.value = roll;
        alert("NITW Student detected! You get a 5% discount 🎉");
      } else {
        nitwCheck.checked = false;
        rollNumberRow.style.display = "none";
      }
    } else {
      rollNumberRow.style.display = "none";
      rollNumberInput.value = "";
    }
  });

  togglePassword.addEventListener("click", function() {
    passwordInput.type = (passwordInput.type === "password") ? "text" : "password";
  });

  form.addEventListener("submit", function(event) {
    const firstName = document.getElementById("firstName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = passwordInput.value;
    const age = parseInt(document.getElementById("age").value, 10);
    
    if (!firstName || !email || !password) {
      alert("Please fill in all required fields!");
      event.preventDefault();
      return;
    }
    
    if (age > 100 || age < 0) {
      alert("Please enter a valid age");
      event.preventDefault();
      return;
    }
    
    alert("Registration Successful! 🎉");
  });
});
