function swapCase(text) {
    let newText = "";
    for(let i = 0; i<text.length; i++){
        if(text[i] === text[i].toLowerCase()){
            newText += text[i].toUpperCase();
        }else {
            newText += text[i].toLowerCase();
        }
    }
    console.log(newText);
    return newText;
}

module.exports = { swapCase };
