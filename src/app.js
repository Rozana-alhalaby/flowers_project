
document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("addRegistration");
  

  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); 
  
  
      let fullName = document.getElementById("full_name").value;
      let email = document.getElementById("email").value;
      let message = document.getElementById("message").value;
  
      if (!fullName || !email || !message) {
        alert("⚠️ Please fill in all fields!");
        return;
      }
  
      let formData = { fullName, email, message };
  
      localStorage.setItem("registrationData", JSON.stringify(formData));
  // JSON.stringify(formData) converts the object into a string, since localStorage only stores strings.
      alert("✅ Your data has been saved!"); 
  
      form.reset();
    });
  });
  
