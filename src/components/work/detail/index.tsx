import React from "react"
import { SiNextDotJs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si"

const Detail: React.FC = () => {
  return (
    <div>
      <div className="grid gap-8 grid-cols-3">
        <div className="col-span-3">
          <img style={{height: 400}} className="object-cover w-full rounded-lg" src="https://images.unsplash.com/photo-1622327804771-542b633dc4b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80" alt="" />
        </div>
        <div className="col-span-1">
          <div>
            <h4 className="uppercase text-sm font-bold text-blueGray-500">Tech</h4>
            <ul className="mt-4 flex -mx-2 items-center">
                <li className="px-2">
                  <SiTypescript size={20}/>
                </li>
                <li className="px-2">
                  <SiReact size={20}/>
                </li>
                <li className="px-2">
                  <SiNextDotJs size={20}/>
                </li>
                <li className="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 106 128" height="20"><path fill="#d1d5db" fillRule="evenodd" d="M105.306 97.519L61.284 4.037v-.002A7.062 7.062 0 0055.265.013c-2.679-.156-5.079 1.136-6.433 3.335L1.088 80.678a7.233 7.233 0 00.084 7.763l23.338 36.152c1.391 2.158 3.801 3.407 6.306 3.407.71 0 1.424-.1 2.126-.308l67.744-20.036a7.424 7.424 0 004.66-4.028 7.264 7.264 0 00-.04-6.11zm-9.857 4.01l-57.479 17c-1.756.52-3.439-.999-3.07-2.77l20.534-98.34c.384-1.838 2.926-2.13 3.728-.427l38.02 80.736c.717 1.523-.1 3.319-1.733 3.801z" clipRule="evenodd"></path></svg>
                </li>
                <li className="px-2">
                  <SiTailwindcss size={20}/>
                </li>
              </ul>
          </div>
          <div className="mt-8">
            <a href="#" target="_blank" className="bg-indigo-600 text-white text-center block py-3 uppercase font-semibold text-sm rounded-lg hover:bg-indigo-700 transition-all px-4">Visit</a>
          </div>
        </div>
        <div className="col-span-2">
          <div>
            <h1 className="font-bold text-3xl">Eproc</h1>
            <p className="text-blueGray-400 text-xl mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="mt-10 prose-lg">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, temporibus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptates, reiciendis tenetur unde cumque sequi debitis quae repellendus, consectetur mollitia harum sit! Voluptatem voluptatum incidunt, sequi natus corrupti aliquam quo?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail