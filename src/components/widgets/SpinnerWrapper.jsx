import Spinner from 'react-bootstrap/Spinner';

function SpinnerWrapper() {
  return (
    <div style={{display:'flex',height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
      <Spinner animation="border" variant="primary" />
    </div>
  );
}

export default SpinnerWrapper;