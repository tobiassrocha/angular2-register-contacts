import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contato } from './contatos/contato.model';

export class InMemoryDataService {

    createDb() {

        let contatos: Contato[] = [
            {id: 1, nome: 'Fulano da Silva', email: 'fulano@gmail.com', telefone: '(00) 0000-0000'},
            {id: 2, nome: 'Ciclano de Oliveira', email: 'ciclano@hotmail.com', telefone: '(11) 1111-1111'},
            {id: 3, nome: 'João Lopes', email: 'joao@joao.com', telefone: '(22) 2222-2222'},
            {id: 4, nome: 'Maria Costa', email: 'maria@bol.com', telefone: '(33) 3333-3333'},
            {id: 5, nome: 'Juliana Rosa', email: 'juliana@yahoo.com', telefone: '(44) 4444-4444'}
        ];

        let carros: any[] = [
            {id: 1, descricao: 'Camaro'},
            {id: 2, descricao: 'Mustang'}
        ];

        return {
            'contatos': contatos,
            'carros': carros
        };
    }
}