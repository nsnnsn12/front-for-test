import { useState } from "react";
import axios, { AxiosResponse } from "axios";

interface ErrorResponse{
  message: string;
  errorDetails: string;
}
/// 해당 커스텀 훅은 API 호출을 처리하고 로딩 및 오류 상태를 관리하는 데 사용됩니다.
export const useApi = <T>() => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ErrorResponse | null>(null);
  const [status, setStatus] = useState<number | null>(null); // 상태 코드를 저장할 상태 추가
  const fetchData = async (apiCall: () => Promise<AxiosResponse<T>>) => {
    setIsLoading(true);
    try {
      const response: AxiosResponse<T> = await apiCall();
      setData(response.data);
      setStatus(response.status); // Set the status code from the response
    } catch (err) {
      //에러의 기준을 잡아야 할 듯
      //excpected error와 unexpected error를 구분해야 함
      if (axios.isAxiosError(err)) {
        setStatus(err.response?.status || null); // Set the status code from the error response
        if (err?.response) {
          // 요청이 전송되었고, 서버는 2xx 외의 상태 코드로 응답했습니다.
          setError(err.response.data);
        } else {
          // 오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.
          setError({
            message: err.message,
            errorDetails: err.message,
          });
        }
      } else {
        setError({
          message: "Unexpected error occurred",
          errorDetails: "An unexpected error occurred while processing the request.",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };
  return { data, isLoading, error, status, fetchData };
};
