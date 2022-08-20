import {
    AspectRatio,
    Box,
    Button,
    HStack,
    Image,
    Link,
    Skeleton,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
    Spacer,
    Flex,
} from "@chakra-ui/react";
import * as React from "react";
import { FavoriteButton } from "./FavoriteButton";
import { NavLink } from "react-router-dom";

export default function PetCard(props) {
    const { product, rootProps } = props;
    const { picture, name } = product;
    return (
        <Stack
            as={"NavLink"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            transition={"all .3s ease"}
            cursor={"pointer"}
            _hover={{ bg: "pink.100" }}
            p={2}
            borderRadius={useBreakpointValue({
                base: "md",
                md: "xl",
            })}
            border={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.900")}
            spacing={useBreakpointValue({
                base: "4",
                md: "5",
            })}
            {...rootProps}
        >
            <Box position="relative">
                <AspectRatio ratio={4 / 3}>
                    <Image
                        src={picture}
                        alt={picture}
                        draggable="false"
                        fallback={<Skeleton />}
                        borderRadius={useBreakpointValue({
                            base: "md",
                            md: "xl",
                        })}
                    />
                </AspectRatio>
                <FavoriteButton
                    position="absolute"
                    top="4"
                    right="4"
                    aria-label={`Add ${name} to your favorite`}
                />
            </Box>
            <Stack align={"center"}>
                <Text
                    spacing="1"
                    fontWeight="medium"
                    color={useColorModeValue("gray.700", "gray.400")}
                >
                    {name}
                </Text>
            </Stack>
            <Flex justify={"center"}>
                <Stack
                    direction={"row"}
                    spacing={3}
                    alignItems="center"
                    align="center"
                >
                    <Button
                        fontSize={"sm"}
                        fontWeight={600}
                        color={"white"}
                        href={"#"}
                        colorScheme={"red"}
                        bg={"red.400"}
                        transition={"all .3s ease"}
                        _hover={{ bg: "red.500" }}
                    >
                        Adopt
                    </Button>
                    <Text
                        fontSize={"sm"}
                        fontWeight={400}
                        variant={"link"}
                        color={useColorModeValue("gray.700", "gray.400")}
                        href={"#"}
                        colorScheme={"red"}
                        p={2}
                        transition={"all .3s ease"}
                    >
                        See More
                    </Text>
                </Stack>
            </Flex>
        </Stack>
    );
}
