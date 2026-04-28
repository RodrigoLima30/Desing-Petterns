import { describe, test, expect } from 'bun:test';
import { UseCaseFactory } from '../application/factory/usecase-factory';
import { CommandFactory } from '../domain/factory/command-factory';

describe('SignupUseCase', () => {
  describe('should succeed', () => {
    test('admin', async () => {
      const commandFactory = new CommandFactory();
      const useCaseFactory = new UseCaseFactory(commandFactory);

      const signupAdmin = useCaseFactory.makeSignup();

      const admin = await signupAdmin.execute('admin', {
        name: 'John Doe',
        email: 'john.doe@example.com',
      });

      const data = admin.toJSON();

      expect(data).toMatchObject({
        id: expect.any(String),
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: {
          profile: 'admin',
          features: [
            {
              feature: 'dashboard',
              permissions: ['read', 'write', 'delete'],
            },
            {
              feature: 'reports',
              permissions: ['read', 'write', 'delete'],
            },
            {
              feature: 'settings',
              permissions: ['read', 'write', 'delete'],
            },
          ],
        },
      });
    });

    test('user', async () => {
      const commandFactory = new CommandFactory();
      const useCaseFactory = new UseCaseFactory(commandFactory);

      const signupUser = useCaseFactory.makeSignup();

      const user = await signupUser.execute('user', {
        name: 'John Doe',
        email: 'john.doe@example.com',
      });

      const data = user.toJSON();

      expect(data).toMatchObject({
        id: expect.any(String),
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: {
          profile: 'user',
          features: [
            {
              feature: 'dashboard',
              permissions: ['read'],
            },
            {
              feature: 'reports',
              permissions: ['read'],
            },
            {
              feature: 'settings',
              permissions: [],
            },
          ],
        },
      });
    });

    test('guest', async () => {
      const commandFactory = new CommandFactory();
      const useCaseFactory = new UseCaseFactory(commandFactory);

      const signupGuest = useCaseFactory.makeSignup();

      const guest = await signupGuest.execute('guest', {
        name: 'John Doe',
        email: 'john.doe@example.com',
      });

      const data = guest.toJSON();

      expect(data).toMatchObject({
        id: expect.any(String),
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: {
          profile: 'guest',
          features: [
            {
              feature: 'dashboard',
              permissions: [],
            },
            {
              feature: 'reports',
              permissions: [],
            },
            {
              feature: 'settings',
              permissions: [],
            },
          ],
        },
      });
    });
  });
});
