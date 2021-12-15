const arguments= process.argv.slice(2);

areaCircle = (area) => {
    let r= Math.sqrt(area/Math.PI)
    console.log(`Dairenin Alanı : ${area}`)
    console.log(`Dairenin Yarıçapı : ${r}`)
}
areaCircle(arguments[0]*1)