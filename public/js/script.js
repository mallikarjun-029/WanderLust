// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()



const toggleBtn = document.getElementById("switchCheckDefault");

toggleBtn.addEventListener("change", function () {
    const prices = document.querySelectorAll(".priceInfo");
    const taxes = document.querySelectorAll(".taxInfo");

    prices.forEach((price, index) => {
        const originalPrice = Number(taxes[index].dataset.price);

        if (toggleBtn.checked) {
            const total = Math.round(originalPrice * 1.18);
            price.innerHTML = `&#8377;${total.toLocaleString("en-IN")} /night`;
            taxes[index].style.display = "none";
        } else {
            price.innerHTML = `&#8377;${originalPrice.toLocaleString("en-IN")} /night`;
            taxes[index].style.display = "none";
        }

    });

});