class UserAccount {
  #password: string = "";

  set password(newPass: string) {
    if (newPass.length >= 6) {
      this.#password = newPass;
      console.log("set password succesfull !");
    } else {
      console.log("Password too short!");
    }
  }

  get maskedPassword(): string {
    return "******";
  }
}

const user = new UserAccount();
user.password = "mchaiski1";
console.log(user.maskedPassword);
