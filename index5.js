const birinchi = +prompt("Istalgan raqamni kiriting: ")

const natija = prompt("+, -, *, / amallardan birini tanlang: ")

const ikkinchi = +prompt("Ikkinchi istalgan raqamni kiriting: ")


function result(birinchi,ikkinchi){

    if (natija === "+"){
        console.log(birinchi+ikkinchi);
    }else if (natija === "*"){
        console.log(birinchi*ikkinchi);
    }
    if(birinchi>=ikkinchi){
    if (natija === "-"){
        console.log(birinchi-ikkinchi);
    }else if (natija === "/"){
        console.log(birinchi/ikkinchi);
    }
}

else{
    alert("birinchi son ikkinchi sondan kichik")
}

}

result(birinchi,ikkinchi)