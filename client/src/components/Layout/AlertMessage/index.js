import Alert from 'react-bootstrap/Alert';
import classNames from 'classnames/bind';

import style from './AlertMessage.module.scss';

const cx = classNames.bind(style);

function AlertMessage({ info }) {
    return info === null ? null : (
        <Alert className={cx('alert-message')} variant={info.type}>
            {info.message}
        </Alert>
    );
}

export default AlertMessage;
