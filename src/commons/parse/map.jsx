export function Nav(target, keys) {
    let current = target
    for(let index = 0; current && index < keys.length; index++){
        current = current[keys[index]]
    }

    if (!current) {
        current = ''
    }

    return current
}
