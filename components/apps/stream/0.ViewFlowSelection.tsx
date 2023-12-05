import React from 'react';
import IconSquarePlus from 'components/icons/IconSquarePlus';
import CardWithIcon from '@common/CardWithIcon';
import ViewSectionHeading from '@common/ViewSectionHeading';

import {Step, useStream} from './useStream';

import type {ReactElement} from 'react';

function ViewFlowSelection(): ReactElement {
	const {currentFlow, set_currentFlow, set_currentStep} = useStream();

	return (
		<section>
			<div className={'box-0 grid w-full grid-cols-12 overflow-hidden'}>
				<ViewSectionHeading
					title={'Halt. State your business anon.'}
					content={'Want to check an existing stream or create a new one?'}
				/>

				<div className={'col-span-12 p-4 pt-0 md:p-6 md:pt-0'}>
					<div className={'col-span-6 grid gap-4 md:grid-cols-12 md:gap-6'}>
						<div className={'relative col-span-6'}>
							<CardWithIcon
								isSelected={currentFlow === 'CHECK'}
								icon={
									<svg
										xmlns={'http://www.w3.org/2000/svg'}
										height={'16'}
										width={'18'}
										viewBox={'0 0 576 512'}>
										<path
											d={
												'M64 96c-17.7 0-32 14.3-32 32V384c0 17.7 14.3 32 32 32H512c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H64zM0 128C0 92.7 28.7 64 64 64H512c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM272 288H464c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16-80c0-8.8 7.2-16 16-16H464c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16zm-96-56v17.3c8.5 1.2 16.7 3.1 24.1 5.1c8.5 2.3 13.6 11 11.3 19.6s-11 13.6-19.6 11.3c-11.1-3-22-5.2-32.1-5.3c-8.4-.1-17.4 1.8-23.6 5.5c-5.7 3.4-8.1 7.3-8.1 12.8c0 3.7 1.3 6.5 7.3 10.1c6.9 4.1 16.6 7.1 29.2 10.9l.5 .1 0 0 0 0c11.3 3.4 25.3 7.6 36.3 14.6c12.1 7.6 22.4 19.7 22.7 38.2c.3 19.3-9.6 33.3-22.9 41.6c-7.7 4.8-16.4 7.6-25.1 9.1V360c0 8.8-7.2 16-16 16s-16-7.2-16-16V342.2c-11.2-2.1-21.7-5.7-30.9-8.9l0 0c-2.1-.7-4.2-1.4-6.2-2.1c-8.4-2.8-12.9-11.9-10.1-20.2s11.9-12.9 20.2-10.1c2.5 .8 4.8 1.6 7.1 2.4l0 0 0 0 0 0c13.6 4.6 24.6 8.4 36.3 8.7c9.1 .3 17.9-1.7 23.7-5.3c5.1-3.2 7.9-7.3 7.8-14c-.1-4.6-1.8-7.8-7.7-11.6c-6.8-4.3-16.5-7.4-29-11.2l-1.6-.5 0 0 0 0c-11-3.3-24.3-7.3-34.8-13.7c-12-7.2-22.6-18.9-22.7-37.3c-.1-19.4 10.8-32.8 23.8-40.5c7.5-4.4 15.8-7.2 24.1-8.7V152c0-8.8 7.2-16 16-16s16 7.2 16 16z'
											}
											fill={'currentColor'}
										/>
									</svg>
								}
								label={'Check my streams'}
								onClick={(): void => {
									set_currentFlow('CHECK');
									set_currentStep(Step.CONFIGURATION);
									document
										?.getElementById('configuration')
										?.scrollIntoView({behavior: 'smooth', block: 'center'});
								}}
							/>
						</div>
						<div className={'relative col-span-6'}>
							<CardWithIcon
								isSelected={currentFlow === 'CREATE'}
								icon={<IconSquarePlus />}
								label={'Create a new stream'}
								onClick={(): void => {
									set_currentFlow('CREATE');
									set_currentStep(Step.CONFIGURATION);
									document
										?.getElementById('configuration')
										?.scrollIntoView({behavior: 'smooth', block: 'center'});
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ViewFlowSelection;
