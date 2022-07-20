var Role;
(function (Role) {
    Role["ADMIN"] = "Admin";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Zach',
    age: 22,
    nickname: 'Z',
    hobbies: ['Sports', 'cooking', 'gaming'],
    role: Role.ADMIN
};
var favoriteAct;
favoriteAct = ['sports'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
console.log(person.nickname);
console.log(person);
console.log(person.role);
