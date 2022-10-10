import React from 'react';
import ArrowRightIcon from '@mui/icons-material/NavigateNextOutlined';
import styles from './SideComments.module.scss';
import { CommentItem } from './CommentItem';
import clsx from 'clsx';

export const SideComments = () => {
  const [visible, setVisible] = React.useState(true);

  const toggleVisible = () => {
    setVisible(!visible);
  };
  return (
    <div className={clsx(styles.root, !visible && styles.rotated)}>
      <h3 onClick={toggleVisible}>
        Комментарии <ArrowRightIcon />
      </h3>
      {visible && [...Array(2)].map((item, index) => <CommentItem key={index} />)}
    </div>
  );
};
