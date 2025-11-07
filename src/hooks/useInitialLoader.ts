import { useState, useEffect } from 'react';

/**
 * Hook for managing initial site loading
 * Shows loader for 10 seconds
 */
export const useInitialLoader = () => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Check if site was already loaded in this session
    const hasLoaded = sessionStorage.getItem('siteInitiallyLoaded');
    
    if (hasLoaded === 'true') {
      setIsInitialLoading(false);
      setLoadingProgress(100);
      return;
    }

    const startTime = Date.now();
    const loadingTime = 10000; // 10 секунд
    
    // Плавное увеличение прогресса
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / loadingTime) * 100, 100);
      
      setLoadingProgress(progress);
      
      if (progress >= 100) {
        clearInterval(progressInterval);
        
        // Небольшая задержка перед скрытием лоадера
        setTimeout(() => {
          setIsInitialLoading(false);
          sessionStorage.setItem('siteInitiallyLoaded', 'true');
        }, 500);
      }
    }, 50); // Обновляем каждые 50мс для плавности

    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  return { isInitialLoading, loadingProgress };
};