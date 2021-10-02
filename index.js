let myLead=[];
const inputBtn=document.getElementById("input-btn");
const inputEL=document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteButton=document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLead") );
if (leadsFromLocalStorage) {
    myLead = leadsFromLocalStorage
    renderLead();
}
//save tab
tabBtn.addEventListener("click", function(){    
  
    chrome.tabs.query({active: true, currentWindow: true}, function(tab){
        myLead.push(tab[0].url)
        localStorage.setItem("myLead", JSON.stringify(myLead) )
        renderLead();
    })
})

//Event Listener toDelete
deleteButton.addEventListener("dblclick", function() {
   console.log("double clicked!")
   localStorage.clear()
   myLead = []
   renderLead();
});
/***Event Listener to add***/
inputBtn.addEventListener("click",function(){
myLead.push(inputEL.value);
inputEL.value="";
localStorage.setItem("myLead",JSON.stringify(myLead));

renderLead();
});

//render lead to unorderlist
function renderLead(){
let listItems="";
for(let i=0;i<myLead.length;i++){
listItems+= `<li>
<a  target='_blank' href="" +' ${myLead[i] }'+ "'>  ${myLead[i] }  </a>
</li>`
}
ulEl.innerHTML=listItems;
}


