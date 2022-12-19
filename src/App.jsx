import React from "react";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";

// import RadioButton from "./ui-components/RadioButton/RadioButton";
// import AdditionalIngredient from "./ui-components/AddIngredient/AdditionalIngredient";


// const ingridients = [
//   { name: 'cheese', text: "Моцарелла", Price: "59" },
//   { name: 'champignons', text: "Шампиньоны", Price: "59" },
//   { name: 'onion', text: "Красный лук", Price: "59" },
//   { name: 'pepper', text: "Сладкий перец", Price: "59" },
// ];

// function reg(e) {
//   e.preventDefault();
//   console.log('click')
// }

// const handleChange = (e) => {
//   console.log(e)
// }

function App() {

  // const [isModal, setModal] = React.useState(true);

  return (
    <div className="App">
      {/* <Button className="Button" type="Button" onClick={() => setModal(true)}>Click Here</Button> */}
      {/* {isModal && <Modal onClose={setModal} isVisible={isModal} location="center"> */}
      {/*  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
      {/* </Modal>}
      <div className="wrapper">
        <CartCard onChange={handleChange} size="small"/>
      </div>
      <Button className="Button" type="Button" onClick={() => setModal(true)}>Click Here</Button>
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
      // {ingridients.map(({name, text, Price}) => <AdditionalIngredient name={name} text={text} Price={Price} />)}
      <Price>от 399 ₽</Price>
      <FormsInput type="text" subtext="Алексей" name="firstName">Имя*</FormsInput> */}
    </div>
  );
}

export default App;
