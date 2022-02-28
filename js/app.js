const searchButton = () => {
  console.log("eertt");
  const text = document.getElementById("search-input");
  const searchText = text.value;
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
};
