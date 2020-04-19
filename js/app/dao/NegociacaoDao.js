class NegociacaoDao{

    constructor(connection) {
        this._connection = connection;
        this._store = 'negociacoes';
    }


    adiciona(negociacao){


        return new Promise((resolve, reject) => {

            let request = this._connection
                              .transaction([this._store], 'readwrite')
                              .objectStore(this._store)
                              .add(negociacao);
            
            request.onsuccess = e => {
                console.log('Gravando na storage');
                resolve();
            }

            request.onerror = e => {
                console.log(e.target.result);
                reject('Não foi possível adicionar a negociação');
            }

        });

        





    }

}