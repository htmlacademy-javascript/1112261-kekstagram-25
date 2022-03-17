import {createPhotoDescriptions} from './data.js';
import {showFullPhoto} from './modal.js';

const picturesBlock = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictures = createPhotoDescriptions();
const pictureListFragment = document.createDocumentFragment();

pictures.forEach((picture) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('img').src = picture.url;
  pictureElement.querySelector('img').alt = picture.description;
  pictureElement.querySelector('.picture__likes').textContent = String(picture.likes);
  pictureElement.querySelector('.picture__comments').textContent = String(picture.comments.length);
  showFullPhoto(pictureElement, picture);
  pictureListFragment.appendChild(pictureElement);
});

picturesBlock.appendChild(pictureListFragment);
