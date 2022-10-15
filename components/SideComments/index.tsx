import React from 'react';
import ArrowRightIcon from '@mui/icons-material/NavigateNextOutlined';
import styles from './SideComments.module.scss';
import { CommentItem } from './CommentItem';
import clsx from 'clsx';
import data from '../../data'

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
      {visible && data.comments.popular.map((item) => <CommentItem key={item.id} text={item.text} user={item.user} post={item.post} />)}
    </div>
  );
};
