type StudyProps =
    {
        schoolName: string;
        startAndEndDate: string;
        description?: string;
        achievements: string[];
    }


export const StudyCard = ({schoolName, startAndEndDate, description, achievements}: StudyProps) => {
    return (
        <div>
            <h1>{schoolName}</h1>
            <h3>Évszámok:</h3>
            <p>{startAndEndDate}</p>
            <p>{description}</p> {/*Ez nem kötelező*/}
            {achievements.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    )
}