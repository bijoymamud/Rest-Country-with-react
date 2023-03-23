import './App.css';
import Countries from './components/Countries/Countries';


function App() {
  return (
    <div className="App">

      <Countries></Countries>

    </div>
  );
}


























// function LoadCountries() {
//   //creating state
//   // const [] = useState()

//   const [countries, setCountries] = useState([])

//   useEffect(() => {

//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())

//       .then(data => setCountries(data))

//   }, [])

//   return (
//     <div>
//       <h1>Visiting Every Country of the World</h1>
//       <p>Available Countries: {countries.length}</p>


//       {
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//       }

//     </div>
//   )
// }

// function Country(props) {
//   return (
//     <div>
//       <h5>Name: {props.name}</h5 >
//       <h5>Population: {props.population}</h5>
//     </div >
//   );
// }


export default App;
