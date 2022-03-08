// async & await

async function getJSON() {
  try {
    let resp = await fetch("https://breakingbadapi.com/api/characters");
    let data = await resp.json();
    let resp1 = await fetch(
      "https://breakingbadapi.com/api/deaths?name=" + data[0].name
    );
    let value = await resp1.json();
    console.log(value);
  } catch (error) {
    console.log(error);
  }
}

getJSON();

// Same code written using promises

fetch("https://breakingbadapi.com/api/characters")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    return fetch("https://breakingbadapi.com/api/deaths?name=" + data[0].name);
  })
  .then((resp1) => {
    return resp1.json();
  })
  .then((data1) => {
    console.log(data1);
  })
  .catch((error) => {
    console.log(error);
  });
