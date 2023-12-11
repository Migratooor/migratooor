import React from 'react';

import type {ReactElement} from 'react';

export function IconWallet(props: React.SVGProps<SVGSVGElement>): ReactElement {
	return (
		<svg
			{...props}
			viewBox={'0 0 24 24'}
			fill={'none'}
			xmlns={'http://www.w3.org/2000/svg'}>
			<path
				fillRule={'evenodd'}
				clipRule={'evenodd'}
				d={
					'M3.25 5.65909C3.25 5.17007 3.64225 4.77273 4.125 4.77273H19.875C20.3582 4.77273 20.75 4.37589 20.75 3.88636C20.75 3.39684 20.3582 3 19.875 3H4.125C2.67575 3 1.5 4.19102 1.5 5.65909V18.0682C1.5 20.5157 3.45888 22.5 5.875 22.5H19.875C21.3242 22.5 22.5 21.309 22.5 19.8409V9.20455C22.5 7.73647 21.3242 6.54545 19.875 6.54545H4.125C3.64225 6.54545 3.25 6.14811 3.25 5.65909ZM18.125 20.7273V18.9545C18.125 18.6582 17.9788 18.3814 17.7354 18.217L15.5 16.7075V15.2577C16.5193 14.8925 17.25 13.9073 17.25 12.75C17.25 11.2819 16.0742 10.0909 14.625 10.0909C13.1758 10.0909 12 11.2819 12 12.75C12 13.9073 12.7307 14.8925 13.75 15.2577V17.1818C13.75 17.4782 13.8962 17.7549 14.1396 17.9193L16.375 19.4289V20.7273H9.375V17.9168C10.3943 17.5515 11.125 16.5664 11.125 15.4091C11.125 13.941 9.94925 12.75 8.5 12.75C7.05075 12.75 5.875 13.941 5.875 15.4091C5.875 16.5664 6.60567 17.5515 7.625 17.9168V20.7273H5.875C4.42537 20.7273 3.25 19.5366 3.25 18.0682V8.16675C3.52371 8.26481 3.81823 8.31818 4.125 8.31818H19.875C20.3578 8.31818 20.75 8.71552 20.75 9.20455V19.8409C20.75 20.3299 20.3578 20.7273 19.875 20.7273H18.125ZM14.625 13.6364C15.1078 13.6364 15.5 13.239 15.5 12.75C15.5 12.261 15.1078 11.8636 14.625 11.8636C14.1422 11.8636 13.75 12.261 13.75 12.75C13.75 13.239 14.1422 13.6364 14.625 13.6364ZM9.375 15.4091C9.375 15.8981 8.98275 16.2955 8.5 16.2955C8.01725 16.2955 7.625 15.8981 7.625 15.4091C7.625 14.9201 8.01725 14.5227 8.5 14.5227C8.98275 14.5227 9.375 14.9201 9.375 15.4091Z'
				}
				fill={'currentColor'}
			/>
		</svg>
	);
}
