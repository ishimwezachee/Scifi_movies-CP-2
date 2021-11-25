import '../style.css';

const card = document.querySelector('.cards');
const body = document.querySelector('body');
const modal = document.getElementById('myModal');
const modalContent = document.querySelector('.content');


const baseUrl = 'https://api.tvmaze.com/search/shows?q=a';

const reachData = async () => {
  const getData = await fetch(baseUrl);
  const dataContent = await getData.json();
  return dataContent;
};

reachData().then((data) => data.forEach(
  (e) => {
    card.innerHTML += `
           <div class="card">
           <img src="${e.show.image.medium}" alt="image">
           <div class="name-icon">
               <P class="name">${e.show.name}</P>
               <div>
               <i id="${e.show.id}" class="far fa-heart likes"></i>
               <p><span id="${e.show.id}" class="number">0</span> likes</p>
               </div>
           </div>
           <button class="comments" id="${e.show.id}">Comments</button>
           </div>
            `;
  },
)).then(()=>{
  const likes = document.querySelectorAll('.likes');
  likes.forEach((like,index)=>{
    like.addEventListener('click',(e)=>{
      e.preventDefault();
      
    })
  });
}).then((data)=>{

})
 
const getDataFromApi = (id) => {
  reachData().then((data) => {
    data.forEach((el) => {
      if (el.show.id.toString() === id.toString()) {
        modalContent.innerHTML = `
           <div class="card">
           <img src="${el.show.image.medium}" alt="">
           <span>Summary:</span>
           <p>${el.show.summary}</p>
           <span>language:</span>
           <p>${el.show.language}</p>

           <div class="name-icon">
               <p class="name">${el.show.name}</p>
               <i class="far fa-heart"></i>
           </div>
           <button class="comments" id="${el.show.id}">Comments</button>
           </div>
            `;
      }
    });
  });
};

const addLikes = (id) => {
  reachData().then((data) => {
    data.forEach((el) => {
      if (el.show.id.toString() === id.toString()) {
        // post a likes 
        CreateLikes(id)
        // call a likes 
         getData((data)=>{
         data.forEach((val)=>{
          //  let elem = elemNumber[index]
           if(val.item_id.toString() === id.toString()){
             let elem = document.getElementById(id.toString());
            elem.parentElement.lastElementChild.firstElementChild.textContent = val.likes;
           }
         })
        });
    
      }
    });
  });
};


const CreateLikes = async (id) => {
  const data = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6AClVl2oXlI9tDJKRbp5/likes', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({"item_id":id}),
  });
  return data;
};


// get likes 
const getData = async (collaback) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6AClVl2oXlI9tDJKRbp5/likes';
  const data = await fetch(url);
  const content = await data.json();
   collaback(content)
};

window.addEventListener('load',()=>{
  getData((data)=>{
    data.forEach(element => {
      const likesCount = document.querySelectorAll('.number');
      likesCount.forEach((e)=>{
        if (e.id == element.item_id) {
          e.textContent = element.likes
        }
      })     
    });
  })
 
})

body.addEventListener('click', (e) => {
  if (e.target.className === 'comments') {
    modal.style.display = 'block';
    getDataFromApi(e.target.id);
  }
  if (e.target.className === 'close') {
    modal.style.display = 'none';
  }
  if (e.target === modal) {
    modal.style.display = 'none';
  }
  if (e.target.className === "far fa-heart likes") {
    addLikes(e.target.id)    
  }
});


