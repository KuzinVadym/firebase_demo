
export function snapshotToOrders(snapshot) {
    let documents = [];
    if(snapshot.empty) {
        return [];
    }
    snapshot.forEach(doc => {
        let order = doc.data();
        if(order.bookingDate) {
            order.bookingDate = new Date(order.bookingDate)
        }
        order.uid = doc.id;
        documents.push(order);
    });
    return documents;
}