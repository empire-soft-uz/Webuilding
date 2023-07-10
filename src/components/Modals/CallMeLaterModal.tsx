import { useCallback } from 'react';
import { BiSolidPhoneCall, BiSolidUser } from 'react-icons/bi';
import InputMask from 'react-input-mask';
import { useEscapeKey } from '../../Hooks/useEscapeKey';
import { CallMeLaterModalContainer } from './Modals.styles';
import { useAppModals } from './ModalsProvider';

export default function CallMeLaterModal() {
	const appModals = useAppModals();

	const onCloseModal = useCallback(() => {
		appModals?.hide();
	}, [appModals]);

	useEscapeKey({
		callback: onCloseModal,
	});

	return (
		<CallMeLaterModalContainer
			className={
				appModals?.state.type === 'call_me_later' ? 'active' : 'none'
			}>
			<div className='modal'>
				<h2 className='title'>Перезвонить</h2>
				<p className='description'>
					Оставьте свои контактные данные и мы свяжемся с вами.
				</p>

				<div className='inputContainer'>
					<label>
						<BiSolidUser className='icon' />
						<input type='text' placeholder='Имя' />
					</label>
				</div>

				<div className='inputContainer'>
					<label>
						<BiSolidPhoneCall className='icon' />
						<InputMask
							mask='+\9\9\8 (\99) 999-99-99'
							maskChar='_'
							alwaysShowMask
						/>
					</label>
				</div>

				<button>Отправка</button>

				<div className='footer'>
					<p>
						Нажимая кнопку «Отправить», вы подтверждаете свое
						согласие на обработку персональных данных
					</p>
				</div>
			</div>

			<div className='cancel_window' onClick={onCloseModal} />
		</CallMeLaterModalContainer>
	);
}
