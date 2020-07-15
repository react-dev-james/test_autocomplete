import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Autocomplete from "./AutoComplete";

import { RootState } from "./core/reducers";
import UserActions from "./core/reducers/user";

import "./styles.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(UserActions.requestUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { data: users } = useSelector((state: RootState) => state.users);

  return (
    <div>
      <Autocomplete suggestions={users.asMutable({ deep: true })} />
    </div>
  );
}

export default App;
