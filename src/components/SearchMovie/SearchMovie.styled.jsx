import styled from 'styled-components'

export const InputArea = styled.input`  
    font-size:15px;
    height:36px;
    line-height:36px;
    margin-right:12px;
    outline:medium none;
    padding:0 0 0 35px;
    text-shadow:1px 1px 0 white;
    width:385px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export const SearchButton = styled.button`
    width:83px;
    height:38px;  
    text-transform:uppercase;
    border:none;
    cursor:pointer;
    border-radius: 5px;
    &:hover{
        background-color: #afafaf;
        font-size: 12px;
        color: #fff;
        border-radius: 5px;
        }
    &:active{
        font-weight: 500;
        font-size: 13px;
    }
`;

export const SearchSectionWrapper = styled.div`
    text-align: center;
`;
