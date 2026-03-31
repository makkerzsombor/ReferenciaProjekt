type CardProps =
    {
        title: string;
        description: string;
        imgUrl:string;
        imgAlt:string;
    }

export const Card = ({title, description, imgUrl, imgAlt}: CardProps) =>
{
    return(
        <div className="bg-blue-100 flex items-center justify-between p-6 m-4 rounded-md shadow-xl max-w-2xl border-2 border-sky-700">
            <div className="flex flex-col gap-2 pr-2">
                <h1 className="text-sky-700 text-2xl font-bold">{title}</h1>
                <p className="text-sky-700 text-base leading-relaxed">{description}</p>
            </div>
            <img src={imgUrl} alt={imgAlt} className="float-right m-2.5 max-w-1/5 max-w-20"/>
        </div>
    )
}