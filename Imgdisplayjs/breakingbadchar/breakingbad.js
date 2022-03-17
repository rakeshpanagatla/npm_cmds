fetch("https://www.breakingbadapi.com/api/characters")
  .then((resp) => {
    return resp.json();
  })
  .then((result) => {
    foo(result);
  })
  .catch((error) => {
    console.log(error);
  });

function foo(data) {
  let container = document.createElement("div");
  container.setAttribute("class", "container");

  let row = document.createElement("div");
  row.setAttribute("class", "row");

  data.forEach((element) => {
    let col = document.createElement("div");
    col.setAttribute("class", "col-4");

    let card = document.createElement("div");
    card.setAttribute("class", "card h-100");

    let cardImg = document.createElement("img");
    cardImg.setAttribute("class", "card-image");
    cardImg.setAttribute("src", element.img);

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    cardTitle = document.createElement("h2");
    cardTitle.setAttribute("class", "title");
    cardTitle.innerHTML = element.name;

    cardText = document.createElement("p");
    card.style.textAlign = "center";
    cardText.setAttribute("class", "card-text");
    cardText.innerHTML =
      element.nickname +
      "<br/>" +
      element.occupation[0] +
      "<br/>" +
      element.birthday;

    cardBody.append(cardTitle, cardText);
    card.append(cardImg, cardBody);
    col.append(card);
    row.append(col);
  });
  container.append(row);
  document.body.append(container);
}
