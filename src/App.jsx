import './App.css'
import profilepic from './assets/IMG20251118201939.jpg'
import giticon from './assets/github-sign.png'
import cohort from './assets/certificate.png'
import {GitHubCalendar} from 'react-github-calendar';

function App() {
  return (
    <>
      <div className='card'>
        <h1>My Portfolio</h1>
        
        <div className='p1'>
  <h3>Personal Details</h3>
  <Pd />
  
</div>

<div className='p1'>
  <h3>Contribution activity</h3>
  <Gitgraph />
</div>

<div className='p1'>
  <h3>Github</h3>
  <Github />
</div>

<div className='p1'>
  <h3>About Me</h3>
  <AboutMe />
</div>

<div className='p1'>
  <h3>Projects</h3>
  <Projects />
</div>

<div className='p1'>
  <h3>Skills</h3>
  <Skills />
</div>

<div className='p1'>
  <h3>Education</h3>
  <Education />
</div>

<div className='p1'>
  <h3>Certificates</h3>
  <Certificates />
</div>

<div className='p1'>
  <h3>Links</h3>
  <Links />
</div>
      </div>
    </>
  )
}

function Pd(){
  return(
          <div className='myinfo'>

          <div className='column'>
          <div className='pot'><h4>Name         : Siddhant Angane</h4></div>
          <div className='pot'><h4>Age          : 23</h4></div>
          <div className='pot'><h4>Phone number : 9967358293</h4></div>
          <div className='pot'><h4>Address : Jogeshwari (west), Mumbai 400102, Maharashtra, India</h4></div>
          </div>

          <div className='moana'>
             <div><img className='profilepic' src={profilepic}></img></div>
          </div>
          
        </div>
  )
}

function Gitgraph() {
  const selectLast8Months = (contributions) => {
    const now = new Date();
    const past = new Date();
    past.setMonth(now.getMonth() - 7);
    past.setDate(past.getDate() - 20);

    return contributions.filter(day => {
      const date = new Date(day.date);
      return date >= past;
    });
  };

  return (
    <div className="gitgraph">
      <GitHubCalendar
        username="sidd19898"
        transformData={selectLast8Months}
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        theme={{
          light: [
            "#ebedf0",
            "#9be9a8",
            "#40c463",
            "#30a14e",
            "#216e39"
          ]
        }}
      />
    </div>
  );
}







function Github(){
  return(
    <div className='repos'>
<div className='git'>

<div className='parentgit'>

    <div className='potora'>

      <div>
        <img className="giticon" src={giticon}></img>
      </div>
      
      <div className='content'>
        <div className='reponame'><a href='https://github.com/sidd19898/JSWM'>JSWM</a></div>
      </div>

    </div>   

   <div className='repostack'>
    <div className='space'>Frontend: React</div>
      <div className='space'>Backend: Node.js, Express</div>
      <div className='space'>Database: MongoDB</div>
   </div>

  </div>

</div>



<div className='git'>

<div className='parentgit'>

    <div className='potora'>

      <div>
        <img className="giticon" src={giticon}></img>
      </div>
      
      <div className='content'>
        <div className='reponame'><a href='https://github.com/sidd19898/paytm-mini-app'>Paytm-Mini-App</a></div>
      </div>

    </div>   

   <div className='repostack'>
    <div className='space'>Frontend: React</div>
      <div className='space'>Backend: Node.js, Express</div>
      <div className='space'>Database: MongoDB</div>
   </div>

  </div>

</div>



<div className='git'>

<div className='parentgit'>

    <div className='potora'>

      <div>
        <img className="giticon" src={giticon}></img>
      </div>
      
      <div className='content'>
        <div className='reponame'><a href='https://github.com/sidd19898/user-auth-system'>user-auth-system</a></div>
      </div>

    </div>   

   <div className='repostack'>
    <div className='space'>Frontend: HTML, CSS, JavaScript</div>
      <div className='space'>Backend: Node.js, Express</div>
      <div className='space'>Database: MongoDB</div>
   </div>

  </div>

</div>
    



    <div className='git'>

<div className='parentgit'>

    <div className='potora'>

      <div>
        <img className="giticon" src={giticon}></img>
      </div>
      
      <div className='content'>
        <div className='reponame'><a href='https://github.com/sidd19898/todo-app'>To-Do App</a></div>
      </div>

    </div>   

   <div className='repostack'><div className='space'>Frontend: HTML, CSS, JavaScript (Fetch API)</div>
      <div className='space'>Backend: Node.js + Express.js</div>
      <div className='space'>Architecture: REST API (GET, POST, PUT, DELETE)</div>
   </div>

  </div>

</div>

</div>
  )
}

function AboutMe(){
  return(
    <div className='Aboutme'>
      <p>Hello I am a Full Stack developer. In a day I try learn new things and practice what I learned .
        I am looking for Job which will led me with real time experience. I am up for Remote work, onsite 
        work near me, and if payment is good I may also Consider to relocate. Innovation and Execution Play 
        important part in my life. That would be a short info about me Thankyou.</p>
    </div>
  )
}

function Projects(){
  return(
    <div className='Projects'>
      <p>So currently I havent built any full stack project end-to-end the above github links projects can be considered as components
        but I am working on my very first project from scratch called JSWM. It is a task manager but it has a reminder system which displays 
        proper use of reminder system.
      </p>
    </div>
  )
}

function Skills(){
  return(
    <div className='skills'>
      <div>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>React</li>
          <li>Express</li>
          <li>Node</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>JWT</li>
          <li>ZOD</li>
          <li>REST API</li>
        </ul>
      </div>
    </div>
  )
}

function Education(){
  return(
    <div>
    <div className='Education'>
      <div>Degree : Bachelore Of Computer Science</div>
      <div>Academic year : 2022 - 2025</div>
      <div>College Name : Patkar Varde College</div>
      <div>CGPA : 6.97</div>
    </div>
    <div className='Education'>
      <div>Degree : HSC</div>
      <div>Academic year : 2020 - 2021</div>
      <div>College Name : Ismail Yusuf College</div>
      <div>Percentage : 70.67</div>
    </div>
    <div className='Education'>
      <div>Degree : SSC</div>
      <div>Academic year : 2018 - 2019</div>
      <div>College Name : St Blaise High School</div>
      <div>Percentage : 57.60</div>
    </div>
    </div>
  )
}

function Certificates(){
  return(
    <div className='Certificates'>
      <div>Course : Full Stack Web Development</div>
      <div><img className="cohort" src={cohort}></img>
      </div>
    </div>
  )
}



function Links(){
  return(
    <div className='Links'>
      <ul>
      <li><a href='https://github.com/sidd19898'>Github Profile</a></li>
      <li><a href='https://www.linkedin.com/in/siddhant-angane-747251240/'>Linkedin Profile</a></li>
      <li><a href='https://x.com/Siddhant375462'>Twitter Profile</a></li>
      </ul>
    </div>
  )
}

export default App
