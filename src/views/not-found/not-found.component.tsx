import {Link} from "react-router-dom";

export default function NotFoundComponent() {
    return(
        <div className='page standard' id='not-found'>
            <h1>Are you lost ?</h1>
            <Link to="/">
                <button className='primary'>Bring me back home</button>
            </Link>
        </div>

    )
}
