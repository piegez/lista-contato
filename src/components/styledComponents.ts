import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
`

export const Botao = styled.button`
    background-color: #995E7C
;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    margin-top: 10px;
    font-size: 16px;
    border-radius: 20px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #683142;
    }
`;

export const Input = styled.input`
    padding: 10px;
    margin: 5px 0;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #683142;
    border-radius: 4px;
    font-size: 16px;

    &:focus {
        outline: none;
        border-color: #D3B19E;
        box-shadow: 0 0 5px #995E7C;
    }
`

export const ItemLista = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid #ddd;
    margin-top: 10px;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #f0f0f0;
    }
`

export const AppContainer = styled.div`
    display: flex;
`

export const MainContent = styled.div<{ sidebarOpen?: boolean }>`
    margin-left: ${props => props.sidebarOpen ? '250px' : '0'};
    padding: 20px;
    width: 100%;
    transition: margin-left 0.3s ease;
`;

export interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

export const SidebarContainer = styled.div<{ isOpen: boolean }>`
    width: 250px;
    height: 100vh;
    position: fixed;
    left: ${props => props.isOpen ? '0' : '-250px'};
    top: 0;
    background-color: #f4f4f4;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    transition: left 0.3s ease;
`;

export const ContainerBarraLateral = styled.div`
    width: 250px;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #f4f4f4;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`

export const ImagemPerfil = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 20px;
`

export const RedesSociais = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`

export const LinkRede = styled.a`
    margin: 5px 0;
    text-decoration: none;
    color: #312528;
    font-weight: bold;
`

export const ToggleButton = styled.button`
    position: absolute;
    top: 20px;
    right: -30px;
    background-color:#D3B19E;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 1;
    border-radius: 8px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #312528;
    }
`;
