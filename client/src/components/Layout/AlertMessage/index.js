import Alert from 'react-bootstrap/Alert';
import classNames from 'classnames/bind';

import style from './AlertMessage.module.scss';

const cx = classNames.bind(style);

function AlertMessage({ info }) {
    return info === null ? null : info.type === 'danger' ? (
        <Alert className={cx('alert-danger')} variant={info.type}>
            {info.message}
        </Alert>
    ) : (
        <Alert className={cx('alert-success')} variant={info.type}>
            {info.message}
        </Alert>
    );
}

export default AlertMessage;
