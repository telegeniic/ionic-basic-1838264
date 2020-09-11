const tipoInput = document.getElementById("input-tipo");
const montoInput = document.querySelector("#input-monto");

const guardarBtn = document.querySelector("#btn-guardar");

const gastosList = document.getElementById("list-gastos");

const totalOutput = document.getElementById("output=total");

let total = 0;

function clear(){
    tipoInput.value = "";
    montoInput.value = "";
}

guardarBtn.addEventListener('click', ()=>{
    const tipo = tipoInput.value;
    const monto = montoInput.value;

    if(tipo.trim().length > 0 && monto.trim().length > 0 && monto > 0){ //valores validos
        
        const newItem = document.createElement("ion-item");
        newItem.textContent = tipo + ': $'+ monto;
        gastosList.appendChild(newItem);

        total += +monto;
        totalOutput.textContent = total
        clear();
    }
    else{
        //console.error("valores invalidos");
        alertController.create({
            message: 'Llene los campos correctamente',
            header: 'Valores Invalidos,',
            buttons: ['ok', 'cancelar']
        }).then(alertElement => {
            alertElement.present();
        })
    }

})