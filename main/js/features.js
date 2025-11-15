const features = [
  {
    'id': 1,
    'content': `
      <img src="/core/shared/images/switch-1-3d.png" alt="">
      <div class="info">
        <h3 data-fr="Convertisseur d'unite de stockage" data-en="Smart Unit Conversion"></h3>
        <span class="statut available" data-fr="Disponible" data-en="Available"></span>
      </div>
      <p class="desc" data-fr="Convertis facilement les unites de stockage — de bytes a terabytes — avec des resultats instantanes et un inrerface propre." data-en="Easily convert digital storage units — from bytes to terabytes — with instant accuracy and a clean interface."></p>
      <button type="button" data-fr="Faire une conversion" data-en="Make conversion"></button>
    `
  },
  {
    'id':2,
    'content': `
      <img src="/core/shared/images/switch-currency.png" alt="">
      <div class="info">
        <h3 data-fr="Convertisseur crypto & monnaie" data-en="Currency & Crypto Conversion"></h3>
        <span class="statut unavailable" data-fr="Indisponible" data-en="Unavailable"></span>
      </div>
      <p class="desc" data-fr="Convertis entre les monnaies traditionnelles et crypto-monnaies en temps reel avec les notes direct du marche." data-en="Convert between traditional currencies and cryptocurrencies in real time with live market rates."></p>
      <button type="button" disabled data-fr="Bientot disponible" data-en="Coming soon"></button>
    `
  },
  {
    'id': 3,
    'content': `
      <img src="/core/shared/images/calculator-3d.png" alt="">
      <div class="info">
        <h3 data-fr="Calculatrice de fonction" data-en="Mathematic operation calculator"></h3>
        <span class="statut unavailable" data-fr="Indisponible" data-en="Unavailable"></span>
      </div>
      <p class="desc" data-fr="Effectuez des calculs rapides dans quitter l'application — Des mathemqtiques simples aux equations de donnes." data-en="Perform quick calculations without leaving the app — from simple math to data-size equations."></p>
      <button type="button" disabled data-fr="Bientot disponible" data-en="Coming soon"></button>
    `
  }
];

const generate_element = (table, container, to_generate) => {
  let new_div = document.createElement(`${to_generate}`);
  // new_div.classList.add('');
  new_div.dataset.id= table.id;
  new_div.innerHTML = table.content;

  container.appendChild(new_div)
}

const generate_features = () => {
  document.getElementById('boxes').innerHTML = '';
  if (features.length > 0) {
    features.forEach(feature => {
      generate_element(feature, document.getElementById('boxes'), 'div')
    })
  }
}
generate_features();