type CardProps =
    {
        name: string;
        description: string;
        expertise: number;
    }

export const SkillCard = ({name, description, expertise}: CardProps) =>
{
    return(
        <div className="bg-blue-100 flex items-center justify-between p-6 m-4 rounded-md shadow-xl border-2 border-sky-700">
            <div className="flex flex-col gap-2 pr-2">
                <h1 className="text-sky-700 text-2xl font-bold">{name}</h1>
                <p className="text-sky-700 text-base leading-relaxed">{description}</p>
                <p className="text-sky-700 text-base leading-relaxed">{expertise}</p>
            </div>
        </div>
    )
}