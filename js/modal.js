const modalWindow = document.querySelector('.big-picture');
const closeButton = modalWindow.querySelector('.cancel');
const socialCommentCount = modalWindow.querySelector('.social__comment-count');
const commentLoader = modalWindow.querySelector('.comments-loader');
const bigPicture = modalWindow.querySelector('.big-picture__img');
const likesCount = modalWindow.querySelector('.likes-count');
const commentCount = socialCommentCount.querySelector('.comments-count');
const descriptionFullPhoto = modalWindow.querySelector('.social__caption');
const commentsList = document.querySelector('.social__comments');

closeButton.addEventListener('click', () => {
  modalWindow.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    modalWindow.classList.add('hidden');
  }
});

const makeElement = (tagName, className) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  return element;
};

const createComment = () => {
  const comment = makeElement('li', 'social__comment');
  const avatar = makeElement('img', 'social__picture');
  avatar.style.width = '35';
  avatar.style.height = '35';
  comment.appendChild(avatar);
  const commentText = makeElement('p', 'social__text');
  comment.appendChild(commentText);
  return comment;
};

const showFullPhoto = (miniature, pictureElement) => {
  miniature.addEventListener('click', () => {
    modalWindow.classList.remove('hidden');
    socialCommentCount.classList.add('hidden');
    commentLoader.classList.add('hidden');
    document.body.classList.add('modal-open');
    bigPicture.querySelector('img').src = pictureElement.url;
    likesCount.textContent = pictureElement.likes;
    commentCount.textContent = pictureElement.comments.length;
    descriptionFullPhoto.textContent = pictureElement.description;
    for (let i = 0; i < pictureElement.comments.length; i++) {
      const newComment = createComment();
      newComment.querySelector('.social__picture').src = pictureElement.comments[i].avatar;
      newComment.querySelector('.social__text').textContent = pictureElement.comments[i].message;
      commentsList.appendChild(newComment);
    }
  });
};

export {showFullPhoto};
