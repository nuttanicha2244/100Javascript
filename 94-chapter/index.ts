const roles = ['admin', 'user', 'guest'] as const;

console.log(roles[1]);

type Roles = typeof roles[number];

const myRole: Roles = 'admin';

console.log(myRole.includes('admin'));