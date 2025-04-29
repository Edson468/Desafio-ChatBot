// Dados do time 
const teamData = {
    cs: {
        name: "CS:GO",
        icon: "🔫",
        roster: [
            { 
                nickname: "KSCERATO", 
                role: "Rifler",
                previousTeams: ["G3X eSports", "Team oNe eSports"],
                joinDate: "2018",
                bio: "Considerado um dos melhores jogadores brasileiros de CS:GO, conhecido por sua consistência e clutches."
            },
            { 
                nickname: "yuurih", 
                role: "Rifler",
                previousTeams: ["Team oNe eSports"],
                joinDate: "2018",
                bio: "Jogador versátil e explosivo, fundamental no sucesso internacional da FURIA."
            },
            { 
                nickname: "arT", 
                role: "In-game Leader",
                previousTeams: ["Immortals", "Team oNe eSports"],
                joinDate: "2018",
                bio: "Líder inovador e criador do 'FURIA style', conhecido por suas estratégias agressivas."
            },
            { 
                nickname: "chelo", 
                role: "Rifler",
                previousTeams: ["MIBR", "BOOM Esports", "Imperial Esports"],
                joinDate: "2023",
                bio: "Experiente jogador do cenário brasileiro, traz estabilidade e experiência ao time."
            },
            { 
                nickname: "drop", 
                role: "AWPer",
                previousTeams: ["00NATION", "paiN Gaming", "MIBR"],
                joinDate: "2023",
                bio: "Jovem talento que se consolidou como um dos melhores AWPers do Brasil."
            }
        ],
        history: `A equipe de CS:GO da FURIA surgiu em 2018 e rapidamente se tornou a maior do Brasil. Com um estilo agressivo ("FURIA style"), revolucionaram o cenário internacional. Em 2022, foram o primeiro time brasileiro a chegar no Top 5 mundial da HLTV.`,
        currentTournaments: [
            {
                name: "BLAST Premier World Final 2024",
                location: "Abu Dhabi",
                prizePool: "$1,000,000",
                dates: "Dezembro 2024"
            }
        ],
        achievements: [
            "BLAST Pro Series São Paulo 2019 - Campeões",
            "ESL Pro League S12 NA - Campeões",
            "IEM Dallas 2023 - Top 4"
        ]
    },
    rainbow: {
        name: "Rainbow Six",
        icon: "🛡️",
        roster: [
            { 
                nickname: "ion", 
                role: "Suporte",
                previousTeams: ["Team oNe eSports", "Black Dragons"],
                joinDate: "2020",
                bio: "Conhecido por seu jogo cerebral e tomadas de decisão precisas."
            },
            { 
                nickname: "Faallz", 
                role: "Flex",
                previousTeams: ["Team Liquid", "Black Dragons"],
                joinDate: "2021",
                bio: "Versátil e adaptável, capaz de jogar em múltiplas posições com excelência."
            },
            { 
                nickname: "KDS", 
                role: "Entry",
                previousTeams: ["Team oNe eSports", "Black Dragons"],
                joinDate: "2020",
                bio: "Jogador explosivo, especialista em abrir rondas com sucesso."
            },
            { 
                nickname: "Stk", 
                role: "Capitão",
                previousTeams: ["Ninjas in Pyjamas", "Team Liquid"],
                joinDate: "2022",
                bio: "Líder experiente que trouxe a mentalidade vencedora para a equipe."
            },
            { 
                nickname: "Lenda", 
                role: "Suporte",
                previousTeams: ["Team oNe eSports", "Black Dragons"],
                joinDate: "2020",
                bio: "Pilar defensivo da equipe, conhecido por setups criativos."
            }
        ],
        history: `A FURIA entrou no Rainbow Six em 2020 e em 2022 se tornou a primeira equipe brasileira a vencer um Major internacional (Six Charlotte Major). Conhecida por jogadas táticas inovadoras e forte mentalidade competitiva.`,
        currentTournaments: [
            {
                name: "Six Invitational 2024",
                location: "Montreal, Canadá",
                prizePool: "$2,000,000",
                dates: "Fevereiro 2024"
            }
        ],
        achievements: [
            "Six Charlotte Major 2022 - Campeões",
            "Campeonato Brasileiro 2022 - Campeões",
            "Six Invitational 2023 - Top 6"
        ]
    },
    lol: {
        name: "League of Legends",
        icon: "🏆",
        roster: [
            { 
                nickname: "fNb", 
                role: "Top",
                previousTeams: ["RED Canids", "INTZ"],
                joinDate: "2023",
                bio: "Top laner agressivo com amplo champion pool."
            },
            { 
                nickname: "Goot", 
                role: "Jungle",
                previousTeams: ["LOUD", "paiN Gaming"],
                joinDate: "2023",
                bio: "Jungler estratégico com excelente leitura de jogo."
            },
            { 
                nickname: "Envy", 
                role: "Mid",
                previousTeams: ["KaBuM! Esports", "RED Canids"],
                joinDate: "2023",
                bio: "Mid laner versátil, capaz de jogar tanto carrys quanto utilitários."
            },
            { 
                nickname: "Trigo", 
                role: "ADC",
                previousTeams: ["RED Canids", "KaBuM! Esports"],
                joinDate: "2023",
                bio: "Atirador promissor com grande potencial de crescimento."
            },
            { 
                nickname: "RedBert", 
                role: "Support",
                previousTeams: ["paiN Gaming", "KaBuM! Esports"],
                joinDate: "2023",
                bio: "Suporte experiente com excelente visão de jogo."
            }
        ],
        history: `A FURIA chegou no CBLOL em 2022 trazendo uma abordagem inovadora, misturando jovens talentos com jogadores experientes. Em 2023, terminaram em 3° lugar e se tornaram conhecidos por seu estilo agressivo de jogo.`,
        currentTournaments: [
            {
                name: "CBLOL 2024",
                location: "Brasil",
                prizePool: "R$ 500,000",
                dates: "Janeiro - Setembro 2024"
            }
        ],
        achievements: [
            "CBLOL 2023 - 3° Lugar",
            "CBLOL Academy 2023 - Campeões"
        ]
    },
    valorant: {
        name: "Valorant",
        icon: "💥",
        roster: [
            { 
                nickname: "dgzin", 
                role: "Duelista",
                previousTeams: ["Gamelanders", "Havan Liberty"],
                joinDate: "2022",
                bio: "Duelista explosivo, especialista em Jett e Raze."
            },
            { 
                nickname: "qck", 
                role: "Flex",
                previousTeams: ["Team Vikings", "Santos eSports"],
                joinDate: "2023",
                bio: "Jogador versátil que se adapta a qualquer função necessária."
            },
            { 
                nickname: "Mazin", 
                role: "Controlador",
                previousTeams: ["LOS", "Havan Liberty"],
                joinDate: "2022",
                bio: "Controlador cerebral, especialista em Viper e Brimstone."
            },
            { 
                nickname: "Liaz", 
                role: "Iniciador",
                previousTeams: ["Gamelanders", "Santos eSports"],
                joinDate: "2022",
                bio: "Iniciador agressivo, conhecido por suas jogadas criativas."
            },
            { 
                nickname: "kon4n", 
                role: "Sentinela",
                previousTeams: ["paiN Gaming", "Havan Liberty"],
                joinDate: "2023",
                bio: "Sentinela sólido, especialista em Killjoy e Cypher."
            }
        ],
        history: `O time de Valorant da FURIA foi formado em 2021 e já em 2023 conquistou o VCT Game Changers, tornando-se uma das equipes mais respeitadas do cenário. Conhecidos por jogadas criativas e explosivas.`,
        currentTournaments: [
            {
                name: "VCT Americas 2024",
                location: "Los Angeles",
                prizePool: "$500,000",
                dates: "Junho - Agosto 2024"
            }
        ],
        achievements: [
            "VCT Game Changers 2023 - Campeões",
            "VCT Americas League 2023 - Top 4"
        ]
    },
    kingsleague: {
        name: "Kings League",
        icon: "⚽",
        roster: [
            { 
                nickname: "Matheus Dedo", 
                role: "Meia",
                previousTeams: ["São Paulo FC", "Corinthians"],
                joinDate: "2024",
                bio: "Meia habilidoso com excelente visão de jogo."
            },
            { 
                nickname: "Caio Catroca", 
                role: "Meia",
                previousTeams: ["Santos FC", "Ponte Preta"],
                joinDate: "2024",
                bio: "Meia ofensivo com grande capacidade de finalização."
            },
            { 
                nickname: "Murillo Donato", 
                role: "Atacante",
                previousTeams: ["Palmeiras", "Coritiba"],
                joinDate: "2024",
                bio: "Atacante veloz e técnico, especialista em dribles."
            },
            { 
                nickname: "Andrey Batata", 
                role: "Meia",
                previousTeams: ["Flamengo", "Vasco da Gama"],
                joinDate: "2024",
                bio: "Meia central com excelente passe e controle de jogo."
            },
            { 
                nickname: "Matheus Ayosa", 
                role: "Goleiro",
                previousTeams: ["Botafogo", "Portuguesa"],
                joinDate: "2024",
                bio: "Goleiro ágil com grandes reflexos."
            },
            { 
                nickname: "João Pelegrini", 
                role: "Defesa",
                previousTeams: ["Cruzeiro", "Atlético-MG"],
                joinDate: "2024",
                bio: "Zagueiro forte e bom no jogo aéreo."
            },
            { 
                nickname: "Victor Hugo", 
                role: "Goleiro",
                previousTeams: ["Grêmio", "Criciúma"],
                joinDate: "2024",
                bio: "Goleiro experiente com grande liderança."
            },
            { 
                nickname: "Davi Ilario", 
                role: "Meia (Wildcard)",
                previousTeams: ["Internacional", "Juventude"],
                joinDate: "2024",
                bio: "Meia criativo com ótimo passe longo."
            },
            { 
                nickname: "Matheus Rufino", 
                role: "Meia (Wildcard)",
                previousTeams: ["Fluminense", "Bahia"],
                joinDate: "2024",
                bio: "Meia ofensivo com bom chute de longa distância."
            },
            { 
                nickname: "Kelvin Oliveira", 
                role: "Atacante (Wildcard)",
                previousTeams: ["Athletico-PR", "Goiás"],
                joinDate: "2024",
                bio: "Atacante veloz e bom finalizador."
            },
            { 
                nickname: "Choco", 
                role: "Atacante (Wildcard)",
                previousTeams: ["Sport Recife", "Náutico"],
                joinDate: "2024",
                bio: "Atacante forte e bom no jogo aéreo."
            },
            { 
                nickname: "Barata", 
                role: "Goleiro (Wildcard)",
                previousTeams: ["Vitória", "ABC"],
                joinDate: "2024",
                bio: "Goleiro experiente com grande elasticidade."
            },
            { 
                nickname: "Well", 
                role: "Meia (Wildcard)",
                previousTeams: ["Ceará", "Fortaleza"],
                joinDate: "2024",
                bio: "Meia central com ótimo controle de bola."
            },
            { 
                nickname: "Guilherme Monagatti", 
                role: "Atacante",
                previousTeams: ["São Caetano", "Bragantino"],
                joinDate: "2024",
                bio: "Atacante técnico com boa finalização."
            },
            { 
                nickname: "Gabriel Pastuch", 
                role: "Atacante",
                previousTeams: ["Avaí", "Chapecoense"],
                joinDate: "2024",
                bio: "Atacante versátil que pode jogar em várias posições."
            },
            { 
                nickname: "Leleti", 
                role: "Atacante",
                previousTeams: ["Figueirense", "Joinville"],
                joinDate: "2024",
                bio: "Atacante explosivo com bom drible."
            },
            { 
                nickname: "Lipão", 
                role: "Atacante",
                previousTeams: ["Paysandu", "Remo"],
                joinDate: "2024",
                bio: "Atacante forte e bom no jogo físico."
            }
        ],
        history: `A Kings League chegou ao Brasil em 2024 como uma revolução no futebol! Criada pelo streamer Ibai Llanos e Gerard Piqué, a liga mistura regras inovadoras (como tiros livres com dribles, cartões azuis e VAR extremo) com o espírito dos esports. O time da FURIA (Furia FC) foi um dos 12 escolhidos para representar o Brasil, com Neymar Jr. como Presidente e Cris Guedes como CEO. A competição tem transmissão no Flow Sport Club e está mudando a forma de consumir futebol!`,
        presidents: [
            { name: "Neymar Jr.", role: "Presidente e Sócio", description: "Superestrela do futebol mundial, ex-jogador do Barcelona, PSG e Seleção Brasileira. Traz sua experiência e visão inovadora para o projeto." },
            { name: "Cris Guedes", role: "CEO e Co-fundadora", description: "Executiva visionária do esporte eletrônico brasileiro, responsável pela estratégia e operações do time na Kings League." }
        ],
        currentTournaments: [
            {
                name: "Kings League América 2024",
                location: "Brasil/Espanha",
                prizePool: "€500,000",
                dates: "Abril - Julho 2024"
            }
        ],
        achievements: [
            "Kings League 2023 - Fase de Grupos (Espanha)",
            "Kings League América 2024 - Em andamento"
        ]
    }
};

// Respostas para saudações
const greetings = {
    morning: [
        "Bom dia, torcedor! A FURIA está em guerra no CS, Rainbow Six, LoL, Valorant e Kings League! 🔥",
        "Bom dia! Quer info de CS, Rainbow Six, LoL, Valorant ou Kings League? ⚡"
    ],
    afternoon: [
        "Boa tarde! A FURIA domina em 5 modalidades. Qual você quer saber? 🎮⚽",
        "Boa tarde! FURIA no CS, Rainbow Six, LoL, Valorant ou Kings League? 🖤"
    ],
    night: [
        "Boa noite! A FURIA não dorme! Escolha: CS, Rainbow Six, LoL, Valorant ou Kings League? 🌙"
    ],
    goodbye: [
        "Obrigado por conversar com a Nação FURIA! Volte sempre! 🔥",
        "Foi um prazer ajudar! Até a próxima! ⚡",
        "Valeu, torcedor! A FURIA agradece! 🖤"
    ]
};

// Elementos do DOM
const messagesContainer = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const chatbotToggle = document.getElementById('chatbotToggle');
const chatContainer = document.getElementById('chatContainer');
const closeButton = document.getElementById('closeButton');

// Controles do Chat
chatbotToggle.addEventListener('click', () => {
    chatContainer.classList.toggle('active');
});

closeButton.addEventListener('click', () => {
    chatContainer.classList.remove('active');
});

// Função para adicionar mensagem
function addMessage(content, isUser = false) {
    const message = document.createElement('div');
    message.className = `message ${isUser ? 'user' : 'bot'}`;
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    messageContent.innerHTML = content.replace(/\n/g, '<br>');
    
    const timeElement = document.createElement('div');
    timeElement.className = 'message-time';
    timeElement.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    message.appendChild(messageContent);
    message.appendChild(timeElement);
    messagesContainer.appendChild(message);
    
    // Auto-scroll
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Função para escolher resposta aleatória
function getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
}

// Função para gerar resposta de modalidade
function getTeamInfo(modalidade) {
    const data = teamData[modalidade];
    return `
        <strong>${data.name} ${data.icon}</strong><br>
        <em>${data.history}</em><br><br>
        
        👥 <u>Elenco Atual</u>:<br>
        ${data.roster.map(p => `
            • <strong>${p.nickname}</strong> (${p.role})<br>
            - Anteriormente em: ${p.previousTeams.join(', ')}<br>
            - Na FURIA desde: ${p.joinDate}<br>
            - Sobre: ${p.bio}<br>
        `).join('<br>')}<br>
        
        🏆 <u>Competição Atual</u>:<br>
        • ${data.currentTournaments[0].name}<br>
        • Local: ${data.currentTournaments[0].location}<br>
        • Premiação: ${data.currentTournaments[0].prizePool}<br>
        • Período: ${data.currentTournaments[0].dates}<br><br>
        
        🏅 <u>Principais Conquistas</u>:<br>
        ${data.achievements.map(a => `• ${a}`).join('<br>')}
    `;
}

// Gerar resposta de redes sociais
function generateSocialMediaResponse() {
    const socialMedia = {
        instagram: { name: "Instagram", url: "https://www.instagram.com/furiagg/", icon: "📷" },
        twitter: { name: "Twitter", url: "https://twitter.com/furiagg", icon: "🐦" },
        youtube: { name: "YouTube", url: "https://www.youtube.com/@FURIAF.C.", icon: "▶️" },
        twitch: { name: "Twitch", url: "https://www.twitch.tv/furiatv?lang=pt-br", icon: "🎮" },
        tiktok: { name: "TikTok", url: "https://www.tiktok.com/@furiagg", icon: "🎵" },
        facebook: { name: "Facebook", url: "https://www.facebook.com/furiagg/", icon: "👍" }
    };

    let response = `<strong>Siga a FURIA nas redes sociais:</strong><br><br>
                    <div class="social-links">`;
    
    for (const [key, value] of Object.entries(socialMedia)) {
        response += `<a href="${value.url}" target="_blank" class="social-link" title="${value.name}">${value.icon} ${value.name}</a> `;
    }
    
    response += `</div><br>Acompanhe tudo sobre a Nação FURIA! 🔥`;
    return response;
}

// Função para contar a história da FURIA
function getFuriaHistory() {
    const allTournaments = [];
    
    // Coletar todas as competições de cada modalidade
    for (const game in teamData) {
        teamData[game].currentTournaments.forEach(tournament => {
            allTournaments.push(`• ${teamData[game].name}: ${tournament.name}`);
        });
    }
    
    return `
        <strong>História da FURIA Esports</strong><br><br>
        A FURIA foi fundada em 2017 como uma organização brasileira de esports, inicialmente focada no cenário de Counter-Strike. 
        O nome "FURIA" representa o estilo de jogo agressivo e determinado que se tornou marca registrada da equipe.<br><br>
        
        Em 2018, a FURIA entrou no CS:GO e rapidamente se tornou uma das principais equipes do Brasil com seu "FURIA style". 
        A organização então expandiu para outras modalidades:<br>
        • 2020: Entrada no Rainbow Six Siege<br>
        • 2021: Criação do time de Valorant<br>
        • 2022: Ingresso no CBLOL (League of Legends)<br>
        • 2024: Participação na Kings League (futebol)<br><br>
        
        <strong>Competições que a FURIA participa atualmente:</strong><br>
        ${allTournaments.join('<br>')}<br><br>
        
        A FURIA se tornou uma das organizações de esports mais respeitadas do mundo, conhecida por desenvolver talentos brasileiros 
        e por sua abordagem inovadora nos esports.
    `;
}

// Função para mostrar os presidentes da Kings League
function getKingsLeaguePresidents() {
    const kingsData = teamData.kingsleague;
    return `
        <strong>🏆 Liderança da FURIA na Kings League ⚽</strong><br><br>
        ${kingsData.presidents.map(p => `
            • <u>${p.name}</u> (${p.role})<br>
            ${p.description}<br>
        `).join('<br>')}
        <br>
        <em>Curiosidade:</em> A dupla Neymar Jr. e Cris Guedes traz uma combinação única de experiência no futebol de alto nível e visão inovadora dos esports para a FURIA FC!
    `;
}

// Processar mensagem do usuário
function processMessage(message) {
    const lowerMessage = message.toLowerCase();
    
    // Verificar saudações
    if (lowerMessage.includes('bom dia')) {
        return getRandomResponse(greetings.morning);
    }
    
    if (lowerMessage.includes('boa tarde')) {
        return getRandomResponse(greetings.afternoon);
    }
    
    if (lowerMessage.includes('boa noite')) {
        return getRandomResponse(greetings.night);
    }
    
    // Verificar despedidas
    if (lowerMessage.includes('tchau') || 
        lowerMessage.includes('adeus') || 
        lowerMessage.includes('até mais') || 
        lowerMessage.includes('vlw') || 
        lowerMessage.includes('valew') || 
        lowerMessage.includes('obrigado') || 
        lowerMessage.includes('obrigada') ||
        lowerMessage.includes('flw') ||
        lowerMessage.includes('falou')) {
        return getRandomResponse(greetings.goodbye);
    }
    
    // Modalidades específicas
    if (lowerMessage.includes('cs') || lowerMessage.includes('counter')) {
        return getTeamInfo('cs');
    }
    
    if (lowerMessage.includes('rainbow') || lowerMessage.includes('r6') || lowerMessage.includes('siege')) {
        return getTeamInfo('rainbow');
    }
    
    if (lowerMessage.includes('lol') || lowerMessage.includes('league of legends') || lowerMessage.includes('legends')) {
        return getTeamInfo('lol');
    }
    
    if (lowerMessage.includes('valorant') || lowerMessage.includes('val') || lowerMessage.includes('vavazinho')) {
        return getTeamInfo('valorant');
    }
    
    if (lowerMessage.includes('kings') || lowerMessage.includes('league') || lowerMessage.includes('futebol') || lowerMessage.includes('soccer')) {
        return getTeamInfo('kingsleague');
    }
    
    // Redes sociais
    if (lowerMessage.includes('redes sociais') || 
        lowerMessage.includes('redes') || 
        lowerMessage.includes('social') || 
        lowerMessage.includes('instagram') || 
        lowerMessage.includes('twitter') || 
        lowerMessage.includes('youtube') ||
        lowerMessage.includes('twitch')) {
        return generateSocialMediaResponse();
    }
    
    // História da FURIA e competições
    if (lowerMessage.includes('história') || 
        lowerMessage.includes('furia') || 
        lowerMessage.includes('surgiu') ||
        lowerMessage.includes('competições') ||
        lowerMessage.includes('participa')) {
        return getFuriaHistory();
    }
    
    // Presidentes da Kings League
    if (lowerMessage.includes('presidente') || 
        lowerMessage.includes('presidentes') || 
        lowerMessage.includes('neymar') || 
        lowerMessage.includes('cris guedes') ||
        (lowerMessage.includes('kings') && lowerMessage.includes('lider'))) {
        return getKingsLeaguePresidents();
    }
    
    // Mensagem inicial
    if (lowerMessage.includes('oi') || lowerMessage.includes('olá') || lowerMessage.includes('ola')) {
        return `Olá! Pergunte sobre:<br>
        1. CS:GO 🔫<br>2. Rainbow Six 🛡️<br>3. LoL 🏆<br>4. Valorant 💥<br>5. Kings League ⚽<br>
        Ou peça para contar a história da FURIA ou sobre os líderes da Kings League!`;
    }
    
    return `Não entendi. Você pode perguntar sobre:<br>
    1. CS:GO 🔫<br>2. Rainbow Six 🛡️<br>3. LoL 🏆<br>4. Valorant 💥<br>5. Kings League ⚽<br>
    Ou peça para contar a história da FURIA ou sobre os líderes da Kings League!`;
}

// Event listeners
sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = messageInput.value.trim();
    if (message) {
        addMessage(message, true);
        messageInput.value = '';
        
        // Simular digitação do bot
        setTimeout(() => {
            const response = processMessage(message);
            addMessage(response);
        }, 1000);
    }
}

// Mensagem inicial
setTimeout(() => {
    addMessage(`Olá! Sou o bot da FURIA! 🔥<br><br>
    Posso te informar sobre:<br>
    1. CS:GO 🔫<br>2. Rainbow Six 🛡️<br>3. LoL 🏆<br>4. Valorant 💥<br>5. Kings League ⚽<br><br>
    <em>Pergunte também sobre:</em><br>
    • História da FURIA<br>
    • Neymar Jr. e Cris Guedes na Kings League<br>
    • Redes sociais`);
}, 500);