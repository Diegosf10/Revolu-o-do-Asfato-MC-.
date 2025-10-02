












AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
        feather.replace();
         
        // Mobile menu toggle
        const mobileMenuButton = document.querySelector('button.md\\:hidden');
        const mobileMenu = document.querySelector('nav.hidden');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('block');
            mobileMenu.classList.add('absolute', 'top-20', 'left-0', 'w-full', 'bg-black', 'py-4', 'px-8');
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('block');
                }
            });
        });



    document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obter os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;

    const whatsappMessage = `Revolução do Asfalto MC%0A%0A*Nome:* ${nome}%0A*E-mail:* ${email}%0A*Telefone:* ${telefone}%0A*Serviço de Interesse:*  ${mensagem || 'Sem mensagem adicional'}`;
            
   
    
     window.open(`https://wa.me/5521999827518?text=${whatsappMessage}`, '_blank');

     // Reset form
            this.reset();
            
            // Show success message (you could implement a toast notification here)
            alert('Sua solicitação foi enviada com sucesso! Entraremos em contato em breve.');
  });

   // Initialize AOS and Feather Icons
        document.addEventListener('DOMContentLoaded', function() {
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true
            });
            feather.replace();
        });

        


       



