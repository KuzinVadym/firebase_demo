import React from 'react';
import { useHistory, useRouteMatch } from "react-router-dom";
import {useMutation, useQuery} from "@apollo/client";
import dateFormat from 'dateformat'

import useStyles from "./style";

import {Box, LinearProgress, Typography} from "@material-ui/core";
import {IOrder} from "../../interfaces/IOrder";
import CreateOrderForm from "./components/CreateOrderForm";
import {IOrderInput} from "../../interfaces/IOrderInput";
import { CREATE_ORDER } from "./mutations";
import { GET_ORDERS } from "./queries";


const Orders = () => {
    const classes = useStyles();
    const history = useHistory();
    const match = useRouteMatch();

    const { loading, data } = useQuery(GET_ORDERS);

    const [ createOrder ] = useMutation(CREATE_ORDER, {
        update(cache, { data: { createOrder } }) {
            const { orders } = cache.readQuery({ query: GET_ORDERS });

            cache.writeQuery({
                query: GET_ORDERS,
                data: { orders: [...orders, createOrder] },
            });
        }
    });

    const selectOrderHandler = (order: IOrder) => {
        if (order.uid) {
            history.push(`${match.url}/${order.uid}`);
        }
    };

    const createOrderHandler = (payload: IOrderInput) => {
        createOrder({ variables: payload });
    };

    return (
        <>
            {!loading
                ? <>
                    {data.orders
                        ? <div>
                            <Box
                                display="flex"
                                flexWrap="wrap"
                                p={1}
                                m={1}
                                bgcolor="background.paper"
                                css={{ maxWidth: '100%' }}
                            >
                                {!loading && data.orders
                                    ? data.orders.map((order: IOrder, index: number) => {
                                        return (
                                            <Box
                                                key={`orderItem${index}`}
                                                p={1}
                                                className={classes.item}
                                                onClick={()=> selectOrderHandler(order)}
                                            >
                                                <Typography className={classes.title} variant={'h6'}>
                                                    {order.title}
                                                </Typography>
                                                <Typography className={classes.bookingDate} variant={'body2'}>
                                                    {order.bookingDate ? dateFormat(order.bookingDate, "dddd, mmmm dS, yyyy") : '  '}
                                                </Typography>
                                            </Box>
                                        )
                                    })
                                    : null
                                }
                            </Box>
                            <CreateOrderForm createOrder={createOrderHandler}/>
                        </div>
                        : null
                    }
                </>
                : <LinearProgress />
            }
        </>
    );
};

export default Orders;