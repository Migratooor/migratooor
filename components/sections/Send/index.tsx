import {SmolAddressInput} from 'components/designSystem/SmolAddressInput';
import {SmolTokenAmountInput} from 'components/designSystem/SmolTokenAmountInput';
import {useTokenList} from '@builtbymom/web3/contexts/WithTokenList';
import {cl} from '@builtbymom/web3/utils';
import {IconCircleCheck} from '@icons/IconCircleCheck';
import {IconCircleCross} from '@icons/IconCircleCross';
import {IconCross} from '@icons/IconCross';
import {IconSpinner} from '@icons/IconSpinner';

import {SendStatus} from './SendStatus';
import {useSendFlow} from './useSendFlow';
import {SendWizard} from './Wizard';

import type {TInputAddressLike} from 'components/designSystem/SmolAddressInput';
import type {TSendInputElement} from 'components/designSystem/SmolTokenAmountInput';
import type {ReactElement} from 'react';

function SendTokenRow({input}: {input: TSendInputElement}): ReactElement {
	const {configuration, dispatchConfiguration} = useSendFlow();

	const onSetValue = (value: Partial<TSendInputElement>): void => {
		dispatchConfiguration({type: 'SET_VALUE', payload: {...value, UUID: input.UUID}});
	};

	const onRemoveInput = (): void => {
		dispatchConfiguration({type: 'REMOVE_INPUT', payload: {UUID: input.UUID}});
	};

	const renderIcon = (): ReactElement | null => {
		if (input.status === 'pending') {
			return <IconSpinner className={'size-4'} />;
		}
		if (input.status === 'success') {
			return <IconCircleCheck className={'text-green size-4'} />;
		}
		if (input.status === 'error') {
			return <IconCircleCross className={'text-red size-4'} />;
		}
		return null;
	};

	const iconContainerStyle = 'absolute -right-10 top-1/2 -translate-y-1/2';

	return (
		<div className={'relative'}>
			<SmolTokenAmountInput
				onSetValue={onSetValue}
				value={input}
			/>
			{configuration.inputs.length > 1 && input.status === 'none' && (
				<button
					className={cl(
						iconContainerStyle,
						'-right-11 p-1 text-neutral-600 transition-colors hover:text-neutral-700'
					)}
					onClick={onRemoveInput}>
					<IconCross className={'size-4'} />
				</button>
			)}

			<div className={iconContainerStyle}>{renderIcon()}</div>
		</div>
	);
}

export function Send(): ReactElement {
	const {configuration, dispatchConfiguration} = useSendFlow();
	const {tokenList} = useTokenList();
	const isReceiverERC20 = Boolean(configuration.receiver.address && tokenList[configuration.receiver.address]);

	const onAddToken = (): void => {
		dispatchConfiguration({
			type: 'ADD_INPUT',
			payload: undefined
		});
	};

	const onSetRecipient = (value: TInputAddressLike): void => {
		dispatchConfiguration({type: 'SET_RECEIVER', payload: value});
	};

	return (
		<div className={'max-w-108 w-full'}>
			<div className={'mb-6'}>
				<p className={'font-medium'}>{'Receiver'}</p>
				<SmolAddressInput
					onSetValue={onSetRecipient}
					value={configuration.receiver}
				/>
			</div>
			<div>
				<p className={'font-medium'}>{'Token'}</p>
				{configuration.inputs.map(input => (
					<div
						className={'mb-4'}
						key={input.UUID}>
						<SendTokenRow input={input} />
					</div>
				))}
			</div>
			<div className={'mb-4 '}>
				<button
					className={
						'rounded-lg bg-neutral-200 px-3 py-1 text-xs text-neutral-700 transition-colors hover:bg-neutral-300'
					}
					onClick={onAddToken}>
					{'+Add token'}
				</button>
			</div>
			<SendStatus isReceiverERC20={isReceiverERC20} />
			<SendWizard isReceiverERC20={isReceiverERC20} />
		</div>
	);
}