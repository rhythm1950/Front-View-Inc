function calculator(isIncrease, product, unit) {
    const phone = document.getElementById(product + "-amount");
    const phoneCountPlus = parseInt(phone.value);

    if (isIncrease == true) {
        phone.value = phoneCountPlus + 1;
    }
    if (isIncrease == false && phoneCountPlus > 0) {
        phone.value = phoneCountPlus - 1;
    }

    const price = document.getElementById(product + "-price");
    const phonePrice = parseFloat(price.innerText);
    price.innerText = unit * phone.value;
    const totalPhonePrice = price.innerText;

    calculateTotal();
}

function calculateTotal() {
    const phoneInput = getInputValue("phone");
    const caseInput = getInputValue("case");

    const totalPrice = (60 * phoneInput) + (20 * caseInput);
    document.getElementById("subtotal").innerText = totalPrice;

    const tax = (totalPrice * 0.1);
    document.getElementById("tax").innerText = tax;

    const grandTotal = (totalPrice + tax);
    document.getElementById("grand-total").innerText = grandTotal;
}

function getInputValue(product) {
    const input = document.getElementById(product + "-amount");
    const amount = parseFloat(input.value);
    return amount;
}