import { 
    Accordion, 
    AccordionButton, 
    AccordionIcon, 
    AccordionItem, 
    AccordionPanel, 
    Box 
} from '@chakra-ui/react';

export default function ToolBox(){
    return (
        <Box w='10rem' mr={10}>
            {/* <h2>ToolBox</h2> */}
            <div>
                <Accordion allowToggle>
                    {/* <AccordionItem>
                        <AccordionButton>
                            Instruments
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                            Search and add instrument
                        </AccordionPanel>
                    </AccordionItem> */}

                    <AccordionItem>
                        <AccordionButton>
                            Intervals
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                            <div>seconds</div>
                            <div>minutes</div>
                            <div>hour</div>
                            <div>daily</div>
                            <div>weekly</div>
                            <div>monthly</div>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton>
                            Holding type
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                            CNC/MIS
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton>
                            Position
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                            Long/Short
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton>
                            Indicators
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                            MACD, Moving average
                        </AccordionPanel>
                    </AccordionItem>

                </Accordion>
            </div>
        </Box>
    );
}
