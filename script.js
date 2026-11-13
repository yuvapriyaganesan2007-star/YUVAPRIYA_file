
// Get the billing toggle
const billingToggle = document.getElementById("billing-toggle");

// Get all pricing elements
const prices = document.querySelectorAll(".price");

// Listen for toggle changes
billingToggle.addEventListener("change", function () {

    const isYearly = billingToggle.checked;

    prices.forEach(function (price) {

        // Get monthly and yearly prices
        const monthlyPrice = price.dataset.monthly;
        const yearlyPrice = price.dataset.yearly;

        if (isYearly) {

            // Update to yearly price
            price.innerHTML = `₹${yearlyPrice} <span>/ year</span>`;

        } else {

            // Update to monthly price
            price.innerHTML = `₹${monthlyPrice} <span>/ month</span>`;

        }

    });

});
