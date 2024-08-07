import { useState } from "react";
import CustomCard3 from "../../Card-wrapper/CustomCard3";
import ButtonInCard from "../../Button-in-card/Button-in-card";
import { projectData } from "./ProjectData";
import GitLogo from "../../../assets/GitHub-Mark-64px.png";
import Modal from "../../Modal/Modal";
import { RemoveScroll } from "react-remove-scroll";
import LinkIcon from "../../../assets/iconfinder-link.svg";
import "./Projects.css";

const Projects = ({ title, id, cardNum }) => {
  const [isModalOpen, openTheModal] = useState(false);
  const [modalId, setModalId] = useState(null);

  const modalHandler = (index) => {
    setModalId(index);
    openTheModal(true);
  };

  return (
    <CustomCard3 id={id} cardNum={cardNum} title={title}>
      <h3 className="projectSubtitle">
        On a side note, be sure to{" "}
        <span className="projectSideNote">
          run the backend server links (if provided) first
        </span>
        {` `}before running the frontend project, in case you&apos;re checking
        them out.
      </h3>
      <div className="projectsPillParent">
        {projectData.map((el, index) => {
          return (
            <div
              className="projectsPillMother"
              key={index}
              title={title}
              onClick={() => modalHandler(index)}
            >
              <img
                src={el.imageUrl}
                alt="project-name"
                className={index !== 6 ? `projectsImage` : "mobileImage"}
              />
              <span className="projectsPill">{el.projectName}</span>
            </div>
          );
        })}
        {projectData.map((el, index) => {
          return (
            index === modalId &&
            isModalOpen && (
              <Modal key={index}>
                <div className="project-modal">
                  <article className="responsive">
                    <RemoveScroll>
                      <main className="main">
                        <div className="modalRow1">{el.projectName}</div>
                        <div className="modalRow2">{el.description}</div>
                        <div className="modalRow3">
                          {el.siteLink && (
                            <div
                              className="modalRow3LinkLogoWrapper"
                              onClick={() => window.open(el.siteLink)}
                            >
                              <a
                                href={`${el.siteLink}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modalRow3SpanLink"
                              >
                                View Site
                              </a>
                              <img
                                width="auto"
                                height="24px"
                                src={LinkIcon}
                                alt="GitHub"
                              />
                            </div>
                          )}
                          {el.gitHubLink && (
                            <div
                              className="modalRow3LinkLogoWrapper"
                              onClick={() => window.open(el.gitHubLink)}
                            >
                              <a
                                href={`${el.gitHubLink}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modalRow3SpanLink"
                              >
                                GitHub Repo
                              </a>
                              <img
                                width="auto"
                                height="28px"
                                src={GitLogo}
                                alt="GitHub"
                              />
                            </div>
                          )}
                          {el.siteBackendLink && (
                            <div
                              className="modalRow3LinkLogoWrapper"
                              onClick={() => window.open(el.siteBackendLink)}
                            >
                              <a
                                href={`${el.siteBackendLink}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modalRow3SpanLink"
                              >
                                Backend Site
                              </a>
                              <img
                                width="auto"
                                height="24px"
                                src={LinkIcon}
                                alt="GitHub"
                              />
                            </div>
                          )}
                          {el.gHBackendLink && (
                            <div
                              className="modalRow3LinkLogoWrapper"
                              onClick={() => window.open(el.gHBackendLink)}
                            >
                              <a
                                href={`${el.gHBackendLink}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modalRow3SpanLink"
                              >
                                Backend Repo
                              </a>
                              <img
                                width="auto"
                                height="28px"
                                src={GitLogo}
                                alt="GitHub"
                              />
                            </div>
                          )}
                        </div>
                      </main>
                    </RemoveScroll>
                    <div
                      className="modal-close"
                      onClick={() => openTheModal(false)}
                    >
                      &times;
                    </div>
                  </article>
                </div>
              </Modal>
            )
          );
        })}
      </div>
      <h3 className="projectSubtitle">More projects</h3>
      <div className="projectsPillParent">
        <p className="projectsPill2">
          <a
            href={"https://codepen.io/ytrkptl"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Find some of my projects on CodePen"}
          </a>
        </p>
        <p className="projectsPill2">
          <a
            href={"https://va-map-creator.vercel.app/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {
              "Check out this Virginia Map creator I made that allows you to download the map as an SVG file"
            }
          </a>
        </p>
      </div>
      <ButtonInCard nextCardIdAndUrl="developer" bgColor="pink" />
    </CustomCard3>
  );
};

export default Projects;
