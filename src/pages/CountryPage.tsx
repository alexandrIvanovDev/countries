import { useNavigate } from 'react-router-dom';

export const CountryPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>Country Card</div>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};
