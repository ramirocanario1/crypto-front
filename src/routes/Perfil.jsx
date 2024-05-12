import React, { useEffect, useState } from "react";
import Title from "../components/utils/Title";
import useGetUser from "../components/perfil/useGetUser";
import EditableField from "../components/perfil/EditableField";

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
    <div>
      <Title>Datos personales</Title>
      <div className="p-3">
        <EditableField label="Correo electrónico" value={email} setter={setEmail} name='email' id={id}/>
        <EditableField label="Contraseña" value={password} setter={setPassword} type="password" name='password' id={id} />
      </div>
    </div>
  );
}
