import { 
    Accordion, 
    AccordionButton, 
    AccordionIcon, 
    AccordionItem, 
    AccordionPanel, 
    Box, 
    SimpleGrid,
    Tooltip
} from '@chakra-ui/react';

export default function ToolBox(){
    return (
        <Box w='10rem' mr={10}>
            <div>
                <Accordion allowToggle>
                    <AccordionItem>
                        <AccordionButton>
                            Intervals
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                            <SimpleGrid columns={3} spacingY={3} spacingX={2}>
                                <Tooltip hasArrow label='Seconds'>
                                    <div className='menu-item'>sec</div>
                                </Tooltip>
                                <Tooltip hasArrow label='Minute'>
                                    <div className='menu-item'>min</div>
                                </Tooltip>
                                <Tooltip hasArrow label='Hour'>
                                    <div className='menu-item'>hr</div>
                                </Tooltip>
                                <Tooltip hasArrow label='Daily'>
                                    <div className='menu-item'>D</div>
                                </Tooltip>
                                <Tooltip hasArrow label='Weekly'>
                                    <div className='menu-item'>W</div>
                                </Tooltip>
                                <Tooltip hasArrow label='Monthly'>
                                    <div className='menu-item'>M</div>
                                </Tooltip>
                            </SimpleGrid>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton>
                            Holding type
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                            <SimpleGrid columns={2} spacingX={2}>
                                <Tooltip hasArrow label='Carry forward'>
                                    <div className='menu-item'>CNC</div>
                                </Tooltip>
                                <Tooltip hasArrow label='Intraday'>
                                    <div className='menu-item'>MIS</div>
                                </Tooltip>
                            </SimpleGrid>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton>
                            Position
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                            <SimpleGrid columns={2} spacingX={2}>
                                <div className="menu-item">Long</div>
                                <div className="menu-item">Short</div>
                            </SimpleGrid>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton>
                            Indicators
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                            <SimpleGrid columns={2} spacingX={2} spacingY={3}>
                                <Tooltip hasArrow label='Moving Average Crossover/Divergence'>
                                    <div className="menu-item">MACD</div>
                                </Tooltip>
                                <Tooltip hasArrow label='Simple Moving Average'>
                                    <div className="menu-item">SMA</div>
                                </Tooltip>
                                <Tooltip hasArrow label='Exponential Moving Average'>
                                    <div className="menu-item">EMA</div>
                                </Tooltip>
                            </SimpleGrid>
                        </AccordionPanel>
                    </AccordionItem>

                </Accordion>
            </div>
        </Box>
    );
}
