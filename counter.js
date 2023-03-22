import { Verma } from './Strings/strings.js';

export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `There are ${counter} ${Verma()}`;
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}
