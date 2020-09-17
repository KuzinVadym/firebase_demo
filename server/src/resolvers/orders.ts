import {snapshotToOrders} from "./helpers";

export default {
  Query: {
    orders: async (_parent, _args, { db }) => {
      return await db.collection('orders').get().then(snapshotToOrders)
    },
    order: async (_parent, { uid }, {  db }) => {
      const cityRef = db.collection('orders').doc(uid);
      const doc = await cityRef.get();
      if (!doc.exists) {
        return null;
      } else {
        return {...doc.data(), uid};
      }
    }
  },
  Mutation: {
    createOrder: async (
        _parent,
        args,
        { db },
    ) => {
      const newOrder = {...args};
      newOrder.bookingDate = newOrder.bookingDate.getMilliseconds();
      let collectionRef = db.collection('orders');
      const uid = await collectionRef.add(newOrder).then(documentReference => {
        return documentReference.id
      });
      return { ...args, uid: uid};
    },

    updateOrder: async (
        _parent,
        {uid, title},
      { db},
    ) => {
      const ordersRef = db.collection('orders').doc(uid);
      return {uid, title}
    },

    deleteOrder: async (
        _parent,
      { uid },
      { db},
    ) => {
      await db.collection("orders").doc(uid).delete().then(function() {
        return "Document successfully deleted!"
      }).catch(function(error) {
        return `Error removing document: ${error}`
      });
    }
  }
};