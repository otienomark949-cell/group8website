function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}
function sendForm(e) {
  e.preventDefault();
  document.getElementById("form-msg").innerHTML = "✅ Thank you! Your message has been sent to Group 8.";
  return false;
}
