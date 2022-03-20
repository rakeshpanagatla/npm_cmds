const apiUrl = "https://6230f057f113bfceed5f07a3.mockapi.io/users/";
async function getData() {
  let resp = await fetch(apiUrl);
  let data = await resp.json();
  console.log(data);
  createTable(data);
}

//getData();

async function createUser() {
  try {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let resp = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({ name, email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    document.querySelector("form").reset();
    alert("user created");
    document.getElementById("tbody").innerHTML = "";
    getData();
  } catch (error) {
    console.log(error);
  }
}

function createTable(data) {
  let tBody = document.getElementById("tbody");
  data.forEach((element) => {
    tBody.innerHTML += `
    <tr>
    <td>${element.id}</td>
    <td>${element.name}</td>
    <td>${element.email}</td>
    <td><a class="text-warning" onClick="getUserById(${element.id})">Edit</a>
    <a class="text-danger" onClick="deleteUser(${element.id})">Delete</a></td>
     </tr>`;

    // Nobody uses below format like creaate element multiple times. if you do that in interview, you are done
    // let row = document.createElement("tr");

    // let td1 = document.createElement("td");
    // td1.innerHTML = element.id;
    // let td2 = document.createElement("td");
    // td2.innerHTML = element.name;
    // let td3 = document.createElement("td");
    // td3.innerHTML = element.email;

    // row.append(td1, td2, td3);
    // tBody.append(row);
  });
}

async function editUser() {
  try {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let id = document.getElementById("id").value;
    await fetch(apiUrl + id, {
      method: "PUT",
      body: JSON.stringify({ name, email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("User updated");
    document.getElementById("tbody").innerHTML = "";
    document.querySelector("form").reset();
    getData();
  } catch (error) {
    console.log(error);
  }
}

async function getUserById(id) {
  try {
    let resp = await fetch(apiUrl + id);
    let data = await resp.json();
    document.getElementById("name").value = data.name;
    document.getElementById("email").value = data.email;
    document.getElementById("id").value = data.id;
  } catch (error) {
    console.log(error);
  }
}

async function deleteUser(id) {
  try {
    await fetch(apiUrl + id, {
      method: "DELETE",
    });
    alert("user deleted");
    document.getElementById("tbody").innerHTML = "";
    getData();
  } catch (error) {
    console.log(error);
  }
}
