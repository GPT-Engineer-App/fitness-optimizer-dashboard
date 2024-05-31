import { useState } from "react";
import { Container, VStack, HStack, Text, Progress, Box, Heading } from "@chakra-ui/react";
import { FaDumbbell, FaUtensils, FaBed, FaClock, FaPills } from "react-icons/fa";

const Index = () => {
  const [metrics, setMetrics] = useState({
    diet: 70,
    workoutFrequency: 80,
    recoveryTime: 60,
    sleep: 75,
    supplements: 50,
  });

  const overallEfficiency = (metrics.diet + metrics.workoutFrequency + metrics.recoveryTime + metrics.sleep + metrics.supplements) / 5;

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6} width="100%" alignItems="center">
        <Heading as="h1" size="xl" mb={4}>
          Fitness Journey Dashboard
        </Heading>
        <HStack width="100%" justifyContent="space-between">
          <Text fontSize="2xl">Overall Efficiency: {overallEfficiency}%</Text>
        </HStack>
        <Box width="100%" p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
          <HStack spacing={4} alignItems="center">
            <FaUtensils size="24" />
            <Text flex="1">Diet</Text>
            <Progress value={metrics.diet} size="lg" colorScheme="green" flex="2" />
            <Text>{metrics.diet}%</Text>
          </HStack>
        </Box>
        <Box width="100%" p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
          <HStack spacing={4} alignItems="center">
            <FaDumbbell size="24" />
            <Text flex="1">Workout Frequency</Text>
            <Progress value={metrics.workoutFrequency} size="lg" colorScheme="blue" flex="2" />
            <Text>{metrics.workoutFrequency}%</Text>
          </HStack>
        </Box>
        <Box width="100%" p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
          <HStack spacing={4} alignItems="center">
            <FaClock size="24" />
            <Text flex="1">Recovery Time</Text>
            <Progress value={metrics.recoveryTime} size="lg" colorScheme="yellow" flex="2" />
            <Text>{metrics.recoveryTime}%</Text>
          </HStack>
        </Box>
        <Box width="100%" p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
          <HStack spacing={4} alignItems="center">
            <FaBed size="24" />
            <Text flex="1">Sleep</Text>
            <Progress value={metrics.sleep} size="lg" colorScheme="purple" flex="2" />
            <Text>{metrics.sleep}%</Text>
          </HStack>
        </Box>
        <Box width="100%" p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
          <HStack spacing={4} alignItems="center">
            <FaPills size="24" />
            <Text flex="1">Supplements</Text>
            <Progress value={metrics.supplements} size="lg" colorScheme="red" flex="2" />
            <Text>{metrics.supplements}%</Text>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
