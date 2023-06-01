import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Slide } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
import styled from 'styled-components';
import Text from '../Text/text';


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

type PropsData = {
    open: boolean;
    close: () => void;
    btn?: React.ReactNode;
    title?: string;
    children?: React.ReactNode;
}

function DialogComponent({
    open,
    close,
    title,
    children,
    btn
}: PropsData) {

    const handleClose = () => {
        close()
    };

    return (
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <Container>
                <div className={'drawerHeader'}>
                    <div className={'btnContainer'}>
                        <button className={'closeBtn'} onClick={handleClose}>
                            <ArrowBackIosIcon fontSize='small' />
                        </button>
                        <div className="btnBox">
                            {btn}
                        </div>
                    </div>
                    <Text className='title' textType='semiBold' textSize='sixteen' textColor='black' text={title} />
                </div>
                <Body>
                    {children}
                </Body>
            </Container>
        </Dialog>
    )
}

export default DialogComponent


const Container = styled.div`

    padding: 35px;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .drawerHeader {
        margin-bottom: 20px;
    }

    .btnContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .closeBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #fff;
        padding-left: 6px;
        box-shadow: 0 0 15px #ddd;
        outline: none;
        border: none;
        cursor: pointer;
    }

    .closeBtn:hover {
        background-color: #8A3FFC;
        transition: ease-in-out 0.25s;
        color: #fff;
    }

    @media (max-width: 576px) {
            padding: 30px 15px;
    }
`

const Body = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
`