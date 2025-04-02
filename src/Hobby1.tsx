import './App.css'
import List1 from "./List1.tsx";
import Form1 from "./Form1.tsx"
import Table1 from "./Table1.tsx"

function Hobby1({hobbyName, imgLink, description}: {hobbyName:string, imgLink: string, description:string}) {
    return (
        <>
            <br/>
            <br/>
            <h3>{hobbyName}</h3>
            <img id="banner" src={imgLink} width="300"/>
            <p>
                {description}
            </p>

            <List1 />
            <Table1 />
            <Form1 />
        </>
    )
}

export default Hobby1