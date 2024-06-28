
var xOrCicle = false;//if it's Circle is true; if it's X is false 
var bloco1Isclicked = false;
var bloco2Isclicked = false;
var bloco3Isclicked = false;
var bloco4Isclicked = false;
var bloco5Isclicked = false;
var bloco6Isclicked = false;
var bloco7Isclicked = false;
var bloco8Isclicked = false;
var bloco9Isclicked = false;

var bloco1WhatValueWasPassed;
var bloco2WhatValueWasPassed;
var bloco3WhatValueWasPassed;
var bloco4WhatValueWasPassed;
var bloco5WhatValueWasPassed;
var bloco6WhatValueWasPassed;
var bloco7WhatValueWasPassed;
var bloco8WhatValueWasPassed;
var bloco9WhatValueWasPassed;

var messageWin;

function clicouNoBloco(numeroDoBloco){
    if(numeroDoBloco == 1){
        var div = document.getElementById("bloco1");
        if(bloco1Isclicked == false){
            if(xOrCicle == false){

                bloco1WhatValueWasPassed = 'X'

                const image = document.createElement("img");
                image.src = 'imagens/X_png.png';
                
                div.appendChild(image);
            }else{
                console.log('entrou no else');
                bloco1WhatValueWasPassed = 'O'

                const image = document.createElement("img");
                image.src = 'imagens/Círculo-PNg.png';
                
                div.appendChild(image);
            }
        }

        bloco1Isclicked = true;

        if(xOrCicle == false){
            xOrCicle = true;
        }else{
            xOrCicle = false;
        }
        
    }

    if(numeroDoBloco == 2){
        var div = document.getElementById("bloco2");
        if(bloco2Isclicked == false){
            if(xOrCicle == false){
                bloco2WhatValueWasPassed = 'X'
                const image = document.createElement("img");
                image.src = 'imagens/X_png.png';
                
                div.appendChild(image);
            }else{

                bloco2WhatValueWasPassed = 'O'

                const image = document.createElement("img");
                image.src = 'imagens/Círculo-PNg.png';
                
                div.appendChild(image);
            }
        }

        bloco2Isclicked = true;

        if(xOrCicle == false){
            xOrCicle = true;
        }else{
            xOrCicle = false;
        }
    }

    if(numeroDoBloco == 3){
        var div = document.getElementById("bloco3");
        if(bloco3Isclicked == false){
            if(xOrCicle == false){

                bloco3WhatValueWasPassed = 'X'

                const image = document.createElement("img");
                image.src = 'imagens/X_png.png';
                
                div.appendChild(image);
            }else{

                bloco3WhatValueWasPassed = 'O';

                const image = document.createElement("img");
                image.src = 'imagens/Círculo-PNg.png';
                
                div.appendChild(image);
            }
        }

        bloco3Isclicked = true;

        if(xOrCicle == false){
            xOrCicle = true;
        }else{
            xOrCicle = false;
        }
    }

    if(numeroDoBloco == 4){
        var div = document.getElementById("bloco4");
        if(bloco4Isclicked == false){
            if(xOrCicle == false){

                bloco4WhatValueWasPassed = 'X'

                const image = document.createElement("img");
                image.src = 'imagens/X_png.png';
                
                div.appendChild(image);
            }else{

                bloco4WhatValueWasPassed = 'O';

                const image = document.createElement("img");
                image.src = 'imagens/Círculo-PNg.png';
                
                div.appendChild(image);
            }
        }

        bloco4Isclicked = true;

        if(xOrCicle == false){
            xOrCicle = true;
        }else{
            xOrCicle = false;
        }
    }

    if(numeroDoBloco == 5){
        var div = document.getElementById("bloco5");
        if(bloco5Isclicked == false){
            if(xOrCicle == false){

                bloco5WhatValueWasPassed = 'X'

                const image = document.createElement("img");
                image.src = 'imagens/X_png.png';
                
                div.appendChild(image);
            }else{

                bloco5WhatValueWasPassed = 'O';

                const image = document.createElement("img");
                image.src = 'imagens/Círculo-PNg.png';
                
                div.appendChild(image);
            }
        }

        bloco5Isclicked = true;

        if(xOrCicle == false){
            xOrCicle = true;
        }else{
            xOrCicle = false;
        }
    }

    if(numeroDoBloco == 6){
        var div = document.getElementById("bloco6");
        if(bloco6Isclicked == false){
            if(xOrCicle == false){

                bloco6WhatValueWasPassed = 'X'

                const image = document.createElement("img");
                image.src = 'imagens/X_png.png';
                
                div.appendChild(image);
            }else{

                bloco6WhatValueWasPassed = 'O'

                const image = document.createElement("img");
                image.src = 'imagens/Círculo-PNg.png';
                
                div.appendChild(image);
            }
        }

        bloco6Isclicked = true;

        if(xOrCicle == false){
            xOrCicle = true;
        }else{
            xOrCicle = false;
        }
    }

    if(numeroDoBloco == 7){
        var div = document.getElementById("bloco7");
        if(bloco7Isclicked == false){
            if(xOrCicle == false){

                bloco7WhatValueWasPassed = 'X';

                const image = document.createElement("img");
                image.src = 'imagens/X_png.png';
                
                div.appendChild(image);
            }else{

                bloco7WhatValueWasPassed = 'O'

                const image = document.createElement("img");
                image.src = 'imagens/Círculo-PNg.png';
                
                div.appendChild(image);
            }
        }

        bloco7Isclicked = true;

        if(xOrCicle == false){
            xOrCicle = true;
        }else{
            xOrCicle = false;
        }
    }

    if(numeroDoBloco == 8){
        var div = document.getElementById("bloco8");
        if(bloco8Isclicked == false){
            if(xOrCicle == false){

                bloco8WhatValueWasPassed = 'X'

                const image = document.createElement("img");
                image.src = 'imagens/X_png.png';
                
                div.appendChild(image);
            }else{

                bloco8WhatValueWasPassed = 'O'

                const image = document.createElement("img");
                image.src = 'imagens/Círculo-PNg.png';
                
                div.appendChild(image);
            }
        }

        bloco8Isclicked = true;

        if(xOrCicle == false){
            xOrCicle = true;
        }else{
            xOrCicle = false;
        };
    }

    if(numeroDoBloco == 9){
        var div = document.getElementById("bloco9");
        if(bloco9Isclicked == false){
            if(xOrCicle == false){

                bloco9WhatValueWasPassed = 'X'

                const image = document.createElement("img");
                image.src = 'imagens/X_png.png';
                
                div.appendChild(image);
            }else{

                bloco9WhatValueWasPassed = 'O'

                const image = document.createElement("img");
                image.src = 'imagens/Círculo-PNg.png';
                
                div.appendChild(image);
            }
        }

        bloco9Isclicked = true;

        if(xOrCicle == false){
            xOrCicle = true;
        }else{
            xOrCicle = false;
        }
    }

    //GANHAR POR LINHA NAS HORIZONATAL

    var todosOsValoresForamPassados = bloco1WhatValueWasPassed != null && bloco2WhatValueWasPassed != null && bloco3WhatValueWasPassed != null && bloco4WhatValueWasPassed != null && bloco5WhatValueWasPassed != null && bloco6WhatValueWasPassed != null && bloco7WhatValueWasPassed != null && bloco8WhatValueWasPassed != null && bloco9WhatValueWasPassed != null;
    console.log(todosOsValoresForamPassados);

    if(bloco1WhatValueWasPassed == 'X' && bloco2WhatValueWasPassed == 'X' && bloco3WhatValueWasPassed == 'X'){
        messageWin = 'X ganhou';

        var div = document.getElementById("bloco1");
        div.style="background-color: greenyellow;"

        var div = document.getElementById("bloco2");
        div.style="background-color: greenyellow;"

        var div = document.getElementById("bloco3");
        div.style="background-color: greenyellow;"

    }else if(bloco1WhatValueWasPassed == 'O' && bloco2WhatValueWasPassed == 'O' && bloco3WhatValueWasPassed == 'O'){
        messageWin = 'O ganhou';

        var div = document.getElementById("bloco1");
        div.style="background-color: greenyellow;"

        var div = document.getElementById("bloco2");
        div.style="background-color: greenyellow;"

        var div = document.getElementById("bloco3");
        div.style="background-color: greenyellow;"

    }else if(todosOsValoresForamPassados){
        console.log('entrou no if velha');
        messageWin = "VELHA"
    }

    if(bloco4WhatValueWasPassed == 'X' && bloco5WhatValueWasPassed == 'X' && bloco6WhatValueWasPassed == 'X'){
        messageWin = 'X ganhou';

        var div = document.getElementById("bloco4");
        div.style="background-color: greenyellow;"

        var div = document.getElementById("bloco5");
        div.style="background-color: greenyellow;"

        var div = document.getElementById("bloco6");
        div.style="background-color: greenyellow;"

    }else if(bloco4WhatValueWasPassed == 'O' && bloco5WhatValueWasPassed == 'O' && bloco6WhatValueWasPassed == 'O'){
        messageWin = 'O ganhou';

        var div = document.getElementById("bloco4");
        div.style="background-color: greenyellow;"

        var div = document.getElementById("bloco5");
        div.style="background-color: greenyellow;"

        var div = document.getElementById("bloco6");
        div.style="background-color: greenyellow;"

    }else if(todosOsValoresForamPassados == true && messageWin == null){
        console.log('entrou no if velha');
        messageWin = "VELHA"
    }

    if(bloco7WhatValueWasPassed == 'X' && bloco8WhatValueWasPassed == 'X' && bloco9WhatValueWasPassed == 'X'){
        messageWin = 'X ganhou';

        var div = document.getElementById("bloco7");
        div.style="background-color: greenyellow;"

        var div = document.getElementById("bloco8");
        div.style="background-color: greenyellow;"

        var div = document.getElementById("bloco9");
        div.style="background-color: greenyellow;"

    }else if(bloco7WhatValueWasPassed == 'O' && bloco8WhatValueWasPassed == 'O' && bloco9WhatValueWasPassed == 'O'){
        messageWin = 'O ganhou';

        var div = document.getElementById("bloco7");
        div.style="background-color: greenyellow;"

        var div = document.getElementById("bloco8");
        div.style="background-color: greenyellow;"

        var div = document.getElementById("bloco9");
        div.style="background-color: greenyellow;"

    }else if(todosOsValoresForamPassados == true && messageWin == null){
        console.log('entrou no if velha');
        messageWin = "VELHA"
    }

    //GANHAR POR LINHA NA VERTICAL
    if(bloco1WhatValueWasPassed == 'X' && bloco4WhatValueWasPassed == 'X' && bloco7WhatValueWasPassed == 'X'){
        messageWin = 'X ganhou';

        var div = document.getElementById("bloco1");
        div.style="background-color: greenyellow;"

        var div = document.getElementById("bloco4");
        div.style="background-color: greenyellow;"

        var div = document.getElementById("bloco7");
        div.style="background-color: greenyellow;"

    }else if(bloco1WhatValueWasPassed == 'O' && bloco4WhatValueWasPassed == 'O' && bloco7WhatValueWasPassed == 'O'){
        messageWin = 'O ganhou';

        var div = document.getElementById("bloco1");
        div.style="background-color: greenyellow;"

        var div = document.getElementById("bloco4");
        div.style="background-color: greenyellow;"

        var div = document.getElementById("bloco7");
        div.style="background-color: greenyellow;"
    }else if(todosOsValoresForamPassados == true && messageWin == null){
        console.log('entrou no if velha');
        messageWin = "VELHA"
    }

    if(bloco2WhatValueWasPassed == 'X' && bloco5WhatValueWasPassed == 'X' && bloco8WhatValueWasPassed == 'X'){
        messageWin = 'X ganhou';

        var div = document.getElementById("bloco2");
        div.style="background-color: greenyellow;"

        var div = document.getElementById("bloco5");
        div.style="background-color: greenyellow;"

        var div = document.getElementById("bloco8");
        div.style="background-color: greenyellow;"

    }else if(bloco2WhatValueWasPassed == 'O' && bloco5WhatValueWasPassed == 'O' && bloco8WhatValueWasPassed == 'O'){
        messageWin = 'O ganhou';

        var div = document.getElementById("bloco2");
        div.style="background-color: greenyellow;"

        var div = document.getElementById("bloco5");
        div.style="background-color: greenyellow;"

        var div = document.getElementById("bloco8");
        div.style="background-color: greenyellow;"

    }else if(todosOsValoresForamPassados == true && messageWin == null){
        console.log('entrou no if velha');
        messageWin = "VELHA"
    }
    
    if(bloco3WhatValueWasPassed == 'X' && bloco6WhatValueWasPassed == 'X' && bloco9WhatValueWasPassed == 'X'){
        messageWin = 'X ganhou';

        var div = document.getElementById("bloco3");
        div.style="background-color: greenyellow;"

        var div = document.getElementById("bloco6");
        div.style="background-color: greenyellow;"

        var div = document.getElementById("bloco9");
        div.style="background-color: greenyellow;"

    }else if(bloco3WhatValueWasPassed == 'O' && bloco6WhatValueWasPassed == 'O' && bloco9WhatValueWasPassed == 'O'){
        messageWin = 'O ganhou';

        var div = document.getElementById("bloco3");
        div.style="background-color: greenyellow;"

        var div = document.getElementById("bloco6");
        div.style="background-color: greenyellow;"

        var div = document.getElementById("bloco9");
        div.style="background-color: greenyellow;"

    }else if(todosOsValoresForamPassados == true && messageWin == null){
        console.log('entrou no if velha');
        messageWin = "VELHA"
    }

    //GANHAR NA DIAGONAL
    if(bloco1WhatValueWasPassed == 'X' && bloco5WhatValueWasPassed == 'X' && bloco9WhatValueWasPassed == 'X'){
        messageWin = 'X ganhou';

        var div = document.getElementById("bloco1");
        div.style="background-color: greenyellow;"

        var div = document.getElementById("bloco5");
        div.style="background-color: greenyellow;"

        var div = document.getElementById("bloco9");
        div.style="background-color: greenyellow;"

    }else if(bloco1WhatValueWasPassed == 'O' && bloco5WhatValueWasPassed == 'O' && bloco9WhatValueWasPassed == 'O'){
        messageWin = 'O ganhou';

        var div = document.getElementById("bloco1");
        div.style="background-color: greenyellow;"

        var div = document.getElementById("bloco5");
        div.style="background-color: greenyellow;"

        var div = document.getElementById("bloco9");
        div.style="background-color: greenyellow;"

    }else if(todosOsValoresForamPassados == true && messageWin == null){
        console.log('entrou no if velha');
        messageWin = "VELHA"
    }

    if(bloco3WhatValueWasPassed == 'X' && bloco5WhatValueWasPassed == 'X' && bloco7WhatValueWasPassed == 'X'){
        messageWin = 'X ganhou';

        var div = document.getElementById("bloco3");
        div.style="background-color: greenyellow;"

        var div = document.getElementById("bloco5");
        div.style="background-color: greenyellow;"

        var div = document.getElementById("bloco7");
        div.style="background-color: greenyellow;"

    }else if(bloco3WhatValueWasPassed == 'O' && bloco5WhatValueWasPassed == 'O' && bloco7WhatValueWasPassed == 'O'){
        messageWin = 'O ganhou';

        var div = document.getElementById("bloco3");
        div.style="background-color: greenyellow;"

        var div = document.getElementById("bloco5");
        div.style="background-color: greenyellow;"

        var div = document.getElementById("bloco7");
        div.style="background-color: greenyellow;"

    }else if(todosOsValoresForamPassados == true && messageWin == null){
        console.log('entrou no if velha');
        messageWin = "VELHA"
    }




    if(messageWin){
        console.log('entrou no primeiro if');
        console.log('messagewin: '+messageWin);
        if(messageWin == 'X ganhou'){
            console.log('entrou no if do X');
            var modal1 = document.getElementById("messageDeVitoriaX");
            modal1.showModal();

            /*var div = document.getElementById("messageDeVitoria")
            const image = document.createElement("img");
            image.src = 'imagens/x_win.png';
            div.appendChild(image)*/;
        }else if(messageWin == 'O ganhou'){
            console.log('entrou no if do O');
            var modal1 = document.getElementById("messageDeVitoriaO");
            modal1.showModal();

            /*var div = document.getElementById("messageDeVitoria")
            const image = document.createElement("img");
            image.src = 'imagens/o_win.png';
            div.appendChild(image);*/
        }else{
            var modal1 = document.getElementById("messageDeVitoriaVelha");
            modal1.showModal();
        }
    }

}


function fecharModal(modal){

    if(modal == 'X'){
        var modal1 = document.getElementById("messageDeVitoriaX");
        modal1.close();

        

    }else if(modal == 'O'){
        var modal1 = document.getElementById("messageDeVitoriaO");
        modal1.close();

        
    }else if("VELHA"){
        var modal1 = document.getElementById("messageDeVitoriaVelha");
        modal1.close();

    }

    
}


function resetJogo(){
    var div = document.getElementById("bloco1");
        div.style="background-color: white;"
        div.innerHTML = '';
        bloco1WhatValueWasPassed = null;
        messageWin = null;
        bloco1Isclicked = false;
        xOrCicle = false;

        var div = document.getElementById("bloco2");
        div.style="background-color: white;"
        div.innerHTML = '';
        bloco2WhatValueWasPassed = null;
        messageWin = null;
        bloco2Isclicked = false;
        xOrCicle = false;


        var div = document.getElementById("bloco3");
        div.style="background-color: white;"
        div.innerHTML = '';
        bloco3WhatValueWasPassed = null;
        messageWin = null;
        bloco3Isclicked = false;
        xOrCicle = false;

        var div = document.getElementById("bloco4");
        div.style="background-color: white;"
        div.innerHTML = '';
        bloco4WhatValueWasPassed = null;
        messageWin = null;
        bloco4Isclicked = false;
        xOrCicle = false;

        var div = document.getElementById("bloco5");
        div.style="background-color: white;"
        div.innerHTML = '';
        bloco5WhatValueWasPassed = null;
        messageWin = null;
        bloco5Isclicked = false;
        xOrCicle = false;

        var div = document.getElementById("bloco6");
        div.style="background-color: white;"
        div.innerHTML = '';
        bloco6WhatValueWasPassed = null;
        messageWin = null;
        bloco6Isclicked = false;
        xOrCicle = false;

        var div = document.getElementById("bloco7");
        div.style="background-color: white;"
        div.innerHTML = '';
        bloco7WhatValueWasPassed = null;
        messageWin = null;
        bloco7Isclicked = false;
        xOrCicle = false;

        var div = document.getElementById("bloco8");
        div.style="background-color: white;"
        div.innerHTML = '';
        bloco8WhatValueWasPassed = null;
        messageWin = null;
        bloco8Isclicked = false;
        xOrCicle = false;

        var div = document.getElementById("bloco9");
        div.style="background-color: white;"
        div.innerHTML = '';
        bloco9WhatValueWasPassed = null;
        messageWin = null;
        bloco9Isclicked = false;
        xOrCicle = false;
}

//3, 6, 9
