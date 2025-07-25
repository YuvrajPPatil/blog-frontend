export default function Footer(){
    return(
        <footer className="bg-gray-100 text-center text-sm py-4 mt-auto text-gray-600">
            &copy; {new Date().getFullYear()} MyBlog. All rights reserved.
        </footer>
    );
}