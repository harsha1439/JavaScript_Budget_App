//Budget Controller
var budgetController = (function(){
    
   var Expense = function(id,description,value){
       this.id=id;
       this.description=description;
       this.value=value;
   } 
    var income = function(id,description,value){
       this.id=id;
       this.description=description;
       this.value=value;
   } 
    
    
    var totalExpenses = 0;
    var data = {
        allItems:{
            exp:[],
            inc:[]
        },
        totals:{
            exp:0,
            inc:0
        }
    }
    return {
        addItm: function(type,des,va){
            var newItem,Id;
            if(data.allItems[type].length>0){
              ID = data.allItems[type][data.allItems[type].length-1].id+1;  
            }
            if(type === "exp"){
                newItem = new Expense(Id,des,val);
            }
            else if(type === "inc"){
                newItem = new income(Id,des,val);
            }
          data.allItems[type].push(newItem);
            return newItem;
        }
    }
})();

//Ui Controller
var UIController = (function(){
    var domStrings = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue:".add__value",
        inputbutton:".add__btn"
    }
 return {
     getInput: function(){
         return {
        type:document.querySelector(domStrings.inputType).value,
        description:document.querySelector(domStrings.inputDescription).value,
        value:document.querySelector(domStrings.inputValue).value 
         }
    
     },
     
    getDomstrings: function(){
        return domStrings;
    
 }  
     }
})();

//Global App Controller
var controller  = (function(budgetCtrl,UiCtrl){
 //TO use the same code to key press event 
    var setEventListeners = function(){
        var dom = UiCtrl.getDomstrings();
        document.querySelector(dom.inputbutton).addEventListener("click" ,ctrlAddItem);
        document.addEventListener("keypress", function(event){
    if(event.keyCode=== 13 || event.which ===13){
        ctrlAddItem();
    }
    
});
    }
    
    
var ctrlAddItem = function(){                    
     //1. Get the field input data
     var input = UiCtrl.getInput();
     //2. add the item to the budget controller
     var newItem = budgetCtrl.addItem(input.type,input.description,input.value);
     //3.Add the item to the UI controller
     
     //4. calculate the budget
     
     //5. Display the budget
}
return{
    init: function(){
     setEventListeners();
    }
}
    
//Key prees Event

    
})(budgetController,UIController);

controller.init();





















