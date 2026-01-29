import { Html, Button, Heading, Text, Container, Body } from "@react-email/components";
import { type FC } from "react";

type NewsletterProps = {
  userName: string;
}
const Newsletter: FC<NewsletterProps> = ({ userName }) => {
    //Styles
    const mainStyle = { fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', padding: '20px' };
    const containerStyle = { backgroundColor: '#ffffff', padding: '20px', borderRadius: '5px' };
    const buttonStyle = { backgroundColor: '#000', color: '#fff', padding: '12px 20px', borderRadius: '5px', textDecoration: 'none' };

    return (
        <Html lang="cs">
            <Body style={mainStyle}>
                <Container style={containerStyle}>
                    <Heading>Vítej na palubě, {userName}! 🚀</Heading>
                    <Text>Jsme moc rádi, že jsi se přidal k našemu newsletteru.</Text>
                    <Button href="#" style={buttonStyle}>Přejít na web</Button>
                </Container>
            </Body>
        </Html>
    );
}
export default Newsletter;