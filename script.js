window.onload = function(){
    let pobjedaU7omPOK=false;
    let ukupniBodovi=0;
    let brojOsvojenihBodova=100;
    let rekord=0;
    function ProvjeraPobjede(a,hi){
        if (a==4){
           
            pob=document.getElementById(`pobeda`);
            pob.innerHTML=`<span>Broj osvojenih bodova: ${brojOsvojenihBodova}. Pritisni dugme Start da opet igraš.</span>`;
            pob.classList.remove('sakriven');
            gumb.classList.remove('sakriven');
            pobjedaU7omPOK=true
            
            document.getElementById('z').onclick=null;
            document.getElementById('-').onclick=null;
            document.getElementById('!').onclick=null;
            document.getElementById('@').onclick=null;
            document.getElementById('+').onclick=null;
            document.getElementById('•').onclick=null;
            ukupniBodovi+=brojOsvojenihBodova;
            document.getElementById('trbd').innerHTML='Ukupni bodovi su: '+ukupniBodovi.toString();
            brojOsvojenihBodova=100;






             gumb.style.visibility = "visible"
  
            
        }
        else{
            brojOsvojenihBodova=brojOsvojenihBodova-10
        }

    }
    
let KS=document.getElementById('gumb');
KS.onclick=function(){
  
     let poba=document.getElementById(`pobeda`);
     poba.classList.add('sakriven');
    let por=document.getElementById(`poraz`);
    por.classList.add('sakriven');

    let GS=document.getElementById("tabela-odabranih");
    GS.innerHTML=`<tr>
    <th colspan="4" style="border: 1px solid black; width: 50%;">   Odabrani elementi   </th>
    <th style="border: 1px solid black;">Broj elemenata
         na pravom mjestu</th>
    <th style="border: 1px solid black;">Broj pogođenih elemenata</th>
</tr>
<tr id='red1'></tr>`;
GS.id="tabela-odabranih";
  
    gumb.style.visibility = "hidden"

var bodovi=100;
tabelaA=document.getElementById('tabela-odabranih');
tabelaAA=document.getElementById('tabelaZaKlikanje');
tabelaA.classList.remove('sakriven');
tabelaAA.classList.remove('sakriven');

function NemaKlikanja(pokusaji){
    if (pokusaji==7 && pobjedaU7omPOK==false)
    {
      
  
    let a=document.getElementById('poraz');
    a.innerHTML=`<span>Igra gotova, osvojio si ${ukupniBodovi} bodova. Pritisni dugme Start da opet igraš.</span>`
    a.classList.remove('sakriven');
    document.getElementById('gumb').style.visibility='visible';
    ukupniBodovi=0;
    document.getElementById('trbd').innerHTML='Ukupni bodovi: '+ukupniBodovi.toString();
    
    zvjezdica.onclick=null;
  
    minus.onclick=null;
    uzvicnik.onclick=null;
    ludoa.onclick=null;
    plus.onclick=null;
    bullet.onclick=null;
    brojOsvojenihBodova=100;
     

    }

    if (pokusaji==7 && pobjedaU7omPOK==true){

        //document.getElementById('poraz').classList.remove('sakriven');
        document.getElementById('gumb').style.visibility='visible';
        
        document.getElementById('trbd').innerHTML='Ukupni bodovi: '+ukupniBodovi.toString();
        
        zvjezdica.onclick=null;
      
        minus.onclick=null;
        uzvicnik.onclick=null;
        ludoa.onclick=null;
        plus.onclick=null;
        bullet.onclick=null;
        brojOsvojenihBodova=100;
         









    }



    

}
let znakovi = ['*','-','!','@','+','•'];
let odabraniZnakovi =[];
let korisnikOdabrao = [];
let i = 0;
while (i<4){
    odabraniZnakovi.push(znakovi[Math.floor(Math.random() * 6)]);

    i++;
}

console.log('generisani znakovi: '+odabraniZnakovi)
let j=0;
let brojac=1;
function removeItem(arr, value) { //funkcija kopirana sa interneta, stack owerflow
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

let tabela = document.getElementById('tabela-odabranih');
let tabelaKlik = document.getElementById('tabelaZaKlikanje');
let zvjezdica = document.getElementById('z');
let minus = document.getElementById('-');
let uzvicnik = document.getElementById('!');
let ludoa = document.getElementById('@');
let plus = document.getElementById('+');
let bullet = document.getElementById('•');
i=0;
let brojPokusaja=0;
let a = tabela.innerHTML;




zvjezdica.onclick = function(){
    pobjedaU7omPOK=false;

    
    korisnikOdabrao.push('*');

    
    
   
    i++;
   
    let td = document.createElement('td');
    td.className='crveno';
    let zvezda = document.createTextNode('*');
    td.appendChild(zvezda);
    let reed= document.getElementById('red'+brojac);
    reed.appendChild(td)
    if (i==4){
        brojPokusaja++;


        
        brojac++;
        
        let k=0;
        let brojNaPravojpoziciji=0;
        while(k<4){
            if (korisnikOdabrao[k]==odabraniZnakovi[k]){
                brojNaPravojpoziciji++;
            }
            k++;

        }
        ProvjeraPobjede(brojNaPravojpoziciji,ukupniBodovi)
       
        let brojZnakovaNaPravojPoziciji = document.createElement('td');
        let brojZnakovaNaPravojPozicijiText = document.createTextNode(brojNaPravojpoziciji.toString());
        brojZnakovaNaPravojPoziciji.appendChild(brojZnakovaNaPravojPozicijiText);
          let trenutniRed = document.getElementById('red'+brojPokusaja.toString());
        trenutniRed.appendChild(brojZnakovaNaPravojPoziciji);
     
        let brojPogodZNAK=0;
        let o=0;
        while (o<4){
            if (korisnikOdabrao.includes(odabraniZnakovi[o])){
                brojPogodZNAK++
                removeItem(korisnikOdabrao,odabraniZnakovi[o])
            }

            o++;
        }
     
        let brojpogodznaktd = document.createElement('td');
        let brojpogodznaktdtext= document.createTextNode(brojPogodZNAK.toString());
    
        brojpogodznaktd.appendChild(brojpogodznaktdtext);
       

        let trenutniRed2 = document.getElementById('red'+brojPokusaja.toString());
        //.log(trenutniRed2+'da')
         trenutniRed2.appendChild(brojpogodznaktd);
  
        
       
        
        //.log(korisnikOdabrao);
        korisnikOdabrao = [];
        //.log(korisnikOdabrao);
        


       
        let red = document.createElement('tr');
        red.id='red'+ brojac.toString();

        
    //    let znak = document.createTextNode('*');
    //    red.appendChild(znak);
       tabela.appendChild(red);
       i=0;
   
   
   }
   NemaKlikanja(brojPokusaja);

}
minus.onclick = function(){
    korisnikOdabrao.push('-');

    pobjedaU7omPOK=false;
    
    
    //.log('kilko si ')
    i++;
    //.log(i)
    let td = document.createElement('td');
    td.className='nebo';
    let zvezda = document.createTextNode('-');
    td.appendChild(zvezda);
    let reed= document.getElementById('red'+brojac);
    reed.appendChild(td)
    if (i==4){
        brojPokusaja++;


        
        brojac++;
        
        let k=0;
        let brojNaPravojpoziciji=0;
        while(k<4){
            if (korisnikOdabrao[k]==odabraniZnakovi[k]){
                brojNaPravojpoziciji++;
            }
            k++;

        }
        ProvjeraPobjede(brojNaPravojpoziciji,ukupniBodovi)
        //.log('broj znakova na pr poz'+brojNaPravojpoziciji)
        let brojZnakovaNaPravojPoziciji = document.createElement('td');
        let brojZnakovaNaPravojPozicijiText = document.createTextNode(brojNaPravojpoziciji.toString());
        brojZnakovaNaPravojPoziciji.appendChild(brojZnakovaNaPravojPozicijiText);
          let trenutniRed = document.getElementById('red'+brojPokusaja.toString());
        trenutniRed.appendChild(brojZnakovaNaPravojPoziciji);
        // let kr=0;
        let brojPogodZNAK=0;
        let o=0;
        while (o<4){
            if (korisnikOdabrao.includes(odabraniZnakovi[o])){
                brojPogodZNAK++
                removeItem(korisnikOdabrao,odabraniZnakovi[o])
            }

            o++;
        }
        //.log(odabraniZnakovi);
        let brojpogodznaktd = document.createElement('td');
        let brojpogodznaktdtext= document.createTextNode(brojPogodZNAK.toString());
        //.log(brojpogodznaktd)
        brojpogodznaktd.appendChild(brojpogodznaktdtext);
        //.log(brojpogodznaktd)

        let trenutniRed2 = document.getElementById('red'+brojPokusaja.toString());
        //.log(trenutniRed2+'da')
         trenutniRed2.appendChild(brojpogodznaktd);
  
        
        // let brojZnakovaNaPravojPozicijiText = document.createTextNode(brojNaPravojpoziciji.toString)
        
        //.log(korisnikOdabrao);
        korisnikOdabrao = [];
        //.log(korisnikOdabrao);
        


       
        let red = document.createElement('tr');
        red.id='red'+ brojac.toString();

        
    //    let znak = document.createTextNode('*');
    //    red.appendChild(znak);
       tabela.appendChild(red);
       i=0;
   
   
   }
   NemaKlikanja(brojPokusaja);
}
uzvicnik.onclick = function(){
    korisnikOdabrao.push('!');

    pobjedaU7omPOK=false;
    
    
    //.log('kilko si ')
    i++;
    //.log(i)
    let td = document.createElement('td');
    td.className='bijelo';
    let zvezda = document.createTextNode('!');
    td.appendChild(zvezda);
    let reed= document.getElementById('red'+brojac);
    reed.appendChild(td)
    if (i==4){
        brojPokusaja++;


        
        brojac++;
        
        let k=0;
        let brojNaPravojpoziciji=0;
        while(k<4){
            if (korisnikOdabrao[k]==odabraniZnakovi[k]){
                brojNaPravojpoziciji++;
            }
            k++;

        }
        ProvjeraPobjede(brojNaPravojpoziciji,ukupniBodovi)
        //.log('broj znakova na pr poz'+brojNaPravojpoziciji)
        let brojZnakovaNaPravojPoziciji = document.createElement('td');
        let brojZnakovaNaPravojPozicijiText = document.createTextNode(brojNaPravojpoziciji.toString());
        brojZnakovaNaPravojPoziciji.appendChild(brojZnakovaNaPravojPozicijiText);
          let trenutniRed = document.getElementById('red'+brojPokusaja.toString());
        trenutniRed.appendChild(brojZnakovaNaPravojPoziciji);
        // let kr=0;
        let brojPogodZNAK=0;
        let o=0;
        while (o<4){
            if (korisnikOdabrao.includes(odabraniZnakovi[o])){
                brojPogodZNAK++
                removeItem(korisnikOdabrao,odabraniZnakovi[o])
            }

            o++;
        }
        //.log(odabraniZnakovi);
        let brojpogodznaktd = document.createElement('td');
        let brojpogodznaktdtext= document.createTextNode(brojPogodZNAK.toString());
        //.log(brojpogodznaktd)
        brojpogodznaktd.appendChild(brojpogodznaktdtext);
        //.log(brojpogodznaktd)

        let trenutniRed2 = document.getElementById('red'+brojPokusaja.toString());
        //.log(trenutniRed2+'da')
         trenutniRed2.appendChild(brojpogodznaktd);
  
        
        // let brojZnakovaNaPravojPozicijiText = document.createTextNode(brojNaPravojpoziciji.toString)
        
        //.log(korisnikOdabrao);
        korisnikOdabrao = [];
        //.log(korisnikOdabrao);
        


       
        let red = document.createElement('tr');
        red.id='red'+ brojac.toString();

        
    //    let znak = document.createTextNode('*');
    //    red.appendChild(znak);
       tabela.appendChild(red);
       i=0;
   
   
   }
    
    
   NemaKlikanja(brojPokusaja);
    


}
ludoa.onclick = function(){
    korisnikOdabrao.push('@');
    pobjedaU7omPOK=false;
    
    
    
    //.log('kilko si ')
    i++;
    //.log(i)
    let td = document.createElement('td');
    td.className='zeleno';
    let zvezda = document.createTextNode('@');
    td.appendChild(zvezda);
    let reed= document.getElementById('red'+brojac);
    reed.appendChild(td)
    if (i==4){
        brojPokusaja++;


        
        brojac++;
        
        let k=0;
        let brojNaPravojpoziciji=0;
        while(k<4){
            if (korisnikOdabrao[k]==odabraniZnakovi[k]){
                brojNaPravojpoziciji++;
            }
            k++;

        }
        ProvjeraPobjede(brojNaPravojpoziciji,ukupniBodovi)
        //.log('broj znakova na pr poz'+brojNaPravojpoziciji)
        let brojZnakovaNaPravojPoziciji = document.createElement('td');
        let brojZnakovaNaPravojPozicijiText = document.createTextNode(brojNaPravojpoziciji.toString());
        brojZnakovaNaPravojPoziciji.appendChild(brojZnakovaNaPravojPozicijiText);
          let trenutniRed = document.getElementById('red'+brojPokusaja.toString());
        trenutniRed.appendChild(brojZnakovaNaPravojPoziciji);
        // let kr=0;
        let brojPogodZNAK=0;
        let o=0;
        while (o<4){
            if (korisnikOdabrao.includes(odabraniZnakovi[o])){
                brojPogodZNAK++
                removeItem(korisnikOdabrao,odabraniZnakovi[o])
            }

            o++;
        }
        //.log(odabraniZnakovi);
        let brojpogodznaktd = document.createElement('td');
        let brojpogodznaktdtext= document.createTextNode(brojPogodZNAK.toString());
        //.log(brojpogodznaktd)
        brojpogodznaktd.appendChild(brojpogodznaktdtext);
        //.log(brojpogodznaktd)

        let trenutniRed2 = document.getElementById('red'+brojPokusaja.toString());
        //.log(trenutniRed2+'da')
         trenutniRed2.appendChild(brojpogodznaktd);
  
        
        // let brojZnakovaNaPravojPozicijiText = document.createTextNode(brojNaPravojpoziciji.toString)
        
        //.log(korisnikOdabrao);
        korisnikOdabrao = [];
        //.log(korisnikOdabrao);
        


       
        let red = document.createElement('tr');
        red.id='red'+ brojac.toString();

        
    //    let znak = document.createTextNode('*');
    //    red.appendChild(znak);
       tabela.appendChild(red);
       i=0;
   
   
   }
    
   NemaKlikanja(brojPokusaja);
    


}
plus.onclick = function(){
    korisnikOdabrao.push('+');

    pobjedaU7omPOK=false;
    
    
    //.log('kilko si ')
    i++;
    //.log(i)
    let td = document.createElement('td');
    td.className='plavo';
    let zvezda = document.createTextNode('+');
    td.appendChild(zvezda);
    let reed= document.getElementById('red'+brojac);
    reed.appendChild(td)
    if (i==4){
        brojPokusaja++;


        
        brojac++;
        
        let k=0;
        let brojNaPravojpoziciji=0;
        while(k<4){
            if (korisnikOdabrao[k]==odabraniZnakovi[k]){
                brojNaPravojpoziciji++;
            }
            k++;

        }
        ProvjeraPobjede(brojNaPravojpoziciji,ukupniBodovi)
        //.log('broj znakova na pr poz'+brojNaPravojpoziciji)
        let brojZnakovaNaPravojPoziciji = document.createElement('td');
        let brojZnakovaNaPravojPozicijiText = document.createTextNode(brojNaPravojpoziciji.toString());
        brojZnakovaNaPravojPoziciji.appendChild(brojZnakovaNaPravojPozicijiText);
          let trenutniRed = document.getElementById('red'+brojPokusaja.toString());
        trenutniRed.appendChild(brojZnakovaNaPravojPoziciji);
        // let kr=0;
        let brojPogodZNAK=0;
        let o=0;
        while (o<4){
            if (korisnikOdabrao.includes(odabraniZnakovi[o])){
                brojPogodZNAK++
                removeItem(korisnikOdabrao,odabraniZnakovi[o])
            }

            o++;
        }
        //.log(odabraniZnakovi);
        let brojpogodznaktd = document.createElement('td');
        let brojpogodznaktdtext= document.createTextNode(brojPogodZNAK.toString());
        //.log(brojpogodznaktd)
        brojpogodznaktd.appendChild(brojpogodznaktdtext);
        //.log(brojpogodznaktd)

        let trenutniRed2 = document.getElementById('red'+brojPokusaja.toString());
        //.log(trenutniRed2+'da')
         trenutniRed2.appendChild(brojpogodznaktd);
  
        
        // let brojZnakovaNaPravojPozicijiText = document.createTextNode(brojNaPravojpoziciji.toString)
        
        //.log(korisnikOdabrao);
        korisnikOdabrao = [];
        //.log(korisnikOdabrao);
        


       
        let red = document.createElement('tr');
        red.id='red'+ brojac.toString();

        
    //    let znak = document.createTextNode('*');
    //    red.appendChild(znak);
       tabela.appendChild(red);
       i=0;
   
   
   }
    
   NemaKlikanja(brojPokusaja);
    
    


}
bullet.onclick = function(){
    korisnikOdabrao.push('•');

    pobjedaU7omPOK=false;
    
    
    //.log('kilko si ')
    i++;
    //.log(i)
    let td = document.createElement('td');
    let zvezda = document.createTextNode('•');
    td.className='ljubicasto';
    td.appendChild(zvezda);
    let reed= document.getElementById('red'+brojac);
    reed.appendChild(td)
    if (i==4){
        brojPokusaja++;


        
        brojac++;
        
        let k=0;
        let brojNaPravojpoziciji=0;
        while(k<4){
            if (korisnikOdabrao[k]==odabraniZnakovi[k]){
                brojNaPravojpoziciji++;
            }
            k++;

        }
        ProvjeraPobjede(brojNaPravojpoziciji,ukupniBodovi)
        //.log('broj znakova na pr poz'+brojNaPravojpoziciji)
        let brojZnakovaNaPravojPoziciji = document.createElement('td');
        let brojZnakovaNaPravojPozicijiText = document.createTextNode(brojNaPravojpoziciji.toString());
        brojZnakovaNaPravojPoziciji.appendChild(brojZnakovaNaPravojPozicijiText);
          let trenutniRed = document.getElementById('red'+brojPokusaja.toString());
        trenutniRed.appendChild(brojZnakovaNaPravojPoziciji);
        // let kr=0;
        let brojPogodZNAK=0;
        let o=0;
        while (o<4){
            if (korisnikOdabrao.includes(odabraniZnakovi[o])){
                brojPogodZNAK++
                removeItem(korisnikOdabrao,odabraniZnakovi[o])
            }

            o++;
        }
        //.log(odabraniZnakovi);
        let brojpogodznaktd = document.createElement('td');
        let brojpogodznaktdtext= document.createTextNode(brojPogodZNAK.toString());
        //.log(brojpogodznaktd)
        brojpogodznaktd.appendChild(brojpogodznaktdtext);
        //.log(brojpogodznaktd)

        let trenutniRed2 = document.getElementById('red'+brojPokusaja.toString());
        //.log(trenutniRed2+'da')
         trenutniRed2.appendChild(brojpogodznaktd);
  
        
        // let brojZnakovaNaPravojPozicijiText = document.createTextNode(brojNaPravojpoziciji.toString)
        
        //.log(korisnikOdabrao);
        korisnikOdabrao = [];
        //.log(korisnikOdabrao);
        


       
        let red = document.createElement('tr');
        red.id='red'+ brojac.toString();

        
    //    let znak = document.createTextNode('*');
    //    red.appendChild(znak);
       tabela.appendChild(red);
       i=0;
   
   
   }
    
   NemaKlikanja(brojPokusaja);
    
    


}





}
}