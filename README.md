# italents

API Market Place desenvolvido para implementação de todos os conceitos estudados em Backend

## Endpoints

### Usuarios

Todos os endpoints relacionados com usuario

/findAll

Retorna todos os usuarios presentes no banco de dados

- 200
  Ok, retorno completo
- 404
  Usuarios nao encontrados

/find/:id

Retorna um usuario especifico ao passarmos um ID correto por parametro


| Codigo HTTP | Mensagem  | Retorno                                                 |
| ------------- | ----------- | --------------------------------------------------------- |
| 200         | OK        | OBJ usuario completo                                    |
| 404         | Not Found | {message: "Usuário não encontrado, tente novamente!"} |
| 400         | Bad Request | {message: "ID informado está errado, tente novamente"} |

### Produtos

Todos os endpoints relacionados com produtos
