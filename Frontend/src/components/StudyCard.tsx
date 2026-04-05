type StudyProps =
    {
        schoolName: string;
        startDate: string;
        endDate?: string;
        description?: string;
        achievements: string[];
    }


export const StudyCard = ({schoolName, startDate, endDate, description, achievements}: StudyProps) => {
    return (
        <div>
            <h1>{schoolName}</h1>
            <h3>Évszámok:</h3>
            <p>{startDate} - {endDate}</p>
            <p>{description}</p> {/*Ez nem kötelező*/}
            <ul>
            {achievements.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>
        </div>
    )
}