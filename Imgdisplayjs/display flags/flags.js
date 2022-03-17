fetch("https://restcountries.com/v2/all")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (result) {
    foo(result);
  })
  .catch(function (error) {
    console.log(error);
  });

function foo(data) {
  let container = document.createElement("div");
  container.setAttribute("class", "container");

  let row = document.createElement("div");
  row.setAttribute("class", "row");

  data.forEach((element) => {
    let col = document.createElement("div");
    col.setAttribute("class", "col-4 mb-3");

    let card = document.createElement("div");
    card.setAttribute("class", "card h-100");

    let cardImg = document.createElement("img");
    cardImg.setAttribute("class", "card-img-top");
    cardImg.setAttribute("src", element.flag);

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    let cardTitle = document.createElement("h2");
    cardTitle.setAttribute("class", "title");
    card.innerHTML = element.name;

    let cardText = document.createElement("p");
    cardText.setAttribute("class", "card-text");
    cardText.innerHTML =
      element.capital + "-" + element.region + "-" + element.population;

    cardBody.append(cardTitle, cardText);

    card.append(cardBody, cardImg);

    col.append(card);

    row.append(col);
  });

  container.append(row);
  document.body.append(container);
}
