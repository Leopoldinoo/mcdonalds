import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex items-center flex-col min-h-screen min-w-screen bg-white">
      <div className="flex flex-col h-30 items-center justify-center mt-10 w-50 bg-white">
        <Image src="/mc.png" alt="Logo" width={80} height={100} />
        <h1 className="font-bold text-black mt-2">Leopoldo Donald's</h1>
      </div>
      <div className="flex flex-col justify-center items-center h-40 bg-white w-1/1 mt-10">
        <h1 className="font-bold text-black text-2xl">Seja bem-vindo!</h1>
        <p className="text-center text-zinc-400 mt-2">Escolha como prefere aproveitar sua refeição.Estamos aqui para oferecer praticidade e sabor em cada detalhe</p>
      </div>
      <div className="flex items-center justify-center h-50 w-70">
        <div className="flex flex-col items-center justify-center w-35 h-40 bg-white rounded-2xl border-2 border-gray-300 ">
          <Image src="/lanche.png" alt="Lanches" width={100} height={100} />
          <p className="text-black font-bold text-sm mt-3">Para comer aqui</p>
        </div>
        <div className="flex flex-col items-center justify-center w-35 h-40 bg-white ml-2 rounded-2xl border-2 border-gray-300">
          <Image src="/saco.png" alt="Papel de Embrulho" width={75} height={100} />
          <p className="text-black font-bold text-sm mt-3">Para levar</p>
        </div>
      </div>
      <Link href="./lancamentos" className="w-50 text-center h-10 bg-green-500 text-white font-bold rounded-3xl cursor-pointer mt-5">Ir para opções</Link>
    </div>
  );
}
