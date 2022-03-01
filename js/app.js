const searchButton = () => {
  console.log("eertt");
  const searchText = document.getElementById("search-input").value;
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displySearchData(data.data));
  document.getElementById("search-input").value = "";
};

const displySearchData = (searchs) => {
  console.log(searchs);
  const searchFirst20 = searchs.slice(0, 20);
  const appendDiv = document.getElementById("append-div");
  if (searchFirst20.length == 0) {
    document.getElementById("error").textContent = "No phone found";
  } else {
    for (const search of searchFirst20) {
      console.log(search);
      const div = document.createElement("div");
      div.innerHTML = `

  <div class="col">
      <div class="card">
        <img src="${search.image}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${search.phone_name}</h5>
          <p class="card-text fw-bold">
            ${search.brand}
          </p>
        </div>
        <button onclick="getDEtails('${search.slug}')" class="btn btn-outline-secondary bg-primary text-white fw-bold w-75 mb-4 ms-5 border border-primary rounded-pill">Details</button>
      </div>
    </div>
  `;
      appendDiv.appendChild(div);
    }
  }
};

const getDEtails = (id) => {
  console.log(id);
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => getIdByClick(data.data));
};

const getIdByClick = (click) => {
  console.log(click); 
  const appendDiv = document.getElementById("append-id");

  const div = document.createElement("div");
  div.innerHTML = `
  <img src="${click.image}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${click.name}</h5>
          <p class="card-text fw-bold">
            ${click.releaseDate}
          </p>
        </div>
  
  `;
  appendDiv.appendChild(div);
};
