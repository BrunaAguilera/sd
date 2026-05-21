/**
 * Alterna la visualización de las sub-divisiones (pestañas) dentro de una tarjeta de menú.
 * @param {string} division - El nombre de la sección (ej: 'cookies', 'brownies').
 * @param {string} subdivId - El ID del sub-divisor específico a activar.
 * @param {HTMLElement} buttonElement - El botón presionado para añadir clase activa.
 */
function switchSubdiv(division, subdivId, buttonElement) {
    // Localizar la tarjeta contenedora actual
    const card = buttonElement.closest('.division-card');
    const contents = card.querySelectorAll('.subdiv-content');
    
    // Ocultar todas las sub-secciones de esta tarjeta
    contents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Mostrar la sub-sección seleccionada
    const target = card.querySelector('#' + division + '-' + subdivId);
    if (target) {
        target.classList.add('active');
    }
    
    // Actualizar estados visuales de los botones en esta sección
    const buttons = card.querySelectorAll('.subdiv-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    buttonElement.classList.add('active');
}

/**
 * Abre la ventana emergente de Nuestra Historia
 */
function openModal() {
    document.getElementById('historyModal').style.display = 'flex';
}

/**
 * Cierra la ventana emergente de Nuestra Historia
 */
function closeModal() {
    document.getElementById('historyModal').style.display = 'none';
}

// Cierra automáticamente la ventana emergente si el usuario hace clic fuera del recuadro blanco
window.onclick = function(event) {
    const modal = document.getElementById('historyModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
