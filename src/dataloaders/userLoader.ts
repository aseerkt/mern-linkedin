import DataLoader from 'dataloader';
import { getManager } from 'typeorm';
import { User } from '../entities/User';

export const createUserLoader = () =>
  new DataLoader<string, User>(async (userIds) => {
    const users = await getManager()
      .createQueryBuilder(User, 'u')
      .where('u.id IN (:...userIds)', { userIds })
      .getMany();

    const userToId: Record<string, User> = {};
    users.forEach((u) => (userToId[u.id] = u));

    return userIds.map((id) => userToId[id]);
  });
