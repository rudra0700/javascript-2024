{
    function findUser(users, item) {
        let reversed = structuredClone(users).reverse()
        // let reversed = [...users].reverse()
        let foundMatch = reversed.find((user) => user.toLowerCase() === item.toLowerCase())
        return foundMatch
    }
    const users = ["a", "b", "c"]
    const foundUser = findUser(users, "C")
    console.log(foundUser)
}