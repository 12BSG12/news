import React, { useRef } from 'react';
import { Input, Button } from '@mui/material';
import styles from './AddCommentForm.module.scss';

type FormClick = MouseEvent & {
  path: Node[];
};

interface AddCommentFormProps {}

export const AddCommentForm: React.FC<AddCommentFormProps> = () => {
  const [clicked, setClicked] = React.useState(false);
  const [text, setText] = React.useState('');
  const rootEl = useRef(null);

  const onAddComment = () => {
    setClicked(false);
    setText('');
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as FormClick;
      if (rootEl.current && !_event.path.includes(rootEl.current)) {
        setClicked(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className={styles.form} ref={rootEl}>
      <Input
        onChange={(e) => setText(e.target.value)}
        value={text}
        onFocus={() => setClicked(true)}
        minRows={clicked ? 5 : 1}
        classes={{ root: styles.fieldRoot }}
        placeholder="Написать комментарий..."
        fullWidth
        multiline
      />
      {clicked && (
        <Button
          onClick={onAddComment}
          className={styles.addButton}
          variant="contained"
          color="primary">
          Опубликовать
        </Button>
      )}
    </div>
  );
};
