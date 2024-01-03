import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <section id='projects'>
        <span className='projectTitle'>Projects</span>
        <span className='projectDesc'>Here's a few of my personal projects. You can check out the code using the Github link.  You can also run them on a docker container. Feel free to contact me to ask about any of these.</span>
        <div className='rows'>
            <div className='project'>
            <iframe src="https://giphy.com/embed/bY15rKzgQ2EUvGfSKw"  class="giphy-embed" className='animation' allowFullScreen></iframe>
                <div className='projectData'>
                    <span className='title'>Info</span>
                    <span className='project link'> GitHub Link </span>
                </div>
            </div>
            <div className='project'>
                <img className='animation'></img>
                <div className='projectData'>
                    <span className='title'>Info</span>
                    <span className='project link'> GitHub Link </span>
                </div>
            </div>
            <div className='project'>
                <img className='animation'></img>
                <div className='projectData'>
                    <span className='title'>Info</span>
                    <span className='project link'> GitHub Link </span>
                </div>
            </div>
        </div>
        <div className='rows'>
            <div className='project'>
                <img className='animation'></img>
                <div className='projectData'>
                    <span className='title'>Info</span>
                    <span className='project link'> GitHub Link </span>
                </div>
            </div>
            <div className='project'>
                <img className='animation'></img>
                <div className='projectData'>
                    <span className='title'>Info</span>
                    <span className='project link'> GitHub Link </span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects