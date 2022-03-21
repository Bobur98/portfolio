import React, { useEffect } from 'react';
import { Container, Skills, SkillName, SkillBar, SkillPer } from './style';
import { knowledgeLevel } from '../../mock/knowledgeLevel';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function KnowledgeLevel() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container>
      <Skills className="skills">
        {knowledgeLevel.map((value, id) => (
          <div className="skill" key={id}>
            <SkillName className="skill-name">
              {value.title}
              <SkillBar className="skill-bar">
                <SkillPer
                  className="skill-per"
                  per={value.per}
                  style={{ maxWidth: `${value.per}%` }}
                ></SkillPer>
              </SkillBar>
            </SkillName>
          </div>
        ))}
      </Skills>
    </Container>
  );
}
