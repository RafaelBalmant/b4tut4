import React, { useEffect, useState, useCallback } from 'react';
import Select from 'react-select'



function SelectApi({fieldId, fieldName, request, value, setValue, disable}) {
  const [options, setOptions] = useState([]);
  const [params, setParams] = useState([])

  const setOptionsCallback = useCallback( async value => {
    const response = await request(value);
    const { data } = response;
    const newData = data.map(state => {
      return {
        value: state[fieldId],
        label: state[fieldName]
      }
    });
    return setOptions(newData)
    },[options]);

  console.log(params)

  useEffect( () => {
    setOptionsCallback(params);
  },[params]);


  const setValueCallback = useCallback((value) => {
    setParams(value.value);
    setValue(value)
  },[value, options, ]);

  return (
    <>
      <Select
        options={options}
        onChange={setValueCallback}
        value={value}
        className="basic-single"
        classNamePrefix="select"
        isDisabled={disable}
      />
    </>
  );
}

export default SelectApi;
