document.querySelector('#palindrome-form').addEventListener('submit', function (e) {
    e.preventDefault()
    // clears these elements each time the function is ran
    document.querySelector('#validation').innerText = ''
    document.querySelector('#palindrome').innerText = ''

    // removes symbols and splits each letter into an array
    let arr = e.target.elements.text.value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').split('')
    let message = e.target.elements.text.value.replace(/[^a-zA-Z0-9]/g, '')
    let b = arr.length - 1

    // loops through the array and checks both sides incrementally
    if (arr.length > 20) {
        document.querySelector('#validation').innerText = 'Your cannot exceed 20 letters'
    } else if (arr.length > 2) {
        for (let a = 0; a < Math.floor(arr.length / 2); a++) {   
            if (arr[a] === arr[b]) {
                b--
            } else {
                document.querySelector('#validation').innerText =`"${message}" is not a palindrome`
                return e.target.elements.text.value = ''
            }
        }
        if (count = Math.floor(arr.length / 2)) {
            document.querySelector('#palindrome').innerText = `"${message}" is a palindrome!`
        }
        
    } else {
        document.querySelector('#validation').innerText = 'You must enter more than two letters'
    }
    e.target.elements.text.value = ''
    })


