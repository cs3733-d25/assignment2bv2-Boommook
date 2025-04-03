import './App.css'

function Form2() {
    return (
        <>
            <h2>Feedback Form</h2>
            <form>
                <label htmlFor="fullname">Enter Your Full Name: </label>
                <input type="text" id="fullname"/>
                <br/>
                <label htmlFor="email">Enter Your Email: </label>
                <input type="email" id="email"/>
                <br/>
                <br/>
                Major
                <br/>
                <input type="checkbox" id="CS"/>
                <label htmlFor="CS">CS</label>
                <br/>
                <input type="checkbox" id="RBE"/>
                <label htmlFor="RBE">RBE</label>
                <br/>
                <input type="checkbox" id="Other"/>
                <label htmlFor="Other">Other</label>
                <br/>
                <br/>
                Year of Study
                <br/>
                <input type="radio" id="Freshman" name="year" value="Freshman"/>
                <label htmlFor="Freshman">Freshman</label>
                <br/>
                <input type="radio" id="Sophomore" name="year" value="Sophomore"/>
                <label htmlFor="Sophomore">Sophomore</label>
                <br/>
                <input type="radio" id="Junior" name="year" value="Junior"/>
                <label htmlFor="Junior">Junior</label>
                <br/>
                <input type="radio" id="Senior" name="year" value="Senior"/>
                <label htmlFor="Senior">Senior</label>
                <br/>
                <input type="radio" id="Graduate" name="year" value="Graduate"/>
                <label htmlFor="Graduate">Graduate</label>
                <br/>
                <br/>
                <label htmlFor="rating">Your rating of this page: </label>
                <select name="rating" id="rating">
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
                <br/>
                <br/>
                <label htmlFor="comments">Your comments: </label>
                <br/>
                <textarea name="comments" id="comments" cols={30} rows={10}>Leave any comments you have here</textarea>
                <br/>
                <br/>
                <button type="button">Submit</button>
            </form>
        </>
    )
}

export default Form2