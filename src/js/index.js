import '../style.css';

const card = document.querySelector('.cards');
const body = document.querySelector('body');
const modal = document.getElementById('myModal');
const modalContent = document.querySelector('.content');

const baseUrl = 'https://api.tvmaze.com/search/shows?q=a';
const baseApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/E99YWL4bSNcpj6cnEjTo/comments';

const reachData = async () => {
  const getData = await fetch(baseUrl);
  const dataContent = await getData.json();
  return dataContent;
};

reachData().then((data) => data.forEach(
  (e) => {
    card.innerHTML += `
           <div class="card">
           <img src="${e.show.image.medium}" alt="">
           <div class="name-icon">
               <P class="name">${e.show.name}</P>
               <i class="far fa-heart"></i>
           </div>
           <button class="comments" id="${e.show.id}">Comments</button>
           </div>
            `;
  },
));

const getComment = async (id) => {
  const getData = await fetch(`${baseApiUrl}?item_id=${id}`);
  const dataContent = await getData.json();
  return dataContent;
};

const getCommentItems = (id) => {
  getComment(id).then((data) => {
    const commentList = document.querySelector('.comment-list');
    data.forEach((e) => {
      commentList.innerHTML += `
                <ul>
                <li>${e.username}</li>
                <li>${e.comment}</li>
                </ul>
                `;
    });
  });
};

const postItem = async (value) => {
  (await fetch(baseApiUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: value.id,
      username: value.name,
      comment: value.text,
    }),
  }));
  getCommentItems(value.id);
};

const getDataFromApi = (id) => {
  getCommentItems(id);
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
               <div>
               <input type="hidden" name="id" id="id" value="${el.show.id}">
               <div class="comment-list">
              </div>
               <div>
               <input type="text" name="name" id="name" placeholder="Name">
               <input type="text" name="commentText" id="commentText" placeholder="Comments">
               <button class="add-comments">Add Comments</button>
               </div>
          
           </div>
           </div>
           </div>
            `;
      }
    });
  });
};

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
  if (e.target.className === 'add-comments') {
    const value = { name: document.querySelector('#name').value, text: document.querySelector('#commentText').value, id: document.querySelector('#id').value };
    postItem(value);
  }
});
