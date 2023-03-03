let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  function customerInfo(order) {
    // Adicione abaixo as informações necessárias.

    let deliveryPerson = order['order']['delivery']['deliveryPerson']
    let name = order['name'];
    let phoneNumber = order['phoneNumber']
    let street = order['address']['street']
    let number = order['address']['number']
    let apartment = order['address']['apartment']


    console.log('Olá, ' + deliveryPerson + ' entrega para: ' + name + ', Telefone: ' + phoneNumber + ", R. " + street + ", Nº: " + number + ", AP: " + apartment);

  }
  
  customerInfo(order);
  
  function orderModifier(order) {
    // Adicione abaixo as informações necessárias.

    let name = order['name'];
    name = 'Luiz Silva';
    let pizzas = Object.keys(order['order']['pizza']);
    let pizza1 = pizzas[0];
    let pizza2 = pizzas[1];
    let drink = order['order']['drinks']['coke']['type'];
    let total = order['payment']['total'];
    total = 60;

    console.log('Olá, ' + name + ', o valor total de seu pedido de ' + pizza1 + ', ' + pizza2 + ' e ' + drink + ' é ' + 'R$ ' + total + ',00');

  }
  
  orderModifier(order);


