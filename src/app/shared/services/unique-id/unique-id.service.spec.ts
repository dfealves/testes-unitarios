import { TestBed } from '@angular/core/testing';

import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService;

  beforeEach(() => {
    // TestBed.configureTestingModule({});
    service = new UniqueIdService();
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
   should generate id when called with prefix`, () => {
    const service = new UniqueIdService();
    const id = service.generateUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();

    expect(true).toBeTrue();
    // espera sempre um valor true e esse valor tem que ser literal ex: const x = true;
    expect(true).toBe(true);
    // compara se os tipos sejam iguais
    expect(true).toBeTruthy();
    //  regras do if do javascript, falha com null, '', undefined ...
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
   should not generate duplicate IDs when called multiple times`, () => {
    const service = new UniqueIdService();

    const ids = new Set(); // Set não aceita strings repetidas, caso tente adicionar ele ignora e não adiciona, sendo assim caso nenhum ID seja repetido no final sera retornado um size de 50
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
  should throw when called with invalid values`, () => {
    const invalidValues = [null, undefined, '', '0', '1'];
    invalidValues.forEach(invalidValue => {
      expect(() => service.generateUniqueIdWithPrefix(invalidValue))
        .withContext(`Invalid value: ${invalidValue}`)
        .toThrow();
    })
    // para testar se um método está enviando uma exception ou não, é necessário chamá-lo atráves de uma função
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
   should return the number of generatedIds when called`, () => {
    const service = new UniqueIdService();
    service.generateUniqueIdWithPrefix('app');
    service.generateUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });
});
