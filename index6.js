const year = +prompt("Yil:")

const oy = +prompt("Oy:")

const kun = +prompt("Kun:")

function all(year,oy,kun,){

    let date = new Date(year,oy - 1,kun) 
    let all = date.getTime()
    let end = Math.floor(all / (1000 * 60 * 60 * 24));
    return end

}

all(year,oy,kun,) 

    let yil= all(year,oy,kun,)

alert("1970-yildan boshlab " + yil + " kun o'tgan.)");