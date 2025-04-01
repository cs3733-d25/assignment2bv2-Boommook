import './App.css'

function Form1() {
    return (
        <>

            <h2>WPI Whisper Tryout Form</h2>
            <form>
                <label htmlFor="fullname">Enter your full name</label>
                <input type="text" id="fullname"/>
                <br/>
                <label htmlFor="email">Enter your WPI email</label>
                <input type="text" id="email"/>
                <br/>
                <br/>

                Have you participated in WPI Ultimate events? (Check all that apply)
                <br/>
                <input type="checkbox" id="member"/>
                <label htmlFor="member">Previous Team Player</label>
                <br/>
                <input type="checkbox" id="intramural"/>
                <label htmlFor="intramural">Fall Intramural</label>
                <br/>
                <input type="checkbox" id="pickup"/>
                <label htmlFor="pickup">Pickup Games</label>
                <br/>
                <input type="checkbox" id="tryout"/>
                <label htmlFor="tryout">Tried out in the past</label>
                <br/>
                <input type="checkbox" id="no"/>
                <label htmlFor="no">No, but I am excited to participate now!</label>
                <br/>
                <br/>

                How much Ultimate experience do you have?
                <br/>
                <input type="radio" id="0" name="experience"/>
                <label htmlFor="0">0, I have never played before</label>
                <br/>
                <input type="radio" id="1" name="experience"/>
                <label htmlFor="1">1, I can throw a frisbee</label>
                <br/>
                <input type="radio" id="2" name="experience"/>
                <label htmlFor="2">2, I have played before, but am not confident in my abilities or knowledge</label>
                <br/>
                <input type="radio" id="3" name="experience"/>
                <label htmlFor="3">3, I have played a good amount, and am okay at the sport</label>
                <br/>
                <input type="radio" id="4" name="experience"/>
                <label htmlFor="4">4, I have played competitively, can throw, run, and know the rules</label>
                <br/>
                <input type="radio" id="5" name="experience"/>
                <label htmlFor="5">5, I am an absolute pro</label>
                <br/>
                <br/>


                <label htmlFor="comment">Any questions or comments? Write them here!</label>
                <textarea id="comment" rows={4} cols={50}></textarea>
                <br/>
                <br/>

                <label htmlFor="year">What is your expected year of graduation?:</label>
                <select name="yog" id="year">
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                </select>

                <br/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}

export default Form1