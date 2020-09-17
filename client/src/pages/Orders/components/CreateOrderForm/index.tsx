import React, {useState} from 'react';

import useStyles from "./style";
import {Grid, Typography, TextField, Button} from "@material-ui/core";
import {IOrderInput} from "../../../../interfaces/IOrderInput";

interface IFormInput {
    [key: string]: string
}

interface CreateOrderFormProps {
    createOrder: (order: IOrderInput) => void
}

const CreateOrderForm: React.FC<CreateOrderFormProps> = ({ createOrder }) => {
    const classes = useStyles();
    const [orderInput, setOrderInput] = useState<IFormInput>({});

    const changeOrderInputHandler = (e: any, key: string) => {
        const newOrderInput = {...orderInput};
        newOrderInput[key] = e.target.value;
        setOrderInput(newOrderInput);
    };

    const createOrderHandler = () => {
        const newOrder = {
            title: orderInput['title'],
            bookingDate: new Date(),
            customer: {
                email: orderInput['email'],
                phone: orderInput['phone'],
                name: orderInput['name']
            },
            address: {
                city: orderInput['city'],
                country: orderInput['country'],
                street: orderInput['street'],
                zip: orderInput['zip'],
            }
        };
        createOrder(newOrder)
    };

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
            className={classes.main}
        >
            <Grid item>
                <Typography variant={'h5'} color={'primary'}>
                    Create new Order for today!
                </Typography>
            </Grid>
            <Grid item className={classes.item}>
                <TextField
                    label="Title"
                    value={orderInput['title']}
                    className={classes.textField}
                    onChange={(e)=> changeOrderInputHandler(e, 'title')}
                    InputProps={{ id: 'title-input' }}
                    InputLabelProps={{ htmlFor: 'title-input' }}
                />
            </Grid>
            <Grid item className={classes.item}>
                <Grid item className={classes.item}>
                    <TextField
                        label="Name"
                        value={orderInput['name']}
                        className={classes.textField}
                        onChange={(e)=> changeOrderInputHandler(e, 'name')}
                        InputProps={{ id: 'name-input' }}
                        InputLabelProps={{ htmlFor: 'name-input' }}
                    />
                </Grid>
                <TextField
                    label="Email"
                    value={orderInput['email']}
                    className={classes.textField}
                    onChange={(e)=> changeOrderInputHandler(e, 'email')}
                    InputProps={{ id: 'email-input' }}
                    InputLabelProps={{ htmlFor: 'email-input' }}
                />
            </Grid>
            <Grid item className={classes.item}>
                <TextField
                    label="Phone"
                    value={orderInput['phone']}
                    className={classes.textField}
                    onChange={(e)=> changeOrderInputHandler(e, 'phone')}
                    InputProps={{ id: 'phone-input' }}
                    InputLabelProps={{ htmlFor: 'phone-input' }}
                />
            </Grid>
            <Grid item className={classes.item}>
                <TextField
                    label="Country"
                    value={orderInput['country']}
                    className={classes.textField}
                    onChange={(e)=> changeOrderInputHandler(e, 'country')}
                    InputProps={{ id: 'country-input' }}
                    InputLabelProps={{ htmlFor: 'country-input' }}
                />
            </Grid>
            <Grid item className={classes.item}>
                <TextField
                    label="City"
                    value={orderInput['city']}
                    className={classes.textField}
                    onChange={(e)=> changeOrderInputHandler(e, 'city')}
                    InputProps={{ id: 'city-input' }}
                    InputLabelProps={{ htmlFor: 'city-input' }}
                />
            </Grid>
            <Grid item className={classes.item}>
                <TextField
                    label="Zip"
                    value={orderInput['zip']}
                    className={classes.textField}
                    onChange={(e)=> changeOrderInputHandler(e, 'zip')}
                    InputProps={{ id: 'zip-input' }}
                    InputLabelProps={{ htmlFor: 'zip-input' }}
                />
            </Grid>
            <Grid item className={classes.item}>
                <TextField
                    label="Street"
                    value={orderInput['street']}
                    className={classes.textField}
                    onChange={(e)=> changeOrderInputHandler(e, 'street')}
                    InputProps={{ id: 'street-input' }}
                    InputLabelProps={{ htmlFor: 'street-input' }}
                />
            </Grid>
            <Grid item className={classes.item}>
                <Button
                    id="switch-button"
                    variant="contained"
                    fullWidth={true}
                    classes={{root: classes.createButton}}
                    onClick={() => createOrderHandler()}
                >
                    Create
                </Button>
            </Grid>
        </Grid>
    );
};
export default CreateOrderForm;