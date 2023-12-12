let product = 0
for(let x = 2; x <= 12; x++){
    console.log(`Multiplication tables of : ${x}`)
    for(let y = 1; y <= 12; y++){
        product = x * y
        
        console.log(`${x} * ${y} = ${product}`)
    }
}