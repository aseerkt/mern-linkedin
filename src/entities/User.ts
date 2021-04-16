import { Field, ObjectType } from 'type-graphql';
import { Column, Entity } from 'typeorm';
import { BaseICU } from './BaseICU';

@ObjectType()
@Entity('users')
export class User extends BaseICU {
  @Field()
  @Column()
  fullName: string;

  @Field()
  @Column({ unique: true })
  email: string;

  @Field()
  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Field()
  @Column({ default: '' })
  avatar: string;
}
