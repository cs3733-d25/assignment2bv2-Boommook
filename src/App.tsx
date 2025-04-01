import './App.css'
import Title from './Title.tsx'
import Intro from './Intro.tsx'
import Hobby1 from './Hobby1.tsx'
import List1 from "./List1.tsx";
import Form1 from "./Form1.tsx"
import Table1 from "./Table1.tsx"

function App() {

  return (
    <>
        <Title />
        {Intro("Cole Bennett", "Joshua Bearfield")}
        <Hobby1 />
        <List1 />
        <Table1 />
        <Form1 />
    </>
  )
}

export default App
