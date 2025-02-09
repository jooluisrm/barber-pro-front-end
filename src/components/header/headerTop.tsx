import { LiMenu } from './liMenu';
import { ToggleTheme } from '../toggleTheme';
import { DialogRegister } from '../LoginAndRegister/dialogRegister';

export const HeaderTop = () => {
    return (
        <div className="container px-5 md:px-0 mx-auto flex justify-between items-center">
            <div className='flex gap-10'>
                <div className='font-extrabold'>LOGO</div>
                <ul className='gap-5 hidden md:flex'>
                    <LiMenu text='Início' rota='/'/>
                    <LiMenu text='Buscar' rota='buscar'/>
                    <LiMenu text='Meus Agendamentos' rota='agendamentos'/>
                </ul>
            </div>
            <div className='flex items-center gap-5'>
                <ToggleTheme />
                <DialogRegister />
            </div>
        </div>
    )
}