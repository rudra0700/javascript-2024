class BankDetails {
  name = "Rudra";
  #pin = "12345";

  #getIfcs() {
    return "000111";
  }

  getSpecialDetails() {
    return {
      pin: this.#pin,
      name: this.name,
      ifcs: this.#getIfcs(),
    };
  }
}

function getDetails() {
  const details = new BankDetails();
  console.log(details.getSpecialDetails());
}
