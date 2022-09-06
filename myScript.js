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
        picture: 'scott-estrada-developer.jpg' 
    },
    
    {
        name: 'Scott Estrada',
        role: 'Developer',
        picture: 'angela-caroll-chief-editor.jpg' 
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designerr',
        picture: 'barbara-ramos-graphic-designer.jpg' 
    },
]

//ciclo l'array in modo da andare a selezionare ogni oggetto

for(let teamMember = 0; teamMember < teamArray.length; teamMember++ ){

    //console.log(teamArray[teamMember])
    const team = teamArray[teamMember]
    console.log(team)

    //for(let key in )

}

//aggiungo all'interno un altro ciclo che mi permette di stampare le informazioni di ogni oggetto