const mergedObjFunc = () => {
    const users = [
        { "id": 1, "name": "Alice" },
        { "id": 2, "name": "Bob" },
        { "id": 3, "name": "Charlie" }
    ];

    const orders = [
        { userId: 1, "id": 101, "name": "Product A", "price": 10 },
        { userId: 1, "id": 102, "name": "Product B", "price": 20 },
        { userId: 2, "id": 103, "name": "Product C", "price": 15 }
    ];
    const mergedObject=users.map(user=>{
        const userOrders=orders.filter(order=>order.userId===user.id)
        .map(order=>({
            orderId:order.id,
            orderName:order.name,
            orderPrice:order.price
        }))
        return{
            userId:user.id,
            userName:user.name,
            order:userOrders
        }
    })
    return mergedObject

}
console.log(mergedObjFunc());