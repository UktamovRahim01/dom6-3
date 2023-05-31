let body = document.body

let container = document.createElement(`div`)

function items(container) {
    
    let item = document.createElement(`div`)
    
    let prm_img = document.createElement(`div`)
    let img = document.createElement(`img`)
    let text_box = document.createElement(`div`)
    let h2 = document.createElement(`h2`)
    let p = document.createElement(`p`)
    let inf_box = document.createElement(`div`)
    let inf_bx1 = document.createElement(`div`)
    let inf_bx2 = document.createElement(`div`)
    let inf_bx3 = document.createElement(`div`)
    let inf_img1 = document.createElement(`img`)
    let inf_img2 = document.createElement(`img`)
    let inf_img3 = document.createElement(`img`)
    let inf_sp1 = document.createElement(`span`)
    let inf_sp2 = document.createElement(`span`)
    let inf_sp3 = document.createElement(`span`)
    let button = document.createElement(`button`)
    
    
    container.classList.add(`container`)
    item.classList.add(`item`)
    prm_img.classList.add(`prm_img`)
    text_box.classList.add(`text_box`)
    inf_box.classList.add(`inf_box`)
    inf_bx1.classList.add(`inf_bx1`)
    inf_bx2.classList.add(`inf_bx1`)
    inf_bx3.classList.add(`inf_bx1`)
    button.classList.add(`button_item`)
    
    img.src = `./img/prom.svg`
    inf_img1.src = `./img/dollar.svg`
    inf_img2.src = `./img/star.svg`
    inf_img3.src = `./img/box.svg`

    h2.innerHTML = `MEN’S CLOTHING (120)`
    p.innerHTML =`Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday`
    inf_sp1.innerHTML = `109`
    inf_sp2.innerHTML = `3,9`
    inf_sp3.innerHTML = `120`
    button.innerHTML = `В избранное`
    
    body.append(container)
    container.append(item)
    item.append(prm_img, text_box)
    prm_img.append(img)
    text_box.append(h2, p, inf_box, button)
    inf_box.append(inf_bx1, inf_bx2 ,inf_bx3)
    inf_bx1.append(inf_img1, inf_sp1)
    inf_bx2.append(inf_img2, inf_sp2)
    inf_bx3.append(inf_img3, inf_sp3)
}
    
    for (let i = 0; i < 15; i++) {
        items(container)
        
    }
    
    
    
    
    
    
    
    

















