
const FIRST_COLUMN = 1;
const SECOND_COLUMN = 2;
const THIRD_COLUMN = 3;

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  const actions = {
    [THIRD_COLUMN]: (root, td) => {
      if (td.dataset.available === 'true') {
        root.classList.toggle('available', true);
      } else if (td.dataset.available === 'false') {
        root.classList.toggle('unavailable', true);
      } else if (!td.hasAttribute('data-available')) {
        root.hidden = true;
      }
    },
    [SECOND_COLUMN]: (root, td) => {
      if (td.textContent === 'm') {
        root.classList.toggle('male', true);
      } else if (td.textContent === 'f') {
        root.classList.toggle('female', true);
      }
    },
    [FIRST_COLUMN]: (root, td) => {
      const age = parseInt(td.textContent, 10);

      if (age < 18) {
        root.style.textDecoration = 'line-through';
      }
    },
  };

  for (const tr of table.rows) {
    Array.from(tr.cells).forEach((td, index) => {
      const fn = actions[index];

      if (typeof fn === 'function') {
        fn(tr, td);
      }
    });
  }
}








// /**
//  * Метод устанавливает необходимые по условию аттрибуты таблице
//  @param {Element} table
//  */
// function highlight(table) {
// const trs = table.getElementsByTagName('tr');

// for (let i = 1; i < trs.length; i++) {

//   if (trs[i].cells[1].innerHTML < '18') {
//     trs[i].style.textDecoration = 'line-through';
//   }

//   if (trs[i].cells[2].innerHTML === 'm') {
//     trs[i].classList.add('male');
//   } else {
//     trs[i].classList.add('female');
//   }

//   if (trs[i].cells[3].dataset.available === 'true') {
//     trs[i].classList.add('available');
//   } else if (trs[i].cells[3].hasAttribute('data-available') === false) {
//     trs[i].setAttribute('hidden', '');
//   } else {
//     trs[i].classList.add('unavailable');
//   }
// }
// }
