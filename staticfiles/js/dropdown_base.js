// dropdown_base.js - Manejo de dropdowns y funcionalidad responsive

document.addEventListener('DOMContentLoaded', function() {
    
    // ===========================
    // ELEMENTOS DEL DOM - DESKTOP
    // ===========================
    const toggleBusqueda = document.getElementById('toggle-busqueda');
    const formBusqueda = document.getElementById('form-dropdown-busqueda');
    const navFormSesion = document.getElementById('nav-form-sesion');
    const formSesion = document.getElementById('form-dropdown-sesion');
    const toggleMenuDesktop = document.getElementById('toggle-menu-desktop');
    const contentMenuDesktop = document.getElementById('content-menu-desktop');

    // ===========================
    // ELEMENTOS DEL DOM - MOBILE
    // ===========================
    const toggleMenu = document.getElementById('toggle-menu');
    const contentMenu = document.getElementById('content-menu');
    const mobileToggleBusqueda = document.getElementById('mobile-toggle-busqueda');
    const mobileFormBusqueda = document.getElementById('mobile-form-busqueda');
    const mobileToggleSesion = document.getElementById('mobile-toggle-sesion');
    const mobileFormSesion = document.getElementById('mobile-form-sesion');

    // ===========================
    // FUNCIONES AUXILIARES
    // ===========================
    
    // Función para cerrar todos los dropdowns desktop
    function closeAllDesktopDropdowns() {
        if (formBusqueda) formBusqueda.classList.remove('show');
        if (formSesion) formSesion.classList.remove('show');
        if (contentMenuDesktop) {
            contentMenuDesktop.classList.remove('show');
            if (toggleMenuDesktop) toggleMenuDesktop.setAttribute('aria-expanded', 'false');
        }
    }

    // Función para cerrar el menú mobile
    function closeMobileMenu() {
        if (contentMenu) {
            contentMenu.classList.remove('show');
            if (toggleMenu) toggleMenu.setAttribute('aria-expanded', 'false');
        }
    }

    // Función para cerrar todos los submenús mobile
    function closeAllMobileSubmenus() {
        if (mobileFormBusqueda) {
            mobileFormBusqueda.classList.remove('show');
            if (mobileToggleBusqueda) mobileToggleBusqueda.classList.remove('active');
        }
        if (mobileFormSesion) {
            mobileFormSesion.classList.remove('show');
            if (mobileToggleSesion) mobileToggleSesion.classList.remove('active');
        }
    }

    // ===========================
    // DESKTOP - MENÚ HAMBURGUESA
    // ===========================
    if (toggleMenuDesktop && contentMenuDesktop) {
        toggleMenuDesktop.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const isOpen = contentMenuDesktop.classList.contains('show');
            
            // Cerrar otros dropdowns
            if (formBusqueda) formBusqueda.classList.remove('show');
            if (formSesion) formSesion.classList.remove('show');
            
            // Toggle del menú desktop
            if (isOpen) {
                contentMenuDesktop.classList.remove('show');
                toggleMenuDesktop.setAttribute('aria-expanded', 'false');
            } else {
                contentMenuDesktop.classList.add('show');
                toggleMenuDesktop.setAttribute('aria-expanded', 'true');
            }
        });

        // Prevenir que clics dentro del menú lo cierren
        contentMenuDesktop.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // ===========================
    // DESKTOP - BÚSQUEDA POR FOLIO
    // ===========================
    if (toggleBusqueda && formBusqueda) {
        toggleBusqueda.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const isOpen = formBusqueda.classList.contains('show');
            
            // Cerrar otros dropdowns
            if (formSesion) formSesion.classList.remove('show');
            if (contentMenuDesktop) {
                contentMenuDesktop.classList.remove('show');
                if (toggleMenuDesktop) toggleMenuDesktop.setAttribute('aria-expanded', 'false');
            }
            
            // Toggle del formulario de búsqueda
            if (isOpen) {
                formBusqueda.classList.remove('show');
            } else {
                formBusqueda.classList.add('show');
            }
        });

        // Prevenir que clics dentro del dropdown lo cierren
        formBusqueda.addEventListener('click', function(e) {
            e.stopPropagation();
        });

        // Manejo de envío del formulario de búsqueda desktop
        const formBusquedaElement = formBusqueda.querySelector('form');
        if (formBusquedaElement) {
            formBusquedaElement.addEventListener('submit', function(e) {
                e.preventDefault();
                const folio = document.getElementById('numero-folio').value;
                
                if (folio.trim() === '') {
                    alert('Por favor, ingrese un número de folio válido.');
                    return;
                }
                
                console.log('Buscando denuncia con folio:', folio);
                alert('Buscando denuncia con folio: ' + folio);
                
                formBusqueda.classList.remove('show');
            });
        }
    }

    // ===========================
    // DESKTOP - INICIAR SESIÓN
    // ===========================
    if (navFormSesion && formSesion) {
        navFormSesion.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const isOpen = formSesion.classList.contains('show');
            
            // Cerrar otros dropdowns
            if (formBusqueda) formBusqueda.classList.remove('show');
            if (contentMenuDesktop) {
                contentMenuDesktop.classList.remove('show');
                if (toggleMenuDesktop) toggleMenuDesktop.setAttribute('aria-expanded', 'false');
            }
            
            // Toggle del formulario de sesión
            if (isOpen) {
                formSesion.classList.remove('show');
            } else {
                formSesion.classList.add('show');
            }
        });

        // Prevenir que clics dentro del dropdown lo cierren
        formSesion.addEventListener('click', function(e) {
            e.stopPropagation();
        });

        // Manejo de envío del formulario de sesión desktop
        const formSesionElement = formSesion.querySelector('form');
        if (formSesionElement) {
            formSesionElement.addEventListener('submit', function(e) {
                e.preventDefault();
                const usuario = document.getElementById('usuario').value;
                const password = document.getElementById('password').value;
                
                if (usuario.trim() === '' || password.trim() === '') {
                    alert('Por favor, complete todos los campos.');
                    return;
                }
                
                console.log('Iniciando sesión:', usuario);
                alert('Iniciando sesión para: ' + usuario);
                
                formSesion.classList.remove('show');
            });
        }
    }

    // ===========================
    // MOBILE - MENÚ HAMBURGUESA
    // ===========================
    if (toggleMenu && contentMenu) {
        toggleMenu.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const isOpen = contentMenu.classList.contains('show');
            
            // Cerrar dropdowns desktop si están abiertos
            closeAllDesktopDropdowns();
            
            // Toggle del menú mobile
            if (isOpen) {
                contentMenu.classList.remove('show');
                toggleMenu.setAttribute('aria-expanded', 'false');
            } else {
                contentMenu.classList.add('show');
                toggleMenu.setAttribute('aria-expanded', 'true');
            }
        });

        // Prevenir que clics dentro del menú lo cierren
        contentMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // ===========================
    // MOBILE - CERRAR MENÚ HAMBURGUESA
    // ===========================
    document.getElementById('close-menu-mobile')?.addEventListener('click', function() {
        const dropdown = document.getElementById('content-menu');
        const toggleBtn = document.getElementById('toggle-menu');
        
        dropdown.classList.remove('show');
        toggleBtn.setAttribute('aria-expanded', 'false');
    });

    // Cerrar menú al hacer clic en el overlay
    document.addEventListener('click', function(e) {
        const dropdown = document.getElementById('content-menu');
        const dropdownBtn = document.getElementById('toggle-menu');
        const closeBtn = document.getElementById('close-menu-mobile');
        
        if (dropdown && dropdown.classList.contains('show') && 
            !dropdown.contains(e.target) && 
            !dropdownBtn.contains(e.target)) {
            dropdown.classList.remove('show');
            dropdownBtn.setAttribute('aria-expanded', 'false');
        }
    });

    // ===========================
    // MOBILE - BÚSQUEDA POR FOLIO
    // ===========================
    if (mobileToggleBusqueda && mobileFormBusqueda) {
        mobileToggleBusqueda.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isOpen = mobileFormBusqueda.classList.contains('show');
            
            // Cerrar el otro submenú
            if (mobileFormSesion) {
                mobileFormSesion.classList.remove('show');
                if (mobileToggleSesion) mobileToggleSesion.classList.remove('active');
            }
            
            // Toggle del submenú de búsqueda
            if (isOpen) {
                mobileFormBusqueda.classList.remove('show');
                mobileToggleBusqueda.classList.remove('active');
            } else {
                mobileFormBusqueda.classList.add('show');
                mobileToggleBusqueda.classList.add('active');
            }
        });

        // Manejo de envío del formulario de búsqueda mobile
        const formBusquedaMobile = mobileFormBusqueda.querySelector('form');
        if (formBusquedaMobile) {
            formBusquedaMobile.addEventListener('submit', function(e) {
                e.preventDefault();
                const folio = document.getElementById('numero-folio-mobile').value;
                
                if (folio.trim() === '') {
                    alert('Por favor, ingrese un número de folio válido.');
                    return;
                }
                
                console.log('Buscando denuncia con folio (mobile):', folio);
                alert('Buscando denuncia con folio: ' + folio);
                
                // Cerrar el menú completo después de buscar
                closeMobileMenu();
                closeAllMobileSubmenus();
            });
        }
    }

    // ===========================
    // MOBILE - INICIAR SESIÓN
    // ===========================
    if (mobileToggleSesion && mobileFormSesion) {
        mobileToggleSesion.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isOpen = mobileFormSesion.classList.contains('show');
            
            // Cerrar el otro submenú
            if (mobileFormBusqueda) {
                mobileFormBusqueda.classList.remove('show');
                if (mobileToggleBusqueda) mobileToggleBusqueda.classList.remove('active');
            }
            
            // Toggle del submenú de sesión
            if (isOpen) {
                mobileFormSesion.classList.remove('show');
                mobileToggleSesion.classList.remove('active');
            } else {
                mobileFormSesion.classList.add('show');
                mobileToggleSesion.classList.add('active');
            }
        });

        // Manejo de envío del formulario de sesión mobile
        const formSesionMobile = mobileFormSesion.querySelector('form');
        if (formSesionMobile) {
            formSesionMobile.addEventListener('submit', function(e) {
                e.preventDefault();
                const usuario = document.getElementById('usuario-mobile').value;
                const password = document.getElementById('password-mobile').value;
                
                if (usuario.trim() === '' || password.trim() === '') {
                    alert('Por favor, complete todos los campos.');
                    return;
                }
                
                console.log('Iniciando sesión (mobile):', usuario);
                alert('Iniciando sesión para: ' + usuario);
                
                // Cerrar el menú completo después de iniciar sesión
                closeMobileMenu();
                closeAllMobileSubmenus();
            });
        }
    }

    // ===========================
    // DESCRIPCIONES DINÁMICAS - DESKTOP
    // ===========================
    const descriptionBoxDesktop = document.getElementById('recursos-description-desktop');
    const descriptionTextDesktop = document.getElementById('description-text-desktop');
    const resourceLinksDesktop = document.querySelectorAll('#content-menu-desktop .menu-link[data-description]');
    const defaultDescriptionDesktop = 'Encuentra información útil sobre cómo presentar denuncias y resolver tus dudas sobre el proceso.';

    if (descriptionBoxDesktop && descriptionTextDesktop && resourceLinksDesktop.length > 0) {
        resourceLinksDesktop.forEach(link => {
            link.addEventListener('mouseenter', function() {
                const description = this.getAttribute('data-description');
                if (description) {
                    descriptionTextDesktop.textContent = description;
                    descriptionBoxDesktop.classList.add('active');
                }
            });

            link.addEventListener('mouseleave', function() {
                descriptionTextDesktop.textContent = defaultDescriptionDesktop;
                descriptionBoxDesktop.classList.remove('active');
            });
        });
    }

    // ===========================
    // DESCRIPCIONES DINÁMICAS - MOBILE
    // ===========================
    const descriptionBoxMobile = document.getElementById('recursos-description-mobile');
    const descriptionTextMobile = document.getElementById('description-text-mobile');
    const resourceLinksMobile = document.querySelectorAll('#content-menu .menu-link[data-description]');
    const defaultDescriptionMobile = 'Encuentra información útil sobre cómo presentar denuncias y resolver tus dudas sobre el proceso.';

    if (descriptionBoxMobile && descriptionTextMobile && resourceLinksMobile.length > 0) {
        resourceLinksMobile.forEach(link => {
            link.addEventListener('mouseenter', function() {
                const description = this.getAttribute('data-description');
                if (description) {
                    descriptionTextMobile.textContent = description;
                    descriptionBoxMobile.classList.add('active');
                }
            });

            link.addEventListener('mouseleave', function() {
                descriptionTextMobile.textContent = defaultDescriptionMobile;
                descriptionBoxMobile.classList.remove('active');
            });
        });
    }

    // ===========================
    // MANEJO DE LINKS DEL MENÚ
    // ===========================
    const allMenuLinks = document.querySelectorAll('.menu-link:not(button)');
    allMenuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Si es un link real (no un botón), cerrar los menús al hacer clic
            if (this.getAttribute('href') && this.getAttribute('href') !== '#') {
                closeAllDesktopDropdowns();
                closeMobileMenu();
            }
        });
    });

    // ===========================
    // CERRAR AL HACER CLIC FUERA
    // ===========================
    document.addEventListener('click', function(e) {
        // Cerrar dropdowns desktop
        if (formBusqueda && !formBusqueda.contains(e.target) && 
            toggleBusqueda && !toggleBusqueda.contains(e.target)) {
            formBusqueda.classList.remove('show');
        }

        if (formSesion && !formSesion.contains(e.target) && 
            navFormSesion && !navFormSesion.contains(e.target)) {
            formSesion.classList.remove('show');
        }

        if (contentMenuDesktop && !contentMenuDesktop.contains(e.target) && 
            toggleMenuDesktop && !toggleMenuDesktop.contains(e.target)) {
            contentMenuDesktop.classList.remove('show');
            toggleMenuDesktop.setAttribute('aria-expanded', 'false');
        }

        // Cerrar menú mobile
        if (contentMenu && !contentMenu.contains(e.target) && 
            toggleMenu && !toggleMenu.contains(e.target)) {
            closeMobileMenu();
            closeAllMobileSubmenus();
        }
    });

    // ===========================
    // CERRAR CON TECLA ESCAPE
    // ===========================
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllDesktopDropdowns();
            closeMobileMenu();
            closeAllMobileSubmenus();
        }
    });

    // ===========================
    // MANEJO DE RESIZE
    // ===========================
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Al cambiar de tamaño, cerrar todos los menús
            closeAllDesktopDropdowns();
            closeMobileMenu();
            closeAllMobileSubmenus();
        }, 250);
    });

    console.log('Sistema de navegación responsive inicializado correctamente');
});