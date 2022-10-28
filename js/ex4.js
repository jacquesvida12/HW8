document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    const x = document.querySelector("form").elements;
    const nameEle = document.createElement("div");
    nameEle.textContent = `Name: ${x[`username`].value}`;
    const mailEle = document.createElement("div");
    mailEle.textContent = `Email: ${x[`emailAddress`].value}`;
    const payEle = document.createElement("div");
    payEle.textContent = `Payment Type: ${x[`payment`].value}`;
    const promoEle = document.createElement("div");
    promoEle.textContent = `Special Promotions: ${x[`confirmation`].value}`;
    const locationEle = document.createElement("div");
    locationEle.textContent = `Located: ${x[`location`].value}`;
    
    
    const y = document.getElementById("tableplace");
    y.appendChild(nameEle);
    y.appendChild(mailEle);
    y.appendChild(payEle);
    y.appendChild(promoEle);
    y.appendChild(locationEle);
});