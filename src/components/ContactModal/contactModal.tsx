import React from 'react'
import DrawerComponent from '../Drawer/DrawerComponent'
import styled from 'styled-components';
import useRootStore from '../../Hooks/useRootStore';
import { observer } from "mobx-react"
import InputMask from 'react-input-mask';
import axios from "axios"
import { Notifocation } from '../../Services/Notification';

const ContactModal = () => {
    const { hide, visiable } = useRootStore().visibleStore
    const { setForm, form, clearForm } = useRootStore().contactStore

    var data = {
        service_id: 'gmail',
        template_id: 'template_h1hc2b2',
        user_id: 'FEuV7bfFJHK9BHqxZ',
        template_params: {
            ...form
        }
    };

    const sendEmail = async () => {
        if (form.tel.length < 18) {
            Notifocation.error('Telefon raqamni to`liq kiriting')
            return
        }
        await axios({
            method: 'post',
            url: 'https://api.emailjs.com/api/v1.0/email/send',
            data: data,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            Notifocation.success('Sizning murojatingiz qabul qilindi, tez fursatda siz bilan bog`lanamiz')
            clearForm()
        }).catch(err => {
            Notifocation.error('Xatolik yuz berdi')
        })
        // setLoading(false)
    }
    const btnBottom = (
        <Button onClick={sendEmail}>Jo'natish</Button>
    )

    return (
        <DrawerComponent btnBottom={btnBottom}
            title="Menga qo'ng'iroq qiling"
            openDrawer={() => hide("contactModal")}
            open={visiable.contactModal}
        >
            <Container>
                <label>Ismingizni kiriting</label>
                <input
                    value={form.name}
                    onChange={(e) => setForm(e.target.value, "name")}
                    type="text" placeholder='Ism'
                />
                <label>Telefon raqamingizni kiriting</label>
                <InputMask
                    mask="+ \9\98 99 999 99 99"
                    maskChar=" "
                    alwaysShowMask={true}
                    name="tel"
                    placeholder='+998 99 030 46 32'
                    value={form.tel}
                    onChange={(e) => setForm(e.target.value, 'tel')}
                />
                <label>Izoh qoldiring</label>
                <textarea
                    placeholder='Izoh'
                    value={form.comment}
                    rows={4}
                    name="message"
                    id="message"
                    onChange={(e) => setForm(e.target.value, 'comment')}
                ></textarea>
            </Container>
        </DrawerComponent>
    )
}

export default observer(ContactModal)


const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 6px;
    label{
        font-size: 14px;
        margin: 12px 0 0 2px;
        outline: none;
    }
    input{
        border: 1px solid rgba(129, 130, 133, 0.8);
        border-radius: 8px;
        height: 40px;
        padding: 5px 10px;
        outline: none;

        &:focus{
            border: 1.5px solid #8A3FFC;
        }
    }
    textarea{
        border: 1px solid rgba(129, 130, 133, 0.8);
        border-radius: 10px;
        height: 100px;
        resize: none;
        padding: 5px 10px;  
        outline: none;
        &:focus{
            border: 1.5px solid #8A3FFC;
        }
    }
`

const Button = styled.button`
        position: absolute;
        border: none;
        width: 100%;
        height: 40px;
        background-color: #8A3FFC;
        color: #fff;
        cursor: pointer;
        bottom: 0;
`