import {
	arbitrum,
	aurora,
	avalanche,
	base,
	baseGoerli,
	bsc,
	celo,
	fantom,
	goerli,
	linea,
	mainnet,
	mantle,
	optimism,
	polygon,
	polygonZkEvm,
	scroll,
	zkSync,
	zora
} from 'wagmi/chains';
import {toAddress} from '@yearn-finance/web-lib/utils/address';
import {indexedWagmiChains} from '@yearn-finance/web-lib/utils/wagmi/utils';

import {gnosis} from './chains';

import type {TAddress, TNDict} from '@yearn-finance/web-lib/types';
import type {TChainContract, TExtendedChain} from '@yearn-finance/web-lib/utils/wagmi/utils';

export const MATIC_TOKEN_ADDRESS = toAddress('0x0000000000000000000000000000000000001010');
export const POLYGON_LENS_ADDRESS = toAddress('0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d');
export const ETHEREUM_ENS_ADDRESS = toAddress('0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85');

export const HEADER_HEIGHT = 64;

export const SUPPORTED_CHAINS = [
	mainnet,
	optimism,
	bsc,
	gnosis,
	polygon,
	polygonZkEvm,
	fantom,
	zkSync,
	mantle,
	base,
	arbitrum,
	celo,
	avalanche,
	linea,
	scroll,
	aurora,
	zora,
	//Testnets
	goerli,
	baseGoerli
];

export const SUPPORTED_SMOL_CHAINS = [
	mainnet,
	optimism,
	bsc,
	gnosis,
	polygon,
	polygonZkEvm,
	zkSync,
	base,
	arbitrum,
	goerli,
	baseGoerli,
	zora
];

export const SAFE_UI_BASE_URI: TNDict<string> = {
	1: 'https://app.safe.global/home?safe=eth:',
	10: 'https://app.safe.global/home?safe=oeth:',
	56: 'https://app.safe.global/home?safe=bnb:',
	100: 'https://app.safe.global/home?safe=gno:',
	137: 'https://app.safe.global/home?safe=matic:',
	250: 'https://safe.fantom.network/home?safe=ftm:',
	1101: 'https://app.safe.global/home?safe=zkevm:',
	5000: 'https://multisig.mantle.xyz/home?safe=mantle:',
	8453: 'https://app.safe.global/home?safe=base:',
	42161: 'https://app.safe.global/home?safe=arb1:',
	42220: 'https://app.safe.global/home?safe=celo:',
	43114: 'https://app.safe.global/home?safe=avax:',
	59144: 'https://safe.linea.build/home?safe=linea:',
	534352: 'https://safe.scroll.xyz/home?safe=scr:',
	1313161554: 'https://app.safe.global/home?safe=aurora:',
	7777777: 'https://safe.optimism.io/home?safe=zora:'
};

export const SUPPORTED_CHAIN_IDS: TNDict<string> = {
	1: 'Ethereum',
	10: 'Optimism',
	56: 'Binance Smart Chain',
	100: 'Gnosis',
	137: 'Polygon',
	// 250: 'Fantom',
	324: 'zkSync',
	1101: 'Polygon ZKEVM',
	8453: 'Base',
	42161: 'Arbitrum',
	43114: 'Avalanche',
	7777777: 'Zora'
};

export const NFTMIGRATOOOR_CONTRACT_PER_CHAIN: TNDict<TAddress> = {
	1: toAddress('0x100CCFF9117E168158a6BE35081694fBbe394fBB'),
	10: toAddress('0x6dfd3a052bb73e609d9c2381dc48de5e2662575e'),
	56: toAddress('0x0fcDe4444ac4f595Dd802e0e872D11D4B28a0b06'),
	100: toAddress('0xC813978A4c104250B1d2bC198cC7bE74b68Cd81b'),
	137: toAddress('0x0e5b46E4b2a05fd53F5a4cD974eb98a9a613bcb7'),
	250: toAddress('0x291F9794fFB8Cd1F71CE5478E40b5E29a029dbE9'),
	324: toAddress('0xe35Ce1fE716C2D4B677D7218eAdB0561E9b9fA90'),
	1101: toAddress('0xA3a3C48F1d5191968D3dEF7A5aE4c860589Bf380'),
	8453: toAddress('0x101CBC599d01e90D21fc925c8222248863e3b6eA'),
	42161: toAddress('0x7E08735690028cdF3D81e7165493F1C34065AbA2'),
	7777777: toAddress('0x4EE0b0d630ad74b28e44e2caBc6C45582967f6c6')
};

export const DISPERSE_CONTRACT_PER_CHAIN: TNDict<TAddress> = {
	[mainnet.id]: toAddress('0xD152f549545093347A162Dce210e7293f1452150'),
	[optimism.id]: toAddress('0xD152f549545093347A162Dce210e7293f1452150'),
	[bsc.id]: toAddress('0xD152f549545093347A162Dce210e7293f1452150'),
	[gnosis.id]: toAddress('0xD152f549545093347A162Dce210e7293f1452150'),
	[polygon.id]: toAddress('0xD152f549545093347A162Dce210e7293f1452150'),
	[fantom.id]: toAddress('0xD152f549545093347A162Dce210e7293f1452150'),
	[zkSync.id]: toAddress('0xD152f549545093347A162Dce210e7293f1452150'),
	[polygonZkEvm.id]: toAddress('0xD152f549545093347A162Dce210e7293f1452150'),
	[mantle.id]: toAddress('0xC813978A4c104250B1d2bC198cC7bE74b68Cd81b'),
	[base.id]: toAddress('0xD152f549545093347A162Dce210e7293f1452150'),
	[arbitrum.id]: toAddress('0xD152f549545093347A162Dce210e7293f1452150'),
	[celo.id]: toAddress('0xD152f549545093347A162Dce210e7293f1452150'),
	[avalanche.id]: toAddress('0xD152f549545093347A162Dce210e7293f1452150'),
	[linea.id]: toAddress('0xe025e5B1c61FD98e33F02caC811469664A81b4BD'),
	[scroll.id]: toAddress('0x38a9C84bAaf727F8E09deF72C4Dc224fEFf2028F'),
	[zora.id]: toAddress('0xF7D540b9d4b94a24389802Bcf2f6f02013d08142'),
	[aurora.id]: toAddress('0xe025e5B1c61FD98e33F02caC811469664A81b4BD')
};

const SAFE_API_URI: {[chainId: number]: string} = {
	1: 'https://safe-transaction-mainnet.safe.global',
	5: 'https://safe-transaction-goerli.safe.global',
	10: 'https://safe-transaction-optimism.safe.global',
	56: 'https://safe-transaction-bsc.safe.global',
	100: 'https://safe-transaction-gnosis-chain.safe.global',
	137: 'https://safe-transaction-polygon.safe.global',
	324: 'https://safe-transaction-zksync.safe.global',
	8453: 'https://safe-transaction-base.safe.global',
	84531: 'https://safe-transaction-base.safe.global',
	42161: 'https://safe-transaction-arbitrum.safe.global'
};

export const coingeckoGasCoinIDs: TNDict<string> = {
	1: 'ethereum',
	10: 'ethereum',
	56: 'binancecoin',
	100: 'xdai',
	137: 'matic-network',
	250: 'fantom',
	324: 'ethereum',
	8453: 'ethereum',
	42161: 'ethereum',
	7777777: 'ethereum'
};

export type TAppExtendedChain = TExtendedChain & {
	safeApiUri?: string;
	coingeckoGasCoinID: string;
	contracts: {
		nftMigratooorContract?: TChainContract;
	};
};
for (const chain of Object.values(indexedWagmiChains)) {
	if (!chain || typeof chain !== 'object' || !chain.id) {
		continue;
	}
	const extendedChain = chain as TAppExtendedChain;
	extendedChain.contracts = {
		...chain.contracts,
		nftMigratooorContract: {
			address: NFTMIGRATOOOR_CONTRACT_PER_CHAIN[chain.id],
			blockCreated: 0 //not important
		}
	};
	extendedChain.safeApiUri = SAFE_API_URI?.[chain.id] || '';
	extendedChain.coingeckoGasCoinID = coingeckoGasCoinIDs?.[chain.id] || 'ethereum';
}
