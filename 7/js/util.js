// Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

//Функция получения рандомного элемента из массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

//Функция создания элемента с необходимым классом
const makeElement = (tagName, className) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  return element;
};

//Функция проверяющая нажата ли клавиша ESC
const isEscapeKey = (evt) => evt.key === 'Escape';

//Функция проверяющая нажата ли клавиша Enter
const isEnterKey = (evt) => evt.key === 'Enter';

export {getRandomInteger, getRandomArrayElement, makeElement, isEscapeKey, isEnterKey};
