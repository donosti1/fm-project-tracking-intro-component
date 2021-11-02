import React from "react";
import {Box, Container, Divider, Icon, Image, Stack, Text} from "@chakra-ui/react";
import {BsCircleFill} from "react-icons/bs";
const App: React.FC = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = React.useState<boolean>(false);
  const toggleMobileMenu = () => setMobileMenuIsOpen(!mobileMenuIsOpen);

  interface ParentCompProps {
    icon?: React.ReactNode;
    color: string;
  }
  const NavItems: React.FC<ParentCompProps> = (props) => {
    const {icon} = props;

    return (
      <Text
        _hover={props.icon ? {} : {textDecoration: "underline"}}
        alignSelf="center"
        color={props.color == "blue" ? "secondary.400" : "secondary.600"}
        cursor="pointer"
        display={props.icon ? ["none", "block"] : "block"}
        fontFamily="Barlow Condensed"
        fontSize={props.icon ? 8 : 18}
        fontWeight="700"
        paddingX={[1, 4]}
        paddingY={[1, 4]}
        textTransform="uppercase"
      >
        {props.children}
        {props.icon ? icon : null}
      </Text>
    );
  };

  const NavBar = () => {
    return (
      <>
        <NavItems color="blue">Product</NavItems>
        <NavItems color="blue">Features</NavItems>
        <NavItems color="blue">Pricing</NavItems>
        <NavItems color="grey" icon={<Icon as={BsCircleFill} />} />
        <Divider
          alignSelf="center"
          borderColor="#e1e1e1"
          borderWidth="1px"
          display={["block", "none"]}
          width="80%"
        />
        <NavItems color="grey">Login</NavItems>
      </>
    );
  };

  const MenuToggle = ({toggle, isOpen}: {toggle: any; isOpen: any}) => {
    return (
      <Box display={["block", "none"]} onClick={toggle}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </Box>
    );
  };
  const CloseIcon = () => (
    <svg fill="secondary.400" viewBox="0 0 18 18" width="24" xmlns="http://www.w3.org/2000/svg">
      <title>Close</title>
      <path d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z" />
    </svg>
  );

  const MenuIcon = () => (
    <svg fill="secondary.400" viewBox="0 0 20 20" width="24px" xmlns="http://www.w3.org/2000/svg">
      <title>Menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  );

  return (
    <>
      <Stack
        alignItems="center"
        height={["auto", "100vh"]}
        overflow="hidden"
        role="main"
        width="100%"
      >
        <Box
          backgroundColor="secondary.700"
          borderBottomLeftRadius="50px"
          height={["48%", "54%"]}
          position={["absolute", "fixed"]}
          right={[0, 0]}
          top={0}
          width={["52%", "42%"]}
          zIndex="1"
        />

        <Container maxWidth="container.xl" paddingY={[4, 6]} zIndex="2">
          <Stack direction="row" justifyContent="space-between">
            <Image alt="logo" height={[6, 8]} src="/assets/logo.svg" width={[6, 8]} />
            <Stack color="white" direction={["row", "row"]} display={["none", "flex"]}>
              <NavBar />
            </Stack>
            <MenuToggle isOpen={mobileMenuIsOpen} toggle={toggleMobileMenu} />
          </Stack>
        </Container>
        <Image
          alt="background"
          height={["135%", "56%"]}
          maxWidth={["135%", null]}
          position={["relative", "fixed"]}
          right={["-19%", "-15%"]}
          src="/assets/illustration-devices.svg"
          top={["0", "25%"]}
          width={["135%", "56%"]}
          zIndex="2"
        />
        {mobileMenuIsOpen && (
          <Stack alignItems="center">
            <Stack
              backgroundColor="#fff"
              borderColor="#e1e1e1"
              borderRadius="4px"
              borderWidth={1}
              boxShadow="-2px 2px 6px 2px rgba(0,0,0,0.2)"
              paddingBottom={6}
              paddingTop={6}
              position="absolute"
              textAlign="center"
              top={16}
              width="90%"
              zIndex="9"
            >
              <NavBar />
            </Stack>
          </Stack>
        )}

        <Container maxWidth="container.xl" paddingY={[16, 16]} zIndex="2">
          <Stack alignItems="center" direction="row" paddingBottom={[4, 2]} spacing={[4, 4]}>
            <Text
              alignSelf={["center", "initial"]}
              as="button"
              backgroundColor={["secondary.400", "secondary.400"]}
              borderRadius="999"
              color="white"
              fontFamily="Barlow Condensed"
              fontSize={18}
              fontWeight="700"
              paddingX={[2, 4]}
              paddingY={[0, 1]}
            >
              NEW
            </Text>
            <Text
              color="secondary.600"
              fontFamily="Barlow Condensed"
              fontSize={18}
              letterSpacing={["2px", "6px"]}
              textTransform="uppercase"
            >
              Monograph Dashboard
            </Text>
          </Stack>
          <Text
            color="secondary.400"
            fontFamily="Barlow Condensed"
            fontSize={[38, 60]}
            fontWeight="700"
            lineHeight="1.1"
            textTransform="uppercase"
            width={["100%", "40%"]}
          >
            Powerful insights into your team
          </Text>
          <Text
            color="secondary.500"
            fontFamily="Barlow"
            fontSize={18}
            paddingBottom={[8, 12]}
            paddingTop={[4, 8]}
            width={["100%", "25%"]}
          >
            Project planning and time tracking for agile teams
          </Text>
          <Stack
            alignItems="center"
            direction="row"
            justifyContent={["space-between", "unset"]}
            spacing={[1, 8]}
          >
            <Text
              _hover={{cursor: "pointer", backgroundColor: "primary.600"}}
              alignSelf={["center", "initial"]}
              as="button"
              backgroundColor={["primary.500", "primary.500"]}
              borderRadius="8"
              color="white"
              fontFamily="Barlow Condensed"
              fontSize={[16, 18]}
              fontWeight="700"
              paddingX={[4, 6]}
              paddingY={[2, 2]}
              textTransform="uppercase"
            >
              Schedule a demo
            </Text>
            <Text
              color="secondary.600"
              fontFamily="Barlow Condensed"
              fontSize={[16, 18]}
              fontWeight="400"
              letterSpacing={["1px", "6px"]}
              textAlign={["center", "left"]}
              textTransform="uppercase"
            >
              to see a preview
            </Text>
          </Stack>
        </Container>
      </Stack>
    </>
  );
};

export default App;
