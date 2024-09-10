let dados = [
    {
        titulo: "Slam",
        descricao: "Um adolescente skatista descobre que vai ser pai",
        link: "https://pt.wikipedia.org/wiki/Slam_(filme)",
        tags: "skate, adolescente, slam, sk8" 
    },
    {
        titulo: "Mad Max: Estrada da Fúria",
        descricao: "Em um mundo pós-apocalíptico, uma mulher foge por liberdade.",
        link: "https://pt.wikipedia.org/wiki/Mad_Max:_Estrada_da_Fúria",
        tags: "ação, aventura, perseguição, deserto, distopia, Charlize Theron, Tom Hardy" 
    },
    {
        titulo: "John Wick",
        descricao: "Um assassino aposentado busca vingança pela morte de seu cachorro.",
        link: "1",
        tags: "ação, vingança, assassino, tiroteio, Keanu Reeves"
    },
    {
        titulo: "Se Beber, Não Case!",
        descricao: "Um grupo de amigos em uma despedida de solteiro em Las Vegas.",
        link: "https://pt.wikipedia.org/wiki/The_Hangover",
        tags: "comédia, amigos, las vegas, despedida de solteiro, Bradley Cooper, Zach Galifianakis"
    },
    {
        titulo: "Missão Madrinha de Casamento",
        descricao: "Uma dama de honra tenta organizar um casamento perfeito.",
        link: "https://pt.wikipedia.org/wiki/Bridesmaids_(filme)",
        tags: "comédia, casamento, amizade, mulheres, Kristen Wiig, Maya Rudolph" 
    },
    {
        titulo: "O Exorcista",
        descricao: "Uma menina de 12 anos é possuída por uma entidade demoníaca.",
        link: "https://pt.wikipedia.org/wiki/O_Exorcista_(filme)",
        tags: "terror, possessão, exorcismo, clássico, Ellen Burstyn, Linda Blair" 
    },
    {
        titulo: "O Iluminado",
        descricao: "Um escritor se torna violento após se isolar em um hotel.",
        link: "https://pt.wikipedia.org/wiki/The_Shining_(filme)",
        tags: "terror, psicológico, suspense, hotel, Jack Nicholson, Shelley Duvall" 
    },
    {
        titulo: "Titanic",
        descricao: "Um artista pobre e uma jovem rica se apaixonam.",
        link: "https://pt.wikipedia.org/wiki/Titanic_(filme_de_1997)",
        tags: "romance, drama, navio, história real, Leonardo DiCaprio, Kate Winslet" 
    },
    {
        titulo: "Como Eu Era Antes de Você",
        descricao: "Uma jovem cuida de um homem que ficou tetraplégico.",
        link: "https://pt.wikipedia.org/wiki/Como_Eu_Era_Antes_de_Você_(filme)",
        tags: "romance, drama, superação, Emilia Clarke, Sam Claflin" 
    },
    {
        titulo: "Kill Bill: Volume 1",
        descricao: "Uma assassina busca vingança contra seus ex-comparsas.",
        link: "https://pt.wikipedia.org/wiki/Kill_Bill:_Volume_1",
        tags: "ação, vingança, samurai, artes marciais, Uma Thurman, Lucy Liu" 
    },
    {
        titulo: "O Predador",
        descricao: "Um grupo de soldados enfrenta uma criatura alienígena na selva.",
        link: "https://pt.wikipedia.org/wiki/Predator_(filme)",
        tags: "ação, ficção científica, alienígena, suspense, Arnold Schwarzenegger"
    },
    {
        titulo: "Duro de Matar",
        descricao: "Um policial enfrenta terroristas em um prédio em Los Angeles.",
        link: "https://pt.wikipedia.org/wiki/Die_Hard",
        tags: "ação, suspense, natal, terroristas, Bruce Willis, Alan Rickman" 
    },
    {
        titulo: "Spider-Man: No Aranhaverso",
        descricao: "Miles Morales se torna o Homem-Aranha em uma realidade alternativa.",
        link: "https://pt.wikipedia.org/wiki/Spider-Man:_No_Aranhaverso",
        tags: "animação, super-herói, aranhaverso, quadrinhos, Shameik Moore, Jake Johnson" 
    },
    {
        titulo: "A Viagem de Chihiro",
        descricao: "Uma garota entra em um mundo mágico para salvar seus pais.",
        link: "https://pt.wikipedia.org/wiki/A_Viagem_de_Chihiro",
        tags: "animação, fantasia, aventura, japão, Hayao Miyazaki" 
    },
    {
        titulo: "Blade Runner, o Caçador de Andróides",
        descricao: "Um caçador rastreia androides em uma Los Angeles futurista.",
        link: "https://pt.wikipedia.org/wiki/Blade_Runner",
        tags: "ficção científica, cyberpunk, androides, futuro, Harrison Ford, Rutger Hauer" 
    },
    {
        titulo: "A Chegada",
        descricao: "Uma linguista tenta se comunicar com alienígenas que chegam à Terra.",
        link: "https://pt.wikipedia.org/wiki/Arrival_(filme)",
        tags: "ficção científica, alienígenas, comunicação, suspense, Amy Adams, Jeremy Renner" 
    },
    {
        titulo: "O Senhor dos Anéis: A Sociedade do Anel",
        descricao: "Uma aventura épica para destruir um anel mágico.",
        link: "https://pt.wikipedia.org/wiki/The_Lord_of_the_Rings:_The_Fellowship_of_the_Ring",
        tags: "fantasia, aventura, magia, elfos, hobbits, Elijah Wood, Ian McKellen" 
    },
    {
        titulo: "A Princesa Mononoke",
        descricao: "Um príncipe se envolve em uma batalha entre humanos e deuses da floresta.",
        link: "https://pt.wikipedia.org/wiki/Princess_Mononoke",
        tags: "animação, fantasia, aventura, japão, Hayao Miyazaki" 
    },
    {
        titulo: "Psicose",
        descricao: "Uma mulher foge com dinheiro roubado e para em um motel sinistro.",
        link: "https://pt.wikipedia.org/wiki/Psycho_(1960_film)",
        tags: "terror, suspense, clássico, motel, Anthony Perkins, Janet Leigh" 
    },
    {
        titulo: "O Silêncio dos Inocentes",
        descricao: "Uma agente do FBI pede ajuda a um assassino para pegar outro.",
        link: "https://pt.wikipedia.org/wiki/The_Silence_of_the_Lambs_(filme)",
        tags: "suspense, terror, investigação, canibal, Jodie Foster, Anthony Hopkins" 
    },
    {
        titulo: "Um Sonho de Liberdade",
        descricao: "Um homem busca provar sua inocência na prisão.",
        link: "https://pt.wikipedia.org/wiki/The_Shawshank_Redemption",
        tags: "drama, prisão, esperança, amizade, Tim Robbins, Morgan Freeman" 
    },
    {
        titulo: "Clube da Luta",
        descricao: "Um homem insatisfeito forma um clube de luta clandestino.",
        link: "https://pt.wikipedia.org/wiki/Fight_Club_(filme)",
        tags: "drama, psicológico, crítica social, Brad Pitt, Edward Norton" 
    },
    {
        titulo: "O Poderoso Chefão",
        descricao: "Um jovem é envolvido no mundo do crime organizado.",
        link: "https://pt.wikipedia.org/wiki/The_Godfather",
        tags: "crime, máfia, família, clássico, Marlon Brando, Al Pacino" 
    },
    {
        titulo: "Harry e Sally - Feitos um para o Outro",
        descricao: "Dois amigos se perguntam se homens e mulheres podem ser apenas amigos.",
        link: "https://pt.wikipedia.org/wiki/When_Harry_Met_Sally...",
        tags: "comédia romântica, amizade, relacionamento, Billy Crystal, Meg Ryan"
    },
    {
        titulo: "10 Coisas que Eu Odeio em Você",
        descricao: "Um adolescente é pago para conquistar a garota mais difícil da escola.",
        link: "https://pt.wikipedia.org/wiki/10_Things_I_Hate_About_You",
        tags: "comédia romântica, adolescente, escola, Heath Ledger, Julia Stiles"
    },
    {
        titulo: "La La Land: Cantando Estações",
        descricao: "Uma atriz e um pianista se apaixonam em Los Angeles.",
        link: "https://pt.wikipedia.org/wiki/La_La_Land_(filme)",
        tags: "musical, romance, Los Angeles, sonhos, Emma Stone, Ryan Gosling" 
    },
    {
        titulo: "Bohemian Rhapsody",
        descricao: "A trajetória da banda Queen e de seu vocalista, Freddie Mercury.",
        link: "https://pt.wikipedia.org/wiki/Bohemian_Rhapsody_(filme)",
        tags: "musical, cinebiografia, música, Queen, Rami Malek"
    },
   
        // ... (seus filmes anteriores)
      
        // --- AÇÃO & AVENTURA ---
        {
          titulo: "Missão Impossível: Efeito Fallout",
          descricao: "Ethan Hunt e sua equipe enfrentam uma ameaça global.",
          link: "https://pt.wikipedia.org/wiki/Mission:Impossible%E2%80%93Fallout",
          tags: "ação, espionagem, missão impossível, Tom Cruise, Henry Cavill"
        },
        {
          titulo: "Mad Max: Estrada da Fúria",
          descricao: "Em um mundo pós-apocalíptico, uma mulher luta por liberdade.",
          link: "https://pt.wikipedia.org/wiki/Mad_Max:_Estrada_da_Fúria",
          tags: "ação, aventura, perseguição, deserto, Charlize Theron, Tom Hardy"
        },
        {
          titulo: "John Wick 3: Parabellum",
          descricao: "John Wick luta por sua sobrevivência em uma caçada global.",
          link: "https://pt.wikipedia.org/wiki/John_Wick_3:_Parabellum",
          tags: "ação, assassino, tiroteio, Keanu Reeves, Halle Berry"
        },
        {
          titulo: "Baby Driver",
          descricao: "Um jovem motorista de fuga se apaixona e tenta deixar a vida de crime.",
          link: "https://pt.wikipedia.org/wiki/Baby_Driver",
          tags: "ação, perseguição, música, Ansel Elgort, Lily James"
        },
        // --- CIÊNCIA FICÇÃO & FANTASIA ---
        {
          titulo: "A Chegada",
          descricao: "Uma linguista tenta se comunicar com alienígenas.",
          link: "https://pt.wikipedia.org/wiki/Arrival_(filme)",
          tags: "ficção científica, alienígenas, comunicação, Amy Adams, Jeremy Renner"
        },
        {
          titulo: "Blade Runner 2049",
          descricao: "Um novo blade runner descobre um segredo que pode gerar caos.",
          link: "https://pt.wikipedia.org/wiki/Blade_Runner_2049",
          tags: "ficção científica, cyberpunk, androides, Ryan Gosling, Harrison Ford"
        },
        {
          titulo: "Duna",
          descricao: "Um jovem precisa viajar ao planeta mais perigoso para garantir o futuro.",
          link: "https://pt.wikipedia.org/wiki/Dune_(filme_de_2021)",
          tags: "ficção científica, aventura, Timothée Chalamet, Zendaya"
        },
        {
          titulo: "A Forma da Água",
          descricao: "Uma zeladora se apaixona por uma criatura anfíbia.",
          link: "https://pt.wikipedia.org/wiki/The_Shape_of_Water",
          tags: "fantasia, romance, Sally Hawkins, Doug Jones"
        },
        // --- TERROR & SUSPENSE ---
        {
          titulo: "Corra!",
          descricao: "Um jovem descobre um segredo perturbador na propriedade da família de sua namorada.",
          link: "https://pt.wikipedia.org/wiki/Get_Out_(filme)",
          tags: "terror, suspense, racismo, Daniel Kaluuya, Allison Williams"
        },
        {
          titulo: "Hereditário",
          descricao: "Uma família é assombrada por um passado misterioso.",
          link: "https://pt.wikipedia.org/wiki/Hereditary_(filme)",
          tags: "terror, suspense, família, Toni Collette, Alex Wolff"
        },
        {
          titulo: "Um Lugar Silencioso",
          descricao: "Uma família precisa viver em silêncio para sobreviver a criaturas que caçam pelo som.",
          link: "https://pt.wikipedia.org/wiki/A_Quiet_Place_(filme)",
          tags: "terror, suspense, criaturas, Emily Blunt, John Krasinski"
        },
        {
          titulo: "A Bruxa de Blair",
          descricao: "Três estudantes de cinema desaparecem enquanto investigam uma lenda local.",
          link: "https://pt.wikipedia.org/wiki/The_Blair_Witch_Project",
          tags: "terror, suspense, found footage, Heather Donahue, Joshua Leonard"
        },
        // --- COMÉDIA ---
        {
          titulo: "Se Beber, Não Case!",
          descricao: "Quatro amigos têm uma despedida de solteiro inesquecível em Las Vegas.",
          link: "https://pt.wikipedia.org/wiki/The_Hangover",
              tags: "comédia, amigos, Las Vegas, Bradley Cooper, Zach Galifianakis" 
        },
        {
          titulo: "Missão Madrinha de Casamento",
          descricao: "Uma dama de honra tenta organizar um casamento perfeito, com resultados desastrosos.",
          link: "https://pt.wikipedia.org/wiki/Bridesmaids_(filme)",
          tags: "comédia, amizade, casamento, Kristen Wiig, Maya Rudolph"
        },
        {
          titulo: "Superbad - É Proibido Beber",
          descricao: "Dois amigos tentam comprar bebidas para uma festa.",
          link: "https://pt.wikipedia.org/wiki/Superbad",
          tags: "comédia, adolescente, festa, Jonah Hill, Michael Cera"
        },
        {
          titulo: "Anjos da Lei",
          descricao: "Dois policiais infiltrados investigam um grupo de traficantes.",
          link: "https://pt.wikipedia.org/wiki/21_Jump_Street_(filme)",
          tags: "comédia, ação, Jonah Hill, Channing Tatum"
        },
          // --- ANIMAÇÃO --- 
          {
              titulo: "Toy Story 3",
              descricao: "Woody, Buzz e os brinquedos enfrentam um novo desafio.",
              link: "https://pt.wikipedia.org/wiki/Toy_Story_3",
              tags: "animação, aventura, brinquedos, Tom Hanks, Tim Allen" 
          },
          {
              titulo: "Moana: Um Mar de Aventuras",
              descricao: "Uma jovem embarca em uma jornada para salvar seu povo.",
              link: "https://pt.wikipedia.org/wiki/Moana_(filme)",
              tags: "animação, aventura, Disney, Auliʻi Cravalho, Dwayne Johnson" 
          },
          {
              titulo: "Zootopia",
              descricao: "Uma coelha policial e uma raposa vigarista precisam trabalhar juntos.",
              link: "https://pt.wikipedia.org/wiki/Zootopia",
              tags: "animação, aventura, Disney, Ginnifer Goodwin, Jason Bateman" 
          },
          {
              titulo: "Up: Altas Aventuras",
              descricao: "Um senhor viaja em uma casa voadora com um explorador.",
              link: "https://pt.wikipedia.org/wiki/Up_(filme)",
              tags: "animação, aventura, Pixar, Ed Asner, Christopher Plummer" 
          },
          // --- DRAMA ---
          {
              titulo: "O Poderoso Chefão",
              descricao: "A história da família Corleone, uma das mais poderosas da máfia.",
              link: "https://pt.wikipedia.org/wiki/The_Godfather",
              tags: "drama, crime, máfia, Marlon Brando, Al Pacino"
          },
          {
              titulo: "Um Sonho de Liberdade",
              descricao: "Dois homens presos constroem uma amizade improvável.",
              link: "https://pt.wikipedia.org/wiki/The_Shawshank_Redemption",
              tags: "drama, prisão, esperança, Tim Robbins, Morgan Freeman"
          },
          {
              titulo: "A Lista de Schindler",
              descricao: "Um homem arrisca tudo para salvar judeus durante o Holocausto.",
              link: "https://pt.wikipedia.org/wiki/Schindler%27s_List",
              tags: "drama, guerra, história, Liam Neeson, Ralph Fiennes"
          },
          {
              titulo: "Forrest Gump: O Contador de Histórias",
              descricao: "Um homem com QI baixo testemunha eventos importantes da história americana.",
              link: "https://pt.wikipedia.org/wiki/Forrest_Gump",
              tags: "drama, comédia, Tom Hanks, Robin Wright"
          },
          {
              titulo: "O Lobo de Wall Street",
              descricao: "A ascensão e queda de um corretor da bolsa de valores.",
              link: "https://pt.wikipedia.org/wiki/The_Wolf_of_Wall_Street_(2013_film)",
              tags: "drama, comédia, Leonardo DiCaprio, Jonah Hill"
          },
          {
              titulo: "Parasita",
              descricao: "Uma família pobre se infiltra na casa de uma família rica.",
              link: "https://pt.wikipedia.org/wiki/Parasite_(filme_de_2019)",
              tags: "drama, suspense, Coreia do Sul, Song Kang-ho, Choi Woo-shik"
          },
          // --- ROMANCE ---
          {
              titulo: "Brilho Eterno de Uma Mente Sem Lembranças",
              descricao: "Um casal tenta apagar as lembranças um do outro.",
              link: "https://pt.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind",
              tags: "romance, drama, ficção científica, Jim Carrey, Kate Winslet"
          },
          {
              titulo: "Me Chame Pelo Seu Nome",
              descricao: "Um jovem se apaixona pelo assistente de seu pai durante um verão na Itália.",
              link: "https://pt.wikipedia.org/wiki/Call_Me_by_Your_Name_(filme)",
              tags: "romance, drama, LGBT, Timothée Chalamet, Armie Hammer"
          },
          {
              titulo: "Retrato de uma Jovem em Chamas",
              descricao: "Uma pintora e sua musa se apaixonam na França do século XVIII.",
              link: "https://pt.wikipedia.org/wiki/Portrait_de_la_jeune_fille_en_feu",
              tags: "romance, drama, LGBT, Noémie Merlant, Adèle Haenel"
          }
      
      ]
   