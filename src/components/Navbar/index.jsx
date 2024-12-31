import React, { Fragment } from "react";
import { Acount, Container, Desc_Logo, Logo, NavContainer, NavItem} from "./style";

const Navbar = () => {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggleMenu = () => {
    //     setIsOpen(!isOpen);
    // };
    return (
        <Container>
            <Logo>
                <img src="../../../OIP.jpeg" alt="" />
                <i></i>
                <Desc_Logo>
                    <h4>Universidade Federal do Píaui</h4>
                    <span>Campus: CSHNB</span>
                    <span>NAE - Núcleo de Assistencia Estudantil</span>
                </Desc_Logo>
            </Logo>
            <NavContainer>
                <ul>
                <NavItem><a href="">Home</a></NavItem>
                <NavItem><a href="">Serviços</a></NavItem>
                <NavItem><a href="">Bolsas</a></NavItem>
                <NavItem><a href="">Palestras</a></NavItem>
                <NavItem><a href="">Editais</a></NavItem>
                </ul>
            </NavContainer>

            <Acount>
                <a href="">Login</a>/<a href="">Notificações</a>
            </Acount>
        </Container>
    );
}

export default Navbar;