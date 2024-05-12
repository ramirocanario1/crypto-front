import React, { useEffect, useState } from "react";
import Title from "../components/utils/Title";
import useGetUser from "../components/perfil/useGetUser";
import EditableField from "../components/perfil/EditableField";
import Description from "../components/utils/Description";

export default function Perfil() {
  const id = JSON.parse(localStorage.getItem("user"))?.id;
  const { user, isLoading, isError } = useGetUser(id);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    setEmail(user?.email);
    setPassword('12345678');
  }, [user]);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error...</div>;

  return (
    <div className='p-2 flex flex-col gap-2'>
      <Title>👤 Datos personales</Title>
      <Description>
        Si deseas modificar alguno de los datos de tu cuenta, podes clickear en el boton de edición y modificarlo.  
      </Description>
      <div className="flex flex-col gap-2">
        <EditableField label="Correo electrónico" value={email} setter={setEmail} name='email' id={id}/>
        <EditableField label="Contraseña" value={password} setter={setPassword} type="password" name='password' id={id} />
      </div>
      <Description>
        Recordá que estos son los datos que necesitas para iniciar sesión en tu cuenta.
      </Description>
    </div>
  );
}
