import { CircleUserRound } from 'lucide-react';
import { LiMenu } from '../liMenu';
import { ButtonLogin } from '../buttonLogin';
import { ToggleTheme } from '../toggleTheme';

export const HeaderTop = () => {
    return (
        <div className="container mx-auto flex justify-between items-center">
            <div className='flex gap-10'>
                <div className='font-extrabold'>LOGO</div>
                <ul className='flex gap-5'>
                    <LiMenu text='Início' rota='/'/>
                    <LiMenu text='Buscar' rota='buscar'/>
                    <LiMenu text='Meus Agendamentos' rota='agendamentos'/>
                </ul>
            </div>
            <div className='flex items-center gap-5'>
                <ToggleTheme />
                <ButtonLogin />
            </div>
        </div>
    )
}