import React from 'react'

const Skills = () => {
  return (
    <div className="container prose mb-8">
        <h2 className="text-zinc-400">Beceriler</h2>

        <div className="flex flex-col md:flex-row mb-8">
            <div className="w-full md:w-1/3 text-zinc-400 mb-4 md:mb-0">Tasarım & Video</div>
            <div className="w-full md:w-2/3 flex flex-wrap gap-2">
                <span className="bg-zinc-800 text-zinc-500 px-4 py-2 text-sm rounded-3xl">Photoshop</span>
                <span className="bg-zinc-800 text-zinc-500 px-4 py-2 text-sm rounded-3xl">Illustrator</span>
                <span className="bg-zinc-800 text-zinc-500 px-4 py-2 text-sm rounded-3xl">Figma</span>
                <span className="bg-zinc-800 text-zinc-500 px-4 py-2 text-sm rounded-3xl">Adobe XD</span>
                <span className="bg-zinc-800 text-zinc-500 px-4 py-2 text-sm rounded-3xl">Premiere Pro</span>
                <span className="bg-zinc-800 text-zinc-500 px-4 py-2 text-sm rounded-3xl">DaVinci Resolve</span>
            </div>
        </div>

        


        <div className="flex flex-col md:flex-row flex-wrap">
            <div className="w-1/3 text-zinc-400 mb-4 md:mb-0">Yazılım</div>
            <div className="w-2/3 flex flex-wrap gap-2">
                <span className="bg-zinc-800 text-zinc-500 px-4 py-2 text-sm rounded-3xl">HTML</span>
                <span className="bg-zinc-800 text-zinc-500 px-4 py-2 text-sm rounded-3xl">CSS</span>
                <span className="bg-zinc-800 text-zinc-500 px-4 py-2 text-sm rounded-3xl">Javascript</span>
                <span className="bg-zinc-800 text-zinc-500 px-4 py-2 text-sm rounded-3xl">React</span>
                <span className="bg-zinc-800 text-zinc-500 px-4 py-2 text-sm rounded-3xl">PHP</span>
                <span className="bg-zinc-800 text-zinc-500 px-4 py-2 text-sm rounded-3xl">Python</span>
            </div>
            
        </div>



    </div>
  )
}

export default Skills