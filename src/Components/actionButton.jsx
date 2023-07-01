import classes from './button.module.css';

const ActionButton = (props) => {
  const { text, img, action } = props;

  return (
    <div onClick={action} className={classes.button}>
      {text}
      <img src={img} alt='source code' className={classes.button_img} />
    </div>
  );
};

export default ActionButton;
