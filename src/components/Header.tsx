import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { Search } from "./Search";
import { ItemMenu } from "./ItemMenu";
import IconUser from '@/assets/icon-user.svg'


export function Header() {
  return (
    <header className="relative flex items-center first-line:w-full h-20 bg-primary-orange">
        <div className="absolute top-0 right-0 bg-primary-blue w-[19%] h-full z-0"></div>
      <div className="flex items-center justify-between w-full max-w-[1246px] px-[15] mx-auto">
        <div className="flex flex-1 items-center justify-between">
          <div className="flex items-center gap-14">
            <Image src={Logo} alt="logo" />
            <ul className="flex items-center gap-12">
              <li>
                <ItemMenu name="Para você"/>
              </li>
              <li>
                <ItemMenu name="Para empresas"/>
              </li>
              <li>
                <ItemMenu name="Serviços"/>
              </li>
              <li>
                <ItemMenu name="Ajuda"/>
              </li>
            </ul>
          </div>
          <Search/>
        </div>
        <button className="flex items-center gap-4 bg-primary-blue h-20 pl-10 z-10">
            <Image src={IconUser} alt="Icon user"/>
            <span className="text-white font-bold">Acessar conta</span>
        </button>
      </div>
    </header>
  );
}
