const { createApp, ref } = Vue;

createApp({
    setup() {
        // Estado reativo (Framework JS em ação)
        const textoBotao = ref("Começar Agora");
        const btnCarregando = ref(false);

        // Dados dinâmicos para a interface
        const funcionalidades = ref([
            {
                icone: '👥',
                cor: 'bg-blue-gradient',
                titulo: 'Assessores Certificados',
                descricao: 'Conecte-se com profissionais certificados pela CVM, ANCORD e ANBIMA'
            },
            {
                icone: '🛡️',
                cor: 'bg-purple-gradient',
                titulo: 'Recomendações Personalizadas',
                descricao: 'Receba orientações sob medida baseadas no seu perfil e objetivos'
            },
            {
                icone: '📖',
                cor: 'bg-indigo-gradient',
                titulo: 'Educação Financeira',
                descricao: 'Aprenda sobre investimentos com conteúdo didático e acessível'
            }
        ]);

        // Interatividade
        const comecar = () => {
            btnCarregando.value = true;
            textoBotao.value = "Carregando...";
            
            setTimeout(() => {
                alert("Redirecionando para a página de Criação de Conta...");
                btnCarregando.value = false;
                textoBotao.value = "Começar Agora";
            }, 1000);
        };

        const entrar = () => {
            const email = prompt("Digite seu e-mail para entrar na UniTrade:");
            if(email) {
                alert(`Bem-vindo de volta! Procurando os dados de ${email}...`);
            }
        };

        return {
            funcionalidades,
            textoBotao,
            btnCarregando,
            comecar,
            entrar
        };
    }
}).mount('#app');