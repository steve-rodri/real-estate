import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import DefaultImage from "../assets/house.jpg";

export const Property = ({ property }) => (
  <Link href={`/property/${property.externalID}`} passHref>
    <Flex
      flexWrap="wrap"
      w={420}
      p={5}
      pt={0}
      justify="flex-start"
      cursor="pointer"
    >
      <Box>
        <Image
          src={property.coverPhoto ? property.coverPhoto.url : DefaultImage}
          alt="house"
          width="400px"
          height="260px"
        />
      </Box>
      <Box w="full">
        <Flex pt="2" align="center" justify="space-between">
          <Flex align="center">
            <Box pr={3} color="green.400">
              {property.isVerified && <GoVerified />}
            </Box>
            <Text fontWeight="bold" fontSize="lg">
              AED {millify(property.price)}
              {property.rentFrequency && `/${property.rentFrequency}`}
            </Text>
          </Flex>
          <Box>
            <Avatar src={property.agency?.logo?.url} size="sm" />
          </Box>
        </Flex>
        <Flex
          p={1}
          w={250}
          color="blue.400"
          align="center"
          justify="space-between"
        >
          {property.rooms} <FaBed /> | {property.baths} <FaBath /> |{" "}
          {millify(property.area)} <BsGridFill />
        </Flex>
        <Text fontSize="lg">
          {property.title.length > 30
            ? `${property.title.substring(0, 30)} ...`
            : property.title}
        </Text>
      </Box>
    </Flex>
  </Link>
);

export default Property;
