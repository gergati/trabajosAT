import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Link,
    Img,
    Preview,
    Text,
    Tailwind,
    Button
} from "@react-email/components";
import * as React from "react";

//   interface NotionMagicLinkEmailProps {
//     loginCode?: string;
//   }

// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const NotionMagicLinkEmail = (url: string) => (
    <Html>
        <Head />
        <Tailwind>
            <Preview>Verifica tu correo electronico</Preview>
            <Body className="bg-white my-12 mx-auto w-[80%] border border-black">
                <Container className="pl-6 pr-6 m-auto">
                    <Heading className="text-3xl font-sans font-bold flex gap-2 items-center">
                        <Img
                            src="https://lh3.googleusercontent.com/a/ACg8ocJ5awouAoHwOWhez3zhB7ZBHE1ZHm17UGy_0hEvv0mtDNikdhvk=s83-c-mo"
                            width={'64'}
                            height={'64'}
                            alt="TrabajosAT"
                        />
                        TrabajosAT</Heading>
                    <Text className="text-lg font-sans font-medium text-gray-700">
                        Gracias por ser parte de nuestra comunidad! Te espera tu trabajo soñado.
                    </Text>
                    <Button href={url} className="bg-blue-500 text-black font-bold px-2 w-32 py-4 font-sans rounded-md text-center mb-5">Verificar</Button>
                    <Text className="font-sans font-bold text-gray-700">
                        <Link
                            href="https://trabajosat.vercel.app/"
                            target="_blank"
                            className="font-sans"
                        >
                            TrabajosAT
                        </Link>
                        , tu proximo trabajo esta acá.
                    </Text>
                </Container>
            </Body>
        </Tailwind>
    </Html>
);

//   NotionMagicLinkEmail.PreviewProps = {
//     loginCode: "sparo-ndigo-amurt-secan",
//   } as NotionMagicLinkEmailProps;

export default NotionMagicLinkEmail;

