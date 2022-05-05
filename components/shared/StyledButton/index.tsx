import { ButtonHTMLAttributes } from "react";
import { Button } from "react-bootstrap";
import styles from './styles.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: string;
  action?: string;
  type_button: string;
  active?: boolean;
};

const StyledButton: React.FC<ButtonProps> = ({
  icon,
  action,
  type_button,
  active = false,
  ...rest
}) => {
  return (
    <Button
    className={`
    ${(type_button == "red") ? styles.red_button : styles.blue_button} 
    ${active ? 'active' : ''}
  `}
      {...rest}
    >
      {icon && <i className={`${icon + " "} ${action && " mr-2"}`} />} {action}
    </Button>
  );
};

export default StyledButton;
