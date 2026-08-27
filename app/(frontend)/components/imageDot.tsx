import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

type ImageDotProps = {
  active: boolean;
  onClick: () => void;
};

const ImageDot = ({ active, onClick }: ImageDotProps) => {
  return (
    <FontAwesomeIcon icon={faCircle}
      className={`text-xs cursor-pointer ${active ? 'text-light-purple' : 'text-light-border'}`}
      onClick={onClick}
    />
  );
};

export default ImageDot;