export default function BlogLayout({children}:{children:React.ReactNode}){
    return(
        <div className="blog-layout">
            <h1 className="text-2xl font-bold mb-4">Blog Section</h1>
            {children}
        </div>
    );
}