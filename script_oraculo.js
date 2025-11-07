// A URL onde seu servidor Python (oraculo-api-scii) está rodando.
// ATENÇÃO: Se estiver online, esta URL mudará!
const URL_API_ORACULO = "http://127.0.0.1:5000/consultar_oraculo"; 

// Função que será chamada quando o usuário clicar em "Consultar"
async function consultarOraculo() {
    // 1. Pega a pergunta do campo de texto no HTML
    const pergunta = document.getElementById("input-pergunta").value; 
    const resultadoDiv = document.getElementById("resultado-consulta");
    
    if (!pergunta) {
        resultadoDiv.innerHTML = "<p>Digite sua questão para que o Espelho da Rainha se manifeste.</p>";
        return;
    }

    // Limpa e mostra que está processando
    resultadoDiv.innerHTML = "<p>✨ O Oráculo está refletindo a questão...</p>";

    try {
        // 2. FAZ A CHAMADA HTTP PARA A API PYTHON
        const response = await fetch(URL_API_ORACULO, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // Envia a pergunta do usuário para o backend
            body: JSON.stringify({ pergunta: pergunta }) 
        });

        // Verifica se a resposta do servidor foi um sucesso
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const data = await response.json();
        const textoCompleto = data.consulta_completa;
        
        // 3. EXIBE A RESPOSTA ESTRUTURADA NO HTML
        
        // Vamos usar a estrutura de Markdown (cabeçalhos h3) para separar as partes
        resultadoDiv.innerHTML = formatarResposta(textoCompleto);

    } catch (error) {
        console.error("Falha ao consultar o Oráculo:", error);
        resultadoDiv.innerHTML = `<p style="color: red;">Erro ao acessar a Existência (API): ${error.message}. Verifique se o servidor Python está rodando.</p>`;
    }
}

// Função de Formatação Simples: Transforma os cabeçalhos Markdown em HTML
function formatarResposta(texto) {
    let html = texto;
    // Substitui cabeçalhos Markdown (###) por cabeçalhos HTML (<h3>)
    html = html.replace(/###\s*(.*)/g, '<h3>$1</h3>');
    // Adiciona quebras de linha para melhor leitura
    html = html.replace(/\n/g, '<br>'); 
    return html;
}
