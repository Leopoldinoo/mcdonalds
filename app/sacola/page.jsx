import Image from "next/image";
import Link from 'next/link'
import {ChefHat} from "lucide-react";
export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-md bg-white min-h-screen flex justify-center items-center flex-col">

          <Image
            src="/lanche.png"
            alt="Empresa"
            width={200}
            height={200}
            className="w-full h-44 object-cover"
          />

          {/* Card sobre a imagem */}
          <div className=" bg-white rounded-t-2xl p-4 flex justify-start items-start">
            <div className="flex items-center gap-3">
              <Image className="mb-15" src="/mc.png" alt="MC" width={15} height={40} />
              <div>
                <h1 className="font-bold text-sm text-zinc-300">
                  Leopoldo Donald's
                </h1>
                <h1 className="text-black font-bold">McOferta Média Big Mac Duplo</h1>
                <p className="text-black font-bold mt-5">R$ 39,90</p>
              </div>
            </div>
          </div>
          <div className="h-40 w-full bg-transparent flex flex-col items-start justify-start">
            <h1 className="text-black font-bold ml-2 mt-2">Sobre</h1>
            <p className="text-sm mt-2 ml-2 text-left text-zinc-400">Quatro Hambúrgueres (100% carne bovina), alface americana, queito fatiado sabor cheddar, molho especial, cebola, picles e pão com gergelim, acompanhamento de bebida</p>
          </div>
          <div className="h-45 w-full bg-transparent flex flex-col items-center justify-start">
            <div className="h-10 w-full bg-transparent flex items-center justify-start ">
              <ChefHat className="text-black w-10"/>
            <h1 className="text-black font-bold">Ingredientes</h1>
            </div>
            <ul>
              <li>
                <p className="text-sm mt-2 ml-2 text-left text-zinc-400">Quatro Hambúrgueres de carne bovina 100%</p>
                <p className="text-sm ml-2 text-left text-zinc-400">Alface Americana</p>
                <p className="text-sm ml-2 text-left text-zinc-400">Queijo fatiado sabor cheddar</p>
                <p className="text-sm mt-2 ml-2 text-left text-zinc-400">Molho especial</p>
                <p className="text-sm mt-2 ml-2 text-left text-zinc-400">Cebola</p>
                <p className="text-sm mt-2 ml-2 text-left text-zinc-400">Picles</p>
              </li>
            </ul>
          </div>
          <button className="w-50 h-10 bg-green-500 text-white font-bold rounded-full cursor-pointer mt-5">Adicionar à sacola</button>
      </div>
    </div>
  );
}
