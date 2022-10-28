const formEle = document.querySelector("form");
formEle.addEventListener("submit", x => {
    x.preventDefault();
    const login = formEle.elements.check.value;
    fetch(`https://api.github.com/users/${login}`)
    .then(response => response.json())
    .then (userinfo => {
    //const tbl = document.createElement("table");
    const pictureEle = document.createElement("img");
      pictureEle.src = userinfo.avatar_url;
      pictureEle.style.height = "150px";
      pictureEle.style.width = "150px";
      const nameEle = document.createElement("div");
      nameEle.textContent = userinfo.name;
      nameEle.style.fontSize = "20px";
      const linkEle = document.createElement("a");
      linkEle.href = userinfo.blog;
      linkEle.textContent = linkEle.href;
      const creationEle = document.createElement("div");
      creationEle.textContent = userinfo.created_at;
      creationEle.style.fontSize = "20px";
   
      const dataEle = document.getElementById("data1");
      dataEle.innerHTML = ""; 
      //dataEle.appendChild(tbl);
      dataEle.appendChild(pictureEle);
      dataEle.appendChild(nameEle);
      dataEle.appendChild(linkEle);
      dataEle.appendChild(creationEle);
    })

})