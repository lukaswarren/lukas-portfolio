import React from 'react'
import "./Social.css"

const Social = () => {
  return (
    <section id='social'>
        <div className='socialTitle'>Social</div>
        <div class="social-icons">
            <a href="https://www.linkedin.com/in/lukas-warren-76794b98/" target="_blank" className="icons"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/lukaswarren" target="_blank" className="icons"><i class="fab fa-github"></i></a>
            <a href="mailto:lukaswarren728@gmail.com" target="_blank" className="icons" alt="Email Me"><i class="fas fa-envelope"></i></a>
        </div>
    </section>
    
  )
}

export default Social