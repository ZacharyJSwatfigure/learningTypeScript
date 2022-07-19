const person: {
  name: string;
  age: number;
  nickname: string;
  hobbies: string [];
  role: [number, string];
} = {
  name: 'Zach',
  age: 22,
  nickname: 'Z',
  hobbies: ['Sports', 'cooking', 'gaming'],
  role: [1, 'Driver']
}

let favoriteAct: string[];
favoriteAct = ['sports'];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}

console.log(person.nickname)

console.log(person)