import { StyledLink } from './BackLink.styled';
import { HiArrowLeft } from 'react-icons/hi';

const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};

export default BackLink;