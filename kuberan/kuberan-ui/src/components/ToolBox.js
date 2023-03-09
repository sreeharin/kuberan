import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/react';

export default function ToolBox(){
    return (
        <div>
            <h2>ToolBox</h2>
            <div>
                <Accordion allowToggle>
                    <AccordionItem>
                        <AccordionButton>
                            Instruments
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                            Search and add instrument
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton>
                            Interval
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                            Show different intervals
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
        </div>
    );
}
