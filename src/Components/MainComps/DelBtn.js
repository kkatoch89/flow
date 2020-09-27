import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const DelBtn = (props) => {
	return <FontAwesomeIcon icon={faTrashAlt} onClick={props.delClick} />;
};

export default DelBtn;
