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
        <div className="relative pl-10 pb-12 last:pb-0 group">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-sky-200 group-last:h-6"></div>

            <div className="absolute -left-[7px] top-1.5 h-4 w-4 rounded-full bg-white border-2 border-sky-400 transition
             group-hover:border-sky-600 group-hover:bg-sky-600 delay-100 duration-200 shadow-sm"></div>

            <div className="flex flex-col gap-2">
                <p className="text-sm font-bold text-sky-600 bg-sky-50 px-3 py-1 rounded-xl w-fit border-1 border-sky-100">
                    {startDate} — {endDate ? endDate : "Jelenleg"}</p>

                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg">
                    <h3 className="text-2xl font-extrabold text-slate-800 uppercase">{schoolName}</h3>
                    {/*Leírás ellenőrzés*/}
                    {description && (<p className="mt-4 text-slate-600 text-base border-l-4 border-sky-100 pl-4">{description}</p>)}

                    <div className="mt-6 flex flex-wrap gap-2">
                        {achievements.map((item, index) => (
                            <span key={index} className="inline-flex items-center rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-sky-800 border-1
                                border-sky-200 hover:bg-sky-50">{item}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}