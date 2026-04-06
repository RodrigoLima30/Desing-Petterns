import { describe, test, expect } from 'bun:test';
import { UseCaseFactory } from '../application/factory/usecase-factory';
import { CommandFactory } from '../domain/factory/command-factory';
import { ModelFactory } from '../infra/factory/model-factory';

describe('SignupUseCase', () => {
  describe('should succeed', () => {
    test('admin', async () => {
      const modelFactory = new ModelFactory();
      const commandFactory = new CommandFactory();
      const useCaseFactory = new UseCaseFactory(modelFactory, commandFactory);

      const signupAdmin = useCaseFactory.makeSignup();

      const admin = await signupAdmin.execute('admin', {
        name: 'John Doe',
        email: 'john.doe@example.com',
      })

      expect(admin).toMatchObject(({
        id: expect.any(String),
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: {
          profile: 'admin',
          features: [{
            feature: 'dashboard',
            permissions: ['read', 'write', 'delete'],
          }, {
            feature: 'reports',
            permissions: ['read', 'write', 'delete'],
          }, {
            feature: 'settings',
            permissions: ['read', 'write', 'delete'],
          }],
        }
      }));
    })

    test('user', async () => {
      const modelFactory = new ModelFactory();
      const commandFactory = new CommandFactory();
      const useCaseFactory = new UseCaseFactory(modelFactory, commandFactory);

      const signupUser = useCaseFactory.makeSignup();

      const user = await signupUser.execute('user', {
        name: 'John Doe',
        email: 'john.doe@example.com',
      })

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


    test('guest', async () => {
      const modelFactory = new ModelFactory();
      const commandFactory = new CommandFactory();
      const useCaseFactory = new UseCaseFactory(modelFactory, commandFactory);

      const signupGuest = useCaseFactory.makeSignup();

      const guest = await signupGuest.execute('guest', {
        name: 'John Doe',
        email: 'john.doe@example.com',
      })

      expect(guest).toMatchObject(({
        id: expect.any(String),
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: {
          profile: 'guest',
          features: [{
            feature: 'dashboard',
            permissions: [],
          }, {
            feature: 'reports',
            permissions: [],
          }, {
            feature: 'settings',
            permissions: [],
          }],
        }
      }));
    })
  })
})
