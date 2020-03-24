import React, { useState, useCallback, useEffect } from 'react';
import { DivHome } from "./style";
import { MDBInput } from "mdbreact";
import { getCep } from "../../services/cep";
import { ToastsContainer, ToastsStore}  from 'react-toasts';




function Home({}) {

  const [cep, setCep] = useState("");
  const [address, setAddress] = useState({
    city: "",
    state: ""
  })

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

  const errorCallback = useCallback((response) => {
    return ToastsStore.error(String(response))
  },[]);


  const getCepCallback = useCallback( async (cep) => {
    await getCep(String(cep)).then( (response) => {
      if(!response.data.error){
        const { cidade, uf } = response.data;
        setAddress({
          address,
          city: cidade,
          state: uf
        })
      }
      return errorCallback(response.data.error)
    }
    )
  },[cep])

  useEffect( () => {

    if(cep.length === 9){
      getCepCallback(cep)
    }
  }, [cep]);



  return (
    <DivHome>
      <div className="row flex-column align-items-center">
        <ToastsContainer store={ToastsStore}/>
        <div className="flex-column d-flex col-10 card mt-2">
          <h4 className="mb-0">Pesquisar Cidade</h4>
          <div className="row">
            <div className="col-md-4 col-12">
              <MDBInput label="CEP" value={cep} onChange={setCepCallback}/>
            </div>
            <div className="col-md-4 col-12">
              <label>Cidade:</label>
              <input className="form-control" value={address.city} readOnly/>
            </div>
            <div className="col-md-4 col-12 mt-2 mt-md-0">
              <label>Estado:</label>
              <input className="form-control" value={address.state} readOnly/>
            </div>
          </div>
        </div>
      </div>
    </DivHome>
  );
}

export default Home;