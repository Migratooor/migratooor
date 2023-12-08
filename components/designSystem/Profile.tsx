import {type ReactElement, useMemo, useState} from 'react';
import Image from 'next/image';
import {useAccount, useBalance, useConnect, useEnsAvatar, usePublicClient} from 'wagmi';
import {IconChevron} from '@icons/IconChevron';
import * as Popover from '@radix-ui/react-popover';
import {useIsMounted, useUpdateEffect} from '@react-hookz/web';
import {safeAddress} from '@utils/tools.address';
import {supportedTestNetworks} from '@utils/tools.chains';
import {useWeb3} from '@yearn-finance/web-lib/contexts/useWeb3';
import {toSafeChainID, useChainID} from '@yearn-finance/web-lib/hooks/useChainID';
import {cl} from '@yearn-finance/web-lib/utils/cl';
import {getNetwork} from '@yearn-finance/web-lib/utils/wagmi/utils';
import {Counter} from '@common/Counter';
import {ImageWithFallback} from '@common/ImageWithFallback';
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem} from '@common/Primitives/Commands';

import type {TAddress} from '@yearn-finance/web-lib/types';

export function ProfileAvatar(props: {src: string | null | undefined; isLoading: boolean}): ReactElement {
	const [imageSrc, set_imageSrc] = useState(props.src);
	const hasAvatar = useMemo(() => imageSrc !== undefined, [imageSrc]);

	useUpdateEffect((): void => {
		set_imageSrc(props.src);
	}, [props.src]);

	if (props.isLoading) {
		return <div className={'h-10 w-10 min-w-[40px] animate-pulse rounded-full bg-neutral-300'} />;
	}
	if (!hasAvatar) {
		return <div className={'h-10 w-10 min-w-[40px] rounded-full bg-neutral-200'} />;
	}
	return (
		<div className={'h-10 w-10 min-w-[40px] rounded-full bg-neutral-100'}>
			<Image
				className={'animate-fadeIn rounded-full'}
				unoptimized
				src={imageSrc || ''}
				width={40}
				height={40}
				alt={''}
				onError={() => set_imageSrc(undefined)}
			/>
		</div>
	);
}

export function ProfileAddress(props: {
	address: TAddress | undefined;
	ens: string | undefined;
	isConnecting: boolean;
}): ReactElement {
	const isMounted = useIsMounted();

	if (!isMounted() || props.isConnecting) {
		return (
			<div className={'grid w-full gap-2'}>
				<div className={'h-4 w-full animate-pulse rounded-lg bg-neutral-300'} />
				<div className={'h-4 w-2/3 animate-pulse rounded-lg bg-neutral-300'} />
			</div>
		);
	}

	return (
		<div className={'grid w-full gap-2'}>
			<b className={'text-base leading-4'}>
				{safeAddress({address: props.address, ens: props.ens, addrOverride: 'Your Wallet'})}
			</b>
			<p className={'text-xs text-neutral-400'}>{safeAddress({address: props.address})}</p>
		</div>
	);
}

export function Profile(): ReactElement {
	const {address, ens} = useWeb3();
	const {isConnecting, isReconnecting} = useAccount();
	const {data: avatar, isLoading: isLoadingAvatar} = useEnsAvatar({chainId: 1, name: ens});

	return (
		<div className={'flex gap-2'}>
			<ProfileAvatar
				isLoading={isLoadingAvatar || isConnecting || isReconnecting}
				src={avatar}
			/>
			<ProfileAddress
				isConnecting={isConnecting || isReconnecting}
				address={address}
				ens={ens}
			/>
		</div>
	);
}

export function NetworkSelector(): ReactElement {
	const isMounted = useIsMounted();
	const {onSwitchChain} = useWeb3();
	const publicClient = usePublicClient();
	const {connectors} = useConnect();
	const safeChainID = toSafeChainID(publicClient?.chain.id, Number(process.env.BASE_CHAINID));
	type TNetwork = {value: number; label: string};

	const supportedNetworks = useMemo((): TNetwork[] => {
		const injectedConnector = connectors.find((e): boolean => e.id.toLocaleLowerCase() === 'injected');
		if (injectedConnector) {
			const chainsForInjected = injectedConnector.chains;
			const testnet = supportedTestNetworks;

			return chainsForInjected
				.filter(({id}): boolean => {
					if (testnet.find((network): boolean => network.id === id)) {
						return false;
					}
					return true;
				})
				.map((network): TNetwork => ({value: network.id, label: network.name}));
		}
		return supportedNetworks.map((network): TNetwork => network);
	}, [connectors]);

	const currentNetwork = useMemo(
		(): TNetwork | undefined => supportedNetworks.find((network): boolean => network.value === safeChainID),
		[safeChainID, supportedNetworks]
	);

	const [isOpen, set_isOpen] = useState(false);
	return (
		<Popover.Root
			open={isOpen}
			onOpenChange={set_isOpen}>
			<Popover.Trigger asChild>
				<button
					role={'combobox'}
					aria-expanded={isOpen}
					className={cl(
						'flex w-full items-center justify-between rounded-lg p-2',
						'bg-neutral-100 hover:bg-neutral-200 transition-colors'
					)}>
					<p className={'truncate text-xs'}>
						{isMounted() && currentNetwork?.label ? currentNetwork?.label : 'Select chain...'}
					</p>
					<IconChevron className={'h-4 w-4 rotate-90 text-neutral-900'} />
				</button>
			</Popover.Trigger>

			<Popover.Content
				style={{boxShadow: 'rgba(36, 40, 51, 0.08) 0px 0px 20px 8px'}}
				className={'PopoverContent z-10 rounded-lg bg-primary-0 p-0'}>
				<Command>
					<CommandInput placeholder={'Search chain...'} />
					<CommandEmpty>{'No chain found.'}</CommandEmpty>
					<CommandGroup>
						{supportedNetworks.map(network => (
							<CommandItem
								key={network.value}
								value={network.label}
								className={cl(
									'cursor-pointer bg-neutral-0 p-0 transition-colors hover:bg-neutral-200',
									currentNetwork?.value === network.value ? 'bg-neutral-200' : ''
								)}
								onSelect={selectedNetwork => {
									if (selectedNetwork === currentNetwork?.label) {
										return;
									}
									const chain = supportedNetworks.find(
										network => network.label.toLowerCase() === selectedNetwork
									);
									console.warn(supportedNetworks, selectedNetwork, chain);
									onSwitchChain(chain?.value || 1);
									set_isOpen(false);
								}}>
								<ImageWithFallback
									width={16}
									height={16}
									className={'mr-2'}
									alt={network.label}
									src={`${process.env.SMOL_ASSETS_URL}/chain/${network.value}/logo-32.png`}
								/>
								{network.label}
							</CommandItem>
						))}
					</CommandGroup>
				</Command>
			</Popover.Content>
		</Popover.Root>
	);
}

export function CoinBalance(): ReactElement {
	const isMounted = useIsMounted();
	const {address} = useWeb3();
	const {chainID} = useChainID();
	const currentChain = getNetwork(chainID || 1).nativeCurrency;
	const {data: balance} = useBalance({chainId: chainID || 1, address});

	if (!isMounted()) {
		return (
			<div>
				<small className={'text-xxs'}>{'Coin'}</small>
				<div className={'h-8 w-2/3 animate-pulse rounded-md bg-neutral-100'} />
			</div>
		);
	}
	return (
		<div>
			<small className={'text-xxs'}>{currentChain.symbol || 'ETH'}</small>
			<strong>
				<Counter
					className={'text-base leading-8'}
					value={Number(balance?.formatted || 0)}
					decimals={6}
				/>
			</strong>
		</div>
	);
}

export function NavProfile(): ReactElement {
	return (
		<section className={'p-4'}>
			<Profile />

			<hr className={'mb-2 mt-4 text-neutral-50'} />

			<div className={'grid grid-cols-2 gap-6'}>
				<div>
					<small className={'text-xxs'}>{'Chain'}</small>
					<NetworkSelector />
				</div>
				<CoinBalance />
			</div>
		</section>
	);
}