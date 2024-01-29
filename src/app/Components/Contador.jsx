"use client"
import { useState } from "react"

export default function Contador() {
  const [handler, setHandler] = useState(0)  
  return(
      <div className="w-full justify-center items-center ga-y-4 flex flex-col">
        
          <div className="flex flex-row gap-x-4 w-full items-center justify-center my-0 py-0">
            <button onClick={() => setHandler(handler - 1)}> - </button>
        <span className="font-bold text-xl">{handler}</span>
            <button onClick={() => setHandler(handler + 1)}> + </button>
      </div>
      </div>
    )
};
