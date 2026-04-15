export type Technology = {
    id: string;
    name: string;
    knowledge: number;
};

type TechnologyCardProps =
{
    tech: Technology;
    onDelete: (id: string) => void;
    onEdit: (tech: Technology) => void;
}

export const TechnologyCard = ({ tech, onDelete, onEdit }: TechnologyCardProps) => {

    const dynamicSize = 3 + (tech.knowledge / 10) * 4;

    return (
        // Fehér háttér, finom árnyék, kerekítés - pont mint a képen a sulis kártyák
        <div className="bg-white flex items-center justify-between p-6 rounded-2xl shadow-sm hover:shadow-md border-gray-100 transition-all">

            <div className="flex flex-col gap-2 w-full pr-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900">
                        {tech.name}
                    </h1>
                    <p className="text-slate-500 text-sm mt-1">
                        Tudásszint: <span className="font-medium text-sky-600">{tech.knowledge} / 10</span>
                    </p>
                </div>

                <div className="flex gap-2 mt-3">
                    <button onClick={() => onEdit(tech)}
                        className="border border-grey-100 text-gray-600 hover:border-sky-400 hover:text-sky-600 font-medium py-1 px-4
                        rounded-full text-sm transition-colors">Szerkeszt</button>
                    <button onClick={() => onDelete(tech.id)}
                        className="border border-grey-100 text-gray-600 hover:border-red-400 hover:text-red-600 font-medium py-1 px-4
                        rounded-full text-sm transition-colors"
                    >Töröl</button>
                </div>
            </div>

            <div className="bg-sky-500 text-white rounded-full flex items-center justify-center font-bold shadow-sm flex-shrink-0"
                style={{
                    width: `${dynamicSize}rem`,
                    height: `${dynamicSize}rem`,
                    fontSize: `${dynamicSize / 3}rem`
                }}>{tech.knowledge}
            </div>

        </div>
    );
};