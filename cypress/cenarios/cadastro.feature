#pt language

Contexto:
    Dado que esteja na pagina Home

Cenario: Cadastro de Nova conta com sucesso 
    Quando acesso o menu Registrar 
    Então o sistema exibe a tela de Cadastro
    E preencho o campo E-mail com o valor <E-mail>
    E preencho o campo Nome com o valor <Nome>
    E preencho o campo Senha com o valor <Senha>
    E preencho o campo Confirmação Senha com o valor <Senha>
    E clico no botão Cadastar
    Então o sistema exibe a mensagem "A conta <000-0> foi criada com sucesso"

Cenario: Cadastro com campo <E-mail> Vazio
    Quando acesso o menu Registrar 
    Então o sistema exibe a tela de Cadastro
    E deixo vazio o campo E-mail
    E preencho o campo Nome com o valor <Nome>
    E preencho o campo Senha com o valor <Senha>
    E preencho o campo Confirmação Senha com o valor <Senha>
    E clico no botão Cadastar
    Então o sistema exibe a mensagem "E-mail não pode ser vazio"

Cenario: Cadastro com campo <Nome> Vazio
    Quando acesso o menu Registrar 
    Então o sistema exibe a tela de Cadastro
    E preencho o campo E-mail com o valor <E-mail>
    E deixo o campo Nome vazio
    E preencho o campo Senha com o valor <Senha>
    E preencho o campo Confirmação Senha com o valor <Senha>
    E clico no botão Cadastar
    Então o sistema exibe a mensagem "Nome não pode ser vazio"

Cenario: Castro com campo <Senha> Vazio
    Quando acesso o menu Registrar 
    Então o sistema exibe a tela de Cadastro
    E preencho o campo E-mail com o valor <E-mail>
    E preencho o campo Nome com o valor <Nome>
    E deixo vazio o campo Senha 
    E preencho o campo Confirmação Senha com o valor <Senha>
    E clico no botão Cadastar
    Então o sistema exibe a mensagem "Senha não pode ser vazio"

Cenario: Castro com campo <Senha> e <Confirmação Senha> com valores diferentes
    Quando acesso o menu Registrar 
    Então o sistema exibe a tela de Cadastro
    E preencho o campo E-mail com o valor <E-mail>
    E preencho o campo Nome com o valor <Nome>    
    E preencho os campos <Senha> e <Confirmação Senha> com o valores diferentes
    E clico no botão Cadastar
    Então o sistema exibe a mensagem "Senha e confirmação de senha precisam ser iguais"

Cenario: Castro com campo <Confirmação Senha> Vazio
    Quando acesso o menu Registrar 
    Então o sistema exibe a tela de Cadastro
    E preencho o campo E-mail com o valor <E-mail>
    E preencho o campo Nome com o valor <Nome>
    E preencho o campo Senha com o valor <Senha> 
    E deixo vazio o campo Senha 
    E clico no botão Cadastar
    Então o sistema exibe a mensagem "Confirmar senha não pode ser vazio"

Cenario: Cadastro de Nova Conta com saldo de R$1.000,00
    Quando acesso o menu Registrar 
    Então o sistema exibe a tela de Cadastro
    E preencho todos os campos obrigatórios <E-mail> <Nome> <Senha> <Confirmação Senha> com dados válidos 
    E deixo a opção <Criar conta com saldo ?> ativa
    E clico no botão Cadastar
    Então uma nova conta é criada com saldo de R$1.000,00

Cenario: Cadastro de Nova Conta com saldo de R$0,00
    Quando acesso o menu Registrar 
    Então o sistema exibe a tela de Cadastro
    E preencho todos os campos obrigatórios <E-mail> <Nome> <Senha> <Confirmação Senha> com dados válidos 
    E deixo a opção <Criar conta com saldo ?> desativada
    E clico no botão Cadastar
    Então uma nova conta é criada com saldo de R$0,00
    