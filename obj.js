const obj = {
    name: 'Adrian',
    printName: function() {
        console.log(this.name)
    },
    printName2: () => {
        console.log(this.name)
        console.log(obj.name)
    }
}

obj.color = 'red'

// console.log(obj)
// obj.printName()
// obj.printName2()

console.log(Object.keys(obj))
console.log(Object.values(obj))