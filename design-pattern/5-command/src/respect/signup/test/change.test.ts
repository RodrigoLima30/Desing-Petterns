import { describe, test, expect } from 'bun:test';
import { UseCaseFactory } from '../application/factory/usecase-factory';
import { CommandFactory } from '../domain/factory/command-factory';
import { ModelFactory } from '../infra/factory/model-factory';

describe('ChangeUseCase', () => {
  describe('should succeed', () => {
    test('guest to user', async () => {
      const modelFactory = new ModelFactory();
      const commandFactory = new CommandFactory();
      const useCaseFactory = new UseCaseFactory(modelFactory, commandFactory);

      const signupUseCase = useCaseFactory.makeSignup();
      const changeUseCase = useCaseFactory.makeChange();

      const guest = await signupUseCase.execute('guest', {
        name: 'John Doe',
        email: 'john.doe@example.com',
      })

      if (!guest.id) {
        throw new Error('Guest ID is missing');
      }

      const user = await changeUseCase.execute('user', guest.id)

      expect(user).toMatchObject(({
        id: expect.any(String),
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: {
          profile: 'user',
          features: [{
            feature: 'dashboard',
            permissions: ['read'],
          }, {
            feature: 'reports',
            permissions: ['read'],
          }, {
            feature: 'settings',
            permissions: [],
          }],
        }
      }));
    })
  })
})
