<h1 align="center"> Aplicação de gestão de transação simples </h1>
<h3 align="center"> Upload de arquivos em banco de dados PostgreSQL </h2>
                  
<h4 align="center"> :pushpin: Aplicação somente disponível em ambiente de desenvolvimento :pushpin: </h4>

### Descrição :memo: 
Aplicação que armazena transações financeiras de entrada e saída e permitir o cadastro e a listagem dessas transações, além de permitir a criação de novos registros no banco de dados a partir do envio de um arquivo csv.

### Tecnologias :rocket:
- **[Node.js](https://nodejs.org/en/)** - versão 12.16.1
- **[PostgreSQL](https://www.postgresql.org/)** - versão 12.2
- **[Docker](https://docs.docker.com/)**


### O que a aplicação é capaz de fazer 
- Criar transação
  - Inserir Entrada ou saída monetária
  - Não permitir saída maior que entrada
  - Identificar categoria da transação
  - Realizar balanço financeiro
- Remover transação  
- Importar arquivo .CSV com informações de transação


### Como rodar a aplicação
No terminal, digite: </br> 
```git clone https://github.com/tomasoak/gostack-typeorm-upload.git```


Entre na pasta do projeto </br> 
```cd gostack-typeorm-upload```


Instale as dependências </br> 
```yarn```


Execute a aplicação </br> 
```yarn dev:server```



### Licença :moyai:
Esse projeto está sob a licença MIT.

---

<p align="center"> Aplicação desenvolvida no Bootcamp GoStack - Turma 11 - Rocketseat </p>
