const key = document.getElementById("key");
const lugar = document.getElementById("lug");
const a = '#ff33d1'; // rosado
const s = '#ff9033'; // naranjo
const d = '#33bbff'; // celeste
const q = '#a31984'; // morado
const w = '#858585'; // gris
const e = '#8c3030'; // café

document.addEventListener('keydown', function (event) { 
    if (event.key === 'a') {
        key.style.backgroundColor = a
    } else if (event.key === 's') { 
        key.style.backgroundColor = s
    } else if (event.key === 'd') { 
        key.style.backgroundColor = d
    } else if (event.key === 'q') { 
        newKey(q)
    } else if (event.key === 'w') { 
        newKey(w)
    } else if (event.key === 'e') { 
        newKey(e)
    }
})

let newKey = (color) => {
    const key2 = document.createElement("div");
    key2.setAttribute("id", "key2");
    key2.style.width = "200px";
    key2.style.height = "200px";
    key2.style.border = "2px solid black";
    key2.style.backgroundColor = color;
    lugar.appendChild(key2);
}


