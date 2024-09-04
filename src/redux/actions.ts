import { Action, Dispatch } from "@reduxjs/toolkit";
import { CryptoTicker, OptionsProps } from "../interfaces/options";
import { ActionsType } from "./constants";
import { fetchCrypto } from "../handlers/polygon.handler";

export const getCryptoAction =
  (cryptoTicker: CryptoTicker, interval: OptionsProps) =>
  async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionsType.GET_CRYPTO_PENDING,
    });

    try {
      const data = await fetchCrypto(cryptoTicker, interval);
      dispatch({
        type: ActionsType.GET_CRYPTO_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({ type: ActionsType.GET_CRYPTO_FAIL, payload: error });
    }
  };
