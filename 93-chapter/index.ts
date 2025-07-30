type User = {
    name: string | null;
}
const user: User = { name: null };
if (user.name != null) {
    console.log(user.name.toUpperCase());
}