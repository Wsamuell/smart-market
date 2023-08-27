import { PoolClient } from 'pg';

interface User {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  password: string;
  profile_pic: string;
  date_of_birth: Date;
  email: string;
  created_at: Date;
  deleted_at: Date;
}

const User = {
  async getAllUsers(client: PoolClient): Promise<User[]> {
    const query = 'SELECT * FROM users';
    client.query(query, (err, res) => {});
  },
};
