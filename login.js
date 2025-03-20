
document.addEventListener("DOMContentLoaded", function() {
  const mailLogin = document.getElementById("mailLogin");
  const phoneLogin = document.getElementById("phoneLogin");
  const clearBtn = document.getElementById("clearBtn");
  
  if (mailLogin) {
    mailLogin.addEventListener("click", function() {
      alert("OTP has been sent to your email!");
    });
  }
  
  if (phoneLogin) {
    phoneLogin.addEventListener("click", function() {
      alert("OTP has been sent to your phone number!");
    });
  }
  
  if (clearBtn) {
    clearBtn.addEventListener("click", function() {
      document.getElementById("account").value = "";
      document.getElementById("password").value = "";
    });
  }
});
