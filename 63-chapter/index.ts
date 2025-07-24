//อย่าใช้ any เป็น type ถยกเว้นคุณกำลังแปลงโปรเจ็กจาก JavaScript เป็น TypeScript
//ในกรณีไม่รู้จัก type ให้ใช้ unknown แทน


//bad
function processInput(input: any) {

    console.log(input);
}
processInput("100");

//good
function processInput2(input: unknown) {
    if (typeof input === 'string') {
        console.log(input.toUpperCase());
    }
}

processInput2("Hello");
