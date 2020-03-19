import React, { useState } from 'react';
import CustomCard3 from '../../Card-wrapper/CustomCard3';
import ButtonInCard from '../../Button-in-card/Button-in-card'
import { projectData } from './ProjectData';
import GitLogo from '../../../assets/GitHub-Mark-64px.png';
import Modal from '../../Modal/Modal';
import { RemoveScroll } from 'react-remove-scroll';
import LinkIcon from '../../../assets/iconfinder-link.svg';
import './Projects.css';

const Projects = ({ title, id, cardNum, scrollTheRoot }) => {
	const [isModalOpen, openTheModal] = useState(false);
	const [modalId, setModalId] = useState(null)

	console.log(isModalOpen, modalId)

	const modalHandler = (index) => {
		setModalId(index);
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
					projectData.map((el, index) => {
						if (index === modalId) {
							return (
								isModalOpen &&
								<Modal key={index}>
									<div className="project-modal">
										<article className="responsive">
											<RemoveScroll>
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
											</RemoveScroll>
											<div className="modal-close" onClick={() => openTheModal(false)}>&times;</div>
										</article>
									</div>
								</Modal>
							)
						}
					})
				}
			</div>
			<ButtonInCard nextCardName='contact' bgColor='pink' />
		</CustomCard3>
	);
}

export default Projects;