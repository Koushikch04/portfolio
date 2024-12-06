import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { techCategories } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div className="skills-container">
      <h2 className={`${styles.sectionHeadText} text-center mb-12`}>Skills</h2>
      {techCategories.map((category, idx) => (
        <div key={idx} className="category-section mb-16">
          <h3 className="category-title text-secondary font-semibold text-[24px] mb-6 text-center uppercase">
            {category.category}
          </h3>
          <div className="category-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
            {category.technologies.map((technology) => (
              <div
                // className="technology-item flex flex-col items-center bg-secondary p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                key={technology.name}
              >
                <div className="w-[80px] h-[80px] flex items-center justify-center mb-4">
                  <BallCanvas icon={technology.icon} />
                </div>
                <p className="technology-name text-white text-sm font-medium text-center">
                  {technology.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
