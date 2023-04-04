import {Link} from 'react-router-dom';

function ForgetPass() {
    return (
      <>
      You forgot your password you poor soul.
      <br></br>
      Please remember it.
      <br></br>
      Or,
      <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>

      </>
    );
  }
  
  export default ForgetPass;