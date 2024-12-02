import React, { useState, useEffect } from 'react';
import { FaCircle } from 'react-icons/fa';
import './styles.css';
import images from './images';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container">
      <h1 className="title">"Esta terra tem dono!"</h1>
      <div className="names centered-content">
        <h2>Por Beatriz Chetco, Eduardo Cosentino e Pâmela Anschau </h2>
      </div>

      <main className="main">
        <span className="span">
          Em 1756, no coração das Missões Jesuíticas, Sepé Tiaraju, um líder guerreiro guarani, proferiu esta frase que ficou marcada na história. 
          Essas palavras, ditas em um momento de resistência, não foram apenas um desafio à ocupação das terras, mas também um grito de defesa da cultura 
          e da identidade de um povo.
        </span>
        <span className="span">
          Embora a frase de Sepé seja conhecida por muitos, o que ela realmente representa e como sua mensagem atravessou gerações é um convite para refletir 
          sobre luta, consequências e legado.
        </span>

        <div className="youtube-video">
          <iframe 
            src="https://www.youtube.com/embed/GvckQkMf15I" 
            frameBorder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            title="Vídeo do YouTube">
          </iframe>
        </div>

        {/*-----------------------------------AQUI COMEÇA A HISTÓRIA-----------------------------------*/}
        <h2 className="subtitle espacoTitulos">História</h2>
        <span className="span">
          No século XVII, os padres jesuítas deram início ao processo de evangelização dos indígenas na América. A missão não era somente catequizar os indígenas, mas transformar a nação existente em um espelho europeu. “Havia gente morando há 12 mil anos aqui. A gente pensa que o mundo começou quando chegaram os nossos sobrenomes”, conta o professor e historiador José Roberto de Oliveira.
        </span>
        <span className="span">
        O processo histórico e cultural da presença humana começa ainda antes. Inicialmente, havia indígenas do período paleolítico, da Idade da Pedra Lascada. Mais tarde, nas margens do Rio Uruguai e, posteriormente, em outros rios, chegaram os indígenas do neolítico, período da Idade da Pedra Polida, aproximadamente 2.500 anos atrás. A partir desse período, começaram a chegar os povos Guarani, Charrua, Minuano, Guenoa e muitos outros, que tinham modos de vida únicos e expressivos.
        </span>
        <div>
        <span className="span">
          O mundo encontrado naquela época, como o de hoje, não era perfeito. Era real, com pressões territoriais, batalhas e particularidades, mas formado por um povo de garra, religiosidade, costumes e espiritualidade. Até a chegada do invasor, que mudou o rumo da história. Em 1492, a ocupação da América pelo colonizador transformou aquilo que já existia em “descobrimento”. 
          <span className="span destaque">
            O fato é que nesta terra havia mais gente do que em Portugal e Espanha. “Como alguém que tem muito menos gente diz que ‘eu te descobri’?”
          </span>
          <span className="span destaqueApos">
            indaga o professor José Roberto de Oliveira.
          </span>
        </span>
        </div>
        <span className="span">
        Dois anos depois, foi assinado o Tratado de Tordesilhas, que dividia o território em duas partes. À direita da linha, ficaram as terras portuguesas; à esquerda, onde hoje é o território gaúcho, as terras espanholas.
        </span>
        <span className="span">
        Após várias tentativas de cristianizar os guaranis das terras demarcadas, em 1604 foi fundada a Província Jesuítica do Paraguai e, em 1609, a primeira redução. Para alguns historiadores, os jesuítas atrapalham o cotidiano dos guaranis, obrigando-os a viver nas reduções. Outros defendem que o primeiro Guarani a se reduzir foi voluntário: “Ele queria saber que Deus era esse”, conta José Roberto.
        </span>
        <span className="span">
        O processo de ocupação dos territórios se espalhou em diversas regiões da América do Sul. Em 1626, foi fundada São Nicolau – a primeira querência do Rio Grande do Sul. Em seguida, foi criada São Xavier, hoje cidade de Garruchos, que posteriormente se mudou para o local onde hoje se localiza San Javier, na Argentina.
        </span>
        <span className="span">
        Na primeira fase, foram fundadas um total de dezoito reduções no estado. Outros estados, pouco lembrados, como o Mato Grosso do Sul, também tiveram quase dez reduções. Todas foram atacadas pelos bandeirantes, incluindo as do Rio Grande do Sul.
        </span>
        <span className="span">
        Nos ataques, os indígenas que sobreviviam eram levados como escravos. “Devem-se aos bandeirantes a morte de 600 mil guaranis: 300 mil foram levados como escravos para São Paulo e Rio de Janeiro, e 300 mil morreram nos ataques”, afirma o historiador.
        </span>
        <span className="span">
        Em 1682, inicia-se o segundo ciclo missioneiro, e São Borja é fundada como a primeira dos Sete Povos das Missões. Popularmente conhecida como a primeira redução, a cidade foi fundada após outras dezoito reduções anteriores, como explica o professor José Roberto: “Muitos disseram isso no passado, mas a verdade é que ela é a primeira do segundo ciclo missioneiro. Veja, se em 1626 foi formada a primeira redução, São Borja foi estabelecida apenas em 1682.”
        </span>
        <span className="span">
        Nesta segunda fase, os Sete Povos das Missões são formados: São Borja; em 1687 nasce São Luiz Gonzaga e retorna São Nicolau e São Miguel das Missões, que havia sido fundada em 1632. Mais tarde, em 1691, São Lourenço. Seguida de São João Batista (1697) e, por último, Santo Ângelo, em 1706. Além das criadas no Rio Grande do Sul, outras reduções foram estabelecidas na Argentina e Paraguai, totalizando 30 reduções.
        </span>
        <span className="span">
        Cada uma delas possuía expressivas indústrias de couro, escultura, fundição, erva-mate e móveis, com produtos vendidos para o mundo todo. 
        <span className='destaque'>“Verdadeiras cidades europeias que existiam na América, as reduções jesuíticas.” (José Roberto de Oliveira)</span>
        </span>
        <span className="span">
        A autonomia desses povos causava receio nos europeus, o que levou ao Tratado de Madrid, em 1750, que negociou os Sete Povos.
        </span>
        <span className="span">
        Após o tratado, os seus efeitos repercutiram por muito tempo. Em 1756, devido ao atraso do exército guarani, Sepé Tiaraju continua lutando no Arroio Caiboaté. Cercado por exércitos portugueses e espanhóis, ele é atacado por uma lança portuguesa; em seguida, o governador de Montevidéu dispara no líder. Com Sepé ainda vivo, atearam fogo em seu corpo antes de decapitá-lo.
        </span>
        <span className="span">
        Morre Sepé Tiaraju, mas nasce um espírito único no povo missioneiro. O mais curioso é o detalhe de sua morte: o atraso. “Mataram-no lá, lamentavelmente, por causa do atraso”, comenta José Roberto. Ele ainda compara esse momento com a atualidade: “Como é a nossa gente hoje? Estamos sempre meio atrasados, sempre meio devagar.”
        </span>
        <span className="span">
        A guerra não cessou, e muitos se deslocaram para as missões. Um grande exército, formado por militares de Portugal e Espanha, marcou um dos momentos mais tristes da história missioneira. Com metralhadoras, canhões e outros aparatos bélicos, 
        <span className='destaque'>mataram 1.500 guaranis em uma hora e quinze minutos.</span>
        </span>
        <span className="span">
        O que permanece desta história é o patrimônio preservado na atualidade. Em 1983, as Ruínas de São Miguel das Missões foram declaradas Patrimônio Cultural Mundial pela Unesco. Além de São Miguel, que é a mais conservada, outros lugares também preservam as ruínas das catedrais das reduções jesuíticas, como São Nicolau, São João Batista, São Lourenço Mártir, São Luiz Gonzaga e Santo Ângelo Custódio. Esta última já teve três igrejas construídas: a jesuítica, a segunda e a atual, revitalizada com uma arquitetura inspirada na de São Miguel Arcanjo.
        </span>
        <span className="span">
        Além das catedrais, outros elementos são considerados monumentos materiais históricos e essenciais para o desenvolvimento local das comunidades envolvidas, como as artes esculpidas em madeira, pedra e ferro.
        </span>

        <h2 className="intertitle espacoTitulos">Arquitetura</h2>
        <span className="span">
        A produção cultural das missões jesuíticas se destaca como um marco singular na história da humanidade. Para o historiador Rodrigo Maurer, a arquitetura missioneira reflete um pensamento mestiço que rompeu com as normas do barroco europeu, resultando em construções de grande originalidade e complexidade. Essa peculiaridade é alvo de estudos e debates entre pesquisadores.
        </span>
        <span className="span">
        Maurer chama atenção para a influência de jesuítas como Primoli, ou Giuseppe Brazanelli, cuja formação trazia o requinte arquitetônico do barroco europeu. Brazanelli, que viveu cerca de uma década em São Borja, teria assimilado parte do legado de Gian Lorenzo Bernini, considerado um dos maiores escultores e arquitetos de Roma e amplamente reconhecido por três Papas consecutivos.
        </span>
        <span className="span">
        A relação entre a pequena São Borja e a histórica Roma, segundo o professor, vai além de simples hipóteses. As estruturas erguidas nesse período revelam uma adaptação criativa do estilo europeu às condições locais, gerando um legado arquitetônico de valor incalculável que ainda impressiona estudiosos e visitantes. Como é dito por ele, “nada nos impede de lançar a suspeita de que pequenos detalhes, por menores que fossem, muito possivelmente se fizeram ilustrar entre as pedras e as madeiras da antiga localidade.” 
        </span>
        <div className='spanImages'>
          <img src={images.um} alt="1" className="images" />
        </div>
        <span className="span">
        Entre os povos indígenas, as ruínas - a tava,  é considerada por alguns como um local sagrado, mas outros sofrem ao vê-la por lembrarem que os seus antepassados sofreram para erguer aquelas pedras. 
        </span>
        <span className="span">
        No século XX, a vinda do escultor Valentin Von Adamovich às Missões o levou a se apaixonar pela história missioneira e por sua arquitetura. O imigrante austriaco ornamentou obras em Pedra Grês e deixou seu legado por onde passou na região – Cerro Largo, Mato Queimado, Rincão Vermelho, Ruínas de São João Batista, Santo Ângelo e São Luiz Gonzaga.
        </span>
        <div className='spanImages'>
          <img src={images.seis} alt="6" className="images" />
        </div>
        <span className="legendaFotoInteira">Altar folheado em ouro na Igreja de Cerro Largo (E) e esculturas em frente à Igreja de São Luiz Gonzaga (D)</span>
        {isMobile ? (
          <>
            <div className="spanImagesComTextoInicio">
              <img src={images.quatro} alt="4" className="imagesComTexto"/>
              <span className="spanText span">
              No município de Santo Ângelo, por exemplo, 
              Adamovich esboçou as sete imagens que representam os padroeiros dos Sete Povos que compõem o alto da fachada da Catedral Angelopolitana. 
              </span>
            </div>
          </>
        ) : (
          <div className="spanImagesComTextoInicio">
            <img src={images.quatro} alt="4" className="imagesComTexto"/>
            <span className="spanText span">
            No município de Santo Ângelo, por exemplo, 
            Adamovich esboçou as sete imagens que representam os padroeiros dos Sete Povos que compõem o alto da fachada da Catedral Angelopolitana. 
            </span>
          </div>
        )}
        {/*-----------------------------------AQUI COMEÇA A RELIGIOSIDADE-----------------------------------*/}
        <h2 className="subtitle espacoTitulos">Religiosidade</h2>
        {isMobile ? (
          <>
            <div className="spanImagesComTextoInicio">
              <span className="spanText span">
              Marco da cristianização e representatividade nas reduções, a Cruz Missioneira tem sua origem conectada com a cidade europeia Caravaca de la Cruz, na Espanha. A partir de 1980, historiadores comprovaram que a cruz não tem relação, como se pensava durante muito tempo, com a Cruz de Lorena, mas sim com a Cruz de Caravaca — um símbolo trazido ao Brasil pelos padres jesuítas espanhóis.
              </span>
              <img src={images.dois} alt="2" className="imagesComTexto"/>
            </div>
            <span className="legendaFoto">Cruz Missioneira marca o local da redução jesuítica em São Miguel das Missões</span>
            <span className="span">
            Os padres que trouxeram a cruz para as missões vinham da região de Múrcia, e muitos religiosos — como Francisco de Robles, Martinho Lopes e Francisco Lardim — faziam parte do grupo que estabeleceu a Missão Jesuítica do Paraguai. Segundo José Roberto, historiador que, há mais de 30 anos, pesquisa sobre a verdadeira origem da cruz missioneira, afirma que foi nessa época, portanto, que a cruz foi trazida para o país e, em seguida, tornou-se símbolo de resistência, memória e cultura.
            </span>
          </>
        ) : (
          <div className="spanImagesComTextoInicio">
            <span className="spanText span">
            Marco da cristianização e representatividade nas reduções, a Cruz Missioneira tem sua origem conectada com a cidade europeia Caravaca de la Cruz, na Espanha. A partir de 1980, historiadores comprovaram que a cruz não tem relação, como se pensava durante muito tempo, com a Cruz de Lorena, mas sim com a Cruz de Caravaca — um símbolo trazido ao Brasil pelos padres jesuítas espanhóis.
            Os padres que trouxeram a cruz para as missões vinham da região de Múrcia, e muitos religiosos — como Francisco de Robles, Martinho Lopes e Francisco Lardim — faziam parte do grupo que estabeleceu a Missão Jesuítica do Paraguai. Segundo José Roberto, historiador que, há mais de 30 anos, pesquisa sobre a verdadeira origem da cruz missioneira, afirma que foi nessa época, portanto, que a cruz foi trazida para o país e, em seguida, tornou-se símbolo de resistência, memória e cultura.
            Por outro lado, muitos aspectos da religiosidade indígena foram transformados. Não se pode afirmar que ela foi inteiramente apagada, uma vez que elementos de suas crenças foram incorporados ao cristianismo missioneiro. 
            </span>
            <img src={images.dois} alt="2" className="imagesComTexto"/>
          </div>
        )}
        {isMobile ? (
          <div>
          <span className="span">
            Por outro lado, muitos aspectos da religiosidade indígena foram transformados. Não se pode afirmar que ela foi inteiramente apagada, uma vez que elementos de suas crenças foram incorporados ao cristianismo missioneiro. “Muitas pessoas durante muito tempo assim o fizeram, colocaram o povo guarani como um povo que se submeteu a essa influência cultural, que abandonou o seu modo de ser, e isso não é verdade”, afirma a historiadora e pesquisadora indígena Bedati Aparecida Finokiet.
          </span>
          <span className="span">
            Mesmo com as reduções, o povo Guarani preservou sua espiritualidade. “É um povo que busca, apesar da invasão das suas terras, realizar a manutenção da sua sociedade, cultura e espiritualidade. Está tudo conectado”, conclui a professora.
          </span>
          </div>
        ) : (
            <span className="legendaFoto">Cruz Missioneira marca o local da redução jesuítica em São Miguel das Missões</span>
          )}
        {isMobile ? (
          <span className="legendaFoto"></span>
        ) : (
          <div>
            <span className="span">“Muitas pessoas durante muito tempo assim o fizeram, colocaram o povo guarani como um povo que se submeteu a essa influência cultural, que abandonou o seu modo de ser, e isso não é verdade”, afirma a historiadora e pesquisadora indígena Bedati Aparecida Finokiet.</span>
            <span className="span">Mesmo com as reduções, o povo Guarani preservou sua espiritualidade. “É um povo que busca, apesar da invasão das suas terras, realizar a manutenção da sua sociedade, cultura e espiritualidade. Está tudo conectado”, conclui a professora.</span>
          </div>
          )}

        <h2 className="intertitle espacoTitulos">Martírio dos três padres</h2>
        <span className="span">
          Em 1628, o Pe. Roque Gonzales fundou a redução de Todos os Santos, em Caaró, atualmente município de Caibaté. Segundo a ideia reducionista, não foi a totalidade dos povos indígenas que aceitaram a presença dos missionários. De acordo com essa visão, um estranhamento ocorreu porque os padres mudaram o antigo modo de vida dos guaranis.
          Liderando a resistência indígena, o pajé Nheçu mobilizou os povos contra o processo de evangelização, culminando no martírio dos padres Roque Gonzales e Afonso Rodrigues nas reduções de Caaró e, posteriormente, do padre João de Castilhos na redução de Assunção do Ijuí, hoje município de Roque Gonzales.
        </span>
        <span className="span">
          Por outro lado, a professora Bedati explica que, recentemente, essa história passou a ser contada de outra forma. “Durante muito tempo a história foi contada a partir da versão dos documentos oficiais da Companhia de Jesus, ou seja, muitos historiadores vão escrever essa história sobre esses registros.”
        </span>
        <span className="span">
          Ela concorda que a maneira como os padres jesuítas foram mortos é inegavelmente brutal, mas a maneira como retrata Nheçu e seus liderados como “selvagens” não é a mais ideal. A proposta é olhar para além da narrativa contada nos livros, pensando pela perspectiva da resistência guarani e de seu modo de ser. Sob essa visão, a promoção da revolta está ligada com o pensamento de “nós não queremos essa religião, nós não queremos ser batizados, nós temos os nossos costumes, nós temos as nossas crenças, a nossa cosmologia, o nosso modo de ser e de estar no mundo, e nós não precisamos disso”, explica a historiadora.
        </span>
        <div className='spanImages'>
          <img src={images.cinco} alt="5" className="images" />
        </div>
        <span className="legendaFotoInteira">Estátua em homenagem ao Cacique Nheçu, localizada na Trilha da Integração Guarani-Jesuítica no município de Roque Gonzales</span>
        
        <h2 className="subtitle espacoTitulos">A Herança das Missões</h2>
        <span className="span">
          Acabaram as missões, mas o legado segue vivo. A partir dos feitos da história, a influência indígena permanece presente na vida dos missioneiros em diversos aspectos. No vocabulário, a regionalidade evidencia a permanência da cultura indígena. Além da fala, os traços das novas gerações carregam marcas que identificam os povos descendentes de guaranis. “Aquela gente não morreu, os descendentes daquela gente estão vivos aí. É só você olhar. É a nossa gente”, enfatiza o professor José Roberto.
        </span>
        <span className="span">
          Além disso, em outras facetas também se encontram marcas da presença missioneira...
        </span>
        <h2 className="intertitle espacoTitulos">Arte Missioneira</h2>
        <span className="span">As expressões artísticas missioneiras contribuíram significativamente para a compreensão dos pensamentos e feitos históricos nas missões. Geralmente feitas de madeira, seguiam os modelos de estética europeia e surgiram para ser um auxílio visual à catequese dos nativos. </span>
        <span className="span">As esculturas missioneiras são exemplos da tecnologia e da criatividade dos povos da época. Infelizmente, grande parte deste acervo foi perdida com o passar do tempo, mas ainda pode ser encontrada em cidades como São Borja, São Luiz Gonzaga e São Miguel das Missões.</span>
        <div className='spanImages'>
          <img src={images.sete} alt="7" className="images" />
        </div>
        <span className="legendaFotoInteira">Esculturas barrocas encontradas nas Missões</span>
        
        <h2 className="intertitle espacoTitulos">Artesanato</h2>
        <span className="span">Tão importantes quanto a história, são os materiais produzidos a partir dela. O artesanato, além de potencializador do turismo e da economia da região, também é uma forma de manter a cultura missioneira viva, para a atual e próximas gerações.</span>
        <span className="span">Por ser uma maneira autêntica de manter a cultura dos povos tradicionais, o artesanato reflete a habilidade desses povos em trabalhar os recursos que a natureza oferece - folhas, sementes, pedras, madeira e penas.</span>
        <span className="span">Atualmente, o artesanato continua sendo produzido por comunidades indígenas, mas também se expandiu, tornando-se uma fonte de renda de muitas famílias missioneiras. A Cutelaria e Museu Missioneiro, localizada no município de Caibaté, é um exemplo desse legado, que já perpassa três gerações. O mais novo, João Vitor Corrêa, afirma que esse trabalho vai além do lucro e serve para preservar a cultura das Missões: "Nosso trabalho não é apenas um hobby, mas também uma forma de mostrar às novas gerações como era a vida antigamente, com peças como balanças, máquinas de costura, panelas e ferramentas antigas. Criamos um espaço onde reunimos essas memórias, incluindo facas, arreios e obras de arte em madeira, porque acreditamos que isso agrega muito, ajudando as pessoas a conhecerem e valorizarem a história da nossa região."
        </span>
        <div className='spanImages'>
          <img src={images.oito} alt="8" className="images" />
        </div>
        <span className="legendaFotoInteira">Museu Missioneiro que inclui artefatos e obras de madeira como forma de preservar a cultura das Missões</span>
          <span className='span'>Inspirado pela Cutelaria e Museu Missioneiro, também localizado em Caibaté, o professor de história Charlei Knebel Willers criou seu próprio museu.
          </span>
          <span className='span'>“Manter a cultura missioneira é uma luta constante”, afirma Charlei, explicando que esse foi o principal motivo para a criação do espaço. Como historiador, ele provoca reflexões ao apontar uma lacuna nos materiais didáticos: “Nos livros de história, nos livros didáticos, percebe-se que há, quando muito, meia página dedicada à região das Missões.” Por isso, ele busca reverter essa falta abrindo o museu ao público.</span>
          <span className='span'>Charlei também destaca a importância de valorizar o trabalho dos indígenas. “Cada vez que vou a São Miguel, compro um artesanato produzido por eles”, comentou. Ele conclui enfatizando: “Procuro valorizar, dessa forma, um pouco da herança indígena missioneira, adquirindo o artesanato que eles produzem.”
          </span>
          <h2 className="intertitle espacoTitulos">Música</h2>
          <span className='span'>A melodia missioneira é carregada por uma sonoridade única. Ao interpretar as experiências e os costumes, os artistas gaúchos, além de narrar uma história, preservam os gostos, as crenças e a identidade cultural da terra. Através de suas canções, a memória de um dos momentos mais significativos da formação do estado e de seu povo se mantém viva, perpetuando a influência das missões e a conexão entre os povos indígenas, os missionários e os descendentes que ainda hoje habitam a região.</span>

          <div class="youtube-video">
          <iframe 
            src="https://www.youtube.com/embed/y5YuVjB2m_g" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen 
            title="Vídeo do YouTube">
          </iframe>
        </div>
        <span className="legendaVideo">Grupo Fundo da Grota</span>
        {isMobile ? (
          <>
            <div className="spanImagesComTexto">
              <img src={images.tres} alt="3" className="imagesComTexto"/>
              <span className="spanText span">
                Emerson Gottardo é um cantor de papel fundamental na manutenção da melodia missioneira. Com carreira consolidada, ele carrega o propósito de 
              </span>
            </div>
            <span className="span">levar ao ouvinte uma experiência de pertencimento. “Eu canto a história do valor da nossa terra, todo esse legado que vem desde o tempo dos indígenas e jesuítas. Nenhuma canção é cantada por cantar; elas sempre têm um propósito”, conta o músico.</span>
          </>
        ) : (
          <div className="spanImagesComTexto">
            <img src={images.tres} alt="3" className="imagesComTexto"/>
            <span className="spanText span">
            Emerson Gottardo é um cantor de papel fundamental na manutenção da melodia missioneira. Com carreira consolidada, ele carrega o propósito de levar ao ouvinte uma experiência de pertencimento. “Eu canto a história do valor da nossa terra, todo esse legado que vem desde o tempo dos indígenas e jesuítas. Nenhuma canção é cantada por cantar; elas sempre têm um propósito”, conta o músico.
          </span>
          </div>
        )}
          <span className='span'>“Eu procuro trabalhar muito o jeito missioneiro de tocar o violão e a gaita de botão”, diz ele ao falar sobre a importância da valorização dos instrumentos em uma canção. E, ao citar uma de suas maiores inspirações, Noel Guarany, destaca o jeito único do missioneiro de cantar: “Um vibrato específico de voz, o nosso jeito de cantar mais forte. E, mais importante ainda, acompanhar a música com emoção.”
          </span>
          <span className='span'>O movimento nativista, no Rio Grande do Sul, carrega a potência da história consigo. “Ele é muito forte, mas também é muito fechado. E eu sinto que não deveria ser assim. Hoje dá para dizer que a música nativista é elitizada”, conta Emerson ao refletir sobre as barreiras entre a música e o povo que deveria consumi-la.
          </span>
          <div class="youtube-video">
          <iframe  
            src="https://www.youtube.com/embed/GowpAqjpGwI" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen 
            title="Vídeo do YouTube">
          </iframe>
        </div><span className="legendaVideo">Emerson Gottardo - Galpão Nativo - Mais um Missioneiro | Youtube</span>
        {isMobile ? (
          <>
            <div className="spanImagesComTexto"><span className="spanText span">
              Renato Gottardo, em suas músicas fandangueiras, traz suas referências de vida e arte. O cantor relata ter </span>
              <img src={images.onze} alt="11" className="imagesComTexto"/>
              </div>
            <span className="span">aprendido ao longo dos anos sobre o valor dessa história e da riqueza da guerra missioneira, com todas as suas consequências, para compor suas músicas. Ele é sincero ao dizer o que considera ter ocorrido: “O que aconteceu nos Sete Povos das Missões foi uma chacina.”</span>
          </>
        ) : (
          <div className="spanImagesComTexto"><span className="spanText span">
          Renato Gottardo, em suas músicas fandangueiras, traz suas referências de vida e arte. O cantor relata ter aprendido ao longo dos anos sobre o valor dessa história e da riqueza da guerra missioneira, com todas as suas consequências, para compor suas músicas. Ele é sincero ao dizer o que considera ter ocorrido: “O que aconteceu nos Sete Povos das Missões foi uma chacina.”</span>
            <img src={images.onze} alt="11" className="imagesComTexto"/>
            </div>
        )}

        <span className='span'>Carregando a bravura dos povos, ele enfatiza a força e identidade própria da música missioneira. “Ela tem uma identidade de cantar com muita garra, mas, ao mesmo tempo, com muita melodia. Sempre contando a história desses ‘peleadores’, como o Índio Sepé.”
        </span>
        <span className='span'>Gottardo sempre traz em suas letras situações de identificação com o público ao cantar sobre sua vida de maneira simples e real. “Eu, como compositor, procuro falar verdades, porque elas vêm com muito mais naturalidade.” Ele não descarta o fato de cantar o imaginário, mas enfatiza que não seria capaz de transmitir tanta emoção quanto cantar aquilo que viveu. E explica que não se arrepende de optar por cantar sua simplicidade e, inclusive, destaca: “Minhas composições receberam notoriedade no cenário da música do Rio Grande do Sul e fora dele devido a essa emoção que só posso transmitir pela veracidade das palavras.”
        </span>
        <span className='span'>Por ser um músico regional, conta que muitas dificuldades são enfrentadas por ele e seu grupo, Os Garotos do Fandango. Mas, ao conseguir levar a cultura das missões para outras regiões, sente orgulho de sua trajetória e maneira de manter a cultura viva. “Nós estamos, falando geograficamente, totalmente deslocados dos grandes centros, das mídias, da capital, da televisão. Então, para fazer a nossa musicalidade chegar até lá, tu tem que ter muito talento e muita persistência. E o missioneiro ‘não frouxa o garrão’, então, por sermos persistentes, as portas, aos poucos, foram se abrindo pra gente”, finaliza Renato.
        </span>
        <div class="youtube-video">
          <iframe 
            src="https://www.youtube.com/embed/24xrxPlDp6c" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen 
            title="Vídeo do YouTube">
          </iframe>
        </div><span className="legendaVideo">A Cara do Rio Grande - Garotos do Fandango | Youtube</span>

        {isMobile ? (
          <>
            <div className="spanImagesComTexto">
              <img src={images.dez} alt="10" className="imagesComTexto"/>
              <span className="spanText span">
              Marines Siqueira, uma mistura de bugra e guerreira, como ela mesma se autodenomina, representa as mulheres na música missioneira. 
            </span>
            </div>
            <span className="span">Crescendo ao som de artistas como Cenair Maicá e Jayme Caetano Braun, ela iniciou sua carreira na música aos treze anos.
            </span>
          </>
        ) : (
          <div className="spanImagesComTexto">
            <img src={images.dez} alt="10" className="imagesComTexto"/>
            <span className="spanText span">
            Marines Siqueira, uma mistura de bugra e guerreira, como ela mesma se autodenomina, representa as mulheres na música missioneira. Crescendo ao som de artistas como Cenair Maicá e Jayme Caetano Braun, ela iniciou sua carreira na música aos treze anos.
          </span>
          </div>
        )}
        <span className="span">Além de encantar o público com suas canções, Marines criou o projeto “Gaiteiro dos Sete Povos”, voltado à cultura missioneira. O projeto busca influenciar pessoas de várias faixas etárias, atuando em colégios e asilos na cidade onde ela reside. “É gratificante levar nossa cultura para que outras pessoas a conheçam e, ao mesmo tempo, uma grande responsabilidade, pois as Missões são o berço de talentos estimados em todos os lugares”, afirma.</span>
        <div class="youtube-video">
          <iframe 
            src="https://www.youtube.com/embed/tiIilKeNwDI" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen 
            title="Vídeo do YouTube">
          </iframe>
        </div>
        <span className="legendaVideo">Marines Siqueira - BALA NA AGULHA | Youtube</span>
        {isMobile ? (
          <>
            <div className="spanImagesComTexto">
            <span className="spanText span">
              As Maragatas são o futuro da música feminina, com um impacto significativo nas novas gerações. 
            </span>
              <img src={images.dezoito} alt="18" className="imagesComTexto"/>
            </div>
            <span className="span">“A música missioneira sempre nos recebeu de portas abertas”, afirmam elas.
            </span>
          </>
        ) : (
          <div className="spanImagesComTexto"><span className="spanText span">
          As Maragatas são o futuro da música feminina, com um impacto significativo nas novas gerações. “A música missioneira sempre nos recebeu de portas abertas”, afirmam elas.</span>
            <img src={images.dezoito} alt="18" className="imagesComTexto"/>
            </div>
        )}
        <span className="span">O grupo é formado por Letusa Gomes de Moraes, Naira Gomes Batista, Julia Prevedello Massoco e Bianca Massoco. Naturais de São Miguel das Missões, as jovens contam que, desde o início de sua trajetória musical, optaram pelo estilo missioneiro. “Temos orgulho de cantar a nossa terra e levar o nosso legado a todos os lugares onde nos apresentamos.”</span>
        <span className="span">Levando a cultura missioneira para diversas regiões do país, elas se dedicam a oferecer o melhor para o público. “É um desafio, mas fazemos com carinho e amor”, admite Julia Massoco. Esse perfeccionismo, segundo elas, reflete o desejo de valorizar a terra natal e o carinho cultivado em uma família que sempre preservou as tradições.</span>
        <span className="span">“Não tem preço.” Assim elas definem o reconhecimento de seu trabalho. Com entusiasmo, as Maragatas compartilham que, para elas, o verdadeiro retorno vem do público. “Se, após uma apresentação, uma pessoa nos disser que gostou das músicas, já terá valido a pena”, destacam.</span>
        <span className="span">Mesmo em uma sociedade marcada pela desigualdade de gênero, elas afirmam ter sido sempre bem recebidas no universo da música missioneira, que descrevem como “hospitaleira”. Com carinho, elas explicam a essência das canções que interpretam: “A música missioneira é linda. Ela não é feita apenas para vender, mas para contar a história de um povo.”</span>
        <div class="youtube-video">
          <iframe 
            src="https://www.youtube.com/embed/0XUnjSmRz0Q" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen 
            title="Vídeo do YouTube">
          </iframe>
        </div><span className="legendaVideo">Trecho da música Meu canto à São Miguel do grupo As Maragatas</span>
        <h2 className="intertitle espacoTitulos">Culinária</h2>
        <span className="span">
        Nas reduções de São Miguel das Missões, o padre Cristóvão de Mendoza introduziu o gado no estado, que posteriormente se integrou à cultura do Rio Grande do Sul. Atualmente, a figura do gaúcho é fortemente marcada pela gastronomia. “Nós somos seres da pecuária, marcados pelo churrasco, que também foi criado nas reduções”, explica o historiador José Roberto.

          </span>
          <span className="span">
          Já a erva-mate era uma planta sagrada para os povos guaranis. Quando os jesuítas chegaram, perceberam que a erva era consumida principalmente pelos pajés e consideraram que essa prática, não religiosa, estava relacionada com demônios. A partir disso, seu consumo foi proibido e, segundo a historiadora Bedati Finokiet, “quem a consumia era punido com chicotadas e outros tipos de punições.”

          </span>
          <span className="span">
          Assim como o churrasco, os gaúchos herdaram o consumo da erva-mate, utilizada no preparo do chimarrão, que foi oficializado, em 2023, como patrimônio cultural imaterial do estado.
          </span>
          <div className='spanImages'>
          <img src={images.doze} alt="12" className="images" />
        </div>
        <span className="legendaFotoInteira">Foto (E): Divulgação / Tiago Cadó. Foto (D): Divulgação / Cutelaria e Museu Missioneiro</span>

        <h2 className="subtitle espacoTitulos">Turismo</h2>
        <span className="span">
        O turismo, essencial para a valorização dos patrimônios históricos, mantém vivo o legado missioneiro. O historiador do Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN), Filipi Pompeu, que trabalha diretamente com o Parque Histórico Nacional das Missões, destaca que o turismo, quando bem aplicado, é uma das melhores formas de educação patrimonial. Compreendendo essa importância, programações artísticas e culturais passaram a ganhar espaço, compondo o turismo missioneiro.
          </span>
          <div className='spanImages'>
          <img src={images.treze} alt="13" className="images" />
        </div>
        <span className="legendaFotoInteira">Turistas do mundo todo deslocam-se para as Missões</span>

        {isMobile ? (
          <>
            <div className="spanImagesComTextoInicio">
            <img src={images.quatorze} alt="14" className="imagesComTexto"/>
              <span className="spanText span">
              Em 2024, foi realizado o segundo ano da “Mostra de Cinema das Missões”, uma iniciativa que busca proporcionar uma experiência cinematográfica ao ar livre no sítio arqueológico de São Miguel das Missões. O co-idealizador e diretor de criação da mostra, Darius Pippi, conta que o objetivo é reconstruir o espaço das ruínas como um cinema, enquanto expressão artística, de forma serena e coletiva, fazendo as pessoas se sentirem presentes. 
              </span>
            </div>
            <span className="legendaFotoEsquerda">Mostra de Cinema das Missões realizada dentro do Sítio Arqueológico São Miguel Arcanjo</span>
            <span className="span">Da mesma forma, a produtora curatorial da mostra, Manuela Fetter Nicoletti, também acredita que propostas como esta têm o potencial de se tornar uma plataforma de desenvolvimento, tanto do turismo quanto do audiovisual na região. “A gente buscou filmes que refletissem essa mesma realidade em outros lugares do mundo. Tudo isso para promover a conscientização sobre o que é um patrimônio histórico material e imaterial”, afirma Manuela.</span>
          </>
        ) : (
          <div className="spanImagesComTextoInicio">
            <img src={images.quatorze} alt="14" className="imagesComTexto"/>
            <span className="spanText span">
            Em 2024, foi realizado o segundo ano da “Mostra de Cinema das Missões”, uma iniciativa que busca proporcionar uma experiência cinematográfica ao ar livre no sítio arqueológico de São Miguel das Missões. O co-idealizador e diretor de criação da mostra, Darius Pippi, conta que o objetivo é reconstruir o espaço das ruínas como um cinema, enquanto expressão artística, de forma serena e coletiva, fazendo as pessoas se sentirem presentes. Da mesma forma, a produtora curatorial da mostra, Manuela Fetter Nicoletti, também acredita que propostas como esta têm o potencial de se tornar uma plataforma de desenvolvimento, tanto do turismo quanto do audiovisual na região. “A gente buscou filmes que refletissem essa mesma realidade em outros lugares do mundo. Tudo isso para promover a conscientização sobre o que é um patrimônio histórico material e imaterial”, afirma Manuela.
        </span>
          </div>
        )}
         {isMobile ? (
          <>
            <span className="span"></span>
          </>
        ) : (
          <div className="spanImagesComTexto">
          <span className="legendaFotoEsquerda">
          Mostra de Cinema das Missões realizada dentro do Sítio Arqueológico São Miguel Arcanjo</span>
          </div>
        )}

        <h2 className="subtitle espacoTitulos">E os povos que ficaram, o que aconteceu com eles?</h2>
        <span className="span">
        Apesar de todas as condições adversas — não terem a sua mata, seu território livre para transitar, para caçar, mesmo sem possibilidade de plantar e colher como antes, “o povo Guarani segue sendo o povo Guarani”, continua explicando a pesquisadora indígena Bedati Finokiet.
        </span>
        
        <span className="span">
        Alguns povos optaram por se organizar coletivamente em ambientes onde ainda era permitido expressar suas culturas — levando em consideração que, em 1850, falar a língua guarani foi proibido. “Uma parte da história que não é contada nos livros”, comenta o professor José Roberto. Outros povos se deslocaram em direção a paisagens e territórios longamente conhecidos, como Valle Lunarejo e Iberá. Ainda outros, em número expressivo, deram continuidade às suas vidas como “peões” em estâncias da época. “A impressão que fica, ainda muito comum, é lançar a máxima de terra arrasada”, afirma Rodrigo Maurer.
        </span>
        
        <span className="span">
        As Missões e a experiência reducional representaram um importante momento na vida das comunidades envolvidas, mas não se limitaram a isso. Uma das remanescentes do povo Guarani-Mbyá, Fabiana, conta que reside, com sua família e outras trinta, na aldeia Koenju, em São Miguel das Missões, reconhecida pelo IPHAN, em 2014, como patrimônio cultural brasileiro. Toda a comunidade produz artesanatos feitos de sementes, madeira, folhas, penas, pedras e outros materiais encontrados na natureza. Toda semana, as famílias que ali residem se dividem em dois grupos para vender seus artesanatos, chamados rembiapó, nas ruínas. “É o nosso trabalho, o trabalho do nosso povo”, afirma.
        </span>
        <div className='spanImages'>
          <img src={images.quinze} alt="15" className="images" />
        </div>
        <span className="legendaFotoInteira">Venda dos artesanatos produzidos pelo povo Guarani-Mbya no Museu das Missões</span>
        <span className='span'>A historiadora  e antropóloga, Bedati Finokiet, explica que atualmente os povos guaranis não têm as mesmas condições que no passado. “Não tem acesso a mata livre, não podem transitar para buscar caça - aliás, ele não tem mais essa caça. Não possuem mais as cercas”, explica a pesquisadora da história indígena.</span>
        
        <h2 className="subtitle espacoTitulos">Letramento Social</h2>
        <span className="span">
        Assim como as obras de arte, os livros têm a capacidade de convidar os leitores a uma profunda reflexão sobre a história conhecida e suas entrelinhas. Compreender a história das missões é importante não apenas para os que nela residem, como também para os povos de outras partes do mundo. Muitas vezes, a falta de políticas públicas reduz a percepção de necessidade de estudos e valorização dos povos e da região.</span>
        <span className="span">
        Segundo a  professora Bedati, é necessário colocar os indígenas para falar sobre o que eles querem, respeitar seus modos de viver e de pensar. Também é preciso excluir a ideia romantizada que considera os indígenas como seres manipuláveis e ingênuos, sem poder de decisão e de definição. “Os povos indígenas estão ocupando novos espaços, como é o caso da universidade. Eles estão se formando na área da medicina, do direito, da antropologia, na área das licenciaturas. Para que eles se apropriem também dessa linguagem, eles se convenceram de que é importante ocuparem o espaço da escola e também da política, ou seja, ocuparem cadeiras nas assembleias legislativas, na Câmara de Deputados, no Senado, nas câmaras de vereadores e nas prefeituras, porque é aí que se definem as leis e coisas que impactam diretamente eles”, afirma.
        </span>
        {isMobile ? (
          <>
            <div className="spanImagesComTextoInicio">
              <span className="spanText span">
              Alguns autores buscam informar os cidadãos a respeito da importância e do legado desse povo. Um desses incentivadores é o autor Clayton Cardoso, que, em seus livros em quadrinhos, conta a história das missões. 
        </span>
              <img src={images.dezesseis} alt="16" className="imagesComTexto"/>
            </div>
            <span className="legendaFoto">Exibição dos livros em quadrinhos do artista Clayton Cardoso</span>
            <span className="span"> Reconhecendo que muitas pessoas desconhecem a relevância dessa abordagem, ele enfatiza que busca, em suas obras, convidar os leitores a repensarem a importância do tema. “Eu considero bem importante. Por isso fiz a escolha de falar sobre a história indígena”, afirma.</span>
          </>
        ) : (
          <>
            <div className="spanImagesComTextoInicio">
              <span className="spanText span">
              Alguns autores buscam informar os cidadãos a respeito da importância e do legado desse povo. Um desses incentivadores é o autor Clayton Cardoso, que, em seus livros em quadrinhos, conta a história das missões. Reconhecendo que muitas pessoas desconhecem a relevância dessa abordagem, ele enfatiza que busca, em suas obras, convidar os leitores a repensarem a importância do tema. “Eu considero bem importante. Por isso fiz a escolha de falar sobre a história indígena”, afirma.
              “Na música, se canta muito esse sangue missioneiro indígena, mas quando a gente vê hoje os indígenas circulando pela cidade, surge o preconceito e discriminação. As pessoas não os querem ali naqueles espaços, como se eles fossem sujos, sem considerar que a terra para eles é vida”, interroga a historiadora Bedati Finokiet.
              </span>
              <img src={images.dezesseis} alt="16" className="imagesComTexto"/>
            </div>
            <span className="legendaFoto">Exibição dos livros em quadrinhos do artista Clayton Cardoso</span>
          </>
        )}
        {isMobile ? (
          <>
        <span className='span'>“Na música, se canta muito esse sangue missioneiro indígena, mas quando a gente vê hoje os indígenas circulando pela cidade, surge o preconceito e discriminação. As pessoas não os querem ali naqueles espaços, como se eles fossem sujos, sem considerar que a terra para eles é vida”, interroga a historiadora Bedati Finokiet.</span>
            </>
        ) : (
          <></>
        )}
        <h2 className="subtitle espacoTitulos">Curiosidades</h2>
        <div className="spanItem">
          <span className="span"><FaCircle className="circleIcon" />
          No Carnaval do Rio de Janeiro, em 2005, o samba-enredo da Escola Beija-Flor de Nilópolis foi sobre as Missões Jesuíticas e os Sete Povos das Missões. O presidente da Associação dos Municípios das Missões, Adair José Trott, conta que a abertura foi realizada pela equipe das missões e destaca que o desfile deu protagonismo à história da região das missões, à redução dos Sete Povos das Missões Jesuítico-Guarani. O resultado foi positivo, pois a escola foi campeã do desfile. “O mundo todo conheceu a nossa terra. Foi uma bela apresentação”, destaca ele.</span>
        </div>
        <div className='spanImages'>
          <img src={images.dezessete} alt="17" className="images" />
        </div>
        <span className="legendaFotoInteira">Camisetas utilizadas pelos colaboradores do desfile campeão do carnaval carioca de 2005.</span>
    
        <div className="spanItem">
          <span className="span"><FaCircle className="circleIcon" />
          Em sua obra Ensaio sobre os Costumes e o Espírito das Nações (1756), o filósofo iluminista Voltaire descreve as missões jesuíticas como um raro "Triunfo da Humanidade", considerando o contexto da colonização das Américas. Voltaire admirava o modelo das reduções missioneiras da região que hoje abrange Brasil, Argentina e Paraguai.
        </span>
        </div>
        <div className="spanItem">
          <span className="span"><FaCircle className="circleIcon" />
          Considerado um dos intelectuais e historiadores de maior referência no século XVIII, o padre italiano Ludovico Antonio Muratori elogia as missões como um exemplo de valores cristãos que, se aplicados pelas demais comunidades, poderiam beneficiar a humanidade. Em sua obra Il Cristianesimo Felice nelle Missioni de' Padri della Compagnia di Gesù nel Paraguay (1743), Muratori afirmou que as missões eram a mais bela expressão do cristianismo na prática, destacando-as como um modelo de compaixão, paz e justiça social.
          </span>
        </div>
        <div className="spanItem">
          <span className="span"><FaCircle className="circleIcon" />
          Conhecido por seu ativismo político e por ser genro de Karl Marx, Paul Lafargue se referiu às missões jesuíticas como exemplo de sociedade comunal bem-sucedida. Esse “modelo comunal”, para Lafargue, era uma demonstração de como o socialismo, defendido por Marx, poderia ser uma prática pertinente — ainda que reconhecesse os desafios e limites da estrutura.
          </span>
        </div>
        <div className='espaco'></div>
        <h2 className="subtitle">Contatos</h2>
        <span className="span">
        Beatriz Chetco - (55) 999272487
        </span><span className="span">
        beatrizchetcojornalismo@gmail.com 
        </span>
        <span className="span">_________________________________</span>
        <span className="span">
        Eduardo Cosentino - (55) 999226632
        </span> <span className="span">
        eduardocosentinojornal@gmail.com 
        </span>
        <span className="span">__________________________________</span>
        <span className="span">
        Pâmela Anschau - (55) 999785587
        </span><span className="span">
        jornalismopamelaanschau@gmail.com
        </span>
        <span className="span">__________________________________</span>
        <h2 className="subtitle">Site desenvolvido por:</h2>
        <span className="span">
        Adriano Reidel - (55) 997299507 
        </span><span className="span">
        adrianojosereidel@hotmail.com 
        </span>
        <div className='espaco'></div>
      </main>
    </div>
  );
}

export default App;
