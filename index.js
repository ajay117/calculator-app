import { add, subtract, multiply, divide } from './calculate.js'

let calculatorObj = {
    num1: '',
    num2: '',
    numbers: Array.from(document.querySelectorAll('.num')),
    operators: Array.from(document.querySelectorAll('.operator')),
    resetBtn: document.querySelector('.btn__reset'),
    deleteBtn: document.querySelector('.btn__delete'),
    perform: '',
    theme: 'one',
}

const performFunction = (name) => {
    let calculatorScreen = document.querySelector('.calculator__screen')
    calculatorObj.num1 = '' + name(calculatorObj.num1, calculatorObj.num2)
    calculatorObj.num2 = ''
    calculatorScreen.textContent = calculatorObj.num1
}

calculatorObj.numbers.forEach((num) => {
    num.addEventListener('click', () => {
        let calculatorScreen = document.querySelector('.calculator__screen')
        if (!calculatorObj.perform) {
            calculatorObj.num1 += num.textContent
            calculatorScreen.textContent = calculatorObj.num1
        } else {
            calculatorObj.num2 += num.textContent
            calculatorScreen.textContent = calculatorObj.num2
        }
    })
})

calculatorObj.operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (calculatorObj.perform && calculatorObj.num1 && calculatorObj.num2) {
            if (calculatorObj.perform === 'Addition') {
                performFunction(add)
            }

            if (calculatorObj.perform === 'Subtraction') {
                performFunction(subtract)
            }

            if (calculatorObj.perform === 'Multiplication') {
                performFunction(multiply)
            }

            if (calculatorObj.perform === 'Division') {
                performFunction(divide)
            }
        }

        if (calculatorObj.num1) {
            if (operator.textContent === '+') {
                calculatorObj.perform = 'Addition'
            } else if (operator.textContent === '-') {
                calculatorObj.perform = 'Subtraction'
            } else if (operator.textContent === '×') {
                calculatorObj.perform = 'Multiplication'
            } else if (operator.textContent === '/') {
                calculatorObj.perform = 'Division'
            }
        }
    })
})

calculatorObj.resetBtn.addEventListener('click', () => {
    let calculatorScreen = document.querySelector('.calculator__screen')
    calculatorObj.num1 = ''
    calculatorObj.num2 = ''
    calculatorObj.perform = ''
    calculatorScreen.textContent = '0'
})

calculatorObj.deleteBtn.addEventListener('click', () => {
    if (!calculatorObj.num2) {
        let calculatorScreen = document.querySelector('.calculator__screen')
        calculatorObj.perform = ''
        calculatorObj.num1 = calculatorObj.num1.slice(0, -1)
        calculatorScreen.textContent = calculatorObj.num1 || 0
    } else {
        let calculatorScreen = document.querySelector('.calculator__screen')
        calculatorObj.num2 = calculatorObj.num2.slice(0, -1)
        calculatorScreen.textContent = calculatorObj.num2 || 0
    }
})

let toggleButtons = document.querySelectorAll('.circle')
toggleButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if (index === 0) calculatorObj.theme = 'two'
        if (index === 1) calculatorObj.theme = 'three'
        if (index === 2) calculatorObj.theme = 'one'

        let nextSibling
        if (!btn.classList.contains('hide')) {
            btn.classList.add('hide-visibility')
            if (toggleButtons.length - 1 !== index) {
                nextSibling = toggleButtons[index + 1]
                nextSibling.classList.toggle('hide-visibility')
            } else {
                nextSibling = toggleButtons[0]
                nextSibling.classList.toggle('hide-visibility')
                calculatorObj.theme = 'one'
            }
        }

        if (calculatorObj.theme === 'one') {
            let themeBox = document.querySelector('.theme__box')
            let main = document.querySelector('main')
            let headerLeft = document.querySelector('.header__left')
            let headerRight = document.querySelector('.header__right')
            let calculatorScreen = document.querySelector('.calculator__screen')
            let calculatorKeypad = document.querySelector('.calculator__keypad')
            let deleteBtn = document.querySelector('.btn__delete')
            let resetBtn = document.querySelector('.btn__reset')
            let equalBtn = document.querySelector('.btn__equal')
            let calculatorBtnList =
                document.querySelectorAll('.calculator__btn')

            let elements = [
                themeBox,
                main,
                headerLeft,
                headerRight,
                calculatorScreen,
                calculatorKeypad,
                deleteBtn,
                resetBtn,
                equalBtn,
            ]

            elements.forEach((item) => {
                item.classList.remove('theme2')
                item.classList.remove('theme3')
            })

            calculatorBtnList.forEach((btn) => {
                btn.classList.remove('theme2')
                btn.classList.remove('theme3')
            })
        }

        if (calculatorObj.theme === 'two') {
            let themeBox = document.querySelector('.theme__box')
            let main = document.querySelector('main')
            let headerLeft = document.querySelector('.header__left')
            let headerRight = document.querySelector('.header__right')
            let calculatorScreen = document.querySelector('.calculator__screen')
            let calculatorKeypad = document.querySelector('.calculator__keypad')
            let deleteBtn = document.querySelector('.btn__delete')
            let resetBtn = document.querySelector('.btn__reset')
            let equalBtn = document.querySelector('.btn__equal')

            themeBox.classList.remove('theme3')
            themeBox.classList.add('theme2')
            nextSibling.classList.add('theme2')

            main.classList.remove('theme3')
            main.classList.add('theme2')

            headerLeft.classList.remove('theme3')
            headerLeft.classList.add('theme2')

            headerRight.classList.remove('theme3')
            headerRight.classList.add('theme2')

            calculatorScreen.classList.remove('theme3')
            calculatorScreen.classList.add('theme2')

            calculatorKeypad.classList.remove('theme3')
            calculatorKeypad.classList.add('theme2')

            deleteBtn.classList.remove('theme3')
            deleteBtn.classList.add('theme2')

            resetBtn.classList.remove('theme3')
            resetBtn.classList.add('theme2')

            equalBtn.classList.remove('theme3')
            equalBtn.classList.add('theme2')
        }

        if (calculatorObj.theme === 'three') {
            let themeBox = document.querySelector('.theme__box')
            let main = document.querySelector('main')
            let headerLeft = document.querySelector('.header__left')
            let headerRight = document.querySelector('.header__right')
            let calculatorScreen = document.querySelector('.calculator__screen')
            let calculatorKeypad = document.querySelector('.calculator__keypad')
            let deleteBtn = document.querySelector('.btn__delete')
            let resetBtn = document.querySelector('.btn__reset')
            let equalBtn = document.querySelector('.btn__equal')
            let calculatorBtnList =
                document.querySelectorAll('.calculator__btn')

            themeBox.classList.remove('theme2')
            themeBox.classList.add('theme3')
            nextSibling.classList.add('theme3')

            main.classList.remove('theme2')
            main.classList.add('theme3')

            headerLeft.classList.remove('theme2')
            headerLeft.classList.add('theme3')

            headerRight.classList.remove('theme2')
            headerRight.classList.add('theme3')

            calculatorScreen.classList.remove('theme2')
            calculatorScreen.classList.add('theme3')

            calculatorKeypad.classList.remove('theme2')
            calculatorKeypad.classList.add('theme3')

            deleteBtn.classList.remove('theme2')
            deleteBtn.classList.add('theme3')

            resetBtn.classList.remove('theme2')
            resetBtn.classList.add('theme3')

            equalBtn.classList.remove('theme2')
            equalBtn.classList.add('theme3')

            calculatorBtnList.forEach((btn) => {
                btn.classList.remove('theme2')
                btn.classList.add('theme3')
            })
        }
    })
})
