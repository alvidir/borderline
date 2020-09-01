export function BelittleNumber(value){
    if (typeof value === 'string'){
        value = parseInt(value, 10 );
    }

    if (value < 1e3 ){
        return value
    } else if (value < 1e6) {
        return (value/1e3) + 'K'
    } else if (value < 1e9){
        return (value/1e6) + 'M'
    } else {
        return (value/1e9) + 'G'
    }
}