const VISIBLE_DISTANCE = 200;
var lastPos = 0;

export const addScrollListener = () => {
  addEventListener('scroll', () => {
    revealAnimatedElements();
    revealOrHideHeader();
  });
};

export const removeScrollListener = () => {
  removeEventListener('scroll', () => {});
};

export const revealOrHideHeader = () => {
  let currPos = window.scrollY;
  //detect if scroll up or down
  let isScrollingUp = currPos - lastPos < 0;
  //get the header element
  let header: HTMLElement | null = document.getElementById('header');

  if (currPos < 100) {
    //show header
    header?.classList.remove('hide', 'show');
  } else {
    //hide header is scrolling down
    if (!isScrollingUp && !header?.classList.contains('hide')) {
      header?.classList.add('hide');
      header?.classList.remove('show');
    } else if (isScrollingUp && !header?.classList.contains('show')) {
      //show head if scrolling up
      header?.classList.add('show');
      header?.classList.remove('hide');
    }
  }

  //update lastPos
  lastPos = currPos;
};

export const revealAnimatedElements = () => {
  let elementsToReveal = document.querySelectorAll('.--reveal');

  for (let i = 0; i < elementsToReveal.length; i++) {
    let windowHeight = window.innerHeight;
    var elementTop = elementsToReveal[i].getBoundingClientRect().top;
    if (elementTop < windowHeight - VISIBLE_DISTANCE) {
      elementsToReveal[i].classList.add('active');
    }
  }
};
