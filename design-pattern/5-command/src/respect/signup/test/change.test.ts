import { describe, test, expect } from 'bun:test';
import { UseCaseFactory } from '../application/factory/usecase-factory';
import { CommandFactory } from '../domain/factory/command-factory';

describe('ChangeUseCase', () => {
  describe('should succeed', () => {
    test('guest to user', async () => {
      const commandFactory = new CommandFactory();
      const useCaseFactory = new UseCaseFactory(commandFactory);

      const signupUseCase = useCaseFactory.makeSignup();
      const changeUseCase = useCaseFactory.makeChange();

      const guest = await signupUseCase.execute('guest', {
        name: 'John Doe',
        email: 'john.doe@example.com',
      });

      const guestData = guest.toJSON();

      if (!guestData.id) {
        throw new Error('Guest ID is missing');
      }

      const updatedUser = await changeUseCase.execute('user', guestData.id);

      const data = updatedUser.toJSON();

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
  });
});
