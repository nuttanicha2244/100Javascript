//ใช้ keyof+typeof+as const เพื่อสร้าง type-safe keys จาก object จริง อัตโนมัติ

const options = {
    dark: 'dark mode',
    light: 'light mode',
}as const;

type ThemeOptions = keyof typeof options;
function setTheme(theme: ThemeOptions) {

}

const filters = {
    category: 'books',
    sort: 'asc',
    page:1,
} as const;
type FilterOptions = keyof typeof filters;