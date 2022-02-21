# salesforce-lwc-event-parent-child

# LWC Event Propagation From Child to Parent - Exemple

![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)

Projeto base destinado ao estudo e aplicação do envio de eventos publicado em um componente-filho LWC e processado por um componente-pai LWC (aplicação de componentização aninhada)

## Conteúdo do Pacote

- Guia de acesso ao componente
- Componente LWC filho
- Componente LWC pai (com uma instância do filho aninhado)

Após a implantação do projeto, é necessário liberar o acesso a guia "Parent Component" para que possa acessr o componente-pai e realizar operações entre pai e filho.

Caso seja necessário, os componentes LWC forma imlpementados com publicação de logs no console Javascript, permitindo a identificação do componente, método e valor da(s) variável(eis) monitorada(s).

# Criação da ORG de Desenvolvimento

Para criar uma ORG de desenvolvedor e possível acessar [SALESFORCE DEV ORG](https://developer.salesforce.com/signup), criar uma ORG própria e habilitar o recurso [DEVHUB](https://help.salesforce.com/s/articleView?id=sf.sfdx_setup_enable_devhub.htm&type=5)

## Deploy

Faça o download ou clone deste repositório
```sh
git clone git@github.com:rafaelmss/salesforce-lwc-event-parent-child.git
```

Faça login em sua ORG de desenvolvimento à partir do VS Code
```sh
sfdx force:auth:web:login -r https://login.salesforce.com
```

Crie uma Scratch ORG à partir de sua ORG de desenvolvimento (DevHub de estar habilitado)
```sh
sfdx force:org:create -f config/project-scratch-def.json
```

Faça deploy do repositório para seu ambiente Scratch
```sh
sfdx force:source:push -f
```

## Referências

- [Create and Dispatch Events](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.events_create_dispatch) 
- [Configure Event Propagation](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.events_propagation)
- [Events Best Practices](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.events_best_practices)
