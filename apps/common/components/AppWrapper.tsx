import React from 'react';
import AppHeader from 'apps/common/components/Header';
import Meta from 'apps/common/components/Meta';
import thumbnailVariants from 'utils/animations';
import {AnimatePresence, motion} from 'framer-motion';

import type {AppProps} from 'next/app';
import type {ReactElement} from 'react';

function	AppWrapper(props: AppProps): ReactElement {
	const	{Component, pageProps, router} = props;

	return (
		<React.Fragment>
			<Meta />
			<AppHeader />
			<div id={'app'} className={'relative mx-auto mb-0 flex min-h-screen w-full flex-col pt-14'}>
				<AnimatePresence mode={'wait'}>
					<motion.div
						key={router.pathname}
						initial={'initial'}
						animate={'enter'}
						exit={'exit'}
						variants={thumbnailVariants}>
						<Component
							key={router.route}
							router={props.router}
							{...pageProps} />
					</motion.div>
				</AnimatePresence>
			</div>
		</React.Fragment>
	);
}

export default AppWrapper;