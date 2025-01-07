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
    <div>
        <Image src={image} alt='image' width={300} height={300} />
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="">{summary}</p>
        <span className="">
            {
                stack.map((tool,index)=>(
                    <span className="" key={index}>{tool}</span>
                ))
            }
        </span>
    </div>
  )
}

export default ProjectCard