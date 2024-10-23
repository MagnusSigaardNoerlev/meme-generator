// Gem url
const apiUrl = "https://api.imgflip.com/get_memes";
const memesEl = document.querySelector(".memes");

// Fetch data
fetch(apiUrl)
    .then(res => res.json())
    .then(memes => {
        console.log(memes);
        if(memes.success){
            renderMemes(memes.data.memes)
        }
    })
    .catch(err => console.log("Fejl", err));

function renderMemes(memes) {
    memes.forEach(meme => {
        memesEl.innerHTML += `
         <article class="meme">
          <h2>${meme.name}</h2>
          <img src="${meme.url}" alt="${meme.name}" />
        </article>
        `
    })
}