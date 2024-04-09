import { Box, Heading, Text, Button, SimpleGrid, Image } from "@chakra-ui/react";
import { FaMagic } from "react-icons/fa";

const webApps = [
  {
    name: "Enchanted Ecommerce",
    description: "Cast a spell on your online sales with this magical ecommerce app.",
    image: "enchanted-ecommerce.png",
  },
  {
    name: "Wizardly Weather",
    description: "Magically precise forecasts powered by an army of weather wizards.",
    image: "wizardly-weather.png",
  },
  {
    name: "Charmed Chat",
    description: "Spark delightful conversations with this enchanting chat app.",
    image: "charmed-chat.png",
  },
];

const Index = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <FaMagic size={48} color="purple.500" />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Ana's Magical Web Apps
      </Heading>
      <Text color={"gray.500"} mb={6}>
        Unleash the power of magic in your browser
      </Text>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={8}>
        {webApps.map((app) => (
          <Box key={app.name} bg={"gray.100"} p={6} rounded={"lg"} textAlign={"center"}>
            <Image src={app.image} alt={app.name} mb={4} />
            <Heading as="h4" size="md" mb={2}>
              {app.name}
            </Heading>
            <Text>{app.description}</Text>
            <Button colorScheme="purple" size="lg" mt={4}>
              Buy Now
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;
