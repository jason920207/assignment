export function weightFormat(weight, packageWeight) {


    let weightValue = weight ? weight : packageWeight
    weightValue = weightValue.match(/[0-9]+|g|lbs/g)
    return weightValue.join(' ')
}

