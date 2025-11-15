

  

  const body = document.body;

  let saved_theme = sessionStorage.getItem('save_theme');

  const turners = document.querySelectorAll('.theme_turner');

  const set_turner = () => {
    turners.forEach(th_turner => {
      th_turner.addEventListener('click', () => {
        turners.forEach(th_t => {
          th_t.classList.remove('active');
        })
        th_turner.classList.add('active')
      })
    })
  }
    set_turner()

  const turn_theme = (turner, current, replace) => {
    if (body.className === current) {
      body.className = replace;
    }
    sessionStorage.setItem('save_theme', replace)
  }

  window.turn_theme = turn_theme;

  const btn_light = document.getElementById('light');
  const btn_dark = document.getElementById('dark');

  const load_saved_theme = () => {
    if (saved_theme) {
      body.className = saved_theme;
      if (saved_theme === 'light') {
        btn_light.classList.add('active');
        btn_dark.classList.remove('active');
      } else {
        btn_dark.classList.add('active');
        btn_light.classList.remove('active');
      }
    }
  }

  

  if (saved_theme && btn_dark && btn_light) {
    body.className = saved_theme;
    load_saved_theme();
  }

  // to change color scheme
  // const root = document.documentElement;
  // object.addEventListener('click', () => {
  //   root.style.setProperty('var', value)
  // })

  const color_schemes = document.querySelectorAll(`.color_options button`);

  export const root = document.documentElement;
  export let saved_root_scheme, saved_root_scheme_alt, saved_scheme_id;
  saved_root_scheme = sessionStorage.getItem('saved_scheme');
  saved_root_scheme_alt = sessionStorage.getItem('saved_scheme_alt');
  saved_scheme_id = sessionStorage.getItem('saved_scheme_id');

  color_schemes.forEach(color_scheme => {
    color_scheme.addEventListener('click', () => {
      color_schemes.forEach(c_sheme => {
        c_sheme.style.background = 'transparent';
        c_sheme.classList.remove('active');
      })
      color_scheme.style.background = 'var(--primary-alt-color)';
      color_scheme.classList.add('active');
      root.style.setProperty('--primary-color', `var(${color_scheme.dataset['scheme']})`);
      root.style.setProperty('--primary-alt-color', `var(${color_scheme.dataset['schemealt']})`);

      sessionStorage.setItem('saved_scheme', color_scheme.dataset['scheme']);
      sessionStorage.setItem('saved_scheme_alt', color_scheme.dataset['schemealt']);
      sessionStorage.setItem('saved_scheme_id', color_scheme.dataset['schemeid']);
    })
  });

  export const store_scheme = () => {
    color_schemes.forEach(color_scheme => {
      color_scheme.classList.remove('active');
      color_schemes.forEach(color_scheme => {
        color_scheme.classList.remove('active');
      });
      if (saved_scheme_id === 'elegant') {
        color_schemes[0].classList.add('active')
      } else if (saved_scheme_id === 'savage') {
        color_schemes[1].classList.add('active')
      } else  if (saved_scheme_id === 'faune') {
        color_schemes[2].classList.add('active');
      }
    })
  };

  export const load_scheme = () => {
    if (saved_root_scheme && saved_root_scheme_alt) {
      root.style.setProperty('--primary-color', `var(${saved_root_scheme})`);
      root.style.setProperty('--primary-alt-color', `var(${saved_root_scheme_alt})`);
      store_scheme()
    }
  }

  load_scheme()