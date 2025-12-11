document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navArea = document.querySelector('.nav-area');

    if (hamburger && navArea) {
        hamburger.addEventListener('click', () => {
            // Alternamos la clase 'active' en AMBOS elementos
            hamburger.classList.toggle('active'); // Esto activa la X
            navArea.classList.toggle('active');   // Esto muestra el menú
        });
    }

    // Opcional: Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active'); // Vuelve a ser hamburguesa
            navArea.classList.remove('active');   // Oculta el menú
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA DEL FORMULARIO MODAL ---
    
    const modal = document.getElementById('quoteModal');
    const closeBtn = document.getElementById('closeModal');
    const form = document.getElementById('quoteForm');
    
    // 1. ABRIR EL MODAL
    // Seleccionamos TODOS los enlaces que tengan href="#cotizar"
    const openButtons = document.querySelectorAll('a[href="#cotizar"]');
    
    openButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // Evita el salto del enlace
            modal.classList.add('active'); // Muestra el modal
        });
    });

    // 2. CERRAR EL MODAL
    function closeModal() {
        modal.classList.remove('active');
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Cerrar si se hace clic fuera del contenido (en el fondo oscuro)
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // 3. ENVÍO DEL FORMULARIO (SIMULACIÓN)
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que se recargue la página real

            // Aquí iría el código para enviar los datos a un servidor real.
            // Por ahora, simulamos el éxito:
            
            // 1. Mostrar mensaje de éxito
            alert("¡Gracias! Tu solicitud de cotización ha sido enviada con éxito. Nos pondremos en contacto contigo pronto.");
            
            // 2. Limpiar el formulario
            form.reset();
            
            // 3. Cerrar el modal automáticamente
            closeModal();
        });
    }
});