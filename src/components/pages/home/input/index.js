import React, { useState } from 'react';
import "./style.css"
import SelectApi from "../selectUf";
import {getCity, getUf} from "../../../../services/cep";

function Inputs({cep, setCep, loading, address, setAddress, select}) {
  const [uf, setUf] = useState(null);
  const [city, setCity] = useState(null);
  console.log(uf)
  return (
    <>
      <div className={`row ${select ? "flex-row-reverse justify-content-center" :  ""}`}>
        <div className={`col-md-4 col-12`}>
          <label className="d-block ">CEP:</label>
          <input
            className="form-control d-inline"
            value={cep} onChange={setCep} readOnly={!!select}/>
          <i className={`fas fa-circle-notch fa-spin fa-lg loader ${!loading ? "d-none" : ""}`}/>
        </div>
        <div className="col-md-4 mt-2 mt-md-0 col-12">
          <label className="d-block">Cidade:</label>
          {select ? <SelectApi
              fieldId={"id"}
              fieldName={"nome"}
              request={getCity}
              value={city}
              setValue={setCity}
              disable={!uf}
            /> :
            <input className="form-control d-inline" value={address.city} readOnly/>}
        </div>
        <div className="col-md-4 col-12 mt-2 mt-md-0">
          <label className="d-block">Estado:</label>
          {select ? <SelectApi fieldId={"id"} fieldName={"nome"} request={getUf} value={uf} setValue={setUf}/> :
            <input className="form-control d-inline" value={address.state} readOnly/>}
        </div>
      </div>
    </>
  );
}

export default Inputs;
