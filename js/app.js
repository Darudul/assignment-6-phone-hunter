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
  <div class='d-flex'>
  <div class='col-4 col-lg-3 g-5 mb-5' >
  <img src="${click.image}" class="card-img-top" alt="..." />
  </div>
        <div class="card-body mb-5">
          <h5 class="card-title">${click.name}</h5>
          <p class="card-text fw-bold">
            ${click.releaseDate}
          </p>
          <p class="card-text "><span class='fw-bold' > Mainfeatures Information:</span> <br>
          storage: ${click.mainFeatures.storage}<br>
          chipSet: ${click.mainFeatures.chipSet} <br>
          displaySize:  ${click.mainFeatures.displaySize} <br>
          memory:  ${click.mainFeatures.memory} <br>
          </p>

          <p class="card-text"> <span class='fw-bold' > Sensors Information:</span> <br>
            ${click.sensors}
          </p>
          <p class="card-text"> <span class='fw-bold' > Others Information:</span> <br>
            ${click.others.WLAN} <br>
            Bluetooth:  ${click.others.Bluetooth} <br>
            GPS:  ${click.others.GPS} <br>
            NFC:  ${click.others.NFC} <br>
            Radio:  ${click.others.Radio} <br>
            USB:  ${click.others.USB} <br>
            WLAN:  ${click.others.WLAN} <br>
          </p>
        </div>
        </div>
  
  `;
  appendDiv.appendChild(div);
};
