export default function Footer (){
    return (
        <footer className="d-flax flex-wrap justify-content-between align-item-center py-3 my-4 border-top">

           <p classname="col-md-4 mb-0 text-body-secondary">
              &copy; 2023 Donate Cripto, Inc. 
           </p>
           <ul className="nav col-md-4 justify-content-end">
             <li className="nav-item">
                <a href="/" className="nav-link px-2 text-body-secondary">Home</a>
             </li>
             <li className="nav-item"> 
                <a href="/create" className="nav-link px-2 text-body-seconday">Nova campanha</a>
             </li>
             <li class="nav-item">
                <a href="/about" className="nav-link px-2 text-body-seconday">Doar</a>
             </li>
           </ul>

        </footer>
    )
}