
#  Cart - Carrinho de Compras

##  Descrição

Este projeto é um carrinho de compras desenvolvido com ReactJS, TypeScript e TailwindCSS. Ele permite aos usuários explorar e adicionar produtos ao carrinho, com um layout responsivo que oferece uma experiência de uso intuitiva em diferentes dispositivos.

##  Funcionalidades

- ** Adicionar ao Carrinho**: Permite adicionar produtos ao carrinho de compras com apenas um clique.

- ** Cálculo do Total**: O valor total da compra é atualizado dinamicamente de acordo com a quantidade e o preço dos produtos adicionados.

- ** Detalhes do Produto**: Visualize informações detalhadas de cada produto individualmente.

- ** Lista de Produtos**: Exibe uma lista de produtos disponíveis para compra.

- ** Design Responsivo**: A interface se adapta a diferentes tamanhos de tela para uma navegação eficiente em dispositivos móveis e desktops.

##  Tecnologias Utilizadas

- **Frontend**:
  -  **ReactJS**: Biblioteca JavaScript para construção de interfaces de usuário dinâmicas e reativas.
  
  -  **TypeScript**: Superset de JavaScript com tipagem estática, proporcionando maior segurança e clareza no desenvolvimento.
 
  -  **TailwindCSS**: Framework de CSS utilitário para estilização, garantindo um design moderno e responsivo de forma rápida e eficiente.

##  Estrutura do Projeto

### Pastas e Arquivos

-  **`src/components/`**: Componentes da aplicação.
  - **Header**: Cabeçalho da aplicação, contendo o título e links de navegação.
  - **Layout**: Estrutura geral do layout da aplicação.
-  **`src/contexts/`**: Define contextos para compartilhamento de dados e estado entre componentes.
-  **`src/pages/`**: Páginas principais da aplicação.
  - **Cart**:
    - `index.tsx`: Componente principal da página do carrinho de compras, mostrando os produtos adicionados e o valor total.
  - **Home**: Página inicial com uma lista dos produtos disponíveis.
    - `index.tsx`: Componente principal da página inicial.
  - **Detail**:
    - `index.tsx`: Página de detalhes de cada produto, exibindo informações específicas.
-  **`src/services`**:
  - `api.ts`: Arquivo responsável por gerenciar as requisições para a API ou para o `db.json`.
-  **`src/App.tsx`**: Componente raiz que define as rotas e organiza a estrutura básica da aplicação.
-  **`src/index.css`**: Arquivo de configurações globais do TailwindCSS.
-  **`src/main.tsx`**: Arquivo de entrada principal da aplicação.
-  **`db.json`**: Simula o banco de dados, fornecendo os dados dos produtos para a aplicação.

##  Instalação e Execução

1. **Clone o repositório do projeto:**
   ```bash
    git clone https://github.com/jhondharkyson520/cart.git
   ```

2. **Entre na pasta do projeto:**
   ```bash
    cd cart
   ```

3. **Instale as dependências:**
   ```bash
    npm install
   ```

4. **Inicie o JSON Server para simular o banco de dados**:
   ```bash
    json-server --watch db.json
   ```

5. **Execute a aplicação:**
   ```bash
    npm run dev
   ```

6. **Acesse a aplicação**:
   - Abra [http://localhost:5173](http://localhost:5173) no navegador para visualizar a interface.

---

###  Notas sobre o Projeto

Este projeto utiliza o **JSON Server** para simular uma API com o arquivo `db.json` atuando como banco de dados. Isso permite acessar e manipular informações dos produtos em tempo real dentro da aplicação.
