export function validateLoginPassword (password: string): boolean {
  const regex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
  return regex.test(password);
}
