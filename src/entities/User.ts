import { hash, verify } from 'argon2';
import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  MinLength,
} from 'class-validator';
import { Field, ObjectType } from 'type-graphql';
import { BeforeInsert, Column, Entity } from 'typeorm';
import { BaseICU } from './BaseICU';

@ObjectType()
@Entity('users')
export class User extends BaseICU {
  @Field()
  @IsNotEmpty({ message: 'Full Name is required' })
  @Column()
  fullName: string;

  @Field()
  @IsEmail(undefined, { message: 'Invalid Email Address' })
  @IsNotEmpty({ message: 'Email is required' })
  @Column({ unique: true })
  email: string;

  @Field()
  @IsAlphanumeric(undefined, {
    message: 'Username should be alphanumeric',
  })
  @IsNotEmpty({ message: 'Username is required' })
  @Column({ unique: true })
  username: string;

  @Column()
  @MinLength(6, {
    message: 'Password should be minimum of $constraint1 characters long',
  })
  @IsNotEmpty({ message: 'Password is required' })
  password: string;

  @Field()
  @Column({ default: '' })
  avatar: string;

  @Field()
  @Column({ default: '' })
  headline: string;

  // Methods
  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, { hashLength: 20 });
  }

  verifyPassword(password: string) {
    return verify(this.password, password);
  }
}
