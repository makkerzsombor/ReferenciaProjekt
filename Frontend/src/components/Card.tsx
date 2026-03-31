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
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <img src={imgUrl} alt={imgAlt}/>
        </div>
    )
}