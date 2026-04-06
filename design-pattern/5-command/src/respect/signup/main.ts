import { UseCaseFactory } from "./application/factory/usecase-factory";
import { CommandFactory } from "./domain/factory/command-factory";
import { ModelFactory } from "./infra/factory/model-factory";

const modelFactory = new ModelFactory();
const commandFactory = new CommandFactory();
const useCaseFactory = new UseCaseFactory(modelFactory, commandFactory);

// /api/v1/signup/admin
const signupAdmin = useCaseFactory.makeSignup();

const admin = await signupAdmin.execute('admin', {
  name: 'John Doe',
  email: 'john.doe@example.com',
})

console.log('admin', admin);

// /api/v1/signup/user
const signupUser = useCaseFactory.makeSignup();

const user = await signupUser.execute('user', {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
})

console.log('user', user);

// /api/v1/signup/guest
const signupGuest = useCaseFactory.makeSignup();

const guest = await signupGuest.execute('guest', {
  name: 'Guest User',
  email: 'guest@example.com',
})

console.log('guest', guest);

// /api/v1/profile/change
const changeProfile = useCaseFactory.makeChange();

const updatedUser = await changeProfile.execute('user', guest.id!);

console.log('guest to user', updatedUser);