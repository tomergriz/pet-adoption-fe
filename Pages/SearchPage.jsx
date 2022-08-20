import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import PetGrid from "../components/GridWithAddToCartButton/PetGrid";
import PetCard from "../components/GridWithAddToCartButton/PetCard";
import { products } from "../components/GridWithAddToCartButton/_data";

export default function Cards() {
    return (
        <Container maxWidth={"100vw"} minHeight={"80.4vh"} mb={"13px"}>
            <Stack
                align={"center"}
                spacing={{ base: 8, md: 10 }}
                mt={{ base: 10, md: 10 }}
                direction={{ base: "column", md: "row" }}
            >
                <Stack flex={1} mb={5} spacing={{ base: 5, md: 10 }}>
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                    >
                        <Text as={"span"} color={"red.400"}>
                            Search for Pet
                        </Text>
                    </Heading>
                </Stack>
            </Stack>
            <PetGrid>
                {products.map((product) => (
                    <PetCard key={product.id} product={product} />
                ))}
            </PetGrid>
        </Container>
    );
}
