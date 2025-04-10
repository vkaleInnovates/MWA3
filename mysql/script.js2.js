document.getElementById("regForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch("register.php", {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(data => {
    if (data === "success") {
      document.getElementById("regForm").reset();
      document.getElementById("thanksMessage").style.display = "block";
    } else {
      alert("Registration failed. Try again.");
    }
  });
});
