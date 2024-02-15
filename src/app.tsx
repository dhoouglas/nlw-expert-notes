import logo from "./assets/logo-nlw-expert.svg";

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW Expert" />
      
      <form className="w-full">
        <input 
          type="text" 
          placeholder="Busque em suas notas ..." 
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
          />
      </form>

      <div className="h-px bg-slate-700"/>

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <div className="rounded-md bg-slate-700 p-5 space-y-3">
          <span className="text-sm font-medium text-slate-200">
            Adicionar nota
          </span>
          <p className="text-sm leading-6 text-slate-400">
            Grave uma nota em áudio que será convertida para texto automaticamente.
          </p>
        </div>

        <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden">
          <span className="text-sm font-medium text-slate-300">
            Há 2 dias
          </span>
          <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi reiciendis quasi iste! Facilis voluptatibus ducimus repellat nesciunt consequatur deleniti ex ratione, quis animi cupiditate dolorem, eius explicabo rerum reprehenderit atque!
          </p>
        </div>

        <div className="rounded-md bg-slate-800 p-5 space-y-3">
          <span className="text-sm font-medium text-slate-300">
            Há 4 dias
          </span>
          <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore voluptatem sit hic voluptatum qui corporis, accusamus eius corrupti enim officia sequi tempora eos maiores quasi iste blanditiis quisquam aliquid expedita.
          </p>
        </div>

        <div className="rounded-md bg-slate-800 p-5 space-y-3">
          <span className="text-sm font-medium text-slate-300">
            Há 4 dias
          </span>
          <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore voluptatem sit hic voluptatum qui corporis, accusamus eius corrupti enim officia sequi tempora eos maiores quasi iste blanditiis quisquam aliquid expedita.
          </p>
        </div>
      </div>
    </div>
    
  )
}
