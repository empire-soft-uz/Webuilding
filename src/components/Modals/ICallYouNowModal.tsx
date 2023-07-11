import { BiSolidPhoneCall } from 'react-icons/bi';
import { useEscapeKey } from '../../Hooks/useEscapeKey';
import useVisibility from '../../Hooks/useVisibility';
import { ICallYouNowContainer } from './Modals.styles';
import { useCallback } from 'react';
import { useAppModals } from './ModalsProvider';

export default function ICallYouNowModal() {
	const appModals = useAppModals();

	const onCloseModal = useCallback(() => {
		appModals?.hide();
	}, [appModals]);

	useEscapeKey({
		callback: onCloseModal,
	});

	return (
		<ICallYouNowContainer
			className={
				appModals?.state.type === 'i_call_you_now' ? 'active' : 'none'
			}>
			<div className='modal'>
				<button>
					<BiSolidPhoneCall className='icon' /> +998 (91) 527-85-47
				</button>

				<div className='footer'>
					<p>свяжитесь с нами сейчас</p>
				</div>
			</div>

			<div className='cancel_window' onClick={onCloseModal} />
		</ICallYouNowContainer>
	);
}
