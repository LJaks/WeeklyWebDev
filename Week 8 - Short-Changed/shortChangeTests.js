export function roll(min, max, floatFlag) {
    let r = Math.random() * (max - min) + min
    return floatFlag ? r : Math.floor(r)
}

export let testPurses = Array(5).fill(0).map(a => {
    return {
        quarters: roll(0, 15),
        dimes: roll(0, 30),
        nickels: roll(0, 40),
        pennies: roll(0, 50),
        price: Number(roll(0, 10, 1).toFixed(2))
    }
})