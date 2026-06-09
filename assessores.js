const { createApp, ref, computed } = Vue;

createApp({
    setup() {
        // Estado da barra de busca
        const termoBusca = ref('');

        // Banco de Dados simulado
        const listaAssessores = ref([
            { sigla: 'AS', nome: 'Ana Silva', especialidade: 'Renda Fixa e Conservador', nota: '4.9', avaliacoes: 127, certificacoes: ['CPA-20', 'ANCORD'] },
            { sigla: 'CM', nome: 'Carlos Mendes', especialidade: 'Ações e Multimercado', nota: '4.8', avaliacoes: 95, certificacoes: ['CEA', 'ANCORD', 'PQO'] },
            { sigla: 'BC', nome: 'Beatriz Costa', especialidade: 'Planejamento Financeiro', nota: '5.0', avaliacoes: 143, certificacoes: ['CFP', 'ANCORD'] },
            { sigla: 'RL', nome: 'Roberto Lima', especialidade: 'Investimentos Alternativos', nota: '4.7', avaliacoes: 82, certificacoes: ['CGA', 'ANCORD'] },
            { sigla: 'JF', nome: 'Juliana Ferreira', especialidade: 'Previdência e Longo Prazo', nota: '4.9', avaliacoes: 108, certificacoes: ['CPA-20', 'CNPI'] },
            { sigla: 'PS', nome: 'Pedro Santos', especialidade: 'Day Trade e Swing Trade', nota: '4.6', avaliacoes: 74, certificacoes: ['CNPI', 'PQO'] }
        ]);

        // Propriedade Computada: Retorna apenas quem bate com a busca
        const assessoresFiltrados = computed(() => {
            if (termoBusca.value === '') {
                return listaAssessores.value;
            }
            
            const busca = termoBusca.value.toLowerCase();
            return listaAssessores.value.filter(assessor => {
                return assessor.nome.toLowerCase().includes(busca) || 
                       assessor.especialidade.toLowerCase().includes(busca);
            });
        });

        // Interatividade dos botões
        const verPerfil = (nome) => {
            alert(`Abrindo perfil completo de ${nome}...`);
        };

        const contratar = (nome) => {
            alert(`Iniciando solicitação de assessoria com ${nome}.`);
        };

        return {
            termoBusca,
            assessoresFiltrados,
            verPerfil,
            contratar
        };
    }
}).mount('#app-assessores');