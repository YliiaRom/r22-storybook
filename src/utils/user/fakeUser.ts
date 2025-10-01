import { faker } from "@faker-js/faker";
export const fakeUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
};
export const users = faker.helpers.multiple(fakeUser, {
  count: 5,
});
