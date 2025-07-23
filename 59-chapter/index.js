// ระวังการใช้ async/await(Promise) กับ ForEach เนื่องจาก ForEach จะไม่รอให้ Promise เสร็จสิ้นก่อนที่จะไปยังลูปถัดไป
const fetData = async (item) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`fetched ${item}`), 1000)
    })
}
//bad
const processItems =  (items) => {
    items.forEach( async (item) => {
        const result = await fetData(item)
        console.log(result);
    });
    console.log("processing completet!!") 
}
processItems([1, 2, 3, 4, 5]);



//good use for of
const processItems2 =  async(items) => {
        for (const item of items) {
        const result = await fetData(item)
        console.log(result);
    }
    console.log("processing completet!!") //อันนี้จะทำงานหลังจากที่ทุกอย่างเสร็จสิ้น
}
processItems2(["a", "b", "c", "d", "e"]); //อันนี้จะแสดงผลก่อน