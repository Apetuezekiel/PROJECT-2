let bgColorArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D','E','F'];

magic.addEventListener('click', changeBgHex => {
    let collector = "#"
    for (a=0; a<6; a++) {
        let colorPicker = Math.floor(Math.random()*bgColorArray.length);
        collector +=  bgColorArray[colorPicker]
    }
    container.style.backgroundColor = collector;
    console.log(collector);
    HEX.innerHTML = collector;
    
})

/* I PLACED MY colorPicker INTO THE LOOP FUNTION THAT SINGULAR ACT CHANGED THE FIGURE RANDOMLY AT EACH TIME */
