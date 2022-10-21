const btn : HTMLElement | null = document.getElementById('exchange');
const gold : HTMLElement | null = document.getElementById('gold');
const silver : HTMLElement | null = document.getElementById('silver');
const copper : HTMLElement | null = document.getElementById('copper');

let g: number;
let s: number;
let c: number;

if(btn!==null) {
    if(btn instanceof HTMLButtonElement) {
    btn.addEventListener<"click">("click", (event: MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        if(gold !=null && gold instanceof HTMLInputElement) {
            g = gold.valueAsNumber;
        }
        if(silver !=null && silver instanceof HTMLInputElement) {
            s = silver.valueAsNumber;
        }
        if(copper !=null && copper instanceof HTMLInputElement) {
        c = copper.valueAsNumber;
        }
        console.log(`${g} ${s} ${c}`)
    })
} else {
    throw new Error(`HTML element for exchange is not a button`);
}
} else {
    throw new Error(`Button for exchange not found`);
}  
