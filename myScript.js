console.log('JS-OK')

/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.

Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:

Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:

Stampare su console le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:

Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:

Trasformare la stringa foto in una immagine effettiva

BONUS 2:

Organizzare i singoli membri in card/schede

Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
*/

//creo l'array di oggetti

const teamArray = [			

    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        picture: 'wayne-barnett-founder-ceo.jpg'
        
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        picture: 'angela-caroll-chief-editor.jpg' 
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        picture: 'walter-gordon-office-manager.jpg' 
    },
    
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        picture: 'angela-lopez-social-media-manager.jpg' 
    },
    
    {
        name: 'Scott Estrada',
        role: 'Developer',
        picture: 'scott-estrada-developer.jpg' 
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designerr',
        picture: 'barbara-ramos-graphic-designer.jpg' 
    },
]

//ciclo l'array in modo da andare a selezionare ogni oggetto

const rowHTML = document.querySelector('.row')

for(let teamMember = 0; teamMember < teamArray.length; teamMember++ ){

    //ogni ciclo stamperà ciascun oggetto contenuto nell'array
    const team = teamArray[teamMember]
    console.log(team)
    //per ogni oggetto viene creato un contenitore
    const teamCard = document.createElement('div')
    //al contenitore vengono aggiunte delle classi
    teamCard.classList.add('col-4', 'p-3', 'border', 'border-3', 'bg-info')


    for(let key in team){
        //ogni oggetto preso dal ciclo precedente
        //viene aggiunto un altro ciclo
        //ogni ciclo andrà a prendere ciascuna PROPRIETA' di quell'oggetto
        //vengono stampati in console

        if(key === 'picture'){

            //nel caso la chiave sia quella che indica l'immagine
            console.log(team[key])
            teamCard.innerHTML += `<img class = "img-fluid" src="img/${team[key]}" alt="#">`            

        }
        else{

        console.log(`${key} is: ${team[key]}`)
        //all'interno di ogni div creato vengono inserite le PROPRIETA'
        teamCard.innerHTML += `<h4>${team[key]}</h4>`
        rowHTML.append(teamCard)
        };

    }

}

