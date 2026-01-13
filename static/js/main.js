// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // MODAL DE AVISO DE PRIVACIDAD
    // ============================================
    const modal = document.getElementById("privacyModal");
    const btn = document.getElementById("acceptPrivacyBtn");
    const modalContent = document.querySelector(".privacy-modal-content");

    // Mostrar modal solo si no se ha cerrado antes en esta sesión
    if (!sessionStorage.getItem("privacyAccepted")) {
        modal.style.display = "flex";
    }

    // Al hacer clic en aceptar
    btn.addEventListener("click", function() {
        modal.style.display = "none";
        sessionStorage.setItem("privacyAccepted", "true");
    });

    // Al hacer clic fuera del modal (en el fondo oscuro)
    modal.addEventListener("click", function(e) {
        // Verificar que el clic fue en el fondo y no en el contenido del modal
        if (e.target === modal) {
            modal.style.display = "none";
            sessionStorage.setItem("privacyAccepted", "true");
        }
    });

    // Prevenir que el clic dentro del contenido del modal lo cierre
    modalContent.addEventListener("click", function(e) {
        e.stopPropagation();
    });

    
    // ============================================
    // 1. ANIMACIÓN DE SCROLL REVEAL
    // ============================================
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.reveal');
        
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 150;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    }
    
    // Ejecutar al cargar y al hacer scroll (con debounce)
    window.addEventListener('scroll', debounce(revealOnScroll, 15));
    revealOnScroll();
    
    
    // ============================================
    // 2. SMOOTH SCROLL PARA ENLACES INTERNOS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    
    // ============================================
    // 3. ANIMACIÓN DE CONTADOR PARA ESTADÍSTICAS
    // ============================================
    function animateCounter(element, target, duration = 2000) {
        let current = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = Math.round(target);
                clearInterval(timer);
            } else {
                element.textContent = Math.round(current);
            }
        }, 16);
    }
    
    // Observar elementos con clase 'counter'
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                entry.target.classList.add('counted');
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.counter').forEach(counter => {
        counterObserver.observe(counter);
    });
    
    
    // ============================================
    // 4. MOSTRAR BOTÓN "VOLVER ARRIBA"
    // ============================================
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.setAttribute('aria-label', 'Volver arriba');
    document.body.appendChild(scrollTopBtn);
    
    // Estilos del botón
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #75A39A;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 1000;
    `;
    
    // Mostrar/ocultar botón según scroll
    window.addEventListener('scroll', debounce(() => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    }, 15));
    
    // Funcionalidad del botón
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Efecto hover en el botón
    scrollTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) translateY(-5px)';
    });
    
    scrollTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0)';
    });
    
    
    // ============================================
    // 5. EFECTO TYPING EN EL TÍTULO (OPCIONAL)
    // ============================================
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Activar si existe el elemento
    const mainTitle = document.querySelector('.info-main-titulo h2');
    if (mainTitle) {
        const originalText = mainTitle.textContent;
        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('typed')) {
                    typeWriter(entry.target, originalText);
                    entry.target.classList.add('typed');
                }
            });
        }, { threshold: 0.5 });
        
        titleObserver.observe(mainTitle);
    }
    
    
    // ============================================
    // 6. LAZY LOADING DE IMÁGENES
    // ============================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});


// ============================================
// 7. FUNCIÓN DEBOUNCE PARA OPTIMIZACIÓN
// ============================================
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}