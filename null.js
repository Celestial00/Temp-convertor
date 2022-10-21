const input = document.querySelector("#scale-in");
const convert = document.querySelector("#convert")
const scal = document.querySelector("#id-selector");
var Historytab = document.querySelector("#history")


convert.onclick = () => {

    let selectedscale = scal.options[scal.selectedIndex].textContent;
    console.log(selectedscale);

    if(selectedscale == "kelvin"){

        let re = parseFloat(input.value) + 273.15;
        AddData(re);
        console.log(re);
     
    }

    else if(selectedscale == "fernhait"){

        let re2 = input.value * ( 9 / 5) + 32; 
         AddData(re2);
        console.log(re2);
    

    }

}

function AddData(result){

    const closebtn = document.createElement("a");
    const p = document.createElement("p");
    const div = document.createElement("div");
    p.textContent = result;
    closebtn.textContent = "x";
    div.appendChild(p);
    div.appendChild(closebtn);
    Historytab.appendChild(div);

    closebtn.onclick = () => {

        Historytab.removeChild(div)
        Historytab.removeChild(p)
        

    }


}

