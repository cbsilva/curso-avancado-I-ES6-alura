class NegociacaoController {

    constructor (){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));

        this._negociacoesView.update();

       

        //Object.freeze(this);
    }

    /**
     * 
     * @param {*} event
     * Método adiciona negociacoes 
     */

    adiciona(event) {        

        event.preventDefault();     

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._listaNegociacoes.negociacoes.push(this._criaNegociacao());
        this._limpaFormulario();                           
    }

    /**
     * Método privado para criar negociacao
     */
    _criaNegociacao() {

        return new Negociacao(
               DateHelper.textoParaData(this._inputData.value),
               this._inputQuantidade.value,
               this._inputValor.value
        );
    }

    /**
     * Método privado para limpar formulário
     */

    _limpaFormulario() {

        this._inputData.value       = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value      = 0.0;

        this._inputData.focus();       
    }    
}