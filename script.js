const getColor = () => {
    const getNumber = Math.floor(Math.random() * 16777215) // to generate a random number
    console.log(getNumber)
    const getCode = "#" + getNumber.toString(16) // to generate a hex code 
    console.log(getCode)
    document.body.style.backgroundColor = getCode // apply the hex code color to background
    document.getElementById("code").innerText = getCode // apply the hex code to the text

    navigator.clipboard.writeText(getCode) // to copy the hex code
}



document.getElementById("click-btn").addEventListener("click", getColor) // click event 

getColor() // initial call