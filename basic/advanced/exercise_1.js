function calc() {
    let a = 7;
    let b = 14;
    let c = "21";
    let d = '36';
    let e = 42;

    let f = '1';
    let g = 15;
    let h = 8;
    let i = "1";
    
    let sum = a + b + Number(c) + Number(d) + e;
    
    let product = Number(f) * g * h * Number(i);
    
    let result = sum / product;

    document.write(result);
}

calc();