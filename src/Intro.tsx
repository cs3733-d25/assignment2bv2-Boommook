import './App.css'

function Intro({ name1, name2}: { name1: string, name2: string }) {
    return (
        <>
            <p>
                Hello! My name is {name1}. I am a sophomore at WPI from Bedford, MA, studying Computer Science and Interactive Media and Game Development.
                My dream is to work in the overlap between technology and arts, preferably in the video game industry.
                I enjoy playing ultimate frisbee, video games, rock climbing, hanging out with friends, and spending time in the outdoors.
            </p>
            <p>
                Hello, my name's {name2} and I'm a sophomore studying computer science at WPI. I've got 4 younger siblings and 2 dogs, and I have lived in Westford, MA for most of my life.
                My hobbies include hiking, tinkering with electronics, skateboarding, programming, and playing guitar.
            </p>
        </>
    )
}

export default Intro