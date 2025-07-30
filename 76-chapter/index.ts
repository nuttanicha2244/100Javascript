//ใช้ never สำหรับตรวจสอบเงื่อนไขที่ครบถ้วน ใช้กับ Union Type 

type Shap = | { type: 'circle', radius: number } | { type: 'square', side: number }| { type: 'triangle', height: number }

function getArea(shap: Shap): number {
    switch(shap.type) {
        case 'circle':
            return 100
        case 'square':
            return 200
            case 'triangle':
            return 300
        default:
            const err:never =shap;
            throw new Error(`unexpected shape: ${err}`);
    }
}