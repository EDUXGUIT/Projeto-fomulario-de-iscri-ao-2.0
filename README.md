# Projeto de Formulário de Inscrição e Login com Modo Escuro

Este projeto consiste em um conjunto de páginas web para permitir que usuários se inscrevam em uma plataforma e, posteriormente, realizem o login. Ele inclui funcionalidades como validação de formulário no frontend, armazenamento local de dados de registro para simulação de login e uma opção de modo escuro para melhorar a experiência do usuário em diferentes ambientes de iluminação.

## Como Rodar Localmente

Para executar este projeto localmente no seu computador, siga os seguintes passos:

1.  **Clone o repositório (se aplicável):**

    ```bash
    git clone [https://docs.github.com/articles/referencing-and-citing-content](https://docs.github.com/articles/referencing-and-citing-content)
    cd [nome do seu repositório]
    ```

    (Se você estiver trabalhando localmente sem um repositório Git remoto, pule este passo.)

2.  **Abra os arquivos HTML no seu navegador:**

    - Localize os arquivos `index.html` (para a tela de inscrição) e `login.html` (para a tela de login` no diretório do seu projeto.
    - Clique duas vezes em cada um dos arquivos para abri-los diretamente no seu navegador web padrão.

    > **Observação:** Como este é um projeto puramente frontend (HTML, CSS e JavaScript), não é necessário configurar um servidor web local (como Apache ou Nginx) para visualizá-lo. O navegador é capaz de renderizar os arquivos diretamente.

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias web:

- **HTML:** Utilizado para a estrutura e marcação das páginas web (formulário de inscrição e tela de login).
- **CSS:** Utilizado para a estilização visual das páginas, incluindo o layout, cores, tipografia e a implementação do modo escuro.
- **JavaScript:** Utilizado para adicionar interatividade às páginas, como:
  - Validação do formulário de inscrição no frontend.
  - Armazenamento dos dados de registro no `localStorage` do navegador.
  - Lógica para o modo escuro (alternância e persistência do estado).
  - Processamento básico do login (comparação com dados armazenados localmente).

## Principais Funcionalidades

O projeto implementa as seguintes funcionalidades principais:

- **Formulário de Inscrição:**
  - Campos para coleta de informações do usuário (nome, email, ID de usuário, senha, etc.).
  - Validação básica dos campos no frontend para garantir a integridade dos dados.
  - Opção para selecionar trilhas de aprendizagem (simulada com radio buttons).
  - Aceitação de termos e condições.
  - Funcionalidade para salvar dados localmente (para simulação).
  - Redirecionamento para a tela de login após a inscrição (simulada).
- **Tela de Login:**
  - Campos para o usuário inserir seu ID de usuário e senha.
  - Verificação das credenciais inseridas com os dados previamente armazenados no `localStorage`.
  - Alerta de sucesso em caso de login bem-sucedido (simulado).
  - Exibição de mensagens de erro para credenciais inválidas.
  - Link para a tela de cadastro para novos usuários.
- **Modo Escuro:**
  - Implementação de um tema escuro para toda a interface.
  - Botão de alternância para permitir que o usuário escolha entre o modo claro e o modo escuro.
  - Persistência da preferência do modo escuro utilizando `localStorage`, mantendo a escolha do usuário mesmo após recarregar a página.
- **Microinterações:**
  - Animações suaves em botões (hover, active).
  - Indicação visual de foco em campos de entrada.
  - Transição suave do botão de alternância do modo escuro.

## Histórico de Commits Estruturado (Boas Práticas)

Manter um histórico de commits bem estruturado é fundamental para rastrear as mudanças, entender a evolução do projeto e colaborar de forma eficiente. Algumas boas práticas incluem:

- **Commits Atômicos:** Cada commit deve representar uma única alteração lógica. Evite commitar várias funcionalidades ou correções não relacionadas no mesmo commit.
- **Mensagens de Commit Claras e Concisas:** A mensagem do commit deve resumir a alteração realizada de forma clara e objetiva. Geralmente, segue a seguinte estrutura (embora possa variar dependendo das convenções do projeto):

  ```
  <tipo>(<escopo>): <descrição curta>

  [corpo mais detalhado, se necessário]

  [rodapé, se necessário (ex: Issue #123, BREAKING CHANGE: ...)]
  ```

  **Tipos comuns de commit:**

  - `feat`: Adiciona uma nova funcionalidade.
  - `fix`: Corrige um bug.
  - `docs`: Altera a documentação.
  - `style`: Altera o formato do código (sem afetar a lógica).
  - `refactor`: Reestrutura o código (sem adicionar funcionalidades ou corrigir bugs).
  - `test`: Adiciona ou modifica testes.
  - `chore`: Alterações que não se encaixam nos outros tipos (ex: atualizar dependências).
  - `build`: Alterações relacionadas ao processo de build.
  - `ci`: Alterações relacionadas à integração contínua.
  - `perf`: Melhorias de performance.

  **Exemplos de mensagens de commit:**

  ```
  feat(cadastro): Implementa validação básica de email

  Adiciona a função JavaScript para verificar o formato do email
  inserido pelo usuário no campo de cadastro.

  fix(login): Corrige erro que impedia a exibição de mensagens de erro

  O seletor do elemento de erro estava incorreto, impedindo que
  as mensagens fossem mostradas ao usuário. Este commit corrige
  o seletor para garantir a exibição correta.

  style: Aplica formatação consistente ao código JavaScript

  Utiliza Prettier para formatar todos os arquivos .js, garantindo
  uma base de código mais consistente.
  ```

- **Ser Consistente:** Adote uma convenção de commit e siga-a consistentemente em todo o projeto.
- **Usar o Presente Imperativo:** A mensagem do commit deve ser escrita no presente imperativo ("adiciona", "corrige", "remove" em vez de "adicionou", "corrigiu", "removeu").
- **Manter as Linhas Curtas:** Tente manter a primeira linha da mensagem do commit com no máximo 50 caracteres para facilitar a leitura em ferramentas de controle de versão.

Ao seguir essas práticas, o histórico de commits do seu projeto se tornará uma documentação valiosa das mudanças e da evolução do seu trabalho.
