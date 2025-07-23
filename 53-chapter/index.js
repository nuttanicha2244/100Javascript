const fetchData = async (item) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`fetched ${item}`), 1000);
    })
}
const getUser = async (item) => {
    try{
    // return fetchData(item);//bad ไม่ใส่ await จะไม่เข้า catch และ finally อย่างถูกต้อง
    return await fetchData(item); //good
    }catch (error) {
        console.error(error.message);
    }finally {
        console.log('finally');
    }
}
const users =await getUser(['a','b', 'c']);

console.log(users);