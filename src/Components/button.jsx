import classes from './button.module.css';

const Button = (props) => {
  const { text, img, url } = props;

  return (
    <a href={url} target='_blank' className={classes.button}>
      {text}
      <img src={img} alt='source code' className={classes.button_img} />
    </a>
  );
};

export default Button;
