//Budget Controller
var budgetController = (function(){
    
    
    
})();

//Ui Controller
var UIController = (function(){
 return {
     getInput: function(){
         
     }
 };
    
})();

//Global App Controller
var controller  = (function(budgetCtrl,UiCtrl){
 //TO use the same code to key press event
    
var ctrlAddItem = function(){
    console.log("Both the keys were pressed");                      
     //1. Get the field input data
     
     //2. add the item to the budget controller
     
     //3.Add the item to the UI controller
     
     //4. calculate the budget
     
     //5. Display the budget
}
document.querySelector(".add__btn").addEventListener("click" ,ctrlAddItem);    
//Key prees Event
document.addEventListener("keypress", function(event){
    if(event.keyCode=== 13 || event.which ===13){
        ctrlAddItem();
    }
    
});
    
})(budgetController,UIController);























