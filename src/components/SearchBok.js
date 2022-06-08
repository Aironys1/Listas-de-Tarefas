import React, {useEffect, useState} from 'react';
import styled from 'styled-components';


const InputText = styled.input`
    margin:auto;
    display:block;
    border:2px solid;
    border-radius:10px;
    padding:15px;
    font-size:17px;
    width:300px;
`;




function SearchBox(props) {
    const [texto, setTexto] =useState('');

    function handleKeyUp(e) {
        if(e.keyCode ===  13){
            if(props.onEnter){
                props.onEnter(texto);
            }
            setTexto('');
        }
    }

 
  
    return (
        
        <InputText
            type="text"
            value={texto}
            onChange={(e) =>setTexto(e.target.value)}
            onKeyUp={handleKeyUp}
            placeholder={props.frasePadrao ?? "Digite sua pesquisa"}  />
    )
}

export default SearchBox;