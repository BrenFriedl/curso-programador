const metros = prompt ("Ingrese los metros que quiere recorrer:", "");

    if(metros<1000) {
        document.write(`te recomendamos recorrer los ${metros} a pie`);

    }else if (metros <10000) {
        document.write(`te recomendamos recorrer los ${metros} en bicicleta`);
    }else if (metros <30000) {
        document.write(`te recomendamos recorrer los ${metros} en colectivo`);
    }else if (metros <100000) {
         document.write (`te recomendamos recorrer los ${metros} en auto`);
    }else {
         document.write (`te recomendamos recorrer los ${metros} en avion`);
    }