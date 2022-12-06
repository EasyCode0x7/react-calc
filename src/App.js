import './App.css';
import './stylesheet/styles.css';
import './stylesheet/tech.css';
import { useState } from 'react';
import { BsFillMoonStarsFill, BsSun } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import deved from './images/dev-ed-wave.png';
import Change from './components/darkMode'



function App() {

    const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">

        <header>
            <link href='https://fonts.googleapis.com/css?family=Rubik' rel='stylesheet'></link>
            <link href="https://fonts.cdnfonts.com/css/signika-negative" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>
        </header>

        <main id='bg'>
            <section className='first-section'>

                <nav className='nav-principal'>
                    <nav className='header-1'>
                        <h1 className='text'>WebDevelopedby:   <i>@helloworld0x7</i></h1>
                    </nav>

                    <nav>
                        <ul className='resume'>
                            <li className='cursor-pointer'>
                                {/*<BsSun onClick={Change}/>*/}
                                <BsFillMoonStarsFill className='moon' onClick={Change}/>
                            </li>
                            <li className='resume-text'>
                                <a className='rs-text' href='#'>Resume</a>
                            </li>
                        </ul>
                    </nav>
                </nav>

                <div className='content'>
                    <h2 className='h2-text'>Juan Alberto R. Santana</h2>
                    <h3 className='h3-text'>Developer and ethical hacker.</h3>
                    <div className='text text-dark'>
                        <p>
                            Freelancer providing services for programming and ethical hacking needs.
                            Join me down below and let's get cracking!
                            Happy hacking!
                            <br></br><br></br>
                            <i>

                            <b>"</b>Discovering the unexpected is more important than confirming 
                            the known.<b>"</b>

                            <br></br><b>--George Box</b>
                            </i>
                        </p>
                    </div>

                </div>
                <div className='social-networks'>
                    <AiFillTwitterCircle className='puntero' src="https://twitter.com/crashoverride0x"/>
                    <AiFillLinkedin className='puntero'/>
                    <AiFillYoutube className='puntero'/>
                </div>
                <div className='avatar img-avatar'>
                    <img className='img-avatar' src={deved} />
                </div>
            </section>

            <section className='altura-400'>
                <h2 className='technologies-i-know'>Technologies That I Master</h2>
                <div className='contenedor mx-auto w-50'>
                    <img className='uno' src='https://cdn-icons-png.flaticon.com/512/29/29515.png' />
                    <img className='uno' src='https://www.svgrepo.com/show/170099/css-file-format-symbol.svg' />
                    <img className='uno' src='https://cdn-icons-png.flaticon.com/512/29/29621.png' />
                    <img className='uno' src='https://www.clipartmax.com/png/full/379-3794436_react-icon-react-icon.png' />
                    <img className='uno' src='https://cdn-icons-png.flaticon.com/512/28/28884.png' />
                    <img className='uno' src='https://miro.medium.com/max/1024/0*xoF4pubIjvqOzk3U.png' />
                    <img className='uno rounded' src='https://cdn-icons-png.flaticon.com/512/52/52040.png' />
                </div>
            </section>

            <section  className='portfolio mx-auto w-50'>
                <div>
                    <h2 className='py-4'>Portfolio</h2>
                    <div className='igual'>
                        <div>
                            Image here!
                        </div>
                    </div>

                    <div  className='igual'>
                        <div>
                            Image here!
                        </div>
                    </div>

                    <div  className='igual'>
                        <div>
                            Image here!
                        </div>
                    </div>
                </div>

                <div className='form'>
                    <h3 className='py-4'>Let's work together...</h3>
                    <h3>How do you take your coffee?</h3>
                </div>
            </section>

            <section className='portfolio-projects font-fam w-50 py-5 mx-auto'>

                <div className='shadow p-3 mb-5 bg-body rounded mx-auto'>
                    <h2 className='contact-me'>Contact Me</h2>
                    <form action='#' method='POST'>

                        <label for='name'>Name</label>
                        <input type="text" name='name' placeholder='Name'></input>
                        <label for='email'>Email</label>
                        <input type="email" name='email' placeholder='Email'></input>
                        <label for='message'>Message</label>
                        <textarea type="text" name='message' placeholder='Message...'></textarea>

                        <button className='form' type='submit'>Submit</button>
                    </form>
                </div>
            </section>

        <footer>
            <p>By: @Juan Alberto R. Santana</p>
        </footer>

        </main>

    </div>
  );
}

export default App;


