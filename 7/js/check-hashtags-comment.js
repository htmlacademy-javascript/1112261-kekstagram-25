import {REG_EXP_HASHTAG, MAX_LENGTH_COUNT_HASHTAGS, MAX_LENGTH_COMMENT} from './const.js';

const checkCountHashtags =  (array) => array.length <= MAX_LENGTH_COUNT_HASHTAGS;

const checkUniqueHashtags = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    const indexUniqElement = array.indexOf(array[i], i + 1);
    if (indexUniqElement >= 0) {
      return false;
    }
  }
  return true;
};

const validateHashtag = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (!REG_EXP_HASHTAG.test(array[i])) {
      return false;
    }
  }
  return true;
};

const validateComment = (value) => value.length <= MAX_LENGTH_COMMENT;

export {checkCountHashtags, checkUniqueHashtags, validateHashtag, validateComment};
