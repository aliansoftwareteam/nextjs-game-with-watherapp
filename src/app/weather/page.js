"use client"
import { Provider } from "react-redux";
import Weather from "../../components/Weather";
import store from "../../components/Weather/store/store";

export default function WeatherPage() {
  return (
    <Provider store={store}>
      <Weather></Weather>
    </Provider>
  );
}
