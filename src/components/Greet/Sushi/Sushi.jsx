import React, {useEffect, useMemo, useState} from 'react';

import {useDispatch, useSelector} from "react-redux";
import Greet from "../Greet";
import {fetchFiltersSushi, fetchSushi} from "../../../Redux/Reducer";

function Sushi() {
  const sushi = useSelector(state => state.menu.sushi);
  const filtersSushi = useSelector(state => state.menu.filtersSushi);
  const [modalFilterSushi, setModalFilterSushi] = useState(false);
  const [modalCardSushi, setModalCardSushi] = useState(null);
  const currentSushi = useMemo(()=> sushi.find((element) => element.id === modalCardSushi), [modalCardSushi, sushi]);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchFiltersSushi());
    dispatch(fetchSushi())
  }, [dispatch]);
  
  return (
    <Greet key={sushi.find((element) => element.id)} title="Суши" filters={filtersSushi} setModalFilter={setModalFilterSushi} modalFilter={modalFilterSushi} modalCard={modalCardSushi} setModalCard={setModalCardSushi} current={currentSushi} range={sushi}/>
  );
}

export default Sushi;