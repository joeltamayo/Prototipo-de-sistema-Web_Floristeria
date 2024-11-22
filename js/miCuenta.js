document.querySelectorAll('.accordion').forEach((accordion) => {
    accordion.addEventListener('click', function() {
        // Alterna la clase 'active' para la animación del icono y apertura/cierre del panel
        this.classList.toggle('active');
        
        // Obtiene el panel relacionado
        const panel = this.nextElementSibling;
        
        // Controla la apertura/cierre del panel
        if (panel.classList.contains('open')) {
            panel.classList.remove('open');
        } else {
            panel.classList.add('open');
        }
    });
});
