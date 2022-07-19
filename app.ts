const person = {
  name: 'Zach',
  age: 22,
  nickname: 'Z',
  hobbies: ['Sports', 'cooking', 'gaming']
}

let favoriteAct: string[];
favoriteAct = ['sports'];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}

console.log(person.nickname)