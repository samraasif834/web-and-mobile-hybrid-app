const addbutton =document.querySelector('.addbutton');
var inputValue =document.querySelector('.input');
const container=document.querySelector('.container');


class item{
    constructor(itemName){
        this.createDiv(itemName);
   
    }

    createDiv(itemName){
        let input =document.createElement('.input');
        input.value=itemName;
        input.disabled=true;
        input.classList.add('item_input');
        input.type="text";

        let itemBox=document.createElement('div')
        itemBox.classList.add('item');

        let editbutton=document.createElement('button');
        editbutton.innerHTML="EDIT"
        editbutton.classList.add('editbutton');

        let removebutton=document.createElement('button');
        editbutton.innerHTML="REMOVE"
        editbutton.classList.add('removebutton');

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editbutton);
        itemBox.appendChild(removebutton);


        editbutton.addEventListener('click',() =>this.edit(input))
        
    }

    edit(input){
        input.disabled=!input.disabled;

    }
}

nav item("sports");