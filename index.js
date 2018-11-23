
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');
  const first = rankedLists[0];
  const second = rankedLists[1];

  let children = first.children
  for (let i = 0; i < children.length; i++) {
    children[i].innerHTML = parseInt(children[i].innerHTML) + n;
  }

  children = second.children
  for (let i = 0; i < children.length; i++) {
    children[i].innerHTML = parseInt(children[i].innerHTML) + n;
  }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}
