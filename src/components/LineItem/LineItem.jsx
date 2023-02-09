// import React from 'react';
// import { makeStyles } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

// const useStyles = makeStyles((theme) => ({
// root: {
// maxWidth: 345,
// margin: theme.spacing(2),
// },
// media: {
// height: 0,
// paddingTop: '56.25%',
// },
// }));

// export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
// const classes = useStyles();

// return (
// <Card className={classes.root}>
// <CardMedia
//      className={classes.media}
//      image={lineItem.product.image}
//      title={lineItem.product.name}
//    />
// <CardContent>
// <Typography gutterBottom variant="h5" component="h2">
// {lineItem.product.name}
// </Typography>
// <Typography variant="body2" color="textSecondary" component="p">
// Price: ${lineItem.product.price.toFixed(2)}
// </Typography>
// <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
// {!isPaid && (
// <IconButton
// aria-label="decrement"
// onClick={() => handleChangeQty(lineItem.product._id, lineItem.qty - 1)}
// >
// <RemoveCircleOutlineIcon />
// </IconButton>
// )}
// <Typography variant="body2" color="textSecondary" component="p">
// Quantity: {lineItem.qty}
// </Typography>
// {!isPaid && (
// <IconButton
// aria-label="increment"
// onClick={() => handleChangeQty(lineItem.product._id, lineItem.qty + 1)}
// >
// <AddCircleOutlineIcon />
// </IconButton>
// )}
// </div>
// <Typography variant="body2" color="textSecondary" component="p">
// Extended Price: ${lineItem.extPrice.toFixed(2)}
// </Typography>
// </CardContent>
// </Card>
// );
// }







import './LineItem.css';

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
  return (
    <div className="LineItem">
      <div className=""><img className='imgcart' src={lineItem.product.image} alt=''></img></div>
      <div className="flex-ctr-ctr flex-col">
        <span className="align-ctr">{lineItem.product.name}</span>
        <span>{lineItem.product.price.toFixed(2)}</span>
      </div>
      <div className="qty" style={{ justifyContent: isPaid && 'center' }}>
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineItem.product._id, lineItem.qty - 1)}
          >−</button>
        }
        <span>{lineItem.qty}</span>
        {!isPaid &&
          <button
            className="btn-xs"
            onClick={() => handleChangeQty(lineItem.product._id, lineItem.qty + 1)}
          > + </button>
        }
      </div>
      <div className="ext-price">${lineItem.extPrice.toFixed(2)}</div>
      <hr></hr>
    </div>
  );
}