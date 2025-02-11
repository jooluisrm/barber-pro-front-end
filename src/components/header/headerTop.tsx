import { LiMenu } from './liMenu';
import { ToggleTheme } from '../toggleTheme';
import { DialogRegister } from '../LoginAndRegister/dialogRegister';
import Link from 'next/link';
import { ButtonPerfil } from './buttonPerfil';
import { SelectPerfil } from './selectPerfil';


export const HeaderTop = () => {
    return (
        <div className="container px-5 md:px-0 mx-auto flex justify-between items-center">
            <div className='flex gap-10'>
                <Link href={"/"}><div className='font-extrabold'>LOGO</div></Link>
                
                <ul className='gap-5 hidden md:flex'>
                    <LiMenu text='Início' rota='/'/>
                    <LiMenu text='Buscar' rota='buscar'/>
                    <LiMenu text='Meus Agendamentos' rota='agendamentos'/>
                </ul>
            </div>
            <div className='flex items-center gap-5'>
                <ToggleTheme />
                <DialogRegister />
                <div className='hidden sm:flex'>
                    <SelectPerfil />
                </div>
            </div>
        </div>
    )
}