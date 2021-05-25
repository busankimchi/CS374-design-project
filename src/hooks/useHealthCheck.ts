import { useCallback, useEffect, useState } from 'react';
import { HealthCheckRespnse, healthCheck } from 'apis/healthCheck';

export const useHealthCheck = () => {
  const [health, setHealth] = useState<HealthCheckRespnse>();
  const fetchHealthCheck = useCallback(async () => {
    const temp = await healthCheck();

    setHealth(temp);
  }, []);

  useEffect(() => {
    fetchHealthCheck();
  }, [fetchHealthCheck]);

  return health;
};
