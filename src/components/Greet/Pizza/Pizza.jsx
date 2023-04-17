import React, {useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Greet from "../Greet";
import {fetchFiltersPizza, fetchPizza} from "../../../Redux/Reducer";

function Pizza() {
  const pizza = useSelector(state => state.menu.pizza);
  const filtersPizza = useSelector(state => state.menu.filtersPizza);
  const [modalFilterPizza, setModalFilterPizza] = useState(false);
  const [modalCardPizza, setModalCardPizza] = useState(null);
  const currentPizza = useMemo(()=> pizza.find((element) => element.id === modalCardPizza), [modalCardPizza, pizza]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizza());
    dispatch(fetchFiltersPizza());
  },[dispatch]);

  return (
    <Greet key={pizza.find((element) => element.id)} title="Пицца" filters={filtersPizza} setModalFilter={setModalFilterPizza} modalFilter={modalFilterPizza} modalCard={modalCardPizza} setModalCard={setModalCardPizza} current={currentPizza} range={pizza} />
  );
}

export default Pizza;