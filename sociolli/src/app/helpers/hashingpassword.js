import bcrypt from 'bcryptjs';

export function hashPassword(plainpassword) {
  return bcrypt.hashSync(plainpassword, 10);
}

export function checkPassword(plainpassword, hash) {
  return bcrypt.compareSync(plainpassword, hash);
}

