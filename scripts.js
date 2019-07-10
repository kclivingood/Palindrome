const arrCapitalize = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const test = document.querySelector('#palindrome-form').addEventListener('submit', function (e) {
    e.preventDefault()
    // clears these elements each time the function is ran
    document.querySelector('#validation').innerText = ''
    document.querySelector('#palindrome').innerText = ''

    let arr = e.target.elements.text.value.toLowerCase().replace(/\s+/g, '').split('')
    // let arrCapitalize = arr.charAt(0).toUpperCase() + arr.slice(1)
    let b = arr.length - 1
    let count = 0
    if (arr.length > 2) {
        for (let a = 0; a < Math.floor(arr.length / 2); a++) {   
            if (arr[a] === arr[b]) {
                b--
                count++
            } else {
                e.target.elements.text.value = ''
                return document.querySelector('#validation').innerText =`"${arrCapitalize(arr.join(''))}" is not a palindrome`
            }
        }
        if (count = Math.floor(arr.length / 2)) {
            document.querySelector('#palindrome').innerText = `"${arrCapitalize(arr.join(''))}" is a palindrome!`
        }
    } else {
        document.querySelector('#validation').innerText = 'You must enter more than two characters in order to check for a palindrome'
    }
    e.target.elements.text.value = ''
    })


