export class RegistrationModel {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  age: number;

  constructor(
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    age: number
  ) {
    this.username = username;
    this.age = age;
    this.lastName = lastName;
    this.password = password;
    this.firstName = firstName;
  }
}
