const refs = {
  inputEl: document.querySelector('#font-size-control'),
  textEl: document.querySelector('#text'),
};

refs.inputEl.addEventListener('input', onSelectorMove);

function onSelectorMove(params) {
  // console.dir(params.currentTarget.value);
  return (refs.textEl.style.fontSize = `${params.currentTarget.value}px`);
}
