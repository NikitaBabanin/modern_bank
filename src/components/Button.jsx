import {Link} from 'react-router-dom';

const Button = ({styles, title, to}) => (
    <Link to={to} type="button" className={styles}>
        {title}
    </Link>
);

export default Button
