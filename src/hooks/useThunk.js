import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

export default function useThunk(thunk) {
  const [isLoading, setIsloading] = useState(false)
  const [error, setError] = useState(null)
  const dispatch = useDispatch()

  const runThunk = useCallback(() => {
    setIsloading(true)
    dispatch(thunk())
    .unwrap()
    .catch((error) => {
      setError(error)
    })
    .finally(() => {
      setIsloading(false)
    })
  }, [dispatch, thunk])

  return [runThunk, isLoading, error]
}