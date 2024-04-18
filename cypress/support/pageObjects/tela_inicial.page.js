/// <reference types="cypress" />

const Elements = require('../elements/tela_inicial.elements').ELEMENTS

class telaInicial{
    constructor(){
        this.elem = new Elements();
    }
    typeTitle(text){
        if(!text)   return;
        this.elem.elements.inputTitle().type(text);
    }
    typeUrl(Url){
        if(!Url)   return;
        this.elem.elements.inputImageUr().type(Url);
    }
    clickSubmitButton(){
        this.elem.elements.btnSubmit().click();
    }

}


export default new telaInicial();