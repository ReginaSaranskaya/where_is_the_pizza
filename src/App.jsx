import React from "react";
import CartCard from "./components/cartCard/CartCard";
import Modal from "./ui-components/modal/Modal";

// import RadioButton from "./ui-components/RadioButton/RadioButton";
// import AdditionalIngredient from "./ui-components/add-ingredient/AdditionalIngredient";


// const ingridients = [
//   { name: 'cheese', text: "Моцарелла", price: "59" },
//   { name: 'champignons', text: "Шампиньоны", price: "59" },
//   { name: 'onion', text: "Красный лук", price: "59" },
//   { name: 'pepper', text: "Сладкий перец", price: "59" },
// ];

// function reg(e) {
//   e.preventDefault();
//   console.log('click')
// }

const handleChange = (e) => {
  console.log(e)
}

function App() {

  const [isModal, setModal] = React.useState(true);

  return (
    <div className="App">
      <div className="wrapper">
        <CartCard onChange={handleChange} size="small"/>
      </div>
      <button className="button" type="button" onClick={() => setModal(true)}>Click Here</button>
      {isModal && <Modal onClose={setModal} isVisible={isModal} location="center">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </Modal>}
      {/* <SectionTitle>Пицца</SectionTitle>
      <SmallCardTitle>Супер Филадельфия</SmallCardTitle>
      <CardTitle>EASY PEASY огуречный расколбас</CardTitle>
      <Button>Оформить заказ</Button>
      <Button size='small' variant='text'>Фильтры</Button>
      <FilterIngridient id="check">Сырная смесь</FilterIngridient>
      <Counter />
      <RadioButton id="delivery" name="delivery">
        Доставка
      </RadioButton>
      <RadioButton id="pickup" name="delivery">
        Самовывоз
      </RadioButton>
      <FormsRadioButton id="payment" name="payment">
        Наличными
      </FormsRadioButton>
      // {ingridients.map(({name, text, price}) => <AdditionalIngredient name={name} text={text} price={price} />)}
      <Price>от 399 ₽</Price>
      <FormsInput type="text" subtext="Алексей" name="firstName">Имя*</FormsInput> */}
    </div>
  );
}

export default App;
