"use strict";


let  btn = document.getElementById("btn");



btn.addEventListner("click", function() {

    let input = document.getElementById("input").value;

    let img = document.createElement("addimg");
    img.src = "/ranger.jpg";
    document.body.appendChild(img);  

   

    switch(input) {

        case "Ranger":
            
            break;
            case "Corolla":
                break
                case "Honda City":
                    break;

                    default:
                        alert("Digite um carro Válido");
                        break;


    }
    
})





