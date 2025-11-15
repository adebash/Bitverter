const params = document.querySelectorAll('.param');

params.forEach(param => {
  param.addEventListener('click', () => {
    params.forEach(p => {
      p.classList.remove('active');
    })
    param.classList.add('active')
  })
});


import { bytes_items_switcher } from "/bitconverter/assets/js/bytes.js";


const parameter = document.getElementById('parameter');
const converter = document.getElementById('converter');
const settings = document.getElementById('settings');

const saved_setting_state = sessionStorage.getItem('saved_setting_state');

const toggle_settings = (inner, box, source, target) => {
  if (inner || !inner) {
    box.classList.remove(source);
    box.classList.add(target);
  }

  sessionStorage.setItem('saved_setting_state', target);
}

if (saved_setting_state) {
  params.forEach(param => {
    param.classList.remove('active')
  })
  if (saved_setting_state === 'opened') {
    toggle_settings(null, settings, 'closed', 'opened');
    parameter.classList.add('active')
  } else {
    toggle_settings(null, settings, 'opened', 'closed');
    converter.classList.add('active')
  }
}

document.toggle_settings = toggle_settings;

let switcher_state = 'shown';

const saved_history_state = sessionStorage.getItem('saved_history_state')
const saved_switcher_state = sessionStorage.getItem('saved_switcher_state')

const toggle_event = (element, element_state) => {
  if (element.classList.contains('unactive')) {
    element.classList.remove('unactive');
    element.classList.add('active');

    sessionStorage.setItem(element_state, 'active')
  } else {
    element.classList.remove('active');
    element.classList.add('unactive');
    
    sessionStorage.setItem(element_state, 'unactive')
  }
  location.reload();
}

document.toggle_event = toggle_event;

const load_element_state = (saved_element_state, element) => {
  if (saved_element_state === 'active') {
    element.classList.remove('unactive');
    element.classList.add('active');

    if (bytes_items_switcher) {
      bytes_items_switcher.style.zIndex = 'inherit';
      bytes_items_switcher.style.opacity = '1';
    }
    
  } else {
    element.classList.remove('active');
    element.classList.add('unactive');

    if (bytes_items_switcher) {
      bytes_items_switcher.style.zIndex = '-1';
      bytes_items_switcher.style.opacity = '0';
    }

  }
}

load_element_state(saved_history_state, document.getElementById('history_toggler'));
load_element_state(saved_switcher_state, document.getElementById('switcher_display_b'));

const saved_user = sessionStorage.getItem('saved_user')

const set_username = document.getElementById('set_username')
const edit_username = () => {
  set_username.addEventListener('input', () => {
    document.getElementById('user_tag').textContent = set_username.value;
    sessionStorage.setItem('saved_user', set_username.value)
  })
}
edit_username()

if (saved_user) {
  document.getElementById('user_tag').textContent = saved_user;
  set_username.value = saved_user;
}

if (saved_history_state && saved_history_state === 'active') {
  console.log('Sauvegarde activee...');
} else {
  console.log('Sauvegarde desactivee...')
}

const save_conversion = () => {
  
}