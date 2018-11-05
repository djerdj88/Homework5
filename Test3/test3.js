function clean(node)
{
  for(var n = 0; n < node.childNodes.length; n ++)
  {
    var child = node.childNodes[n];
    if
    (
      child.nodeType === 8 
      || 
      (child.nodeType === 3 && !/\S/.test(child.nodeValue))
    )
    {
      node.removeChild(child);
      n --;
    }
    else if(child.nodeType === 1)
    {
      clean(child);
    }
  }
}
clean (document.body);

function ID(selector){
    return document.getElementById(selector);
}

function create(selector){
    return document.createElement(selector);
}

function CL(selector){
    return document.getElementsByClassName(selector);
}

let myObj = {}, arr = "", childrenLength = ID("tbody").children.length, a, names = "";

function getGames() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            for (let i = 0; i < myObj.games.length; i++){
                let a, b ,c , n = 0, table = ID("tbody");
                a = create("tr");
                a.id = `tr-${i+3}`;
                
                table.appendChild(a);
                for (let j = 0; j < myObj.games.length; j++){
                b = create("td");
                b.id = `td-${i+3}${n+1}`;
                a.appendChild(b);
                n++;
                }
                } 
                for (let k = 0; k < myObj.games.length; k++){
                    ID(`td-${k+3}1`).innerText = `${k+3}.`;
                    let slika = create("img");
                    slika.className = `img-${k+3}`;
                    slika.id = `img-${k+3}`;
                    ID(`td-${k+3}2`).appendChild(slika);
                    ID(`img-${k+3}`).src = myObj.games[k].image;
                    ID(`img-${k+3}`).title = myObj.games[k].name;
                    names += myObj.games[k].name + "*";


                    ID(`td-${k+3}3`).innerText = myObj.games[k]["Release date"];
                    ID(`td-${k+3}4`).innerText = myObj.games[k].Publisher;
                    ID(`td-${k+3}5`).innerText = myObj.games[k].Genre;
                    ID(`td-${k+3}6`).innerText = myObj.games[k].Rating;
                    let delBtn = create("button");
                    delBtn.className = "btn";
                    delBtn.innerText = "X";
                    ID(`td-${k+3}7`).appendChild(delBtn);
            }
            for (let i = 6; i <= ID("tbody").children.length; i++){
                ID(`tr-${i}`).style.display = "none";
            }

            x = checkCookie();
            page(x);
    }
}

    xmlhttp.open("GET", "test.txt", true);
    xmlhttp.send();
};

getGames();

ID("tbody").addEventListener("click", function(event){

    if (event.target.classList.value.indexOf("img-") !== -1){
        switch (event.target.classList.value){
            case "img-1":
                window.open("https://en.wikipedia.org/wiki/Dota_2",'_blank');
                break;
            case "img-2":
                window.open("https://en.wikipedia.org/wiki/Age_of_Empires_II",'_blank');
                break;
            case "img-3":
                window.open("https://en.wikipedia.org/wiki/Tekken_3",'_blank');
                break;
            case "img-4":
                window.open("https://en.wikipedia.org/wiki/Max_Payne_(video_game)",'_blank');
                break;
            case "img-5":
                window.open("https://en.wikipedia.org/wiki/Super_Mario_Bros.",'_blank');
                break;
            case "img-6":
                window.open("https://en.wikipedia.org/wiki/Pok%C3%A9mon_Red_and_Blue",'_blank');
                break;
            case "img-7":
                window.open("https://en.wikipedia.org/wiki/Grand_Theft_Auto:_Vice_City",'_blank');
                break;
            case "img-8":
                window.open("https://en.wikipedia.org/wiki/World_of_Warcraft",'_blank');
                break;
            case "img-9":
                window.open("https://en.wikipedia.org/wiki/Assassin%27s_Creed_II",'_blank');
                break;
        }
    }
         
});



function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {

        let br = 0, rem = ["0"];
        var listItem = getCookie("lista");
              listItem = listItem.split("*").toString();
              listItem = listItem.split(",");
        let str = ID("item").value;
        let sel = parseFloat(ID("select").value);
        console.log(sel);
              for (let i = 0; i < ID("tbody").children.length; i++){
                let rat = parseFloat(ID(`td-${i+1}6`).innerText);
                if(listItem.indexOf(ID(`img-${i+1}`).title) > -1 ||  rat < sel){
                    ID(`tr-${i+1}`).style.display = "none";
                    ID(`tr-${i+1}`).classList.add("removed");
                }
                else{
                    ID(`td-${i+1}1`).innerText = `${br+1}.`;
                    br++;
                    rem[br-1] = ID(`img-${i+1}`).parentNode.parentNode.id;
                }
                if (ID("a-1").classList.contains("active")){
                    if (rem.length > 4){
                        for (let i = 5; i < rem.length; i++){
                            ID(`${rem[i]}`).style.display = "none";
                        }
                    }
                }
            }
            return rem;
      
};

  ID("tbody").addEventListener("click", function(event){
    if (event.target.classList.contains("btn")){
            let tr = event.target.parentNode.parentNode;
            arr += event.target.parentNode.parentNode.firstChild.nextSibling.firstChild.title + "*";
        ID("tbody").removeChild(tr);
        let lista = [];
        setCookie("lista",arr, 108000000);
        let z = event.target.parentNode.parentNode.id;
        z = parseInt(z.replace( /\D+/g, ''));
        for (let i = z + 1; i <= ID("tbody").children.length + 1; i++){
            ID(`tr-${i}`).id = `tr-${i-1}`;
            ID(`td-${i}1`).id = `td-${i-1}1`;
            ID(`td-${i}2`).id = `td-${i-1}2`;
            ID(`td-${i}3`).id = `td-${i-1}3`;
            ID(`td-${i}4`).id = `td-${i-1}4`;
            ID(`td-${i}5`).id = `td-${i-1}5`;
            ID(`td-${i}6`).id = `td-${i-1}6`;
            ID(`td-${i}7`).id = `td-${i-1}7`;
            ID(`img-${i}`).id = `img-${i-1}`;
            }
            for (let i = 0; i < ID("tbody").children.length; i++){
                ID(`td-${i+1}1`).innerText = i+1 + ".";
            }
    }
    var x = checkCookie();
    page(x);
});


ID("pagination").addEventListener("click", function(event){
    
var x = checkCookie();

if (x.length > 5){
    if (event.target.id === "right"){
        ID("a-1").classList.remove("active");
              ID("a-2").classList.add("active");
}
    else if (event.target.id === "left"){
        ID("a-1").classList.add("active");
        ID("a-2").classList.remove("active");
}
}
else{
    ID("a-1").classList.add("active");
        ID("a-2").classList.remove("active");
}

page(x);

});

function page(x){
    if (ID("a-1").classList.contains("active")){
        if (x.length > 4){
            for (let i = 5; i < x.length; i++){
                ID(`${x[i]}`).style.display = "none";
            }
            for (let i = 0; i < 5; i++){
                ID(`${x[i]}`).style.display = "";
            }
        }
    }
    else if(ID("a-2").classList.contains("active") && x.length > 4){
        for (let i = 0; i < 5; i++){
            ID(`${x[i]}`).style.display = "none";
        }
        for (let i = 5; i < x.length; i++){
            ID(`${x[i]}`).style.display = "";
        }
    }
}


function selectRating(){
        
    let x = checkCookie();
    page(x);
    
};

ID("submit").addEventListener("click", function(){
    var br = 0;
    if (ID("name").checked === true){
        let x = parseFloat(ID("select").value);
        let str = ID("item").value;
        for (let i = 0; i < ID("tbody").children.length; i++){
            let y = parseFloat(ID(`td-${i+1}6`).innerText);
            if (ID(`td-${i+1}2`).firstChild.title.indexOf(str) === -1 || y < x){
                ID(`tr-${i+1}`).style.display = "none";
            }
            else{
                ID(`tr-${i+1}`).style.display = "";
                ID(`td-${i+1}1`).innerText = br + 1 + ".";
                br++;
            }
        }
        if (br === 0){
            ID("nf").style.display = "inline";
        }
        else{
            ID("nf").style.display = "none";
        }
    }
    else {
        let str = ID("item").value;
        let x = parseFloat(ID("select").value);
        for (let i = 0; i < ID("tbody").children.length; i++){
            let y = parseFloat(ID(`td-${i+1}6`).innerText);
            if ((ID(`td-${i+1}5`).innerText).indexOf(str) === -1 || y < x){
                ID(`tr-${i+1}`).style.display = "none";
            }
            else{
                ID(`tr-${i+1}`).style.display = "";
                ID(`td-${i+1}1`).innerText = br + 1 + ".";
                br++;
            }
        }
        if (br === 0){
            ID("nf").style.display = "inline";
        }
        else{
            ID("nf").style.display = "none";
        }
    }
    });



    ID("item").addEventListener("focus", function (){
       let x = checkCookie();
       page(x);
    });