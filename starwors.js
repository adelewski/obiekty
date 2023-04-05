



const pobierzDane = async () => {
    const wynik = await fetch("https://swapi.dev/api/people");
    const dane = await wynik.json();
    dane.results.forEach((element) => {

        dodajPostac(element);
    } )
}

pobierzDane();


{/* <div class=""card>
            <h3>Luke</h3>
        <span>Rasa:człowiek</span>
        <span>kolor oczu: niebieski</span>
        <div>
            <spam>wzrost: 172cm</spam>
            <spam>wzrost: 172cm</spam>
        </div>
    </div> */}

    const sekcjaKarty = document.querySelector("#wrapper");

    const dodajPostac = (postac) => {

        console.log(postac);

        const karta = document.createElement("article");

        const nazwaPostaci = document.createElement("h3");
        nazwaPostaci.textContent = "Name: " + postac.name;

        const plecPostaci = document.createElement("spam");
        plecPostaci.textContent = "Plec: " + postac.gender;


        const wzrostPostaci = document.createElement("spam");
        wzrostPostaci.textContent = " Wzrost: " + postac.height;



        karta.append(nazwaPostaci);
        karta.append(plecPostaci);
        karta.append(wzrostPostaci);



        sekcjaKarty.append(karta);




    }
        
        
        
        
        
        
        
        