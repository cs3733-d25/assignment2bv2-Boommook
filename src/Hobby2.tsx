import './App.css'
import List2 from "./List2.tsx";
import Form2 from "./Form2.tsx"
import Table2 from "./Table2.tsx"

function Hobby2({hobbyName, imgLink, description}: {hobbyName:string, imgLink: string, description:string}) {

    return (
        <>
            <br />
            <br />
            <h3>{hobbyName}</h3>
            <img id="banner" src={imgLink} width="300"/>
            <p>
                {description}
            </p>

            <List2 />
            <Table2 />
            <Form2 />
        </>
    )

}

export default Hobby2