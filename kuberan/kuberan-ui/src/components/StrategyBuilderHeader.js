import { HStack, Button, Heading, Divider, Box } from "@chakra-ui/react";

export default function StrategyBuilderHeader(){
    return (
        <Box>
        <HStack p={2}>
            <Heading size='lg'>Strategy Builder</Heading>
            <Button 
                colorScheme='teal' 
                variant='ghost' 
                alignContent='flex-end' 
                pos="absolute" 
                right="0"
            >
                Save
            </Button>
        </HStack>
        <Divider />
        </Box>
    );
}