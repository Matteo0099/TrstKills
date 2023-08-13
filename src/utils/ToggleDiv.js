document.addEventListener("DOMContentLoaded", function () {
  const radioButtons = document.getElementsByName("toggler");
  const divs = document.querySelectorAll(".toHide");

  radioButtons.forEach(radioButton => {
    radioButton.addEventListener("change", function () {
      divs.forEach(div => {
        div.style.display = "none";
      });
      const selectedDiv = document.getElementById("blk-" + this.value);
      if (selectedDiv) {
        selectedDiv.style.display = "block";
      }
    });
  });
});
