import {useState} from 'react';
import {SmolAddressInput} from 'components/designSystem/SmolAddressInput';
import {SmolTokenAmountInput} from 'components/designSystem/SmolTokenAmountInput';
import {useBalancesCurtain} from 'contexts/useBalancesCurtain';
import {useAsyncTrigger} from 'hooks/useAsyncTrigger';
import {isAddressEqual} from 'viem';
import {IconCircleCheck} from '@icons/IconCircleCheck';
import {IconCircleCross} from '@icons/IconCircleCross';
import {IconCross} from '@icons/IconCross';
import {IconSpinner} from '@icons/IconSpinner';
import {cl} from '@yearn-finance/web-lib/utils/cl';

import {SendWarning} from './SendWarning';
import {useSend} from './useSend';
import {SendWizard} from './Wizard';

import type {TInputAddressLike} from 'components/designSystem/SmolAddressInput';
import type {TSendInputElement} from 'components/designSystem/SmolTokenAmountInput';
import type {TTokenListItem} from 'pages/tokenlistooor';
import type {ReactElement} from 'react';

function SendTokenRow({input}: {input: TSendInputElement}): ReactElement {
	const {configuration, dispatchConfiguration} = useSend();

	const onSetValue = (value: Partial<TSendInputElement>): void => {
		dispatchConfiguration({type: 'SET_VALUE', payload: {...value, UUID: input.UUID}});
	};

	const onRemoveInput = (): void => {
		dispatchConfiguration({type: 'REMOVE_INPUT', payload: {UUID: input.UUID}});
	};

	const renderIcon = (): ReactElement | null => {
		if (input.status === 'pending') {
			return <IconSpinner className={'h-4 w-4'} />;
		}
		if (input.status === 'success') {
			return <IconCircleCheck className={'h-4 w-4 text-green'} />;
		}
		if (input.status === 'error') {
			return <IconCircleCross className={'h-4 w-4 text-red'} />;
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
					<IconCross className={'h-4 w-4'} />
				</button>
			)}

			<div className={iconContainerStyle}>{renderIcon()}</div>
		</div>
	);
}

export function Send(): ReactElement {
	const {configuration, dispatchConfiguration} = useSend();
	const {tokensWithBalance} = useBalancesCurtain();

	const [tokenList, set_tokenList] = useState<TTokenListItem | undefined>(undefined);

	const isReceiverERC20 = !!tokenList?.tokens.find(
		token => configuration.receiver.address && isAddressEqual(token.address, configuration.receiver.address)
	);

	useAsyncTrigger(async () => {
		const listRes = await fetch('https://raw.githubusercontent.com/SmolDapp/tokenLists/main/lists/smolAssets.json');
		const tokenListResponse = (await listRes.json()) as TTokenListItem;
		set_tokenList(tokenListResponse);
	}, []);

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
		<div className={'w-full max-w-[444px]'}>
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
					className={cl(
						'rounded-lg bg-neutral-200 px-3 py-1 text-neutral-700 transition-colors hover:bg-neutral-300 text-xs',
						'disabled:cursor-not-allowed disabled:hover:bg-neutral-200 disabled:opacity-20'
					)}
					onClick={onAddToken}
					disabled={tokensWithBalance.length === configuration.inputs.length}>
					{'+Add token'}
				</button>
			</div>
			<SendWarning isReceiverERC20={isReceiverERC20} />
			<SendWizard isReceiverERC20={isReceiverERC20} />
		</div>
	);
}