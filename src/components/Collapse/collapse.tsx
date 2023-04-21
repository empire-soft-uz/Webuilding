import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from "./collapse.module.css"
import { COLORS } from '../../constants/color';
import { ArrowDownIcon } from '../../assets/icons';
import CollapseFilter from '../collapseFilter/collapseFilter';
import CollapseItem from '../collapseItem/collapseItem';


const Collapse = () => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <>
            <Accordion className={styles.container} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    className={styles.summary}
                    style={{ backgroundColor: "#EFF3F9" }}
                >
                    <Typography sx={{ display: "flex", width: '25%', flexShrink: 0, fontSize: "12px" }}>
                        1-XONALI
                        <div style={{ marginLeft: "5px" }}>
                            <ArrowDownIcon />
                        </div>
                    </Typography>
                    <Typography sx={{ width: '25%', color: COLORS.black, fontSize: "12px" }}>21.6 M2 DAN</Typography>
                    <Typography sx={{ width: '25%', color: COLORS.black, fontSize: "12px" }}>6.3 - 8.7 MLN $ DAN</Typography>
                    <Typography sx={{ width: '25%', color: COLORS.purple, textAlign: "end", fontSize: "12px" }}>25 TA TAKLIFLAR</Typography>
                </AccordionSummary>
                <AccordionDetails className={styles.accordionDetails}>
                    <div>
                        <CollapseFilter />
                        <CollapseItem />
                        <CollapseItem />
                        <CollapseItem />
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion className={styles.container} expanded={expanded === 'panel2'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    className={styles.summary}
                >
                    <Typography sx={{ display: "flex", width: '25%', flexShrink: 0, fontSize: "12px" }}>
                        1-XONALI
                        <div style={{ marginLeft: "5px" }}>
                            <ArrowDownIcon />
                        </div>
                    </Typography>
                    <Typography sx={{ width: '25%', color: COLORS.black, fontSize: "12px" }}>21.6 M2 DAN</Typography>
                    <Typography sx={{ width: '25%', color: COLORS.black, fontSize: "12px" }}>6.3 - 8.7 MLN $ DAN</Typography>
                    <Typography sx={{ width: '25%', color: COLORS.purple, textAlign: "end", fontSize: "12px" }}>25 TA TAKLIFLAR</Typography>
                </AccordionSummary>
                <AccordionDetails className={styles.accordionDetails}>
                    <div>
                        <CollapseFilter />
                        <CollapseItem />
                        <CollapseItem />
                        <CollapseItem />
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion className={styles.container} expanded={expanded === 'panel3'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    className={styles.summary}
                >
                    <Typography sx={{ display: "flex", width: '25%', flexShrink: 0, fontSize: "12px" }}>
                        1-XONALI
                        <div style={{ marginLeft: "5px" }}>
                            <ArrowDownIcon />
                        </div>
                    </Typography>
                    <Typography sx={{ width: '25%', color: COLORS.black, fontSize: "12px" }}>21.6 M2 DAN</Typography>
                    <Typography sx={{ width: '25%', color: COLORS.black, fontSize: "12px" }}>6.3 - 8.7 MLN $ DAN</Typography>
                    <Typography sx={{ width: '25%', color: COLORS.purple, textAlign: "end", fontSize: "12px" }}>25 TA TAKLIFLAR</Typography>
                </AccordionSummary>
                <AccordionDetails className={styles.accordionDetails}>
                    <div>
                        <CollapseFilter />
                        <CollapseItem />
                        <CollapseItem />
                        <CollapseItem />
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion className={styles.container} expanded={expanded === 'panel4'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    // expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    className={styles.summary}
                >
                    <Typography sx={{ display: "flex", width: '25%', flexShrink: 0, fontSize: "12px" }}>
                        1-XONALI
                        <div style={{ marginLeft: "5px" }}>
                            <ArrowDownIcon />
                        </div>
                    </Typography>
                    <Typography sx={{ width: '25%', color: COLORS.black, fontSize: "12px" }}>21.6 M2 DAN</Typography>
                    <Typography sx={{ width: '25%', color: COLORS.black, fontSize: "12px" }}>6.3 - 8.7 MLN $ DAN</Typography>
                    <Typography sx={{ width: '25%', color: COLORS.purple, textAlign: "end", fontSize: "12px" }}>25 TA TAKLIFLAR</Typography>
                </AccordionSummary>
                <AccordionDetails className={styles.accordionDetails}>
                    <div>
                        <CollapseFilter />
                        <CollapseItem />
                        <CollapseItem />
                        <CollapseItem />
                    </div>
                </AccordionDetails>
            </Accordion>
            {/* <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        You are currently not an owner
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                        varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                        laoreet.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Advanced settings
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Filtering has been entirely disabled for whole web server
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion> */}
        </>
    )
}

export default Collapse
