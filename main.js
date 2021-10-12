name_of_Suggestion_Array=[];
function Show(){
    var name_1=document.getElementById("name_of_Pizza_1").value;
    var name_2=document.getElementById("name_of_Pizza_2").value;
    var name_3=document.getElementById("name_of_Pizza_3").value;
    var name_4=document.getElementById("name_of_Pizza_4").value;
    name_of_Suggestion_Array.push(name_1);
    name_of_Suggestion_Array.push(name_2);
    name_of_Suggestion_Array.push(name_3);
    name_of_Suggestion_Array.push(name_4);
    console.log (name_of_Suggestion_Array);
    document.getElementById("Display_Name").innerHTML=name_of_Pizza_Array;
    document.getElementById("Show_Button").style.display="none";
}
    function sorting(){
        name_of_Suggestion_Array.sort();
        console.log (name_of_Sugggestion_Array);
        document.getElementById ("Display_Name").innerHTML=name_of_Suggestiont_Array;
        document.getElementById("").innerHTML = htmldata;

        menu_list_array =[
            "Chicken Pizza",
            "Vegetable Pizza",
            "Cheese Burst Pizza",
            "Mozzarella Pizza",
            "Mushroom Pizza",
        ];
        function add_item(){
            var htmldata;
            var item=document.getElementById("add_item").value;

            htmldata=""
    }
}