import {Link} from 'react-router-dom';

function Home() {
  return (
    <>
    <div class="btn-group">
    <button><Link to='/colleges'>Colleges</Link></button>
    <button><Link to='/jobs'>Jobs</Link></button>
</div>

    </>
  );
}

export default Home;