const elBtn = document.getElementById('addBtn');
const elInput = document.querySelector('input[type="text"]');
const elForm = document.querySelector('form');
let elList = document.getElementById('list');


elForm.addEventListener('submit', addItem);

function addItem(e){
  e.preventDefault();

  let inpValue = elInput.value;
  let item = document.createElement('li');

  item.style.display = 'flex';
  item.style.justifyContent = 'space-between';
  item.style.overflowX = 'auto';
  item.innerHTML = `<p>${inpValue}</p>`
  
  item.addEventListener('click', hover);
  function hover(){
    item.style.color = '#00ff00';
    closeBtn.innerHTML = '<i class="bx bx-check-circle" style="color:#00ff00"></i>';
  }

  let closeBtn = item.appendChild(document.createElement('button'));

  closeBtn.innerHTML = '<i class="bx bxs-trash-alt"></i>';
  closeBtn.style.border = 'none';
  closeBtn.style.background = 'transparent';

  elList.appendChild(item);
  elInput.value = '';

    
  closeBtn.addEventListener('click', remove);
  
  function remove (){
    item.remove();

  }
  const elRemove = document.getElementById('removeBtn');
  const elCompleteBtn = document.getElementById('completeBtn');
  const elIncomplete = document.getElementById('incompleteBtn');
  
  
elCompleteBtn.addEventListener('click', filter);

function filter(){
  
}

  elRemove.addEventListener('click', remove);
  
  function remove(){
    item.remove();
  }
}



let elSearch = document.getElementById('Search');

elSearch.addEventListener('keyup', filterItems);

function filterItems (e){
   let text = e.target.value.toLowerCase();

   let elitem = elList.getElementsByTagName("li");

   for (let i = 0; i < Array.from(elitem).length; i++){
     let itemName = elitem[i].textContent;
     if (itemName.toLowerCase().indexOf(text) != -1){
       elitem[i].style.display = 'flex';
     }
     else{
       elitem[i].style.display = 'none';
     }
   }
}