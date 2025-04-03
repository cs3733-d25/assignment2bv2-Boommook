import './App.css'

function Table2() {
    return (
        <>
            <table className="collapse">
                <caption><b><u>Favorite Songs to Play by Each Artist</u></b></caption>
                <tr>
                    <th>Jack Johnson</th>
                    <th>Pink Floyd</th>
                    <th>Andrew Prahlow</th>
                </tr>
                <tr>
                    <td>Sitting, Waiting, Wishing</td>
                    <td>Is There Anybody Out There?</td>
                    <td>Timber Hearth</td>
                </tr>
                <tr>
                    <td>Upside Down</td>
                    <td>Wish You Were Here</td>
                    <td>Travelers</td>
                </tr>
                <tr>
                    <td>Banana Pancakes</td>
                    <td>Money</td>
                    <td>Outer Wilds</td>
                </tr>
            </table>
        </>
    )
}

export default Table2