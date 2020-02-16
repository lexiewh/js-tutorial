// grab what we need
const crazyBtns = document.querySelectorAll(".btn-crazy");

// functions
function goCrazy(){

  // random number for left
  const leftOffset = Math.random() * (window.innerWidth - this.clientWidth);

  // random number for top
  const topOffset = Math.random() * (window.innerHeight - this.clientHeight);

  // apply the numbers to the button
  this.style.top = topOffset + 'px';
  this.style.left = leftOffset + 'px';
}

// event listeners
crazyBtns.forEach(button => button.addEventListener('mouseenter', goCrazy));
