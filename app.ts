const btn : HTMLElement | null = document.getElementById('exchange');

if(btn!==null) {
    btn.addEventListener<"click">("click", (event: MouseEvent) => {
        console.log(first)
    })
} else {
    console.log('error')
}