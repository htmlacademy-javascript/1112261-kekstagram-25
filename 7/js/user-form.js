import {isEscapeKey} from './util.js';
import {REG_EXP_SPACES} from './const.js';
import {checkCountHashtags, checkUniqueHashtags, validateHashtag, validateComment} from './check-hashtags-comment.js';

const formDownloadPicture = document.querySelector('.img-upload__form');
const buttonUploadFile = document.querySelector('#upload-file');
const formEditImage = document.querySelector('.img-upload__overlay');
const buttonCloseFormEdit = document.querySelector('#upload-cancel');
const hashtagsInput = formDownloadPicture.querySelector('.text__hashtags');
const commentInput = formDownloadPicture.querySelector('.text__description');

const onFormEditEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFormEdit();
  }
};

function closeFormEdit () {
  formEditImage.classList.add('hidden');
  document.body.classList.remove('modal-open');
  removeListenerKeydownEsc();
  buttonUploadFile.value = '';
  buttonCloseFormEdit.removeEventListener('click', closeFormEdit);
}

buttonUploadFile.addEventListener('change', () => {
  formEditImage.classList.remove('hidden');
  document.body.classList.add('modal-open');
  addListenerKeydownEsc();
  buttonCloseFormEdit.addEventListener('click', closeFormEdit);
});

function addListenerKeydownEsc () {
  document.addEventListener('keydown', onFormEditEscKeydown);
}

function removeListenerKeydownEsc () {
  document.removeEventListener('keydown', onFormEditEscKeydown);
}

hashtagsInput.addEventListener('focus', removeListenerKeydownEsc);
hashtagsInput.addEventListener('blur', addListenerKeydownEsc);

commentInput.addEventListener('focus', removeListenerKeydownEsc);
commentInput.addEventListener('blur', addListenerKeydownEsc);

function checkHashtags (hashtagsString) {
  if (!hashtagsString) {
    return true;
  }
  hashtagsString = hashtagsString.replace(REG_EXP_SPACES, ' ').trim();
  const strToLowerCase = hashtagsString.toLowerCase();
  const hashtags = strToLowerCase.split(' ');
  if (checkCountHashtags(hashtags)
    && checkUniqueHashtags(hashtags)
    && validateHashtag(hashtags)) {
    return true;
  }
  return false;
}

const pristine = new Pristine(formDownloadPicture, {
  classTo: 'validate__item',
  errorTextParent: 'validate__item',
  errorTextTag: 'div',
  errorTextClass: 'form__error'
});

pristine.addValidator(hashtagsInput, checkHashtags, 'Hashtag error!');
pristine.addValidator(commentInput, validateComment, 'Не больше 140 символов!');

formDownloadPicture.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});
