import { insertUser } from '@/drizzle/db';
import { UserType } from '@/drizzle/schema';

async function main() {
  const newUser: UserType = {
    name: 'user',
    email: 'user@example.com',
    password: '123456',
    role: "admin"
  };
  const res = await insertUser(newUser);
  console.log('Sucessfully seeded users table:', res);
  process.exit();
}

main();
