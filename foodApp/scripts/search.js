async function getData(url){
let res =await fetch(url);
let data= await res.json();
return data;
}

function appendData(data,parent){
var data1=data.meals;
data1.map(({strMeal,strMealThumb,strInstructions})=>{
    var title=document.createElement("h3");
    title.innerText=strMeal;
    var image=document.createElement("img");
    image.src=strMealThumb;
    var recipie=document.createElement("p");
    recipie.innerText=strInstructions;
var div= document.createElement("div");
div.append(title,image,recipie);
parent.append(div);
})
    

}



export {getData,appendData};