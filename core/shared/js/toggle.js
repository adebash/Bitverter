const saved_header_state = sessionStorage.getItem('header_state');
const header = document.getElementById('header');

const toggle_element = (element, to_rem, to_add) => {
  if ( element && element.classList.contains(to_rem)) {
    element.classList.replace(to_rem, to_add);

    header.classList.replace('undropped', 'dropped');
    sessionStorage.setItem('header_state', to_add);
  } else {
    element.classList.replace(to_add, to_rem);

    header.classList.replace('dropped', 'undropped');
    sessionStorage.setItem('header_state', to_rem);
  }
}


if (saved_header_state) {
  if (saved_header_state === 'dropped') {
    toggle_element(document.getElementById('header_dropper'),'undropped', 'dropped');

    header.classList.replace('undropped', 'dropped');
  }
}

const inner_links = document.querySelectorAll('.inner_link');

inner_links.forEach(il => {
  il.addEventListener('click', () => {
    header.classList.replace('dropped', 'undropped');
    document.getElementById('header_dropper').classList.replace('dropped', 'undropped')
  })
})

document.toggle_element = toggle_element;