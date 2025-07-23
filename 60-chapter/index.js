//ใช้ AbortController เพื่อยกเลิก async operation ใช้กับพวก fetch
// ป้องกันการทำงานที่ไม่จำเป็น

const controller = new AbortController();
const signal = controller.signal;
async function getData() {
    try {
        
        const response = await fetch("https://api.codingthailand.com/api/version", { signal: signal });
        const data = response.json();
        return data;
    } catch (error) {
        console.log(JSON.stringify(error));
        if (error.name === 'AbortError') {
            console.log('fetch request aborted');
        } else {
            console.error('Fetch failed:', error);
        }
    }
}

const version = await getData();
console.log(version);

setTimeout(() => controller.abort(), 2000); 