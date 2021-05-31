import React from "react"

const Detail: React.FC = () => {
  return (
    <div>
      <div className="grid gap-8 grid-cols-3">
        <div className="col-span-3">
          <img style={{height: 400}} className="object-cover w-full rounded-lg" src="https://images.unsplash.com/photo-1622327804771-542b633dc4b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80" alt="" />
        </div>
        <div className="col-span-1">
          <h4 className="uppercase text-sm font-bold text-blueGray-500">Tech</h4>
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