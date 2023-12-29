# PUT vs PATCH

No projeto foi utilizado o método PUT para fazer alterações em um registro (o Update do CRUD). Porém, existe o método PATCH que também faz atualizações em um registro. Então qual é a diferença entre eles?

- PUT substitui totalmente o recurso atual pelos novos dados que estão sendo recebidos na requisição. Caso não exista o recurso anterior, ele será criado. Apesar disso, não é o método indicado para a criação de novos recursos, para isso existe o método POST.

- PATCH atualiza parcialmente um recurso já existente. Ao contrário do PUT que precisa receber um recurso completo para fazer a substituição completa, PATCH pode receber apenas os dados a serem modificados para atualizar apenas estes campos.

Quando utilizar um ou outro?

- PUT pode ser usado em situações em que há acesso ao recurso completo (por exemplo, todos os campos do documento a ser atualizado) ou a necessidade de substituir totalmente o recurso. É necessário enviar sempre o recurso completo (com todos os campos);

- PATCH pode ser usado para atualizações parciais e pode receber apenas o campo que será atualizado, o que pode significar menor volume de tráfego de dados.

Quando estiver consumindo (ou seja, utilizando) APIs em seu projeto, sempre consulte a documentação para saber quais são os métodos permitidos, pois a escolha entre PUT e PATCH é feita pelo time que desenvolve a API, assim como estamos fazendo durante o curso.