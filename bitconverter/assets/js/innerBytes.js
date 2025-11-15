const sources_bytes_options = document.getElementById('sources_bytes_options');
const target_bytes_options = document.getElementById('target_bytes_options');

const open_bytes_options = (bytes_options) => {
  bytes_options.classList.replace('bytes_options_closed', 'bytes_options_opened');
}

const close_bytes_options = (bytes_options) => {
  bytes_options.classList.replace('bytes_options_opened', 'bytes_options_closed');
}

const toggle_bytes_options = (toggler, bytes_options) => {
  if (bytes_options.classList.contains('bytes_options_closed')) {
    open_bytes_options(bytes_options);
  } else {
    close_bytes_options(bytes_options);
    bytes_options.classList
  }
}