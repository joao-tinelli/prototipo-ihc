// script.js

// Adiciona um "ouvinte" que espera o conteúdo da página carregar completamente
document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DE NAVEGAÇÃO E SIMULAÇÃO DE AÇÕES ---

    // 1. Simulação de Login
    const loginForm = document.querySelector('.login-box form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o envio real do formulário
            const userField = document.getElementById('username');
            if (userField.value.toLowerCase().includes('biblio')) {
                // Simula login de bibliotecário
                alert('Login como Bibliotecário realizado com sucesso! (Simulação)');
            } else {
                // Simula login de associado
                alert('Login como Associado realizado com sucesso! (Simulação)');
            }
            window.location.href = 'menu.html'; // Redireciona para o menu
        });
    }

    // 2. Simulação de Busca (reutilizável para Acervo, Empréstimos, etc.)
    const searchForms = document.querySelectorAll('.search-bar');
    searchForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Busca realizada! Exibindo resultados de exemplo.');
        });
    });

    // 3. Simulação de Cadastro (reutilizável para Itens e Associados)
    const allForms = document.querySelectorAll('.form-section form');
    allForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Cadastro realizado com sucesso! (Simulação)');
            form.reset(); // Limpa o formulário após o "envio"
        });
    });

    // --- LÓGICA PARA BOTÕES ESPECÍFICOS ---

    // Delegação de eventos para botões dentro de listas de resultados
    document.body.addEventListener('click', function(e) {
        const target = e.target; // O elemento que foi clicado

        // Botão "Solicitar empréstimo"
        if (target.matches('.btn') && target.textContent.includes('Solicitar empréstimo')) {
            alert('Empréstimo solicitado com sucesso! (Simulação)');
        }
        
        // Botão "Entrar na lista de espera"
        if (target.matches('.btn-secondary') && target.textContent.includes('lista de espera')) {
            alert('Você foi adicionado à lista de espera. (Simulação)');
        }

        // Botão "Registrar Devolução"
        if (target.matches('.btn') && target.textContent.includes('Registrar Devolução')) {
            alert('Devolução registrada com sucesso!');
            target.closest('.emprestimo-item').style.display = 'none'; // "Remove" o item da lista
        }

        // Botão "Registrar Devolução e Calcular Multa"
        if (target.matches('.btn-secondary') && target.textContent.includes('Calcular Multa')) {
            alert('Devolução registrada! Multa de R$5,50 gerada para o associado.');
            target.closest('.emprestimo-item').style.display = 'none';
        }
        
        // Botão "Notificar Associado" da lista de espera
        if (target.matches('.btn') && target.textContent.includes('Notificar Associado')) {
            alert('Associado notificado de que o item está disponível!');
            target.textContent = 'Notificado';
            target.disabled = true;
        }

        // Botão "Pagar Multa"
        if (target.matches('.btn') && target.textContent.includes('Pagar Multa')) {
            alert('Pagamento de multa simulado com sucesso!');
            target.closest('.item-result').style.display = 'none';
        }
    });

});