import logo from './logo.svg';
import './App.css';

function App() {

  let news = "Baramulla Earthquake (Google Trends): An earthquake measuring 4.1 on the Richter Scale struck Baramulla, Jammu and Kashmir, on Friday at 12:26 PM, with a depth of 10 km, according to the National Center for Seismology. Earlier, a 6.5 magnitude earthquake hit Tofino, Canada, with no tsunami risk reported"
  return (
    <div className="App">
     <h1>String Methods</h1>
  
     <button type="button" onClick={()=>{
       console.log(news.toUpperCase());
       console.log(news.toLowerCase());
     }}>to UpperCase/to LowerCase</button>


     <button type="button" onClick={()=>{
       let brand = "TATA"
       let product = "cars"

       let vehicle = brand.concat(product);
       let vehicles = `${brand}    ${product}`;
       console.log(vehicle);
       console.log(vehicles);
     }}>Concat</button>
     <button type="button" onClick={()=>{

      let myFullName = "        Prasadula Durga Manikanta Prasad        "
      console.log(`----------${myFullName.trimStart()}----------`);
      console.log(`----------${myFullName.trimEnd()}----------`);
      console.log(`----------${myFullName.trim()}----------`);
     }}>Trim/Trim Start/Trim End</button>


     <button type="button" onClick={()=>{

      let message = "I Want to get a job"
         console.log (message.padStart(1000,"I"));
         console.log(message.padEnd(1000,"job"));
          

     }}>Pad start/Pad End</button>
     <button type="button" onClick={()=>{
       
       let msg = "Alawys live your lives with great pride";

       console.log(msg.repeat(500));
       
     }}>Repeat</button>
     <button type="button" onClick={()=>{

      let quote = "Alawys live your lives with great pride"
      console.log(quote);
      console.log(quote.replace("live","stay"));
      console.log(quote.replaceAll("live","stay"));
     }}>Replace/ReplaceAll</button>
     <button type="button" onClick={()=>{
       let rnews = "Baramulla Earthquake (Google Trends): An earthquake measuring 4.1 on the Richter Scale struck Baramulla, Jammu and Kashmir, on Friday at 12:26 PM, with a depth of 10 km, according to the National Center for Seismology. Earlier, a 6.5 magnitude earthquake hit Tofino, Canada, with no tsunami risk reported"
          console.log(rnews);
          console.log(rnews.split("a"));
     }}>Split</button>
     <button type="button" onClick={()=>{

      let bigWord = "pneumonoultramicroscopicsilicovolcanoconiosis";

      console.log(bigWord.length);
      console.log(bigWord.at(0));
      console.log(bigWord.charAt(0));
      console.log(bigWord[0]);
     }}>Length</button>
     <button type="button" onClick={()=>{
       let bigWord = "pneumonoultramicroscopicsilicovolcanoconiosis";

       console.log(bigWord.slice(6,18));
       console.log(bigWord.substring(6,18));
        //  used in old application
        console.log(bigWord.substr(6,12));
       
     }}>slice/Substring/Substr</button>
     <button type="button" onClick={()=>{
      for(let i=3077;i<3300;i++){
        console.log(String.fromCharCode(i));
      }
      

     }}>FromCharCode</button>
     <button type="button" onClick={()=>{
      let bigWord = "pneumonoultramicroscopicsilicovolcanoconiosis";
      for(let i=0;i<bigWord.length;i++){
          console.log(bigWord.charCodeAt(i));
      }
     }}>charCodeAt</button>

     <button type="button" onClick={()=>{
      let freedomFighter = "Sri.Sardar Vallabhbhai Patel Ion man of india";
      console.log(freedomFighter.startsWith("Shri"));
      console.log(freedomFighter.endsWith("Iron Man of india"));
      console.log(freedomFighter.includes("Patel"));
     }}>startsWith/endsWith</button>
     <button type="button" onClick={()=>{
      let kkr = "Rama Krishna Rama Krishna Ramaaaa";

      console.log(kkr.indexOf("Rama"));
      console.log(kkr.search(/rama/i));
      console.log(kkr.lastIndexOf("Ramaaaa"));
     }}>indexOf/lastIndexOf</button>
     <button type="button" onClick={()=>{}}></button>
     <button type="button" onClick={()=>{}}></button>
     <button type="button" onClick={()=>{}}></button>
     <button type="button" onClick={()=>{}}></button>
     
     

    </div>
  );
}

export default App;
