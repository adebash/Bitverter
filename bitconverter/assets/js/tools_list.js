// TOGGLE TOOLS LIST

const tools_list_state = sessionStorage.getItem('tools_list_saved_state');

const tools_list = document.getElementById('tools_list');
const open_tools_list = () => {
  tools_list.classList.replace('tools_list_closed', 'tools_list_opened');
  sessionStorage.setItem('tools_list_saved_state', 'opened')
}
const close_tools_list = () => {
  tools_list.classList.replace('tools_list_opened', 'tools_list_closed');
    sessionStorage.setItem('tools_list_saved_state','closed')
}
const toggle_tools_list = () => {
  if (tools_list.classList.contains('tools_list_closed')) {
    open_tools_list();
  } else {
    close_tools_list();
  }
}

if (tools_list_state) {
  if (tools_list_state === 'opened') {
    open_tools_list();
  } else {
    close_tools_list();
  }
} 