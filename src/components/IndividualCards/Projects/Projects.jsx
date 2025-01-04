import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomCard3 from "../../Card-wrapper/CustomCard3";
import ButtonInCard from "../../Button-in-card/Button-in-card";
import GitLogo from "../../../assets/GitHub-Mark-64px.png";
import Modal from "../../Modal/Modal";
import { RemoveScroll } from "react-remove-scroll";
import LinkIcon from "../../../assets/iconfinder-link.svg";
import {
  fetchProjects,
  selectProjects,
} from "@/redux/projects/projects.reducer";
import "./Projects.css";

const Projects = ({ title, id, cardNum }) => {
  const [isModalOpen, openTheModal] = useState(false);
  const [modalId, setModalId] = useState(null);
  const dispatch = useDispatch();
  const projectsData = useSelector(selectProjects);
  const { status, error } = useSelector((state) => state.projects);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProjects());
    }
  }, [status, dispatch]);

  const modalHandler = (index) => {
    setModalId(index);
    openTheModal(true);
  };

  if (status === "loading") {
    return (
      <CustomCard3 id={id} cardNum={cardNum} title={title}>
        <div>Loading projects...</div>
      </CustomCard3>
    );
  }

  if (status === "failed") {
    return (
      <CustomCard3 id={id} cardNum={cardNum} title={title}>
        <div>Error loading projects: {error}</div>
      </CustomCard3>
    );
  }

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
        {projectsData.map((el, index) => {
          return (
            <div
              className="projectsPillMother"
              key={index}
              title={title}
              onClick={() => modalHandler(index)}
            >
              <img
                src={`https://res.cloudinary.com/dun1b4fpw/image/upload/f_auto,q_auto,w_auto/v1574951670/portfolioapp/${el.image_name}`}
                alt="project-name"
                className={index !== 6 ? `projectsImage` : "mobileImage"}
              />
              <span className="projectsPill">{el.project_name}</span>
            </div>
          );
        })}
        {projectsData.map((el, index) => {
          return (
            index === modalId &&
            isModalOpen && (
              <Modal key={index}>
                <div className="project-modal">
                  <article className="responsive">
                    <RemoveScroll>
                      <main className="main">
                        <div className="modalRow1">{el.project_name}</div>
                        <div className="modalRow2">{el.description}</div>
                        <div className="modalRow3">
                          {el.frontend_site_link && (
                            <div
                              className="modalRow3LinkLogoWrapper"
                              onClick={() => window.open(el.frontend_site_link)}
                            >
                              <a
                                href={`${el.frontend_site_link}`}
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
                          {el.frontend_github_link && (
                            <div
                              className="modalRow3LinkLogoWrapper github-link"
                              onClick={() => window.open(el.frontend_github_link)}
                            >
                              <a
                                href={`${el.frontend_github_link}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modalRow3SpanLink"
                              >
                                Frontend Code
                              </a>
                              <img
                                width="auto"
                                height="28px"
                                src={GitLogo}
                                alt="GitHub"
                              />
                            </div>
                          )}
                          {el.backend_site_link && (
                            <div
                              className="modalRow3LinkLogoWrapper"
                              onClick={() => window.open(el.backend_site_link)}
                            >
                              <a
                                href={`${el.backend_site_link}`}
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
                          {el.backend_github_link && (
                            <div
                              className="modalRow3LinkLogoWrapper github-link"
                              onClick={() => window.open(el.backend_github_link)}
                            >
                              <a
                                href={`${el.backend_github_link}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modalRow3SpanLink"
                              >
                                Backend Code
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
