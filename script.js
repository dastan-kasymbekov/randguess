let input = document.querySelector('.input')
let btn = document.querySelector('.btn')
let attempts = 3
let num = Math.ceil(Math.random() * 10)
let promt = document.querySelector('.promt')
let out = document.querySelector('#out')
btn.onclick = function guess() {
    let answer = input.value
    if (answer == num) {
        alert('Поздравляю, Вы угадали!')
        location.reload()
    } else if (answer !== num && attempts === 1) {
        alert('Вы проиграли!')
        location.reload()
    }
    if (answer <= 0) {
        alert('Введите число от 1 до 10!')
    } else if (answer > 10) {
        alert('Введите число от 1 до 10!')
    } else if (answer < num) {
        promt.innerHTML = `Подсказка: Больше!`
        attempts = attempts - 1
    } else if (answer > num) {
        promt.innerHTML = `Подсказка: Меньше!`
        attempts = attempts - 1
    }
    out.innerHTML = `Осталось попыток: ${attempts}`
}




