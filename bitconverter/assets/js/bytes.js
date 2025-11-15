
let sb, skb, smb, sgb, stb, spb, shb, szb, syb, srb, sqb;
const source_b = () => {
  sb = document.getElementById('sb');
  skb = document.getElementById('skb');
  smb = document.getElementById('smb');
  sgb = document.getElementById('sgb');
  stb = document.getElementById('stb');
  spb = document.getElementById('spb');
  shb = document.getElementById('shb');
  szb = document.getElementById('szb');
  syb = document.getElementById('syb');
  srb = document.getElementById('srb');
  sqb = document.getElementById('sqb');
}

source_b();

const table_sources_bytes = [
  sb, skb, smb, sgb, stb, spb, shb, szb, syb, srb, sqb
  ]

const attr_bytes = () => {
  if (!sb) return;
  sb.dataset['sourcesize'] = 1024 * 1;
  skb.dataset['sourcesize'] = 1024n * BigInt(sb.dataset['sourcesize']);
  smb.dataset['sourcesize'] = 1024n * BigInt(skb.dataset['sourcesize']);
  sgb.dataset['sourcesize'] = 1024n * BigInt(smb.dataset['sourcesize']);
  stb.dataset['sourcesize'] = 1024n * BigInt(sgb.dataset['sourcesize']);
  spb.dataset['sourcesize'] = 1024n * BigInt(stb.dataset['sourcesize']);
  shb.dataset['sourcesize'] = 1024n * BigInt(spb.dataset['sourcesize']);
  szb.dataset['sourcesize'] = 1024n * BigInt(shb.dataset['sourcesize']);
  syb.dataset['sourcesize'] = 1024n * BigInt(szb.dataset['sourcesize']);
  srb.dataset['sourcesize'] = 1024n * BigInt(syb.dataset['sourcesize']);
  sqb.dataset['sourcesize'] = 1024n * BigInt(srb.dataset['sourcesize']);
};

attr_bytes();

const form_from = document.getElementById('form_from');
const from_bytes = document.getElementById('from_bytes');

const table_sources = document.querySelectorAll('.source_item');

const load_from_saved_tag = sessionStorage.getItem('from_saved_tag');

const load_from_saved_size = sessionStorage.getItem('from_saved_size');

let input_bytes = 1024;
let output_bytes = 1024;


const switch_case = (item, letter, indice) => {
  let item_type = `${indice}size`;
  switch(item.dataset.sourcetag) {
    case "Bytes (B)":
      item.id = `${letter}b`;
      item.dataset[item_type] = 1024 * 1;
      break;
    case "KiloBytes (KB)":
      item.id = `${letter}kb`;
      item.dataset[item_type] = 1024n * BigInt(sb.dataset[item_type]);
      break;
    case "MegaBytes (MB)":
      item.id = `${letter}mb`;
      item.dataset[item_type] = 1024n * BigInt(skb.dataset[item_type]);
      break;
    case "GigaBytes (GB)":
      item.id = `${letter}gb`;
      item.dataset[item_type] = 1024n * BigInt(smb.dataset[item_type]);
      break;
    case "TeraBytes (TB)":
      item.id = `${letter}tb`;
      item.dataset[item_type] = 1024n * BigInt(sgb.dataset[item_type]);
      break;
    case "PetaBytes (PB)":
      item.id = `${letter}pb`;
      item.dataset[item_type] = 1024n * BigInt(stb.dataset[item_type]);
      break;
    case "HexaBytes (HB)":
      item.id = `${letter}hb`;
      item.dataset[item_type] = 1024n * BigInt(spb.dataset[item_type]);
      break;
    case "ZetaBytes (ZB)":
      item.id = `${letter}zb`;
      item.dataset[item_type] = 1024n * BigInt(shb.dataset[item_type]);
      break;
    case "YottaBytes (YB)":
      item.id = `${letter}yb`;
      item.dataset[item_type] = 1024n * BigInt(szb.dataset[item_type]);
      break;
    case "RonnaBytes (RB)":
      item.id = `${letter}rb`;
      item.dataset[item_type] = 1024n * BigInt(syb.dataset[item_type]);
      break;
    case "QuettaBytes (QB)":
      item.id = `${letter}qb`;
      item.dataset[item_type] = 1024n * BigInt(srb.dataset[item_type]);
      break;
  }
}

const set_source = () => {
  table_sources.forEach(source_item => {
    
    switch_case(source_item, 's', 'source');


    source_item.addEventListener('click', () => {
      form_from.textContent = source_item.dataset['sourcetag'];
      from_bytes.textContent = source_item.dataset['sourcetag'];

      sessionStorage.setItem('from_saved_tag', source_item.dataset['sourcetag']);

      input_bytes = Number(source_item.dataset['sourcesize']);

      set_ffsource();

      convert(input_bytes, output_bytes, ffsource);

      sessionStorage.setItem('from_saved_size', input_bytes);

      sessionStorage.setItem('to_saved_size', output_bytes);

      source_item.getAttribute('id');

      def_input_tag = source_item.dataset['sourcetag'];

      def_input_size = Number(source_item.dataset['sourcesize']);

    });
    // source_item.dataset['sourcesize'] = 1024;
  })
}
set_source()


if (load_from_saved_tag) {
  form_from.textContent = load_from_saved_tag;
  from_bytes.textContent = load_from_saved_tag;
}

if (load_from_saved_size) {
  input_bytes = load_from_saved_size;
}



























let tb, tkb, tmb, tgb, ttb, tpb, thb, tzb, tyb, trb, tqb;
const target_b = () => {
  tb = document.getElementById('tb');
  tkb = document.getElementById('tkb');
  tmb = document.getElementById('tmb');
  tgb = document.getElementById('tgb');
  ttb = document.getElementById('ttb');
  tpb = document.getElementById('tpb');
  thb = document.getElementById('thb');
  tzb = document.getElementById('tzb');
  tyb = document.getElementById('tyb');
  trb = document.getElementById('trb');
  tqb = document.getElementById('tqb');
}

target_b();

const table_targets_bytes = [
  tb, tkb, tmb, tgb, ttb, tpb, thb, tzb, tyb, trb, tqb
  ]

const attr_bytes_target = () => {
  if (!tb) return;
  tb.dataset['targetsize'] = 1024 * 1;
  tkb.dataset['targetsize'] = 1024n * BigInt(sb.dataset['sourcesize']);
  tmb.dataset['targetsize'] = 1024n * BigInt(skb.dataset['sourcesize']);
  tgb.dataset['targetsize'] = 1024n * BigInt(smb.dataset['sourcesize']);
  ttb.dataset['targetsize'] = 1024n * BigInt(sgb.dataset['sourcesize']);
  tpb.dataset['targetsize'] = 1024n * BigInt(stb.dataset['sourcesize']);
  thb.dataset['targetsize'] = 1024n * BigInt(spb.dataset['sourcesize']);
  tzb.dataset['targetsize'] = 1024n * BigInt(shb.dataset['sourcesize']);
  tyb.dataset['targetsize'] = 1024n * BigInt(szb.dataset['sourcesize']);
  trb.dataset['targetsize'] = 1024n * BigInt(syb.dataset['sourcesize']);
  tqb.dataset['targetsize'] = 1024n * BigInt(srb.dataset['sourcesize']);
};

attr_bytes_target();


const table_target = document.querySelectorAll('.target_item');
const to_bytes = document.getElementById('to_bytes');

const load_to_saved_tag = sessionStorage.getItem('to_saved_tag');

const load_to_saved_size = sessionStorage.getItem('to_saved_size');

const set_target = () => {
  table_target.forEach(target_item => {

    switch_case(target_item, 't', 'target');

    target_item.addEventListener('click', () => {
      to_bytes.textContent = target_item.dataset['targettag'];

      sessionStorage.setItem('to_saved_tag', target_item.dataset['targettag']);

      
      output_bytes = Number((target_item.dataset['targetsize']));

      set_ffsource();

      convert(input_bytes, output_bytes, ffsource);

      def_output_tag = target_item.dataset['targettag'];

      def_output_size = Number(target_item.dataset['targetsize']);

              
      sessionStorage.setItem('to_saved_size', output_bytes);
      
      sessionStorage.setItem('from_saved_size', input_bytes);
      

    }); 
  })
}
set_target();

if (load_to_saved_tag) {
  to_bytes.textContent = load_to_saved_tag;
}

if (load_to_saved_size) {
  output_bytes = load_to_saved_size;
}




const form_from_source = document.getElementById('form_from_source');

if (load_from_saved_size, load_to_saved_size, Number(form_from_source.value)) {
  convert(load_from_saved_size, load_to_saved_size, Number(form_from_source.value))
}

let ffsource;

const source_bytes = document.getElementById('source_bytes');
const target_bytes = document.getElementById('target_bytes');

// input_bytes = a;
// output_bytes = b;
// ffsource = c;

const convert = (a, b, c) => {
  if ((a < b) || (a > b)) {
    source_bytes.value = c;
    target_bytes.value = (c * a)/b;
  } else if ((a === b === c) || (b === a)) {
    source_bytes.value = c;
    target_bytes.value = c;
  } else if ((c === 0) || (c === null) || (c === '')) {
    source_bytes.value = 0;
    target_bytes.value = 0;
  } else if (to_bytes.textContent === from_bytes.textContent) {
    target_bytes.value = c;
  }
}

// input_bytes = a;
// output_bytes = b;
// ffsource = c;

const set_ffsource = () => {
  ffsource = Number(form_from_source.value);

  sessionStorage.setItem('save_ffsource', ffsource)

  if (ffsource) {
    convert(input_bytes, output_bytes, ffsource);
  }
}

const saved_ffsource = sessionStorage.getItem('save_ffsource');

form_from_source.addEventListener('input', () => {

  set_ffsource();

});

if (saved_ffsource) {
  form_from_source.value = saved_ffsource;
  
  convert(Number(load_from_saved_size), Number(load_to_saved_size), Number(saved_ffsource));

}

export const bytes_items_switcher = document.getElementById('bytes_items_switcher');

bytes_items_switcher.addEventListener('click', () => {
  switch_bytes_items()
})
const switch_bytes_items = () => {
  // Sauvegarde temporaire
  const temp_tag = def_input_tag;
  const temp_size = def_input_size;

  // Inversion logique
  def_input_tag = def_output_tag;
  def_input_size = def_output_size;

  def_output_tag = temp_tag;
  def_output_size = temp_size;

  // Mise à jour des labels
  form_from.textContent = def_input_tag;
  from_bytes.textContent = def_input_tag;

  to_bytes.textContent = def_output_tag;

  // Réassignation des bytes
  input_bytes = def_input_size;
  output_bytes = def_output_size;

  // Conversion selon la source actuelle
  if (ffsource) {
    convert(input_bytes, output_bytes, ffsource);
  } else if (saved_ffsource) {
    convert(input_bytes, output_bytes, saved_ffsource);
  } else {
    convert(input_bytes, output_bytes, 0);
  }

  // Mise à jour du stockage
  sessionStorage.setItem('from_saved_size', input_bytes);
  sessionStorage.setItem('to_saved_size', output_bytes);
  sessionStorage.setItem('from_saved_tag', def_input_tag);
  sessionStorage.setItem('to_saved_tag', def_output_tag);

};

let def_input_tag = load_from_saved_tag || 'Bytes (B)';
let def_input_size = Number(load_from_saved_size) || 1024;
let def_output_tag = load_to_saved_tag || 'Bytes (B)';
let def_output_size = Number(load_to_saved_size) || 1024;


const history_load_state = sessionStorage.getItem('saved_history_state');

const history_content = document.getElementById('history_content');

const saved_history = sessionStorage.getItem('saved_history');


import { rec_loaded_lang } from "/core/shared/js/lang.js";

const inner_msg = (msgfr, msgen) => {
  if (rec_loaded_lang !== null) {
    if (rec_loaded_lang === 'fr') {
      toast_msg(msgfr);
    } else {
      toast_msg(msgen)
    }
  } else {
    toast_msg(msgfr)
  }
}

const load_textarea = (text) => {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = 0;
  textarea.style.pointerEvents = 'none';

  document.body.appendChild(textarea);

  textarea.select();
  textarea.setSelectionRange(0, 999999);

  try {
    const done = document.execCommand('copy');
    document.body.removeChild(textarea);
    return done;
  } catch (error) {
    document.body.removeChild(textarea);
    return false;
  }
}


let  copy_element;
if (history_load_state === 'active') {
  copy_element = (input) => {

    if (input?.id === 'target_bytes') {
      const convert_text = `${source_bytes.value} ${def_input_tag} = ${target_bytes.value} ${def_output_tag}`;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(convert_text).then(() => {
        });
        inner_msg(`Contenu copie avec sauvegarde: ${convert_text}`, `Content copied with saving: ${convert_text}`);
      } else {
        // inner_msg('Impossible de copier.', `Unable to copy.`)
        load_textarea(convert_text)

        inner_msg(`Contenu copie avec sauvegarde: ${convert_text}`, `Content copied with saving: ${convert_text}`);
      }

      let new_date = new Date;

      let new_conversion = document.createElement('div');
      new_conversion.classList.add('recent_conversion');

      new_conversion.innerHTML = `
        <strong>${convert_text}</strong>
        <p>${new_date.toLocaleTimeString()}  ---  ${new_date.toLocaleDateString()}</p>
      `;
      

      history_content.appendChild(new_conversion);

      sessionStorage.setItem('saved_history', history_content.getHTML())

    } else {
      input.select();
      input.setSelectionRange(0, 99999);

      document.execCommand('copy');

      inner_msg(`Source copiee avec succes.`, `Source copied successfully.`)
    }
  }
} else {
  copy_element = (input) => {
    if (input && input?.id === 'target_bytes') {
      const convert_text = `${source_bytes.value} ${def_input_tag} = ${target_bytes.value} ${def_output_tag}`;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(convert_text).then(() => {
        });
      } else {
        load_textarea(convert_text)
        inner_msg(`Contenu copie sans sauvegarde: ${convert_text}`, `Content copied without saving: ${convert_text}`)
      }
      
    } else {
      // input.select();
      // input.setSelectionRange(0, 99999);

      // document.execCommand('copy');
      load_textarea(input.value)
      inner_msg('Source copiee avec succes.', 'Source copied successfully.')
    }
  }
}

document.copy_element = copy_element;

document.getElementById('target_copy').addEventListener('touchstart', () => {
  
})

const clear_history = () => {
  history_content.innerHTML = '';
  sessionStorage.setItem('saved_history', history_content.outerHTML);

  inner_msg('Historique efface', 'History cleared')

}

document.clear_history = clear_history;

if (saved_history) {
  history_content.innerHTML = saved_history;
}

const toast_msg = (msg) => {
  const toast = document.createElement('div');
  toast.classList.add('toast');

  toast.textContent = msg;
  toast.style.position = "fixed";
  toast.style.minWidth = '16em'; 
  toast.style.textAlign = 'center'; 
  toast.style.top = "50%";
  toast.style.left = "50%";
  toast.style.transform = "translate(-50%, -50%)";
  toast.style.background = "var(--primary-color)";
  toast.style.color = "#fff";
  toast.style.padding = "10px 20px";
  toast.style.borderRadius = "8px";
  toast.style.opacity = "0.9";
  toast.style.fontSize = "15px";
  toast.style.zIndex = '100';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}