import React from 'react'
import './Projects.css'
import PortfolioGif from "../../assets/portfolio.gif"
import MovieGif from "../../assets/movieViewer.gif"
import PythonCalcGif from "../../assets/pythonCalc.gif"

const Projects = () => {

    const data = [
        [
            {
                id: 1,
                imgSrc: PortfolioGif,
                projectInfo: "The site you are currently on! It is deployed on github pages.  Uses React and CSS for the styling.  As you can see this is a fully front-end site. I'm hoping to show how I can pick up new stacks and frameworks quickly and have a hub to showcase my work.",
                link: "https://github.com/lukaswarren/portfolio",
                name: "Portfolio", 
                
            },
            {
                id: 2,
                imgSrc: MovieGif,
                projectInfo: "Mostly this project is a demonstration on what can be picked up and created over a weekend. Prior to this project I had zero experience in these languages. I am not an expert or have extensive experience with Node, Hapi, React. I do have experience with APIs, REST, etc.",
                link: "https://github.com/lukaswarren/MovieViewer",
                name: "MovieViewer",
            }
        ],
        [
            {   
                id: 1,
                imgSrc: PythonCalcGif,
                projectInfo: "This is a little calculator that uses tokens, a scanner and a binary tree to evalute math expressions. It utilizes grammars and is written in Python",
                link: "https://github.com/lukaswarren/interpreter",
                name: "Interpreter"
            }

        ]   
    ];

    return (
        <section id='projects'>
            <span className='projectTitle'>Projects</span>
            <span className='projectDesc'>Here's a few of my personal projects. You can check out the code using the Github link. Feel free to contact me to ask about any of these. If you'd like to see more examples head over to my Github via the social section.</span>
            <div className='rows'>
                    {data[0].map((item, index) => (
                        <div className='project' key={index}>{item.name}
                            <img src={item.imgSrc} className='animation' />
                            <div className='projectData'>
                                <div className='projectInfo'>{item.projectInfo}</div>
                                <a href={item.link} target="_blank" rel="noopener noreferrer"><div className='projectLink'> Github Link</div></a>
                            </div>
                        </div>
                    ))}
            </div>
            <div className='rows'>
                    {data[1].map((item, index) => (
                        <div className='project' key={index}>{item.name}
                            <img src={item.imgSrc} className='animation' />
                            <div className='projectData'>
                                <div className='projectInfo'>{item.projectInfo}</div>
                                <a href={item.link} target="_blank" rel="noopener noreferrer"><div className='projectLink'>GitHub Link</div></a>
                            </div>
                        </div>
                    ))}

            </div>
        </section>
   
    )
}

export default Projects