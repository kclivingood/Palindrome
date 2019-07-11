const arrCapitalize = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const test = document.querySelector('#palindrome-form').addEventListener('submit', function (e) {
    e.preventDefault()
    // clears these elements each time the function is ran
    document.querySelector('#validation').innerText = ''
    document.querySelector('#palindrome').innerText = ''

    // removes symbols and splits each letter into an array
    let arr = e.target.elements.text.value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').split('')
    let b = arr.length - 1

    // loops through the array and checks both sides incrementally
    if (arr.length > 2) {
        for (let a = 0; a < Math.floor(arr.length / 2); a++) {   
            if (arr[a] === arr[b]) {
                b--
            } else {
                // clears input b/c of return
                e.target.elements.text.value = ''
                return document.querySelector('#validation').innerText =`"${arrCapitalize(arr.join(''))}" is not a palindrome`
            }
        }
        if (count = Math.floor(arr.length / 2)) {
            document.querySelector('#palindrome').innerText = `"${e.target.elements.text.value}" is a palindrome!`
        }
    } else {
        document.querySelector('#validation').innerText = 'You must enter more than two letters in order to check for a palindrome'
    }
    e.target.elements.text.value = ''
    })


