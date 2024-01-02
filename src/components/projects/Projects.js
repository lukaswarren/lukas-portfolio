import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <section id='projects'>
        <div className='project'>
        <iframe src="https://giphy.com/embed/bY15rKzgQ2EUvGfSKw"  class="giphy-embed" allowFullScreen></iframe>
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

    </section>
  )
}

export default Projects