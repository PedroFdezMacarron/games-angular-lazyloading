import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whoiswho',
  templateUrl: './whoiswho.component.html',
  styleUrls: ['./whoiswho.component.scss']
})
export class WhoiswhoComponent implements OnInit {


  questionsType:Question[] = [
    {
      title: "Gender",
      key: "gender",
      questions: ["Man", "Woman"],
    },
    {
      title: "Hair Color",
      key: "hairColor",
      questions: ["Blonde", "Red", "Pink", "Brown", "White", "Black"],
    },
    {
      title: "Moustache",
      key: "moustache",
      questions: ["Yes", "No"],
    },
    {
      title: "Glasses",
      key: "glasses",
      questions: ["Yes", "No"],
    },
    {
      title: "Hat or Cap",
      key: "hatOrCap",
      questions: ["Yes", "No"],
    },
    {
      title: "Clothes color",
      key: "clothesColor",
      questions: ["Red", "Orange", "Green", "White", "Black", "Pink"],
    },
    {
      title: "Skin color",
      key: "skinColor",
      questions: ["Light", "Dark"],
    },
    {
      title: "Long Hair",
      key: "longHair",
      questions: ["Yes", "No"],
    },
  ];
  persons:Person[] = [
    {
      img: "assets/exercise-3/001-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Red",
      skinColor: "Light",
      longHair: "No",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/002-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Light",
      longHair: "No",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/003-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Green",
      skinColor: "Light",
      longHair: "No",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/004-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "Yes",
      clothesColor: "Red",
      skinColor: "Light",
      longHair: "No",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/005-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Light",
      longHair: "No",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/006-man.svg",
      gender: "Man",
      hairColor: "Brown",
      moustache: "Yes",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Green",
      skinColor: "Light",
      longHair: "No",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/007-man.svg",
      gender: "Man",
      hairColor: "Red",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "No",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/008-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Light",
      longHair: "No",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/009-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Light",
      longHair: "No",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/010-woman.svg",
      gender: "Woman",
      hairColor: "Brown",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Pink",
      skinColor: "Light",
      longHair: "Yes",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/011-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Light",
      longHair: "Yes",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/012-woman.svg",
      gender: "Woman",
      hairColor: "Red",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "Yes",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/013-woman.svg",
      gender: "Woman",
      hairColor: "White",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Pink",
      skinColor: "Light",
      longHair: "Yes",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/014-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Light",
      longHair: "Yes",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/015-woman.svg",
      gender: "Woman",
      hairColor: "Brown",
      moustache: "No",
      glasses: "Yes",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Light",
      longHair: "Yes",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/016-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "Yes",
      clothesColor: "Pink",
      skinColor: "Light",
      longHair: "Yes",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/017-woman.svg",
      gender: "Woman",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "No",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/018-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Dark",
      longHair: "No",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/019-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Red",
      skinColor: "Dark",
      longHair: "No",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/020-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Dark",
      longHair: "No",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/021-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "Yes",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Dark",
      longHair: "No",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/022-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "Yes",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Dark",
      longHair: "No",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/023-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Dark",
      longHair: "No",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/024-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Dark",
      longHair: "Yes",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/025-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Red",
      skinColor: "Dark",
      longHair: "No",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/026-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Red",
      skinColor: "Dark",
      longHair: "No",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/027-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Dark",
      longHair: "Yes",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/028-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Pink",
      skinColor: "Dark",
      longHair: "Yes",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/029-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Dark",
      longHair: "Yes",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/030-woman.svg",
      gender: "Woman",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Orange",
      skinColor: "Dark",
      longHair: "No",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/031-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Green",
      skinColor: "Dark",
      longHair: "Yes",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/032-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "Yes",
      hatOrCap: "No",
      clothesColor: "Pink",
      skinColor: "Dark",
      longHair: "Yes",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/033-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Dark",
      longHair: "Yes",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/034-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Pink",
      skinColor: "Dark",
      longHair: "Yes",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/035-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "No",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/036-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Light",
      longHair: "No",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/037-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "Yes",
      clothesColor: "Red",
      skinColor: "Light",
      longHair: "No",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/038-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "No",
            show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/039-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "Yes",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Green",
      skinColor: "Light",
      longHair: "No",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/040-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Red",
      skinColor: "Light",
      longHair: "No",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/041-man.svg",
      gender: "Man",
      hairColor: "Blonde",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "No",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/042-man.svg",
      gender: "Man",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Red",
      skinColor: "Light",
      longHair: "No",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/043-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Black",
      skinColor: "Light",
      longHair: "Yes",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/044-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "Pink",
      skinColor: "Light",
      longHair: "No",
      show:true,
      win:false,
    },
    {
      img: "assets/exercise-3/045-woman.svg",
      gender: "Woman",
      hairColor: "Black",
      moustache: "No",
      glasses: "No",
      hatOrCap: "No",
      clothesColor: "White",
      skinColor: "Light",
      longHair: "No",
      show:true,
      win:false,
    },
  ];

  pistas:QuestionSelected[]=[];

  // variable para la selección aleatoria de la persona
  position:number = Math.ceil(Math.random() * (this.persons.length - 1));

  // objeto con las propiedades de la persona elegida al azar
  who:Person =this.persons[this.position];
  clave:string="";
  counter:number=0;


  ngOnInit(){
    console.log(this.who);
    console.log(this.position);    
  }


// FUNCIÓN CUANDO EL USUARIO ELIGE LA PERSONA
// muestra si es ok y resetea el juego
  iKnow(i:number){  
    console.log(i);
    
    if (i === this.position) {
      alert(
        "has adivinado." 
      );
    } else {
      alert(
        "has fallado." 
      );
    }    
  };


  
checkPersons(){
  // recorre array personas
  this.persons.forEach((element:any, index:number) => {
    // control de si tiene mostrar cara del personaje
    this.pistas?.forEach((pista:any) => {
      let valorElegido:string = pista.selection;      
      
      this.clave = pista.key; // this.clave contiene el string gender

      const obj = {        
        img: "assets/exercise-3/001-man.svg",
        gender: "Man",
        hairColor: "Black",
        moustache: "No",
        glasses: "No",
        hatOrCap: "No",
        clothesColor: "Red",
        skinColor: "Light",
        longHair: "No",
        show:true,
        win:false,
      };   
      
      // 👇️ type ObjectKey = "name" | "country"
      type ObjectKey = keyof typeof obj;
      
      const myVar = this.clave as ObjectKey;

      let dato:any = this.who[myVar];
      


      // console.log('clave',this.clave,'dato',dato,"valorelegido",valorElegido);

      // compara el valor elegido por el usuario
      // con el valor del personaje seleccionado al azar
      // si son iguales y el personaje recorrido tiene distinto, no muestra imagen
      if (dato == valorElegido) {
        if (valorElegido !== element[this.clave]) {
          // miDiv$$.className = "out";
          element.show=false;
        }
      } else {
        if (element[this.clave] === valorElegido) {
          // miDiv$$.className = "out";
          element.show=false;
        }
      }
      

    });
    // añade al contenedor cada personaje
    // contenedor$$.appendChild(miDiv$$);
  });
}



    // FUNCIÓN DE CADA PISTA ELEGIDA
  // tiene que añadir al array de pistas
  selectPista = (question:string,item:string) => {

    // console.log('pista elegida',question,' opcion:',item),item;    
    // sólo para pistas que no han sido elegidas
    // cuando se elige una pista se le cambia el className
    // también se puede hacer buscando en el array de pistas  
    

    // desactiva el botón pulsado

    // midiv.className = "questionsOut";

    // console.log('how:',who[key] , '  seleccionado',selection);

    // añade pista al array
    this.pistas?.push({
      key: question, 
      selection:item,           
    });
    console.log(this.pistas);
    
    // añade al contador de pistas    
    this.counter++;  
    this.checkPersons();

  }



}

export interface Question{
  title: string;
  key: string;
  questions:any[];
}

export interface QuestionSelected{
  key: string;
  selection:string;  
}

export interface Person{
  img: string;
  gender: string;
  hairColor:string;
  moustache: string;
  glasses: string;
  hatOrCap: string;
  clothesColor: string;
  skinColor: string;
  longHair: string;
  show:boolean;
  win:boolean;
}
