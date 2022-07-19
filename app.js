var person = {
    name: 'Zach',
    age: 22,
    nickname: 'Z',
    hobbies: ['Sports', 'cooking', 'gaming']
};
var favoriteAct;
favoriteAct = ['sports'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
console.log(person.nickname);
