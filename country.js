const header=document.createElement("div")
header.setAttribute("class","head")
header.innerHTML="<h1>where in the world?</h1>"
document.body.append(header)
const search=document.createElement("div")
search.setAttribute("class","search")
    document.body.append(search)
    const searchbar=document.createElement("input")
    searchbar.setAttribute("class","searchbar")
    searchbar.setAttribute("placeholder","search")
    search.appendChild(searchbar)


function country(){

    const flex=document.createElement("section");
    flex.setAttribute("class","flex")
    document.body.append(flex)
    
    // container for flag and info
    const division=document.createElement("div")
    division.setAttribute("class","division")
    flex.appendChild(division)
    // div for flag image
    const img=document.createElement("div")
    img.setAttribute("class","img")
    division.appendChild(img)
    // image tag
    const image=document.createElement("img")
    image.setAttribute("src",country_flag)
    image.setAttribute("class","image")
    img.appendChild(image)
    // div for name
    
    
    //  for info
    const info=document.createElement("div")
    info.setAttribute("class","info")
    division.appendChild(info)
    // for header and paragraph tag for info
    const name=document.createElement("h2");
     name.innerText=country_name;
     info.appendChild(name);
     
     const population=document.createElement("p")
     population.innerHTML="<b>Population:</b>"+country_population;
     info.appendChild(population);
     const region=document.createElement("p")
     region.innerHTML="<b>Region:</b>"+country_region;
     info.appendChild(region);
     const capital=document.createElement("p")
     capital.innerHTML="<b>Capital:</b>"+country_capital;
     info.appendChild(capital)
     
}

var countries = new XMLHttpRequest();
countries.open("GET", "https://restcountries.eu/rest/v2/all");
countries.onload = function (a) 
{
     
     var t= JSON.parse(this.response);
     for( i=a;i<12+a;i++)
        {
        country_name=(t[i].name)
        country_region=(t[i].region)
        country_population=(t[i].population)
        country_flag=(t[i].flag)
        country_capital=t[i].capital
        country()
        }     
        pagination()
        
}

 countries.onerror = function () 
 {
     console.log("Error", this.statusText);
 };
     countries.send();
    function pagination(){
         const pagi=document.createElement("nav")
         pagi.setAttribute("aria-label","...")
         pagi.setAttribute("class","pagi")
         pagi.innerHTML=`<ul class="pagination">
         <li class="page-item disabled">
           <a class="page-link" href="#" tabindex="-1">&laquo;</a>
         </li>
         <li class="page-item"><a class="page-link" onclick="page1()">1</a></li>
         <li class="page-item ">
           <a class="page-link" onclick=page2()>2 </a>
         </li>
         <li class="page-item"><a class="page-link" onclick="page3()"  target="_blank">3</a></li>
         <li class="page-item" onclick=>
           <a class="page-link" >&raquo;</a>
         </li>
       </ul>`
       document.body.append(pagi)
      }
  function page2()
  {
   countries.onload(12)
   
   
  }
  function page3()
  {
    countries.onload(24)
  }
  function page1()
  {
    countries.onload(0)
  }
  

   
     

     
    
     