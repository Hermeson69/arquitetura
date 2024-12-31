import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    background-color: #ffffff;
    position: fixed;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #000000;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height: 100%;
    border: 1px solid #000000;

    img {
        width: 80px;
        height: 90px;
    }

    i {
        border: 1px solid #000000;
        height: 80px;
        margin: 0 10px;
    }
`;

export const Desc_Logo = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10px;
`;

export const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #000000;
`;

export const NavItem = styled.a`
    list-style: none;
    margin: 0 10px;
    font-size: 1rem;
    font-weight: 500;
    color: #000000;
    cursor: pointer;
    position: relative;
    text-decoration: none;

    &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -2px;
        left: 50%;
        background-color: #000000;
        transition: width 0.3s ease, left 0.3s ease;
    }

    &:hover::after {
        width: 100%;
        left: 0;
    }
`;

export const User = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height: 100%;
    margin: 0 10px;
`;
