import styled from "styled-components";


export const List = styled.ul`
list-style: inside;
margin-top:10px;
padding-bottom:10px;
`
export const Item = styled.li`
margin-left: 20px;
margin-bottom:10px;
display: flex;
justify-content: space-between;
`
export const Btn = styled.button`
    max-width: 50%;
    border:none;
    border-radius:10px;
    margin-right:30px;
   &:hover{
    background-color:#2f2f37;
    color:white;
   }
`