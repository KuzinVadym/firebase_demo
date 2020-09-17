import React, {useState} from 'react';
import {useMutation, useQuery} from "@apollo/client";
import { useParams } from "react-router-dom";
import dateFormat from 'dateformat'
import {Button, Grid, LinearProgress, TextField, Typography} from "@material-ui/core";
import { Edit } from '@material-ui/icons';

import { GET_ORDER } from "./queries";
import useStyles from "./style";
import {IOrder} from "../../interfaces/IOrder";
import { UPDATE_ORDER } from "./mutations";
import {GET_ORDERS} from "../Orders/queries";

interface IOrderParams {
    id: string
}

interface IGetOrderData {
    order: IOrder
}

interface IGetOrderVars {
    uid: string;
}

const Order = () => {
    const classes = useStyles();
    let { id } = useParams<IOrderParams>();
    const { loading, data } = useQuery<IGetOrderData, IGetOrderVars>(GET_ORDER, { variables: { uid: id } });
    const result = useQuery(GET_ORDERS);
    const [titleInput, setTitleInput] = useState<string>('');
    const [editableTitle, setEditableTitle] = useState<boolean>(false);

    const [ updateOrder ] = useMutation(UPDATE_ORDER, {
        update(cache, { data: { updateOrder } }) {
            setTitleInput('');
            setEditableTitle(false);
            const { order } = cache.readQuery({ query: GET_ORDER, variables: {uid: id} });
            const { orders } = cache.readQuery({ query: GET_ORDERS });
            cache.writeQuery({
                query: GET_ORDER,
                variables: {uid: id},
                data: { order: {...order, title: updateOrder.title} },
            });
            const changeIndex = orders.map((order: IOrder) => order.uid).indexOf(order.uid);
            const newOrders = [...orders];
            newOrders.splice(changeIndex, 1, {...order, title: updateOrder.title});
            cache.writeQuery({
                query: GET_ORDERS,
                data: { orders: newOrders },
            });
        }
    });

    const editTitleHandler = (payload: string) => {
        setTitleInput(payload);
        setEditableTitle(true);
    };

    const saveChangesHandler = (uid: string) => {
        updateOrder({ variables: { uid, title: titleInput } })
    };

    return (
        <>
            {!loading
                ? <>
                    {data.order
                        ?<div className={classes.main}>
                            <Grid
                                container
                                direction="column"
                                justify="flex-start"
                                alignItems="flex-start"
                            >
                                <Grid
                                    item
                                    className={classes.item}
                                >
                                    <div className={classes.title}>
                                        <Typography>
                                            <b>Title</b>
                                        </Typography>
                                        <Edit onClick={() => editTitleHandler(data.order.title)}/>
                                    </div>
                                    <Grid
                                        item
                                        className={classes.nestedItem}
                                    >
                                        {editableTitle
                                            ? <TextField
                                                value={titleInput}
                                                className={classes.textField}
                                                onChange={(e)=> setTitleInput(e.target.value)}
                                                InputProps={{ id: 'roman-input'}}
                                            />
                                            : <Typography>
                                                {data.order.title}
                                            </Typography>
                                        }
                                    </Grid>
                                </Grid>
                                <Grid
                                    item
                                    className={classes.item}
                                >
                                    <div className={classes.title}>
                                        <Typography>
                                            <b>Booking Date</b>
                                        </Typography>
                                        <Edit />
                                    </div>
                                    <Grid
                                        item
                                        className={classes.nestedItem}
                                    >
                                        <Typography>
                                            {data.order.bookingDate ? dateFormat(data.order.bookingDate, "dddd, mmmm dS, yyyy") : '  '}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid
                                    item
                                    className={classes.item}
                                >
                                    <Typography className={classes.title}>
                                        <b>Customer</b>
                                    </Typography>
                                    {data.order.customer
                                        ? <>
                                            <Grid
                                                item
                                                className={classes.nestedItem}
                                            >
                                                <Typography>
                                                    {data.order.customer.email}
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                className={classes.nestedItem}
                                            >
                                                <Typography>
                                                    {data.order.customer.name}
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                className={classes.nestedItem}
                                            >
                                                <Typography>
                                                    {data.order.customer.phone}
                                                </Typography>
                                            </Grid>
                                        </>
                                        : null
                                    }
                                </Grid>
                                <Grid
                                    item
                                    className={classes.item}
                                >
                                    <Typography className={classes.title}>
                                        <b>Address</b>
                                    </Typography>
                                    {data.order.address
                                        ? <>
                                            <Grid
                                                item
                                                className={classes.nestedItem}
                                            >
                                                <Typography>
                                                    {data.order.address.country}
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                className={classes.nestedItem}
                                            >
                                                <Typography>
                                                    {data.order.address.city}
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                className={classes.nestedItem}
                                            >
                                                <Typography>
                                                    {data.order.address.zip}
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                className={classes.nestedItem}
                                            >
                                                {data.order.address.street}
                                            </Grid>
                                        </>
                                        : null
                                    }
                                </Grid>
                            </Grid>
                            <div className={classes.submitItem}>
                                {editableTitle
                                    ? <Button
                                        id="switch-button"
                                        variant="contained"
                                        classes={{root: classes.switchButton}}
                                        onClick={() => saveChangesHandler(data.order.uid)}
                                    >
                                        Save
                                    </Button>
                                    : null
                                }
                            </div>
                        </div>
                        : null
                    }
                </>
                : <LinearProgress />
            }
        </>
    );
};

export default Order;