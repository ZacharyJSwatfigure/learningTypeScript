enum Role {ADMIN = 'Admin', READ_ONLY=1, AUTHOR};

const person = {
  name: 'Zach',
  age: 22,
  nickname: 'Z',
  hobbies: ['Sports', 'cooking', 'gaming'],
  role:  Role.ADMIN
};

let favoriteAct: string[];
favoriteAct = ['sports'];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}

console.log(person.nickname)

console.log(person)

console.log(person.role)