var container = document.getElementsByClassName("card-container");


firstName.focus();

var btnSend = document.querySelector("input[type='submit']");

btnSend.addEventListener("click", function (e) {
    e.preventDefault();
    var image = document.querySelector("input[name='image']");
    var firstName = document.querySelector("input[name='firstName']");
    var age = document.querySelector("input[name='age']");

    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.innerHTML = `<div class="hero">
  <h1>...</h1>
  <img src=${image.value}
                    alt="avatar">
  <h2>${firstName.value}</h2>
</div>
<div class="info">
  <div >
      <h1>${age.value}</h1>
  </div>
</div>`


    container[0].appendChild(newCard);
});

