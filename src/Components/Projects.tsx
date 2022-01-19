import React from 'react';
import ProjectItem from './ProjectItem';
import { ProjectItemProps } from './ProjectItem';

const Projects: React.FC = () => {

    const projectItems: ProjectItemProps[] = [
        {
            name: 'Triathlon Training Log',
            description: 'Users connect their JustTrainingLog account to Strava inorder to access insightful training data and visualization',
            image: require('../images/TrainingLog.png'),
            link: "http://justtraininglog.com",
            github: 'https://github.com/mgmer/justtraininglog',
            tech: ["react", "javascript", "html5", "css3", "mongodb", "heroku"]
        },
        {
            name: 'Personal Budgeting App',
            description: 'Tracking spending and income by catagory to understand where you money is going',
            image: require('../images/BudgetingApp.png'),
            link: "https://shielded-eyrie-13978.herokuapp.com/",
            github: 'https://github.com/Jemeline/js-budgeting',
            tech: ["react", "javascript", "html5", "css3", "mongodb", "heroku"]
        },
    ]

    return (
        <div className="flex justify-center">
            <div className="flex flex-col justify-center items-center">
                {projectItems.map(item =>
                    <ProjectItem name={item.name} description={item.description} image={item.image} link={item.link} github={item.github} tech={item.tech}/>
                )}
            </div>
        </div>
    );
}

export default Projects;