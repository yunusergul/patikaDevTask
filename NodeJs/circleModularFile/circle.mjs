export function CircleArea(r) {
    try {
        const cA = Math.PI*Math.sqrt(r)
        return cA
    } catch {
        return 'Circle Area | An error was encountered '
    }

}


export function CircleCircumference (r) {
    try {
        const cC = 2*Math.PI*r
        return cC
    } catch {
        return 'Circle Circumference | An error was encountered'
    }
}

