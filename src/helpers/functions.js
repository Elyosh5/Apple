export const calcTotalPrice = (product) => {
  return product.reduce((acc, item) => +acc + +item.subPrice, 0);
};

export const calcSubPrice = (product) => +product.count * +product.item.price;
