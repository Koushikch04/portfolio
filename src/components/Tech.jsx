import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { techCategories } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div className="skills-container">
      <h2 className={`${styles.sectionHeadText} text-center mb-8`}>Skills</h2>
      {techCategories.map((category, idx) => (
        <div key={idx} className="category-section">
          <h3 className="category-title">{category.category}</h3>
          <div className="category-grid">
            {category.technologies.map((technology) => (
              <div className="technology-item" key={technology.name}>
                <BallCanvas icon={technology.icon} />
                <p className="technology-name">{technology.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default SectionWrapper(Tech, "");
