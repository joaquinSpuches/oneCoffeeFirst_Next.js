import FormularioCrear from '@/Components/FormularioCrear'
import LogoutButton from '@/Components/LogoutButton'
import Link from 'next/link'


export default function page(params) {
  return(
    <ul>
      <Link href={'/Perfil/Admin/crear'}> Crear item </Link>
      <Link href={'/Perfil/Admin/editar'}> Editar item </Link>
      <LogoutButton/>
    </ul>
  )
};
