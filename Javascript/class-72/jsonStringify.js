const user = {
    name: "John",
    age: 30,
    city: "New York",
    data: '{name: "John", age: 30, city: "New York"}',
    toJSON: function() {
        return {
            name: this.name,
            age: this.age
        };
    }
}

console.log("user", JSON.parse(JSON.stringify(user)))

console.log("user",JSON.stringify(user))

const user2 = '{"name":"John","age":30}'
console.log("user2",typeof JSON.parse(user2))