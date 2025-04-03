import './App.css'
import Title from './Title.tsx'
import Intro from './Intro.tsx'
import Hobby1 from './Hobby1.tsx'
import Hobby2 from './Hobby2.tsx'

function App() {

  return (
    <>
        <Title hobby1={"Ultimate Frisbee"} hobby2={"Guitar"}/>
        <Intro name1="Cole Bennett" name2="Joshua Bearfield"/>
        <Hobby1 hobbyName={"Ultimate Frisbee"} imgLink={"public/ultimate-banner.jpg"} description={"Ultimate frisbee, or just ultimate, is a non-contact sport played with a disc and two teams of seven.\n" +
            "                Ultimate is played on a field similar to football, though slightly shorter and slimmer, with endzones on both ends of the field.\n" +
            "                The length of games and points to win varies depending on level of play, though a typical game will end after either 90 minutes or\n" +
            "                a team reaches 15 points. Points are scored by catching the disc in the endzone, but once a player catches the disc, they can not move.\n" +
            "                The player holding the disc can only hold it for 10 seconds, so their defender will keep track of how long they have had the disc out loud.\n" +
            "                The team with possesion of the disc is trying to score, while the defending team is trying to catch the disc, force it to hit the ground,\n" +
            "                or stall of which cause a turnover and change of possesion."}/>
        <Hobby2 hobbyName={"Guitar"} imgLink={"public/guitar.jpg"} description={"I've been playing guitar for a little over 3 years now, but due to the pretty casual nature of my playing, I would not consider\n" +
            "    myself to be particularly good. I started in junior year of high school when, having dropped violin a few years prior, I felt\n" +
            "    the urge to start playing a musical instrument again and decided to pick it up. I've been teaching myself to play since then, using\n" +
            "    resources such as YouTube and Songsterr. The first song I learned to completion was \"Is There Anybody Out There?\" by Pink Floyd,\n" +
            "    and it is still my favorite song to play."}/>
    </>
  )
}

export default App
