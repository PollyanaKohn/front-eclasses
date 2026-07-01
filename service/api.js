// BASE_URL aponta para o JSON local enquanto a API não está integrada.
// Quando a API estiver pronta, basta trocar para: 'http://localhost:3000/api'
const BASE_URL = './model/data.json';

// Função interna
async function _get(endpoint) {
    try {
        const response = await fetch('{$BASE_URL}${endpoint}');
        if (!response.ok) {
            throw new Error(`Erro ao buscar os ${endpoint}: ${response.statusText});
        }

        const data = await response.json();
        return data;
    }   cattch (error){
       console.error('Erro ao buscar os ${ndpoint}:', error);
       }

        return rotas[endpoint] ?? [];

    } catch (error) {
        console.error('Erro na API:', error);
        return [];
    }
}

// GET JOGOS
async function getJogos() {
    return _get('/jogos');
}

// GET TIMES
async function getTimes() {
    return _get('/times');
}

// GET COMPETIDORES
async function getCompetidores() {
    return _get('/competidores');
}

// GET CONFRONTOS
async function getConfrontos() {
    return _get('/confrontos');
}