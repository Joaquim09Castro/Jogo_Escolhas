//Função Principal (Jogo)

function rodaJogo(){
  
  apresentaCenario(); //Texto introdutório
  
  var primeiraFaseResultado = primeiraFase(); //Primeira fase do jogo:

  if (primeiraFaseResultado == 1) { //Primeira Fase resposta correta

    alert(" A voz se torna quase perfeita ao seu ouvido quando fala.\n\n- Reconhecer sua morte é o primeiro passo de sua jornada.\n- Agora deve ir até o porto, com sorte o coveiro não lhe retirou o custo da passagem.\n- Não ter como pagar a passagem significa ter de fazer a provação do barqueiro.");

    var escolhaEspirito1 = primeiroEspirito(); //Desafio espírito 1

    if (escolhaEspirito1 == 1) { //ajuda o espírito 1

     alert(" Você reluta por um instante mas, cede a compaixão\n Os olhos da fragil figura brilham em extase\n\n- Obrigado, minha gratidão eterna é sua.\n\n Ao mesmo tempo que seu bolso se torna mais leve, o mesmo acontece à sua consciência");

      var segundaFaseResultado = segundaFase(); //Desfio do Barqueiro

      if (segundaFaseResultado == 1) { //Segunda Fase resposta errada

        alert(" Um circulo brilha no chão a seu lado.\n Você ergue a corda, carregando-a até o local, a posiciona no centro do glifo radiante e aguarda.\n Em segundos, a corda ganha vida e se enrrosca em seu corpo.\n Suas tentativas de se desvencilhar desse abraço mortal servem, apenas, para tirar seu equilíbrio. Você cai na água.\n A água se agita por um instante antes de voltar a seu estado plácido.");
        document.write("FIM");
        
      } else if (segundaFaseResultado == 2) { //Segunda Fase resposta errada

        alert(" Você agarra a pedra e, a mesma começa a brilhar.\n Ao olhar para o brilho forte que o objeto emite você começa a se sentir puxado para ele.\n Suas tentativas de se livrar da pequena rocha são em vão, pouco a pouco você é consumido pela mesma até que não ha mais vestígios de sua existencia naquele local\n A pedra cai e produz um som abafado, tal qual um corpo inerte e pesado.");
        document.write("FIM");

      } else if (segundaFaseResultado == 3){ //Segunda Fase resposta correta

        alert(" Suas mãos encostam a chave e a mesma desaparece.\n Você começa a ver o ambiente a sua volta se retorcer e, como se fosse tinta envelhecida, descascar.\n Ao fim dessa transformação, você percebe que se encontra em outro lugar completamente diferente e, é quando escuta:\n\n- Otima escolha, me pergunto o que teria te levado a isso.\n- Talvez tenha sido sorte, talvez algo que disse a ti, de qualquer forma, esta mais perto do final dessa jornada.\n\n Tão abruptamente como surgiu, a figura some, e você se vê sozinho em um local desconhecido.");
        
        var escolhaEspirito2 = segundoEspirito(); //Desafio espírito 2

        if (escolhaEspirito2 == 1) { //ajuda o espírito 2

          alert(" A voz do pequeno ser alcança seus ouvidos.\n Sem pensar duas vezes, você, após se refrescar, o coloca nas costas e da prosseguimento à viagem.\n Enquanto continua sua jornada, nota que quase não sente o peso de seu companheiro temporário.\n Talvez seja o fato dele ter permanecido muito tempo naquele ponto mas, algo em você diz que existe outro motivo.");

          var terceiraFaseResultado = terceiraFase(); //Noite no deserto

          if (terceiraFaseResultado == 1) { //Terceira Fase resposta errada
 
            alert(" Você recolhe um pouco da vegetação morta e tenta utiliza-la para construir uma fogueira mas, a temperatura não deixa que o atrito entre gravetos produza uma fagulha\n Suas mãos começam a ficar dormente e logo, sua consciencia começa a se esvair.");
            document.write("FIM");
           
          } else if (terceiraFaseResultado == 2) { //Terceira Fase resposta correta
             
            alert(" Você agarra o espírito que o acompanha durante a viagem e cola seu corpo ao dele.\n O frio da noite, primeiramente, se mantem implacavel mas, algo começa a emanar do corpo que segura.\n Uma luz forte se faz presente no meio da escuridão, e a voz daquele que ajuda se faz presente:\n\n- Já estou condenado mas, deixe-me fazer algo em retribuição à sua ajuda.\n\n A luz que emana, do que antes era um ser se segurando em uma vã esperança, aquece seu corpo e te mantem vivo até o raiar do dia.\n Ao amanhecer você se levanta e encara a pilha de cinzas que se tornou seu salvador.\n Você resume sua caminhada.");
            
            introFinal(); //ajudou todos os espíritos
  
            alert(" Uma luz atinge o local onde se encontra. A figura sorri e diz\n- Se colocou em perigos pelos que não podiam enfrentalos e, não virou as costas para os menos afortunados.\n- Orgulhe-se de suas ações e tenha paz na pós-vida.");
            document.write("Redenção.<br>Você Ganhou.");
            
          } else if (terceiraFaseResultado == 3) { //Terceira Fase resposta errada
             
            alert(" Você junta suas mãos tentando formar uma pá para auxiliar na tarefa mas, a areia se mostra muito compacta e, sua intenção se mostra mais uma tentativa desesperada de se manter vivo, do que um plano com alguma chance de sucesso.\n Você se leva à exaustão com o esforço desnecessário e desmaia, sabendo que nunca mais acordará.");
            document.write("FIM");

          }
          
        } else if (escolhaEspirito2 == 2) { //não ajuda o espírito 2
        
          alert(" As súplicas chegam aos seus ouvidos mas, sua mente se mantem focada no líquido cristalino a sua frente.\n Você sacia sua sede e se vira para terminar sua caminhada.\n Enquanto se distancia, a ultima coisa que houve é um fraco lamento de uma alma aceitando seu fim.");

          introFinal(); //ajudou o primeiro espírito apenas
            
          var final = faseFinal1(); //Quetionamento do juiz

          if (final == 1) { //Questionament Fase Final resposta errada
 
            alert("- A questão não é se a ajuda era necessaria mas, se ela foi oferecida quando solicitada.\n- Virar as costas aos necessitados não é o problema, ser indiferente sim.");
            alert(" Você vê enquanto o ambiente dobra e se torce na sua frente.\n Em segundos você esta sozinho em um espaço vazio infinito.");
            document.write("FIM");

          } else if (final == 2) { //Questionament Fase Final resposta correta
               
            alert(" O juiz se levanta e caminha em sua direção, coloca a mão em seu ombro e, calmamente, pronuncia:\n\n- Sua honestidade e arrependimento eram tudo que precisava confirmar.\n- Esqueça essas decisões que lhe trazem pesar, viva em paz nesse novo mundo.");
            document.write("Redenção.<br>Você Ganhou.");
             
          } else if (final == 3) { //Questionament Fase Final resposta errada
               
            alert("- Sua arrogância te impede de ver o óbvio, esses espíriutos que negou ajuda eram a sua provação\n- Agora aponta dedos como uma criança que não consegue admitir seus erros.\n- Aproveite sua condenação.");
            alert(" Você vê enquanto o ambiente dobra e se torce na sua frente.\n Em segundos você esta sozinho em um espaço vazio infinito.");
            document.write("FIM");
            
          }

        }

      }
    
    } else if (escolhaEspirito1 == 2){ //não ajuda o espírito 1

      alert(" Você aperta a pequena peça de cobre em sua mão, mantem seu olhar em direção ao porto e espera até o espírito decidir importunar outro.");
      alert(" Você chega na presença do barqueiro, ele estende a mão em palma aberta\n Você estende sua mão e coloca sua moeda na palma vazia\n O barqueiro a recolhe e lhe cede a entrada")
      alert(" O barco navega pelo rio vagarosamente e você perde a noção de tempo.\n Após o que parece mêses mas, pode ter sido minutos, algo toma sua atenção.\n Uma pequena rampa de madeira, como a usada para adentrar a embarcação, se estende na outra margem.\n A barcaça atraca e todos os seus passageiros desembarcam de forma rapida porêm, ordenada.\n Após o desembarque, o barqueiro retorna pelo caminho de onde veio, para continuar com sua obrigação.\n Em instantes você realiza que foi o unico a se manter no ponto de desembarque.\n Agora se vê sozinho, em um lugar desconhecido e sem idéia de que direção tomar.");

      var escolhaEspirito2 = segundoEspirito(); //Desafio espírito 2

      if (escolhaEspirito2 == 1) { //ajuda espírito 2

        alert(" A voz do pequeno ser alcança seus ouvidos.\n Sem pensar duas vezes, você, após se refrescar, o coloca nas costas e da prosseguimento à viagem.\n Enquanto continua sua jornada, nota que quase não sente o peso de seu companheiro temporário.\n Talvez seja o fato dele ter permanecido muito tempo naquele ponto mas, algo em você diz que existe outro motivo.");

        var terceiraFaseResultado = terceiraFase(); //Noite no deserto

        if (terceiraFaseResultado == 1) { //Terceira Fase resposta errada
 
          alert(" Você recolhe um pouco da vegetação morta e tenta utiliza-la para construir uma fogueira mas, a temperatura não deixa que o atrito entre gravetos produza uma fagulha\n Suas mãos começam a ficar dormente e logo, sua consciencia começa a se esvair.");
          document.write("FIM");
         
        } else if (terceiraFaseResultado == 2) { //Terceira Fase resposta correta
           
          alert(" Você agarra o espírito que o acompanha durante a viagem e cola seu corpo ao dele.\n O frio da noite, primeiramente, se mantem implacavel mas, algo começa a emanar do corpo que segura.\n Uma luz forte se faz presente no meio da escuridão, e a voz daquele que ajuda se faz presente:\n\n- Já estou condenado mas, deixe-me fazer algo em retribuição à sua ajuda.\n\n A luz que emana, do que antes era um ser se segurando em uma vã esperança, aquece seu corpo e te mantem vivo até o raiar do dia.\n Ao amanhecer você se levanta e encara a pilha de cinzas que se tornou seu salvador.\n Você resume sua caminhada.");
          
          introFinal(); 
          
          var final = faseFinal1(); //ajudou o segundo espírito apenas

          if (final == 1) { //Questionament Fase Final resposta errada
 
            alert("- A questão não é se a ajuda era necessaria mas, se ela foi oferecida quando solicitada.\n- Virar as costas aos necessitados não é o problema, ser indiferente sim.");
            alert(" Você vê enquanto o ambiente dobra e se torce na sua frente.\n Em segundos você esta sozinho em um espaço vazio infinito.");
            document.write("FIM");

          } else if (final == 2) { //Questionament Fase Final resposta correta
               
            alert(" O juiz se levanta e caminha em sua direção, coloca a mão em seu ombro e, calmamente, pronuncia:\n\n- Sua honestidade e arrependimento eram tudo que precisava confirmar.\n- Esqueça essas decisões que lhe trazem pesar, viva em paz nesse novo mundo.");
            document.write("Redenção.<br>Você Ganhou.");
             
          } else if (final == 3) { //Questionament Fase Final resposta errada
               
            alert("- Sua arrogância te impede de ver o óbvio, esses espíriutos que negou ajuda eram a sua provação\n- Agora aponta dedos como uma criança que não consegue admitir seus erros.\n- Aproveite sua condenação.");
            alert(" Você vê enquanto o ambiente dobra e se torce na sua frente.\n Em segundos você esta sozinho em um espaço vazio infinito.");
            document.write("FIM");
            
          }
         
        } else if (terceiraFaseResultado == 3) { //Terceira Fase resposta errada
           
          alert(" Você junta suas mãos tentando formar uma pá para auxiliar na tarefa mas, a areia se mostra muito compacta e, sua intenção se mostra mais uma tentativa desesperada de se manter vivo, do que um plano com alguma chance de sucesso.\n Você se leva à exaustão com o esforço desnecessário e desmaia, sabendo que nunca mais acordará.");
          document.write("FIM");
         
        }
        
      } else if (escolhaEspirito2 == 2) { //não ajuda espírito 2
      
        alert(" As súplicas chegam aos seus ouvidos mas, sua mente se mantem focada no líquido cristalino a sua frente.\n Você sacia sua sede e se vira para terminar sua caminhada.\n Enquanto se distancia, a ultima coisa que houve é um fraco lamento de uma alma aceitando seu fim.");

        introFinal();

        var final = faseFinal2(); //ajudou ninguem

        if (final == 1) {
 
          alert(" A moeda toca o chão e some, o juiz, então, se pronuncia:\n\n- O julgamento terminou, retire-se de meu salão, sua existencia nesse mundo foi permitida");
          document.write("Você ganhou?");

        } else {
             
          alert(" Assim que a moeda toca o chão você é transportado para um local completamente ausente de luz\n Você sabe qual decisão foi tomada pela sorte e, na solidão em que se encontra, deita no chão e se deixa definhar em silêncio.");
          document.write("FIM"); 

        }

      }

    }
   
    
  } else if (primeiraFaseResultado == 2) { //Primeira Fase resposta errada 1

    alert(" A criatura incógnita gargalha antes de se pronunciar:\n\n- Não esta de todo errado porêm, essa resposta apenas selou o seu.\n\n A pouca iluminação da sala se extingue ao final da fala\n Você se sente cansado e perde a consciência.");
    document.write("FIM");

    //Primeira Fase resposta errada
  } else if (primeiraFaseResultado == 3) { //Primeira Fase resposta errada 2

    alert(" Você encara o capuz enquanto uma resposta sai do vazio ali presente:\n\n- Você se encontra aqui por ação própria.\n\n A pouca iluminação da sala se extingue ao final da fala\n Você se sente cansado e perde a consciência.");
    document.write("FIM");

  }
  
}

//Funções de introdução

function apresentaCenario(){ //Apresentação do cenário

  alert("Você acorda, sem memória, em uma sala mal iluminada\nA sua volta se encontra uma passagem e, ao lado dela, uma figura encapuzada\nA figura apenas gesticula em direção a pasagem e um som grutural, mal consideravel uma voz, emana de sua direção");

}

function introFinal() { //Apresentação da ultima fase

  alert(" A caminhada dura mais um tempo mas, estando descansado, você consegue continuar sem muita dificuldade.\n Passada algumas horas (ou seriam dias? ) a névoa começa a se dissipar e, de dentro da mesma, um grande palácio se forma\n Algo em seu âmago diz que esse é o ponto final dessa viajem, o ultimo passo para a conclusão do que quer que tenha sido essa jornada pelo fim.");
  alert(" Você se vê frente aos portôes da construção, que ergue-se de forma a faze-lo perder a vista de seu topo\n Ao tocar na estrutura, pronto para adentrar no local, uma voz imponente se faz presente:\n\n- Entre andarilho, venha até mim e encare o julgamento\n\n Ao terminar, as portas se abrem enquanto um vento forte, vindo de dentro do palácio, quase o faz perder o equilíbrio.");
  alert(" Ao adentrar a edificação você se maravilha pela suntuosa decoração\n Pilares de ébano enfileirados em um grande salão de marfim, vitrais coloridos decoram as paredes, transformando a luz que entra no local em uma dança de cores diversas e, ao fundo, um trono escarlate se ergue em um pedestal.\n Sentado nele, uma figura poderosa se encontra, com um semblante impávido e calmo em sua face. Ele começa:");
  alert("- Sua peregrinação chegou ao fim, viajante, agora tens de passar no julgamento final.\n- Aqui sera tratado da forma que tratou aos em seu caminho.\n- Se arrependa pelos que ignorou, agradeça os que ajudou.")

}


//Funções de fase

function primeiraFase(){ //Discussão com o guia
  
  alert("- Todos que chegam não lembram do que lhes acometeu mas, tem ciência de onde se encontram.\n- Estamos do lado de fora, onde as portas se fecham após a passagem.\n- Diga-me que lugar é esse e continue sua ultima caminhada.");

  while (true) {
    
    var resposta = prompt("Responda 1 | 2 | 3 :\n\n1. O fim da vida\n2. O fim do mundo\n3. O porão de meu captor");

    if (resposta == 1 || resposta == 2 || resposta == 3) {

      return resposta;

    }
  }
}

function segundaFase(){ //Rio das almas

  alert(" Você chega na presença do barqueiro, ele estende a mão em palma aberta\n Apos um breve período ela se fecha de forma agressiva e, em um movimento rapido, com dedo em riste, aponta para uma pequena mesa disposta ao lado\n Em cima da mesa, três objetos se encontram enfileirados:\n* Uma corda arrebentada, em um arranjo espiral.\n* Uma pedra polida, capaz de refletir sua face.\n* Uma chave de ferrolho, grande demais para qualquer porta.");
  alert(" Como se estivesse ao seu lado, a voz daquele com quem primeiro falou nesse mundo ecoa em sua cabeça:\n\n- Ah, então não possui o pagamento apropriado?\n- O barqueiro não oferece viagens gratuitas mas, existem outras maneiras de se completar a passagem pelo Rio das Almas.\n- Escolha um desses itens mas, escolha com sabedoria.\n- Um será a chave de seu sucesso, os outros dois, um caminho sem volta para o vazio.");


  while (true) {

    var resposta = prompt("Escolha: 1 | 2 | 3 \n\n1. Corda\n2. Pedra\n3. Chave");

    if (resposta == 1 || resposta == 2 || resposta == 3) {

      return resposta;

    }
  }
}

function terceiraFase(){ //Deserto do Submundo

  alert(" Mesmo o peso do espírito necessitado sendo quase imperceptivel, carregar algo pelas planícies desérticas onde se encontra ainda se prova uma dificuldade.\n De tempos em tempos seu corpo clama por um descanso, talvêz seja por conta o contato com outro ser que o cansa, talvêz o fato de não sentir o peso não o nulifique.\n De qualquer forma, mais uma vez exausto nesse, literal, inferno, vocês param para descansar e, sem que perceba, a noite cai.");
  alert(" A surpresa que sente, ao descobrir que existe algo como noites no submundo, só é superada pela mudança abrupta de temperatura que vem com o anoitecer.\n Seu companheiro, então, fala:\n\n- Precisamos nos aquecer rápido, a temperatura tende a piorar com cada segundo que adentramos no noturno.\n\n Você rapidamente recobra as informações que possui do local:\n* É possivel fazer uma fogueira com os galhos espalhados pela paisagem.\n* É possivel que o calor corporal combinado seja minimamente capaz lhes manter vivos.\n* Talvez cavar um buraco seja uma boa forma de se abrigar.");
  
  while (true) {

    var resposta = prompt("Escolha 1 | 2 | 3 :\n\n1. Coletar galhos para uma fogueira\n2. Abraçar seu companheiro para aproveitar o calor corporal\n3. Começar a cavar um abrigo");

    if (resposta == 1 || resposta == 2 || resposta == 3) {

      return resposta;

    }
  }
}

function faseFinal1(){ //Ajudou espíritos 1/2

  alert("- Se mostrou disposto a ajudar alguem porêm, não se dignou a oferecer auxílio para todos que necessitavam.\n- Sua sorte sera decidida de acordo com sua resposta.");
  alert("- Qual critério lhe fez negar o pedido de ajuda em uma das ocasiões?")

  while (true) {

    var resposta = prompt("Escolha 1 | 2 | 3 :\n\n1. Ele não era realmente necessitado, ao meu ver\n2. A jornada cobrava seu preço em mim, me arrependo de não ajudar mas, minha consiência já cobra esse peso. Peço clemência a ti.\n3. Minha obrigação sempre foi chegar a esse local, nunca fui incumbido a ajudar aqueles necessitam. Estou sendo julgado por algo que é sua obrigação.");

    if (resposta == 1 || resposta == 2 || resposta == 3) {

      return resposta;

    }
  }
}

function faseFinal2() { //Ajudou espíritos 0/2
  
  alert("- Deixou os necessitados a propria sorte, portanto a sorte decidira seu fim\n- Que ela seja melhor que a daqueles que ignorou.\n\n Com um rapido movimento das mãos, a figura retira uma moeda do ar e a lança para cima.");

  var resposta = Math.round(Math.random()*1)

  return resposta;

}


//desafios dos espíritos

function primeiroEspirito(){ //Espírito Rio das Almas

  alert(" Você cruza a passagem e se encontra as margens de um grande rio.\n Você segue o seu perímetro até encontrar uma pequena rampa de madeira que segue até uma barcaça aportada\n Uma fila de almas se estende por essa estrutura\n Você entra nela.");
  alert(" Você leva a mão ao seu bolso e se sente aliviado ao sentir um pequeno círculo metálico em seus dedos.\n Nesse momento um espírito se aproxima e fala\n\n- Me ajude, fui esquecido por meus familiares, não tenho como pagar pela passagem");

  while (true) {

    var escolhaEspirito1 = prompt("Escolha 1 | 2 :\n\n1. Entregar sua moeda para o espírito (Você tera de enfrentar o desafío do barqueiro)\n2. Manter sua moeda e ignorar o espírito");

    if (escolhaEspirito1 == 1 || escolhaEspirito1 == 2) {

      return escolhaEspirito1;

    }  

  }
  
}

function segundoEspirito() { //Espírito Deserto do Submundo
  
  alert(" Você passa, o que parece uma eternidade, andando sem rumo por esse novo local\n A paisagem hostil lembra um deserto\n A areia cinza queima seus pés, uma névoa vermelha cobre o horizonte e, de tempos em tempos, amontoados de galhos ressecados que, uma vez poderiam ter sido plantas, aparecem brevemente por seu caminho");
  alert(" Sua caminhada continua por mais algum tempo até que, quase sem forças, você avista uma formação surgir do horizonte carmezim\n Quando percebe o que encontrou quase lacrimeja, não fosse o completo ressecamento pelo qual passou até esse momento. Um Oasis\n Uma vez que chega mais perto, percebe uma pequena figura, ao lado da pequena poça");
  alert(" Ao ser notado pela criatura, a mesma suplica\n- Oh, ajude-me a sair desse pesadelo, por tudo que é mais sagrado, ajude-me.\n- Não tenho mais forças para continuar a caminhada, essa água é tudo que me mantem mas, se continuar aqui, hei de perecer.");

  while (true) {

    var escolhaEspirito2 = prompt("Escolha 1 | 2 :\n\n1. Ajudar (a viagem sera mais árdua)\n2. Ignorar o pedido");

    if (escolhaEspirito2 == 1 || escolhaEspirito2 == 2) {

      return escolhaEspirito2;

    }  
  
  }

}


//Chama a função principal para rodar o jogo

rodaJogo();