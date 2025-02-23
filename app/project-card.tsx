import Image from 'next/image'
import React from 'react'

interface IProjectCard {
    title: string
    summary: string
    image: string
    stack: string[]
}

const ProjectCard = ({title, summary, image, stack}: IProjectCard) => {
  return (
    <div className=''>
        <Image src={image} alt='image' width={300} height={300} className='object-cover ' />
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="">{summary}</p>
        <span className="">
            {
                stack.map((tech, index) => (
                    <span key={index} className="inline-block bg-accent text-foreground font-semibold px-2 py-1 rounded-full">
                        {tech}
                    </span>
                ))
            }
        </span>
    </div>
  )
}

export default ProjectCard