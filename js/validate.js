export function validateInputs(inputs){
    for(const element of inputs){
        if(element.value.trim() === ''){
            element.classList.add('input-error');

            const infoErro = mesageError(element.name, element);
            const elementFather = element.parentElement;
            if(elementFather.childNodes.length < 4)
                elementFather.append(infoErro)            
            
        }else{
            
            element.classList.remove('input-error');            
            const elementFather = element.parentElement;
            
            const childrenNodes = elementFather.childNodes;
            if(childrenNodes.length === 4 ){
                elementFather.removeChild(elementFather.childNodes[3]);
            }
        }
    }
}

function mesageError(nameElement){
    const smallError = document.createElement('p');
    smallError.textContent = `${nameElement} cannot be empty`;
    smallError.classList.add('info-error');
    
    
    return smallError;
}
