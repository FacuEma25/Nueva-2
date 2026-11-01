/**
 * El Remanso — JavaScript sin frameworks.
 * Menú responsive, barra de navegación, FAQ, reseñas y formulario.
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Navegación fija: se vuelve azul al salir de la portada.
  const header = document.querySelector('header');
  const toggle = document.querySelector('#menu-toggle');
  const menu = document.querySelector('#menu-movil');
  const updateHeader = () => header?.classList.toggle('header-scrolled', window.scrollY > 40);
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  // 2. Menú móvil. Se cierra al seleccionar una sección o al cambiar de tamaño.
  function setMenu(open) {
    if (!menu || !toggle) return;
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', String(!open));
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  }
  toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  window.addEventListener('resize', () => { if (window.innerWidth >= 1024) setMenu(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });


  // 3. Acordeón de preguntas frecuentes (una abierta a la vez).
  document.querySelectorAll('#faq button[aria-controls]').forEach(button => {
    button.addEventListener('click', () => {
      const opening = button.getAttribute('aria-expanded') !== 'true';

      document.querySelectorAll('#faq button[aria-controls]').forEach(other => {
        other.setAttribute('aria-expanded', 'false');

        const panel = document.getElementById(other.getAttribute('aria-controls'));
        panel?.setAttribute('aria-hidden', 'true');

        // Restaurar el símbolo + de las preguntas cerradas
        const verticalLine = other.querySelector('svg path[d="M12 5v14"]');
        if (verticalLine) verticalLine.style.display = '';
      });

      button.setAttribute('aria-expanded', String(opening));

      document.getElementById(button.getAttribute('aria-controls'))
        ?.setAttribute('aria-hidden', String(!opening));

      // Al abrir, ocultar la línea vertical para mostrar −
      const verticalLine = button.querySelector('svg path[d="M12 5v14"]');
      if (verticalLine) {
        verticalLine.style.display = opening ? 'none' : '';
      }
    });
  });


  // 4. Reseñas: los botones desplazan una tarjeta; en móvil se puede deslizar.
  const track = document.querySelector('#review-track');
  const scrollReviews = direction => {
    if (!track) return;
    const card = track.firstElementChild;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 32;
    track.scrollBy({ left: direction * ((card?.getBoundingClientRect().width || 380) + gap), behavior: 'smooth' });
  };
  document.querySelector('#review-prev')?.addEventListener('click', () => scrollReviews(-1));
  document.querySelector('#review-next')?.addEventListener('click', () => scrollReviews(1));


  // 5. Formulario de contacto con Web3Forms
  const form = document.querySelector('#form-contacto');
  const status = document.querySelector('#form-status');

  if (form) {
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      if (!form.reportValidity()) return;

      const fields = new FormData(form);

      const nombre = String(fields.get('nombre') || '').trim();
      const telefono = String(fields.get('telefono') || '').trim();
      const email = String(fields.get('email') || '').trim();
      const mensaje = String(fields.get('mensaje') || '').trim();

      // Reemplazar por tu clave de Web3Forms
      const ACCESS_KEY = '53b096cc-85a9-4306-a95a-247317a43689';
      // KEY ORIGINAL DE EL REMANSO: 40a86571-575c-4f73-a01b-3c2ac9de030d

      if (status) {
        status.textContent = 'Enviando tu consulta...';
      }

      if (submitButton) {
        submitButton.disabled = true;
      }

      try {
        const response = await fetch(
          'https://api.web3forms.com/submit',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              access_key: ACCESS_KEY,
              subject: `Nueva consulta desde la web — ${nombre}`,
              name: nombre,
              email: email,
              phone: telefono,
              message: mensaje,
              from_name: 'El Remanso — Web'
            })
          }
        );

        const result = await response.json();

        if (!response.ok || !result.success) {
          throw new Error('No se pudo enviar la consulta');
        }

        if (status) {
          status.textContent =
            '¡Tu consulta fue enviada correctamente! Nos comunicaremos pronto.';
        }

        form.reset();

      } catch (error) {
        console.error('Error al enviar formulario:', error);

        if (status) {
          status.textContent =
            'No pudimos enviar tu consulta. Por favor, intentá nuevamente.';
        }

      } finally {
        if (submitButton) {
          submitButton.disabled = false;
        }
      }
    });
  }

});
