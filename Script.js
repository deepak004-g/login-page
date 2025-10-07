document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    if (username.value.trim() === "" || password.value.trim() === "") {
      alert("Please enter both username and password.");
      return;
    }

    if (username.value === "admin" && password.value === "1234") {
      alert("✅ Login successful! Welcome " + username.value);

    } else {
      alert("❌ Invalid username or password. Try again!");
    }

    username.value = "";
    password.value = "";
  });
});
