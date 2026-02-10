import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className=" w-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="w-full max-w-md bg-white min-h-screen">
        {/* TOPO */}
        <div>
          <Image
            src="/empresa.png"
            alt="Empresa"
            width={400}
            height={300}
            className="w-full h-44 object-cover"
          />

          {/* Card sobre a imagem */}
          <div className=" bg-white rounded-t-2xl p-4">
            <div className="flex items-center gap-3">
              <Image src="/mc.png" alt="MC" width={40} height={40} />

              <div>
                <h1 className="font-bold text-lg text-black">
                  Leopoldo Donald's
                </h1>
                <p className="text-sm text-gray-500">Fast Food</p>

                <div className="flex gap-2 text-sm mt-1">
                  <span className="text-green-600 font-medium">Aberto</span>
                  <span className="text-yellow-500">⭐ 5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ESPAÇO POR CAUSA DO ABSOLUTE */}
        <div className="h-16"></div>

        {/* TABS */}
        <div className="flex gap-3 px-4 mt-2 overflow-x-auto">
          <button className="px-4 py-2 rounded-full bg-red-600 text-white text-sm font-semibold">
            Lançamentos
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 text-sm">
            Especiais
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 text-sm">
            Combos
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 text-sm">
            Bebidas
          </button>
        </div>

        {/* LISTA DE PRODUTOS */}
        <div className="px-4 mt-6 space-y-4 bg-transparent">
          <h2 className="font-semibold text-lg text-black">Lançamentos</h2>

          {/* CARD PRODUTO */}
          <div className="flex justify-between items-center border rounded-xl p-3 shadow-sm">
            <div className="flex-1 pr-3">
              <h3 className="font-semibold text-sm text-black">
                McOferta Média Big Mac Duplo
              </h3>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                Quatro hambúrgueres 100% carne bovina, alface americana, queijo
                e molho especial.
              </p>
              <p className="font-bold mt-2 text-black">R$ 39,90</p>
            </div>

            <Image
              src="/lanche.png"
              alt="Produto"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>

          {/* OUTRO CARD */}
          <div className="flex justify-between items-center border rounded-xl p-3 shadow-sm">
            <div className="flex-1 pr-3">
              <h3 className="font-semibold text-sm text-black">
                Brabo Melt Onion Rings
              </h3>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                Hambúrguer bovino, queijo derretido e onion rings crocantes.
              </p>
              <p className="font-bold mt-2 text-black">R$ 41,50</p>
            </div>

            <Image
              src="/lanche.png"
              alt="Produto"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className=" flex justify-center bg-white items-center">
        <Link
          href="/sacola"
          className="w-full max-w-md bg-green-500 text-white font-bold rounded-3xl text-center"
        >
          Ir para sacola
        </Link>
      </div>
    </div>
  );
}
