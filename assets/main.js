// Agrupa as funções para organizar o escopo
const initEasterPage = () => {
    
    // --- 1. CRONÔMETRO ---
    const targetDate = new Date("April 02, 2026 23:59:59").getTime();
    const countdownContainer = document.querySelector(".urgency-bar");

    const updateCountdown = () => {
        const now = new Date().getTime();
        const gap = targetDate - now;

        // Se o tempo acabou, para o cronômetro e exibe aviso
        if (gap <= 0) {
            if (countdownContainer) {
                countdownContainer.innerHTML = "<h2>Encomendas Encerradas!</h2>";
            }
            clearInterval(timerInterval);
            return;
        }

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const d = Math.floor(gap / day);
        const h = Math.floor((gap % day) / hour);
        const m = Math.floor((gap % hour) / minute);
        const s = Math.floor((gap % minute) / second);

        // Função auxiliar para garantir o zero à esquerda e evitar erros se o ID não existir
        const setVal = (id, val) => {
            const el = document.getElementById(id);
            if (el) el.innerText = val < 10 ? `0${val}` : val;
        };

        setVal("d", d);
        setVal("h", h);
        setVal("m", m);
        setVal("s", s);
    };

    // Inicia o timer e guarda a referência para poder pará-lo
    const timerInterval = setInterval(updateCountdown, 1000);
    updateCountdown();

    // --- 2. FAQ ACCORDION ---
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            const answer = faqItem.querySelector('.faq-answer');
            const isOpen = faqItem.classList.contains('active');
            
            // Fecha todos os itens abertos (opcional, para efeito sanfona)
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-answer').style.maxHeight = null;
            });

            // Se o item clicado não estava aberto, abre-o
            if (!isOpen) {
                faqItem.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
};

// Executa assim que o DOM estiver pronto para evitar erros de elemento "null"
document.addEventListener('DOMContentLoaded', initEasterPage);

    // --- 2. FAQ ACCORDION ---
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            const answer = faqItem.querySelector('.faq-answer');
            const isOpen = faqItem.classList.contains('active');
            
            // Fecha todos os itens abertos (opcional, para efeito sanfona)
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-answer').style.maxHeight = null;
            });

            // Se o item clicado não estava aberto, abre-o
            if (!isOpen) {
                faqItem.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });


// Executa assim que o DOM estiver pronto para evitar erros de elemento "null"
document.addEventListener('DOMContentLoaded', initEasterPage);

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const isOpen = faqItem.classList.contains('active');
        
        // Fecha todos os outros antes de abrir o atual
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
            item.querySelector('.faq-answer').style.maxHeight = null;
        });

        if (!isOpen) {
            faqItem.classList.add('active');
            const answer = faqItem.querySelector('.faq-answer');
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});



