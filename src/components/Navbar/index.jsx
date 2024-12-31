import React, { Fragment } from "react";
import { Container, Desc_Logo, Logo, Nav, NavItem, User, BurgerMenu } from "./style";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <Container>
            <BurgerMenu>
                <i className="fas fa-bars"></i>
                <Nav>
                    <NavItem>Home</NavItem>
                    <NavItem>Services</NavItem>
                    <NavItem>Products</NavItem>
                    <NavItem>Contact</NavItem>
                </Nav>
            </BurgerMenu>
            <Logo>
                <img src="../../../OIP.jpeg" alt="" />
                <i></i>
                <Desc_Logo>
                    <h4>Universidade Federal do Píaui</h4>
                    <span>Campus: CSHNB</span>
                    <span>NAE - Núcleo de Assistencia Estudantil</span>
                </Desc_Logo>
            </Logo>
            <User>
                <img src="" alt="" />
                <span>E-mail</span>
            </User>
        </Container>
    );
}

export default Navbar;