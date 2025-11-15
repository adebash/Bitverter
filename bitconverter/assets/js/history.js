const history_container = document.getElementById('history_container');

const history_state = sessionStorage.getItem('history_saved_state')

let history_container_state = 'closed';

const open_history = () => {
  history_container.classList.replace('history_container_closed', 'history_container_opened');
}

const close_history = () => {
  history_container.classList.replace('history_container_opened', 'history_container_closed');
}

const toggle_history = () => {
  if (history_container_state === 'closed') {
    open_history();
    history_container_state = 'opened'
  } else {
    close_history();
    history_container_state = 'closed'
  }
  sessionStorage.setItem('history_saved_state', history_container_state)
}

if (history_state) {
  if (history_state === 'opened') {
    open_history();
  } else {
    close_history();
  }
}