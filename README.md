# Weather App

Este é um aplicativo web simples de previsão do tempo, que permite aos usuários buscar o clima de uma cidade e exibir as informações detalhadas, como temperatura, descrição do clima, umidade, vento e imagem de fundo relacionada à cidade. A imagem de fundo é obtida a partir do Unsplash, e o aplicativo exibe a bandeira do país da cidade pesquisada.

## Funcionalidades

- **Busca de clima por cidade:** Permite ao usuário pesquisar o clima de uma cidade específica.
- **Exibição de dados climáticos:** Exibe a temperatura, descrição do clima, ícone de clima, umidade, velocidade do vento e a bandeira do país da cidade.
- **Imagem de fundo personalizada:** A imagem de fundo é alterada com base na cidade pesquisada, usando a API do Unsplash, para proporcionar uma experiência visual agradável.
- **Evita repetição de imagem:** A imagem de fundo não se repete e é redimensionada para cobrir a tela inteira.

## Tecnologias Utilizadas

- **HTML**: Estruturação do conteúdo da página.
- **CSS**: Estilização da página e controle de layout responsivo.
- **JavaScript**: Lógica para interatividade e chamadas de APIs.
- **APIs Utilizadas**:
  - [OpenWeatherMap](https://openweathermap.org/): Para obter os dados meteorológicos da cidade.
  - [Unsplash](https://unsplash.com/): Para obter imagens de fundo baseadas na cidade pesquisada.
  - [FlagsAPI](https://flagsapi.com/): Para exibir a bandeira do país da cidade.

## Como Usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/elizabethmp82/weather-app
2. Navegue até o diretório do projeto:
   ```bash
   cd weather-app
3. Abra o arquivo index.html em seu navegador.
4. Insira o nome de uma cidade na caixa de pesquisa e clique em "Buscar" ou pressione Enter para obter as informações climáticas.

## Como Funciona
- O usuário digita o nome da cidade no campo de entrada e clica no botão de pesquisa ou pressiona Enter.

- O aplicativo faz uma requisição para a API do OpenWeatherMap para obter os dados do clima da cidade.

- Em seguida, a API do Unsplash é chamada para buscar uma imagem relacionada à cidade pesquisada.

- O clima, a bandeira do país e a imagem de fundo são exibidos dinamicamente na interface.

## Personalização
- Para usar a API do OpenWeatherMap, você precisará de uma chave de API. Insira a sua chave no código onde está a variável apiKey.

- Para usar a API do Unsplash, você também precisará de uma chave de acesso. Substitua o valor de unsplashAccessKey pela sua chave.

## Exemplo de Uso
1. Pesquise por "Paris" para obter o clima atual de Paris, a bandeira da França e uma imagem de fundo relacionada a Paris.

2. Pesquise por "Tokyo" para ver as informações de clima de Tóquio, a bandeira do Japão e uma imagem de fundo relacionada a Tóquio.

## Contribuições
Sinta-se à vontade para contribuir com este projeto! Você pode fazer isso de várias maneiras:

- Relatar bugs: Caso encontre algum erro, crie um issue no repositório.
- Sugerir melhorias: Se tiver ideias para melhorar o aplicativo, envie uma pull request ou crie um issue.
- Contribuir com código: Se você tiver alguma melhoria no código, fique à vontade para abrir uma pull request.
