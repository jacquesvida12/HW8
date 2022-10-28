
fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json")
  .then(response => response.json())
  .then (paintings => {
    const paintEles = document.getElementById("paintings");
    paintings.forEach(painting =>{
      const paintEle = document.createElement("tr");
      paintEle.innerHTML = 
      `<td> ${painting.name}</td>
      <td>${painting.year}</td>
      <td>${painting.artist}</td>`;
      paintEles.appendChild(paintEle);
    });

  })
  .catch(error => {
    console.log(error);
  });