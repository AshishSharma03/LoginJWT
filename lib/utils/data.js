import bcrypt from 'bcryptjs';

const data = {
    users: [
      {
        name: 'Goku',
        email: 'admin@example.com',
        password: bcrypt.hashSync('12345678Aa@'),
        isAdmin: true,
      },
      {
        name: 'Krillin',
        email: 'user@example.com',
        password: bcrypt.hashSync('12345678Aa@'),
        isAdmin: false,
      },
    ],
};

export default data;