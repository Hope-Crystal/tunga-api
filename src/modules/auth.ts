import User from "./user";


export default class Auth {

    users:Array<User> = []

  constructor() {
    const user1 = new User("Sarah", "sarah@yahoo.com", "123456");
    const user2 = new User("Hope", "hope@gmail.com", "hope123");
    const user3 = new User("Deborah", "deborah@gmail.com", "hope123");

    this.users = [user1, user2, user3]
  }

  login(email:string, password:string) {

    const user = this.users.find((e) => {
        const isMatch = e.email === email && e.password === password
        return isMatch
    })

    if (!user) throw new Error("Invalid email or password")

    user.lastLogin = new Date().toDateString()

    return user.name + "welcome back!"

  }

  register(name:string, email:string, password: string) {
    const user = new User(name, email, password)
  }

}