import React, { useState, useEffect } from 'react';
import CustomCard3 from '../../Card-wrapper/CustomCard3';
import ButtonInCard from '../../Button-in-card/Button-in-card'
import { projectData } from './ProjectData';
import GitLogo from '../../../assets/GitHub-Mark-64px.png';
import Modal from '../../Modal/Modal';
import LinkIcon from '../../../assets/iconfinder-link.svg';
import './Projects.css';

const Projects = ({ title, id, cardNum, scrollTheRoot }) => {
	const [isModalOpen, openTheModal] = useState(false);
	const [keyNum, modalNo] = useState(null);

	useEffect(() => {
		if (isModalOpen) {
			scrollTheRoot(true)
		}
		return () => {
			scrollTheRoot(false)
		};
	}, [isModalOpen, scrollTheRoot])


	const modalHandler = (index) => {
		modalNo(index);
		openTheModal(true);
	}

	return (
		<CustomCard3 id={id} cardNum={cardNum} title={title}>
			<h3 className="projectSubtitle">
				On a side note, be sure to <span className="projectSideNote">run the backend server links (if provided) first</span>
				{` `}before running the frontend project, in case you're checking them out.
				</h3>
			<div className="projectsPillParent">
				{
					projectData.map((el, index) => {
						return (
							<div className="projectsPillMother"
								key={index}
								title={title}
								onClick={() => modalHandler(index)}
								text={'adfad'}>
								<img
									src={el.imageUrl}
									alt="project-name"
									className={index !== 6 ? `projectsImage` : 'mobileImage'} />
								<span className="projectsPill">{el.projectName}</span>
							</div>
						)
					})
				}
				{
					isModalOpen &&
					<Modal>
						{
							projectData.map((el, index) => {
								let modal = '';
								if (index === keyNum) {
									return (
										modal =
										<div key={index} className="project-modal">
											<article className="responsive">
												<main className="main">
													<div className="modalGrid">
														<div className="modalRow1">
															{el.projectName}
														</div>
														<div className="modalRow2">
															{el.description}
														</div>
														<div className="modalRow3">
															{
																el.siteLink &&
																<div className="modalRow3LinkLogoWrapper" onClick={() => window.open(el.siteLink)}>
																	<span className="modalRow3SpanLink">View Site</span>
																	<img width="auto" height="24px" src={LinkIcon} alt="GitHub" />
																</div>
															}
															{
																el.gitHubLink &&
																<div className="modalRow3LinkLogoWrapper" onClick={() => window.open(el.gitHubLink)}>
																	<span className="modalRow3SpanLink">GitHub Repo</span>
																	<img width="auto" height="28px" src={GitLogo} alt="GitHub" />
																</div>
															}
															{
																el.siteBackendLink &&
																<div className="modalRow3LinkLogoWrapper" onClick={() => window.open(el.siteBackendLink)}>
																	<span className="modalRow3SpanLink">Backend Site</span>
																	<img width="auto" height="24px" src={LinkIcon} alt="GitHub" />
																</div>
															}
															{
																el.gHBackendLink &&
																<div className="modalRow3LinkLogoWrapper" onClick={() => window.open(el.gHBackendLink)}>
																	<span className="modalRow3SpanLink">Backend Repo</span>
																	<img width="auto" height="28px" src={GitLogo} alt="GitHub" />
																</div>
															}
														</div>
													</div>
												</main>
												<div className="modal-close" onClick={() => openTheModal(false)}>&times;</div>
											</article>

										</div>
									)
								}
								return modal
							})
						}
					</Modal>
				}
			</div>
			<ButtonInCard nextCardName='contact' bgColor='pink' />
		</CustomCard3>
	);
}

export default Projects;