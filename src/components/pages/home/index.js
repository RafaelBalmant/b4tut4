import React, { useState, useCallback, useEffect } from 'react';
import { BodyForm, DivHome } from "./style";
import { getCep } from "../../../services/cep";
import Inputs from "./input";
import { NotificationContainer, NotificationManager } from 'react-notifications';




function Home({}) {

  const [cep, setCep] = useState("");
  const [animation, setAnimation] = useState(false);
  const [select, setSelect] = useState(false);
  const [address, setAddress] = useState({
    city: "",
    state: ""
  });
  const [loading, setLoading] = useState(false)

  const setCepCallback = useCallback((event) => {
    let valueCep = event.target.value.replace(/\D/g, '');
    if(event.target.value.length > 9 ){
      return setCep(cep)
    }
    if(event.target.value.length === 8){
      const newCep = valueCep.substring(0,5) + "-" + valueCep.substring(5);
      setAddress({
        city: "",
        state: ""
      });
      return setCep(newCep)
    }
    setAddress({
      city: "",
      state: ""
    });
    setCep(valueCep);
  },[cep]);

  const getCepCallback = useCallback( async (cep) => {
    try {
      setLoading(true);
      const responseCep = await getCep(String(cep)).then(response => response);
      if(responseCep.data.error){
        return NotificationManager.error("Cep não encontrado")
      }
      setAddress({
        ...address,
        city: responseCep.data.cidade,
        state: responseCep.data.uf
      });
    } catch (e) {
      return NotificationManager.error("Ocorreu um erro inesperado")
    } finally {
      setLoading(false)
    }
  },[]);

  useEffect( () => {
    if(cep.length === 9){
      getCepCallback(cep)
    }
  }, [cep]);

  const setAnimationCallback = useCallback(() => {
    setAnimation(true);
    setTimeout(() => {
      return setSelect(true)
    },100)
  }, []);

  return (
    <DivHome >
      <BodyForm animation={animation}>
        <div className="d-flex flex-column align-items-center">
          <div className="flex-column d-flex col-10 card mt-2">
            <div className="d-flex justify-content-between align-items-center mb-2 flex-column flex-md-row">
              <h4 className="mb-0">Pesquisar Cidade</h4>
              <span className={!select ? "mt-2 mt-md-0" : "d-none"}>
                Não sabe o CEP da sua cidade? <a className="text-success" onClick={setAnimationCallback}>Click aqui!
              </a>
              </span>
            </div>
            <Inputs
              cep={cep}
              address={address}
              loading={loading}
              setCep={setCepCallback}
              setAddress={setAddress}
              select={select}
            />
          </div>
        </div>
        <NotificationContainer/>
      </BodyForm>
    </DivHome>
  );
}

export default Home;
