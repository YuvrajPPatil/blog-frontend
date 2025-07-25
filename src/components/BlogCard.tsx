interface BlogCardProps{
    title:string;
    description:string;
    date:string;
}

export default function BlogCard({title,description,date}:BlogCardProps){
    return(
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="text-gray-700 mb-3">{description}</p>
                <p className="text-sm text-gray-400">{date}</p>
        </div>
    );
}